Config = {
    Framework = "qb", -- "qb" o "esx"

    CoreExport = function()
        if Config.Framework == "qb" then
            return exports["qb-core"]:GetCoreObject()
        elseif Config.Framework == "esx" then
            return exports["es_extended"]:getSharedObject()
        end
    end,

    MiscButton = function()
        -- Fai qualcosa quando si fa clic sul pulsante misc
    end,
    
    AvailableWeatherTypes = {
        [282916021] = 'Sereno',
        [-1750463879] = 'Pulito',
        [916995460] = 'Neutrale',
        [-1530260698] = 'Umido',
        [-1368164796] = 'Piovoso',
        [-1148613331] = 'Sovra naturale',
        [821931868] = 'Nuvoloso',
        [1840358669] = 'Ripulito',
        [1420204096] = 'Piovoso',
        [-1233681761] = 'Tempesta',
        [-273223690] = 'Nevoso',
        [669657108] = 'BLIZZARD',
        [603685163] = 'SNOWLIGHT',
        [-1429616491] = 'Natalizio',
        [-921030142] = 'HALLOWEEN',
    },

    Youtube = "https://www.youtube.com/",
    Discord = "https://discord.gg/5mscripts",

    Locales = {
        account = "ID Bancario",
        money = "Contanti",
        bank = "Banca",
        discord = "Discord",
        phone = "Numero",
        gang = "Gang",
        weather = "Pioggia",
        players = "Giocatori",
        job = "Lavoro",
        map = "Mappa",
        mapDesc = "Esplora anche tu le meraviglie del mondo...",
        settings = "Impostazioni",
        settingsDesc = "Migliora le prestazioni per giocare al meglio",
        discordTitle = "Entra nel server dicord",
        discordDesc = "+999 Membri nel server",
        discordButton = "ENTRA",
        youtubeTitle = "Tatical Leaks",
        youtubeDesc = "Iscriviti al nostro canale di youtube",
        youtubeButton = "ISCRIVITI",
        announcesTitle = "NOME SERVER",
        bottomLeftTitle = "BATTLE PASS",
        bottomLeftDesc = "SEASON 1",
        bottomRightTitle = "UNISCITI AL NUOVO VIAGGIO DEL PASS BATTAGLIA",
        bottomRightSubtitle = "E OTTENERE COSTOSI PREMI",
        bottomRightDesc = "E OTTENERE COSTOSI PREMI",
        bottomRightButton = "APRI IL BATTLE PASS",
    }
}