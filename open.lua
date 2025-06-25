function getPlayerGang(player)
    if Config.Framework == "qb" then
        return player?.PlayerData?.gang?.label
    elseif Config.Framework == "esx" then
        -- In caso vuoi mettere un sistema gang introducilo qui
        -- return player?.gang?.label
    end
end

function getPhoneNumber(player)
    if Config.Framework == "qb" then
        return player?.PlayerData?.charinfo?.phone
    elseif Config.Framework == "esx" then
        return player?.PlayerData?.phone_number 
        -- / player?.PlayerData?.phone / Metti il tlefono che utilizzi in caso vuoi configurarlo meglio
    end
end

if not IsDuplicityVersion() then
    RegisterNuiCallback("miscButton", function(data, cb)
        Config.MiscButton()
        SetNuiFocus(false, false)
    
        SendNUIMessage({
            action = "close"
        })
    
        cb("ok")
    end)
end