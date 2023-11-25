import os
import tomllib
import subprocess
import urllib.request, json
import requests
import shutil
import datetime
import json
import time

moddermore = 'moddermore.env'
main_pack = 'create'
second_pack = 'TestMagic'
selected_pack = main_pack #select pack!
sleep = False
sleep_time = 1

workspace_folder = 'mod-workspace'
pack_folder = workspace_folder + '/' + selected_pack
src_folder = pack_folder + '/src'
mod_folder = src_folder + '/mods'

manual_path = 'manual'
manual_server = manual_path + '/_SERVER'
manual_client = manual_path + '/_CLIENT'

java_builder_file = 'launcher-builder-4.6-SNAPSHOT.jar'
java_version = datetime.datetime.now()
java_input = pack_folder
java_output = workspace_folder+'/_'+selected_pack+'_client'
java_server_output = workspace_folder+'/_'+selected_pack+'_server'
java_manifest_dest = java_output+'/'+selected_pack+'.json'
java_client_command = 'java -jar '+java_builder_file+' --version "'+str(java_version)+'" --input "'+java_input+'" --output "'+java_output+'" --manifest-dest "'+java_manifest_dest+'"'
java_server_command = 'java -cp '+java_builder_file+' com.skcraft.launcher.builder.ServerCopyExport --source "'+src_folder+'" --dest "'+java_server_output+'"'

headers = {
  'Accept': 'application/json',
  'x-api-key': '$2a$10$KB71uXRw.EmTSNkpgDEB2e1ZkvKMgIW2sr9l9.pFtJwNAS3EKAYKK'
}

packages_path = 'mod-workspace/packages.json'
packages_element = {'title':'', 'name':'', 'version':'', 'location':'', 'priority':'1'}

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def read_file(path):
    with open(path, encoding='utf-8') as file:
        return file.read()

def load_file(url):
    try:
        with urllib.request.urlopen(url) as pack_info:
            data = pack_info.read().decode('utf-8')
    except urllib.error.HTTPError as e:
        print('ERROR: ' + e.read().decode('utf-8'))
        
    return data

def write_mod_to_file(path, data):
    with open(path + '/' + data[1] + '.url.txt', 'w') as file:
        file.write(data[0])

def process_files(url):
    mod_toml_str = load_file(url)
    mod_toml = tomllib.loads(mod_toml_str)
    print('process mod toml ' + mod_toml['name'])
    download = mod_toml['download']
    update = mod_toml['update']

    if 'url' in download:
        mod_file_data = download['url'], mod_toml['filename']
    else:
        curseforge = update['curseforge']
        curseforge_api_url = 'https://api.curseforge.com/v1/mods/'+ str(curseforge['project-id']) +'/files/'+ str(curseforge['file-id']) +'/download-url'
        r = requests.get(curseforge_api_url , headers = headers)
        json = r.json()
        mod_file_data = json['data'], mod_toml['filename']
    print('mod data ' + str(mod_file_data))
    return mod_file_data

def process_pack(url):
    index_str = load_file(url)
    index_data = tomllib.loads(index_str)

    list_url = url.replace('index.toml', '')
    list = []
    for toml in index_data['files']:
        toml_url = list_url + toml['file']
        list.append(process_files(toml_url))
        if sleep:
            time.sleep(sleep_time)
    return list


def write_pack(mod_data, pack_folder):
    path = mod_folder
    if pack_folder != '':
        path = mod_folder + '/' + pack_folder
    print('Write mod urls to folder ' + path)
        
    for mod_file_data in mod_data:
        write_mod_to_file(path, mod_file_data)

def launch_mod_pack_builder():
    if os.path.exists(java_output):
        shutil.rmtree(java_output)
    if os.path.exists(java_server_output):
        shutil.rmtree(java_server_output)
        
    print('Building client ' + java_client_command)
    result = subprocess.run(java_client_command, shell=True, capture_output = True)
    print("stdout:", result.stdout)

    print('Building server ' + java_server_command)
    result = subprocess.run(java_server_command, shell=True, capture_output = True)
    print("stdout:", result.stdout)
    for root, dir, files in os.walk(java_server_output):
        for file in files:
            if ".url.txt" in file:
                os.remove(java_server_output+'/mods/'+file)
    #command = 'java -jar launcher-builder-4.6-SNAPSHOT.jar --version "1.0.1" --input "mod-workspace/Magic/" --output "mod-workspace/_upload" --manifest-dest "mod-workspace/_upload/your_modpack.json"

def fill_packages(pack_name, version, location):
    packages = json.loads(read_file(packages_path))
    pack_array = packages['packages']
    print(pack_array)
    filtered_pack_array = list(filter(lambda pack: pack['name'] != pack_name, pack_array))
    print(filtered_pack_array)
    
    new_pack_element = packages_element.copy()
    new_pack_element['title'] = pack_name
    new_pack_element['name'] = pack_name
    new_pack_element['version'] = str(version)
    new_pack_element['location'] = location
    
    filtered_pack_array.append(new_pack_element)
    
    packages['packages'] = filtered_pack_array
    print(packages)
    write_file(packages_path, json.dumps(packages, indent=4))

def copy_manual():
    shutil.copytree(manual_path, mod_folder, dirs_exist_ok=True)
    

with open(moddermore, 'rb') as file:
    moddermore_lists = tomllib.load(file)

shutil.rmtree(mod_folder)
os.makedirs(mod_folder)

copy_manual()
    
for pack in moddermore_lists['pack']:
    url = pack['url']
    print('loading pack ' + url)
    mod_data = process_pack(url)
    write_pack(mod_data, pack['folder'])

launch_mod_pack_builder()
fill_packages(selected_pack, java_version, '_'+selected_pack+'_client/'+selected_pack+'.json')
