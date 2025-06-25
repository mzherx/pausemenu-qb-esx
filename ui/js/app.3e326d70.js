(function() {
    "use strict";
    var t = {
            9321: function(t, e, a) {
                var s = a(5130),
                    i = a(3367),
                    c = a(6768),
                    n = a(144),
                    o = a(4232);
                const l = {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    },
                    r = (0, i.nY)("menuData", {
                        state: () => ({
                            open: !1,
                            time: (new Date).toLocaleTimeString(navigator.language || navigator.userLanguage, l),
                            joinTime: (new Date).toLocaleTimeString(navigator.language || navigator.userLanguage, l),
                            locales: {
                                account: "ID STEAM",
                                money: "Contanti",
                                bank: "Banca",
                                discord: "Discord",
                                phone: "Phone",
                                gang: "Gang",
                                weather: "Meteo",
                                players: "Players",
                                job: "Lavoro",
                                map: "Map",
                                mapDesc: "Los Santos",
                                settings: "Settings",
                                settingsDesc: "Change your settings",
                                discordTitle: "JOIN TO OUR COMMUNITY DISCORD CHANNEL",
                                discordDesc: "+1000 USERS ALREADY IN SERVER",
                                discordButton: "JOIN DISCORD",
                                youtubeTitle: "DON'T MISS ANOUNCES TRAILERS AND OTHERS",
                                youtubeDesc: "SUBSCRIBE TO OUR YOUTUBE CHANNEL",
                                youtubeButton: "SUBSCRIBE",
                                announcesTitle: "REGOLAMENTO",
                                bottomLeftTitle: "BATTLE PASS",
                                bottomLeftDesc: "SEASON 3",
                                bottomRightTitle: "JOIN TO NEW BATTLE PASS JOURNEY",
                                bottomRightSubtitle: "AND GET EXPENSIVE REWARDS",
                                bottomRightDesc: "AND GET EXPENSIVE REWARDS",
                                bottomRightButton: "OPEN BATTLE PASS"
                            },
                            data: {
                                playerName: "SIME",
                                accountid: "123",
                                money: 0,
                                bank: 0,
                                discord: "",
                                phone: 123456789,
                                gang: "",
                                weather: "Sunny",
                                players: {
                                    online: 32,
                                    max: 64
                                },
                                job: {
                                    name: "Unemployed",
                                    grade: "Unemployed"
                                },
                                Youtube: "https://www.youtube.com/",
                                Discord: "https://discord.com/",
                                Announces: []
                            }
                        }),
                        actions: {
                            startTimer() {
                                setInterval((() => {
                                    this.time = (new Date).toLocaleTimeString(navigator.language || navigator.userLanguage, l)
                                }), 1e3)
                            },
                            setMenu(t) {
                                this.open = t
                            },
                            setData(t) {
                                this.data = t
                            },
                            setLocales(t) {
                                this.locales = t
                            }
                        }
                    }),
                    d = t => ((0, c.Qi)("data-v-ae28bbc4"), t = t(), (0, c.jt)(), t),
                    v = {
                        class: "logo-wrapper"
                    },
                    u = d((() => (0, c.Lk)("div", {
                        class: "logo"
                    }, [(0, c.Lk)("img", {
                        src: "logo.svg"
                    })], -1))),
                    b = {
                        class: "player-name-wrapper"
                    },
                    k = {
                        class: "player-name"
                    },
                    p = d((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "PAUSE MENU", -1))),
                    g = {
                        class: "box-wrapper"
                    },
                    L = {
                        class: "box"
                    },
                    f = d((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "bg-purple.png"
                    })], -1))),
                    m = {
                        class: "text-wrapper"
                    },
                    C = d((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "GIOCATORI ONLINE:", -1))),
                    h = {
                        class: "content"
                    },
                    w = (0, c.Fv)('<div class="icon" data-v-ae28bbc4><svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae28bbc4><g filter="url(#filter0_d_870_156)" data-v-ae28bbc4><path d="M16.5 26.9993H16C15.7348 26.9993 15.4804 26.8939 15.2929 26.7064C15.1054 26.5189 15 26.2645 15 25.9993C15 25.2036 15.3161 24.4406 15.8787 23.878C16.4413 23.3154 17.2044 22.9993 18 22.9993H19M19 19.9493C18.6328 19.8742 18.2872 19.7175 17.9888 19.4908C17.6903 19.2641 17.4467 18.9732 17.2758 18.6396C17.105 18.3061 17.0113 17.9383 17.0017 17.5637C16.9922 17.189 17.067 16.817 17.2207 16.4752C17.3743 16.1333 17.6028 15.8304 17.8893 15.5888C18.1759 15.3472 18.513 15.1731 18.8759 15.0794C19.2388 14.9857 19.6181 14.9748 19.9858 15.0475C20.3534 15.1201 20.7001 15.2746 21 15.4993M31.5 26.9993H32C32.2652 26.9993 32.5196 26.8939 32.7071 26.7064C32.8946 26.5189 33 26.2645 33 25.9993C33 25.2036 32.6839 24.4406 32.1213 23.878C31.5587 23.3154 30.7956 22.9993 30 22.9993H29M29 19.9493C29.3672 19.8742 29.7128 19.7175 30.0112 19.4908C30.3097 19.2641 30.5533 18.9732 30.7242 18.6396C30.895 18.3061 30.9887 17.9383 30.9983 17.5637C31.0078 17.189 30.933 16.817 30.7793 16.4752C30.6257 16.1333 30.3972 15.8304 30.1107 15.5888C29.8241 15.3472 29.487 15.1731 29.1241 15.0794C28.7612 14.9857 28.3819 14.9748 28.0142 15.0475C27.6466 15.1201 27.2999 15.2746 27 15.4993M27.5 28.9993H20.5C20.2348 28.9993 19.9804 28.8939 19.7929 28.7064C19.6054 28.5189 19.5 28.2645 19.5 27.9993C19.5 27.2036 19.8161 26.4406 20.3787 25.878C20.9413 25.3154 21.7044 24.9993 22.5 24.9993H25.5C26.2956 24.9993 27.0587 25.3154 27.6213 25.878C28.1839 26.4406 28.5 27.2036 28.5 27.9993C28.5 28.2645 28.3946 28.5189 28.2071 28.7064C28.0196 28.8939 27.7652 28.9993 27.5 28.9993ZM26.5 19.4993C26.5 20.1623 26.2366 20.7982 25.7678 21.2671C25.2989 21.7359 24.663 21.9993 24 21.9993C23.337 21.9993 22.7011 21.7359 22.2322 21.2671C21.7634 20.7982 21.5 20.1623 21.5 19.4993C21.5 18.8363 21.7634 18.2004 22.2322 17.7315C22.7011 17.2627 23.337 16.9993 24 16.9993C24.663 16.9993 25.2989 17.2627 25.7678 17.7315C26.2366 18.2004 26.5 18.8363 26.5 19.4993Z" stroke="#8E66FF" stroke-width="2" stroke-linecap="round" data-v-ae28bbc4></path></g><defs data-v-ae28bbc4><filter id="filter0_d_870_156" x="0" y="0" width="48" height="43.9995" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-ae28bbc4><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-ae28bbc4></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-ae28bbc4></feColorMatrix><feOffset data-v-ae28bbc4></feOffset><feGaussianBlur stdDeviation="7" data-v-ae28bbc4></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.4 0 0 0 0 1 0 0 0 0.8 0" data-v-ae28bbc4></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_870_156" data-v-ae28bbc4></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_870_156" result="shape" data-v-ae28bbc4></feBlend></filter></defs></svg></div>', 1),
                    R = {
                        class: "box"
                    },
                    _ = d((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "bg-yellow.png"
                    })], -1))),
                    E = {
                        class: "text-wrapper"
                    },
                    y = d((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "ENTRATO IL:", -1))),
                    S = {
                        class: "content yellow"
                    },
                    O = (0, c.Fv)('<div class="icon" data-v-ae28bbc4><svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ae28bbc4><g filter="url(#filter0_d_870_13)" data-v-ae28bbc4><path d="M16.929 28.1421C16.0004 27.2135 15.2638 26.1111 14.7612 24.8979C14.2587 23.6846 14 22.3843 14 21.071C14 19.7578 14.2587 18.4575 14.7612 17.2442C15.2638 16.031 16.0004 14.9286 16.929 14M31.0711 14C31.9996 14.9286 32.7362 16.031 33.2388 17.2442C33.7413 18.4575 34 19.7578 34 21.071C34 22.3843 33.7413 23.6846 33.2388 24.8979C32.7362 26.1111 31.9996 27.2135 31.0711 28.1421M20.0711 24.9999C19.5551 24.484 19.1458 23.8715 18.8665 23.1974C18.5872 22.5233 18.4435 21.8007 18.4435 21.071C18.4435 20.3414 18.5872 19.6188 18.8665 18.9447C19.1458 18.2706 19.5551 17.6581 20.0711 17.1422M27.9289 17.1422C28.4449 17.6581 28.8542 18.2706 29.1335 18.9447C29.4128 19.6188 29.5565 20.3414 29.5565 21.071C29.5565 21.8007 29.4128 22.5233 29.1335 23.1974C28.8542 23.8715 28.4449 24.484 27.9289 24.9999M25.1111 21.071C25.1111 21.3657 24.994 21.6483 24.7857 21.8567C24.5773 22.0651 24.2947 22.1822 24 22.1822C23.7053 22.1822 23.4227 22.0651 23.2143 21.8567C23.006 21.6483 22.8889 21.3657 22.8889 21.071C22.8889 20.7764 23.006 20.4938 23.2143 20.2854C23.4227 20.077 23.7053 19.9599 24 19.9599C24.2947 19.9599 24.5773 20.077 24.7857 20.2854C24.994 20.4938 25.1111 20.7764 25.1111 21.071Z" stroke="#AEE33F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-ae28bbc4></path></g><defs data-v-ae28bbc4><filter id="filter0_d_870_13" x="0" y="0" width="48" height="42.1421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-ae28bbc4><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-ae28bbc4></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-ae28bbc4></feColorMatrix><feOffset data-v-ae28bbc4></feOffset><feGaussianBlur stdDeviation="6.5" data-v-ae28bbc4></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.890196 0 0 0 0 0.247059 0 0 0 1 0" data-v-ae28bbc4></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_870_13" data-v-ae28bbc4></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_870_13" result="shape" data-v-ae28bbc4></feBlend></filter></defs></svg></div>', 1);
                var x = {
                        __name: "HeaderComponent",
                        setup(t) {
                            const e = r(),
                                {
                                    data: a,
                                    joinTime: s
                                } = (0, i.bP)(e);
                            return (t, e) => ((0, c.uX)(), (0, c.CE)("header", null, [(0, c.Lk)("div", v, [u, (0, c.Lk)("div", b, [(0, c.Lk)("div", k, (0, o.v_)((0, n.R1)(a).playerName), 1), p])]), (0, c.Lk)("div", g, [(0, c.Lk)("div", L, [f, (0, c.Lk)("div", m, [C, (0, c.Lk)("div", h, (0, o.v_)((0, n.R1)(a).players.online) + " / " + (0, o.v_)((0, n.R1)(a).players.max), 1)]), w]), (0, c.Lk)("div", R, [_, (0, c.Lk)("div", E, [y, (0, c.Lk)("div", S, (0, o.v_)((0, n.R1)(s)), 1)]), O])])]))
                        }
                    },
                    N = a(1241);
                const T = (0, N.A)(x, [
                    ["__scopeId", "data-v-ae28bbc4"]
                ]);
                var D = T;
                const A = t => ((0, c.Qi)("data-v-7c799b7c"), t = t(), (0, c.jt)(), t),
                    B = {
                        class: "data-wrapper"
                    },
                    M = {
                        class: "data-box"
                    },
                    I = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "account-id.png"
                    })], -1))),
                    U = {
                        class: "title-wrapper"
                    },
                    P = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "ID STEAM", -1))),
                    F = {
                        class: "content"
                    },
                    j = {
                        class: "data-box"
                    },
                    G = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "money.png"
                    })], -1))),
                    H = {
                        class: "title-wrapper"
                    },
                    X = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "CONTANTI", -1))),
                    J = {
                        class: "content"
                    },
                    Y = {
                        class: "data-box"
                    },
                    W = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "bank.png"
                    })], -1))),
                    Q = {
                        class: "title-wrapper"
                    },
                    $ = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "BANCA", -1))),
                    K = {
                        class: "content"
                    },
                    V = {
                        class: "data-box"
                    },
                    Z = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "job.png"
                    })], -1))),
                    q = {
                        class: "title-wrapper"
                    },
                    z = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "LAVORO", -1))),
                    tt = {
                        class: "content"
                    },
                    et = {
                        class: "data-box"
                    },
                    at = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "phone.png"
                    })], -1))),
                    st = {
                        class: "title-wrapper"
                    },
                    it = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "NUMERO", -1))),
                    ct = {
                        class: "content"
                    },
                    nt = {
                        key: 0,
                        class: "data-box"
                    },
                    ot = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "gang.png"
                    })], -1))),
                    lt = {
                        class: "title-wrapper"
                    },
                    rt = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "GANG", -1))),
                    dt = {
                        class: "content"
                    },
                    vt = {
                        key: 1,
                        class: "data-box"
                    },
                    ut = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "discord.png"
                    })], -1))),
                    bt = {
                        class: "title-wrapper"
                    },
                    kt = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "DISCORD", -1))),
                    pt = {
                        class: "content"
                    },
                    gt = {
                        class: "data-box"
                    },
                    Lt = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "time.png"
                    })], -1))),
                    ft = {
                        class: "title-wrapper"
                    },
                    mt = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "ORARIO", -1))),
                    Ct = {
                        class: "content"
                    },
                    ht = {
                        class: "data-box"
                    },
                    wt = A((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "weather.png"
                    })], -1))),
                    Rt = {
                        class: "title-wrapper"
                    },
                    _t = A((() => (0, c.Lk)("div", {
                        class: "title"
                    }, "WEATHER", -1))),
                    Et = {
                        class: "content"
                    };
                var yt = {
                    __name: "DataComponent",
                    setup(t) {
                        const e = r(),
                            {
                                data: a,
                                time: s
                            } = (0, i.bP)(e);
                        return e.startTimer(), (t, e) => ((0, c.uX)(), (0, c.CE)("div", B, [(0, c.Lk)("div", M, [I, (0, c.Lk)("div", U, [P, (0, c.Lk)("div", F, (0, o.v_)((0, n.R1)(a).accountid), 1)])]), (0, c.Lk)("div", j, [G, (0, c.Lk)("div", H, [X, (0, c.Lk)("div", J, "$ " + (0, o.v_)((0, n.R1)(a).money), 1)])]), (0, c.Lk)("div", Y, [W, (0, c.Lk)("div", Q, [$, (0, c.Lk)("div", K, "$ " + (0, o.v_)((0, n.R1)(a).bank), 1)])]), (0, c.Lk)("div", V, [Z, (0, c.Lk)("div", q, [z, (0, c.Lk)("div", tt, (0, o.v_)((0, n.R1)(a).job.name + " " + (0, n.R1)(a).job.grade), 1)])]), (0, c.Lk)("div", et, [at, (0, c.Lk)("div", st, [it, (0, c.Lk)("div", ct, (0, o.v_)((0, n.R1)(a).phone), 1)])]), (0, n.R1)(a).gang ? ((0, c.uX)(), (0, c.CE)("div", nt, [ot, (0, c.Lk)("div", lt, [rt, (0, c.Lk)("div", dt, (0, o.v_)((0, n.R1)(a).gang), 1)])])) : (0, c.Q3)("", !0), (0, n.R1)(a).discord ? ((0, c.uX)(), (0, c.CE)("div", vt, [ut, (0, c.Lk)("div", bt, [kt, (0, c.Lk)("div", pt, (0, o.v_)((0, n.R1)(a).discord), 1)])])) : (0, c.Q3)("", !0), (0, c.Lk)("div", gt, [Lt, (0, c.Lk)("div", ft, [mt, (0, c.Lk)("div", Ct, (0, o.v_)((0, n.R1)(s)), 1)])]), (0, c.Lk)("div", ht, [wt, (0, c.Lk)("div", Rt, [_t, (0, c.Lk)("div", Et, (0, o.v_)((0, n.R1)(a).weather), 1)])])]))
                    }
                };
                const St = (0, N.A)(yt, [
                    ["__scopeId", "data-v-7c799b7c"]
                ]);
                var Ot = St;
                async function xt(t, e) {
                    const a = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        },
                        s = `https://${GetParentResourceName()}/${t}`;
                    try {
                        const t = await fetch(s, a);
                        return await t.json()
                    } catch (i) {
                        return console.error(`Failed to fetch NUI: ${i.message} (${t})`), !1
                    }
                }
                const Nt = t => ((0, c.Qi)("data-v-85bcaec6"), t = t(), (0, c.jt)(), t),
                    Tt = {
                        class: "top"
                    },
                    Dt = {
                        class: "left"
                    },
                    At = Nt((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "map-ic.png"
                    })], -1))),
                    Bt = {
                        class: "content"
                    },
                    Mt = Nt((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "map-ic-mini.png"
                    })], -1))),
                    It = {
                        class: "title-wrapper"
                    },
                    Ut = {
                        class: "title"
                    },
                    Pt = {
                        class: "subtitle"
                    },
                    Ft = Nt((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "settings-ic.png"
                    })], -1))),
                    jt = {
                        class: "content"
                    },
                    Gt = Nt((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "settings-ic-mini.png"
                    })], -1))),
                    Ht = {
                        class: "title-wrapper"
                    },
                    Xt = {
                        class: "title"
                    },
                    Jt = {
                        class: "subtitle"
                    },
                    Yt = {
                        class: "center"
                    },
                    Wt = {
                        class: "box"
                    },
                    Qt = Nt((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "discord-ic.png"
                    })], -1))),
                    $t = {
                        class: "content"
                    },
                    Kt = Nt((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "discord-ic-mini.png"
                    })], -1))),
                    Vt = {
                        class: "title"
                    },
                    Zt = {
                        class: "subtitle"
                    },
                    qt = {
                        class: "box"
                    },
                    zt = Nt((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "youtube-ic.png"
                    })], -1))),
                    te = {
                        class: "content"
                    },
                    ee = Nt((() => (0, c.Lk)("div", {
                        class: "icon"
                    }, [(0, c.Lk)("img", {
                        src: "youtube-ic-mini.png"
                    })], -1))),
                    ae = {
                        class: "title"
                    },
                    se = {
                        class: "subtitle"
                    },
                    ie = {
                        class: "right"
                    },
                    ce = {
                        class: "box"
                    },
                    ne = (0, c.Fv)('<div class="bg" data-v-85bcaec6><img src="announces-ic.png" data-v-85bcaec6></div><div class="title-wrapper" data-v-85bcaec6><div class="icon" data-v-85bcaec6><img src="announces-ic-mini.png" data-v-85bcaec6></div><div class="title" data-v-85bcaec6>REGOLAMENTO</div></div>', 2),
                    oe = {
                        class: "announces-wrapper"
                    },
                    le = {
                        class: "date"
                    },
                    re = {
                        class: "title"
                    },
                    de = {
                        class: "desc"
                    },
                    ve = {
                        class: "bottom"
                    },
                    ue = Nt((() => (0, c.Lk)("div", {
                        class: "bg"
                    }, [(0, c.Lk)("img", {
                        src: "bg-image-1.png"
                    })], -1))),
                    be = {
                        class: "content"
                    },
                    ke = {
                        class: "left"
                    },
                    pe = {
                        class: "title"
                    },
                    ge = {
                        class: "subtitle"
                    },
                    Le = {
                        class: "right"
                    },
                    fe = {
                        class: "title"
                    },
                    me = {
                        class: "subtitle"
                    },
                    Ce = {
                        class: "desctitle"
                    };
                var he = {
                    __name: "MainSection",
                    setup(t) {
                        const e = r(),
                            {
                                locales: a,
                                data: s
                            } = (0, i.bP)(e),
                            l = () => {
                                console.log(s.value.Youtube), window.invokeNative("openUrl", s.value.Youtube ?? "https://youtube.com")
                            },
                            d = () => {
                                window.invokeNative("openUrl", s.value.Discord ?? "https://discord.gg")
                            };
                        return (t, i) => ((0, c.uX)(), (0, c.CE)("main", null, [(0, c.Lk)("div", Tt, [(0, c.Lk)("div", Dt, [(0, c.Lk)("div", {
                            class: "box",
                            onClick: i[0] || (i[0] = t => {
                                (0, n.R1)(e).setMenu(!1), (0, n.R1)(xt)("openMap")
                            })
                        }, [At, (0, c.Lk)("div", Bt, [Mt, (0, c.Lk)("div", It, [(0, c.Lk)("div", Ut, (0, o.v_)((0, n.R1)(a).map), 1), (0, c.Lk)("div", Pt, (0, o.v_)((0, n.R1)(a).mapDesc), 1)])])]), (0, c.Lk)("div", {
                            class: "box",
                            onClick: i[1] || (i[1] = t => {
                                (0, n.R1)(e).setMenu(!1), (0, n.R1)(xt)("openSettings")
                            })
                        }, [Ft, (0, c.Lk)("div", jt, [Gt, (0, c.Lk)("div", Ht, [(0, c.Lk)("div", Xt, (0, o.v_)((0, n.R1)(a).settings), 1), (0, c.Lk)("div", Jt, (0, o.v_)((0, n.R1)(a).settingsDesc), 1)])])])]), (0, c.Lk)("div", Yt, [(0, c.Lk)("div", Wt, [Qt, (0, c.Lk)("div", $t, [Kt, (0, c.Lk)("div", Vt, (0, o.v_)((0, n.R1)(a).discord), 1), (0, c.Lk)("div", Zt, (0, o.v_)((0, n.R1)(a).discordDesc), 1), (0, c.Lk)("div", {
                            class: "btn",
                            onClick: i[2] || (i[2] = t => d())
                        }, (0, o.v_)((0, n.R1)(a).discordButton), 1)])]), (0, c.Lk)("div", qt, [zt, (0, c.Lk)("div", te, [ee, (0, c.Lk)("div", ae, (0, o.v_)((0, n.R1)(a).youtubeTitle), 1), (0, c.Lk)("div", se, (0, o.v_)((0, n.R1)(a).youtubeDesc), 1), (0, c.Lk)("div", {
                            class: "btn",
                            onClick: i[3] || (i[3] = t => l())
                        }, (0, o.v_)((0, n.R1)(a).youtubeButton), 1)])])]), (0, c.Lk)("div", ie, [(0, c.Lk)("div", ce, [ne, (0, c.Lk)("div", oe, [((0, c.uX)(!0), (0, c.CE)(c.FK, null, (0, c.pI)((0, n.R1)(s).Announces, (t => ((0, c.uX)(), (0, c.CE)("div", {
                            class: "announce",
                            key: t.message
                        }, [(0, c.Lk)("div", le, (0, o.v_)(t.date), 1), (0, c.Lk)("div", re, (0, o.v_)(t.title), 1), (0, c.Lk)("div", de, (0, o.v_)(t.message), 1)])))), 128))])])])]), (0, c.Lk)("div", ve, [ue, (0, c.Lk)("div", be, [(0, c.Lk)("div", ke, [(0, c.Lk)("div", pe, (0, o.v_)((0, n.R1)(a).bottomLeftTitle), 1), (0, c.Lk)("div", ge, (0, o.v_)((0, n.R1)(a).bottomLeftDesc), 1)]), (0, c.Lk)("div", Le, [(0, c.Lk)("div", fe, (0, o.v_)((0, n.R1)(a).bottomRightTitle), 1), (0, c.Lk)("div", me, (0, o.v_)((0, n.R1)(a).bottomRightSubtitle), 1), (0, c.Lk)("div", Ce, (0, o.v_)((0, n.R1)(a).bottomRightDesc), 1)]), (0, c.Lk)("div", {
                            class: "btn-wrapper",
                            onClick: i[4] || (i[4] = t => (0, n.R1)(xt)("miscButton"))
                        }, (0, o.v_)((0, n.R1)(a).bottomRightButton), 1)])])]))
                    }
                };
                const we = (0, N.A)(he, [
                    ["__scopeId", "data-v-85bcaec6"]
                ]);
                var Re = we;

                function _e() {
                    const t = r();
                    window.addEventListener("message", (({
                        data: e
                    }) => {
                        switch (e.action) {
                            case "open":
                                t.setData(e.data), t.setMenu(!0), t.setLocales(e.data.Locales);
                                break;
                            case "close":
                                t.setMenu(!1);
                                break;
                            default:
                                break
                        }
                    }))
                }
                const Ee = {
                    key: 0,
                    div: "",
                    class: "cont"
                };
                var ye = {
                    __name: "App",
                    setup(t) {
                        const e = r(),
                            {
                                open: a
                            } = (0, i.bP)(e);
                        return (0, c.sV)((() => {
                            _e()
                        })), window.addEventListener("keydown", (t => {
                            "Escape" === t.key && (e.setMenu(!1), xt("closeMenu"))
                        })), (t, e) => ((0, c.uX)(), (0, c.Wv)(s.eB, null, {
                            default: (0, c.k6)((() => [(0, n.R1)(a) ? ((0, c.uX)(), (0, c.CE)("div", Ee, [(0, c.bF)(D), (0, c.bF)(Ot), (0, c.bF)(Re)])) : (0, c.Q3)("", !0)])),
                            _: 1
                        }))
                    }
                };
                const Se = ye;
                var Oe = Se;
                const xe = (0, i.Ey)(),
                    Ne = (0, s.Ef)(Oe);
                Ne.use(xe), Ne.mount("#app")
            }
        },
        e = {};

    function a(s) {
        var i = e[s];
        if (void 0 !== i) return i.exports;
        var c = e[s] = {
            exports: {}
        };
        return t[s].call(c.exports, c, c.exports, a), c.exports
    }
    a.m = t,
        function() {
            var t = [];
            a.O = function(e, s, i, c) {
                if (!s) {
                    var n = 1 / 0;
                    for (d = 0; d < t.length; d++) {
                        s = t[d][0], i = t[d][1], c = t[d][2];
                        for (var o = !0, l = 0; l < s.length; l++)(!1 & c || n >= c) && Object.keys(a.O).every((function(t) {
                            return a.O[t](s[l])
                        })) ? s.splice(l--, 1) : (o = !1, c < n && (n = c));
                        if (o) {
                            t.splice(d--, 1);
                            var r = i();
                            void 0 !== r && (e = r)
                        }
                    }
                    return e
                }
                c = c || 0;
                for (var d = t.length; d > 0 && t[d - 1][2] > c; d--) t[d] = t[d - 1];
                t[d] = [s, i, c]
            }
        }(),
        function() {
            a.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t["default"]
                } : function() {
                    return t
                };
                return a.d(e, {
                    a: e
                }), e
            }
        }(),
        function() {
            a.d = function(t, e) {
                for (var s in e) a.o(e, s) && !a.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: e[s]
                })
            }
        }(),
        function() {
            a.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            a.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        }(),
        function() {
            var t = {
                524: 0
            };
            a.O.j = function(e) {
                return 0 === t[e]
            };
            var e = function(e, s) {
                    var i, c, n = s[0],
                        o = s[1],
                        l = s[2],
                        r = 0;
                    if (n.some((function(e) {
                            return 0 !== t[e]
                        }))) {
                        for (i in o) a.o(o, i) && (a.m[i] = o[i]);
                        if (l) var d = l(a)
                    }
                    for (e && e(s); r < n.length; r++) c = n[r], a.o(t, c) && t[c] && t[c][0](), t[c] = 0;
                    return a.O(d)
                },
                s = self["webpackChunkweb"] = self["webpackChunkweb"] || [];
            s.forEach(e.bind(null, 0)), s.push = e.bind(null, s.push.bind(s))
        }();
    var s = a.O(void 0, [504], (function() {
        return a(9321)
    }));
    s = a.O(s)
})();