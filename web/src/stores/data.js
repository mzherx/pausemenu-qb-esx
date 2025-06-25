import { defineStore } from 'pinia'
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

export const useMenuData = defineStore('menuData', {
    state: () => {
        return { 
            open: false,

            time: new Date().toLocaleTimeString(navigator.language || navigator.userLanguage, options),
            joinTime: new Date().toLocaleTimeString(navigator.language || navigator.userLanguage, options),

            locales:{
                account: "STEAM ID",
                money: "Contanti",
                bank: "Banca",
                discord: "Discord",
                phone: "Numero",
                gang: "Gang",
                weather: "Meteo",
                players: "Giocatori",
                job: "Lavoro",
                map: "Mappa",
                mapDesc: "Los Santos",
                settings: "ImpostazionI",
                settingsDesc: "Change your settings",
                discordTitle: "JOIN TO OUR COMMUNITY DISCORD CHANNEL",
                discordDesc: "+1000 USERS ALREADY IN SERVER",
                discordButton: "JOIN DISCORD",
                youtubeTitle: "DON'T MISS ANOUNCES TRAILERS AND OTHERS",
                youtubeDesc: "SUBSCRIBE TO OUR YOUTUBE CHANNEL",
                youtubeButton: "SUBSCRIBE",
                announcesTitle: "PROJECT ANNOUNCES",
                bottomLeftTitle: "BATTLE PASS",
                bottomLeftDesc: "SEASON 3",
                bottomRightTitle: "JOIN TO NEW BATTLE PASS JOURNEY",
                bottomRightSubtitle: "AND GET EXPENSIVE REWARDS",
                bottomRightDesc: "AND GET EXPENSIVE REWARDS",
                bottomRightButton: "OPEN BATTLE PASS",
            },

            data: {
                playerName: "Tatical Leaks",
                accountid: "123",
                money: 0,
                bank: 0,
                discord: "",
                phone: 123456789,
                gang: "",
                weather: "Sunny",
                players: {
                    online: 32,
                    max: 64,
                },
                job: {
                    name: "Unemployed",
                    grade: "Unemployed",
                },
                Youtube: "https://www.youtube.com/",
                Discord: "https://discord.com/",
                Announces: [],
            }
        }
    },

    actions: {
        startTimer() {
            setInterval(() => {
                this.time = new Date().toLocaleTimeString(navigator.language || navigator.userLanguage, options)
            }, 1000)
        },
        setMenu(val){
            this.open = val
        },
        setData(data) {
            this.data = data
        },
        setLocales(data) {
            this.locales = data
        }
    },
})