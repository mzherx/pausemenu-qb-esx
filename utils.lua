Framework = Config.CoreExport()
local Names = {}

function triggerServerCallback(...)
    if Config.Framework == "qb" then
        Framework.Functions.TriggerCallback(...)
    else
        Framework.TriggerServerCallback(...)
    end
end

function registerServerCallback(...)
    if Config.Framework == "qb" then
        Framework.Functions.CreateCallback(...)
    else
        Framework.RegisterServerCallback(...)
    end
end

function getExtendedPlayer(src)
    if Config.Framework == "qb" then
        return Framework.Functions.GetPlayer(src)
    elseif Config.Framework == "esx" then
        return Framework.GetPlayerFromId(src)
    end
end

function getPlayerLicense(player)
    if Config.Framework == "qb" then
        return player.PlayerData.citizenid
    elseif Config.Framework == "esx" then
        return player.getIdentifier()
    end
end

function getMoney(player, moneyType)
    if Config.Framework == "qb" then
        return player.Functions.GetMoney(moneyType == "money" and "cash" or "bank")
    elseif Config.Framework == "esx" then
        return player.getAccount(moneyType).money
    end
end

function getPlayerName(player)
    if Config.Framework == "qb" then
        return player.PlayerData.charinfo.firstname .. " " .. player.PlayerData.charinfo.lastname
    elseif Config.Framework == "esx" then
        return player.getName()
    end
end

function getPlayerJob(src)
    local player = getExtendedPlayer(src)

    while player == nil do
        Citizen.Wait(100)
        player = getExtendedPlayer(src)
    end

    if Config.Framework == "qb" then
        return { name = player.PlayerData.job.label, grade = player.PlayerData.job.grade.name }
    elseif Config.Framework == "esx" then
        return { name = player.job.label, grade = player.job.grade_label }
    end
end

function getPlayerDiscord(src)
    if not Names[src] then
        local identifiers = {}
        local discord = nil

        for i = 0, GetNumPlayerIdentifiers(src) - 1 do
            local license = GetPlayerIdentifier(src, i)
    
            if string.sub(license, 1, string.len("discord:")) == "discord:" then
                discord = license
            end
        end

        local name = nil

        if discord then
            discord = string.sub(discord, 9, string.len(discord))
            local p = promise.new()

            PerformHttpRequest("https://discordapp.com/api/users/" .. discord, function(statusCode, data)
                if statusCode == 200 then
                    data = json.decode(data or "{}")

                    if data.global_name then
                        name = data.global_name
                    end
                end

                p:resolve()
            end, "GET", "", {
                Authorization = "Bot " .. Config.DiscordBotToken
            })

            Citizen.Await(p)
        end
        Names[src] = name or "Sconosciuto"
    end
    return Names[src]
end