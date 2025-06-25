local LastUpdate = GetGameTimer()
local Data = {}

RegisterKeyMapping("pausemenu", "Pause Menu", "keyboard", "P")
RegisterKeyMapping('pausemenu2', 'Pause Menu', 'keyboard', 'ESCAPE')

function openMenu()
    if GetCurrentFrontendMenuVersion() == -1 and not IsNuiFocused() then
        SetNuiFocus(true, true)
        local weather = Config.AvailableWeatherTypes[GetPrevWeatherTypeHashName()]
    
        if GetGameTimer() - LastUpdate < 1000 then 
            SendNUIMessage({
                action = "open",
                data = Data
            })
        else
            triggerServerCallback("0r-pausemenu:server:getPlayerData", function(cb)
                LastUpdate = GetGameTimer()
                Data = cb
    
                Data.weather = weather
                Data.Youtube = Config.Youtube
                Data.Discord = Config.Discord
                Data.Announces = Config.Announces
                Data.Locales = Config.Locales
    
                SendNUIMessage({
                    action = "open",
                    data = Data
                })
            end)
        end
    end
end

RegisterCommand("pausemenu", function()
    openMenu()
end, false)

RegisterCommand("pausemenu2", function()
    openMenu()
end, false)

CreateThread(function()
    while true do
        Wait(0)
        SetPauseMenuActive(false)
    end
end)

RegisterNuiCallback("closeMenu", function(data, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)

RegisterNuiCallback("openMap", function(data, cb)
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_MP_PAUSE'),1,-1) 
    SetNuiFocus(false, false)
    cb("ok")
end)

RegisterNuiCallback("openSettings", function(data, cb)
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_LANDING_MENU'),1,-1) 
    SetNuiFocus(false, false)
    cb("ok")
end)