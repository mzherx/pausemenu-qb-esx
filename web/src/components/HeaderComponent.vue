<template>
    <header>
        <div class="logo-wrapper">
            <div class="logo"><img src="logo.svg"></div>
            <div class="player-name-wrapper">
                <div class="player-name">{{ data.playerName }}</div>
                <div class="title">PAUSE MENU</div>
            </div>
        </div>

        <div class="box-wrapper">
            <div class="box">
                <div class="bg"><img src="bg-purple.png"></div>
                <div class="text-wrapper">
                    <div class="title">GIOCATORI ONLINE:</div>
                    <div class="content">{{ data.players.online }} / {{ data.players.max }}</div>
                </div>
                <div class="icon">
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_870_156)">
                        <path d="M16.5 26.9993H16C15.7348 26.9993 15.4804 26.8939 15.2929 26.7064C15.1054 26.5189 15 26.2645 15 25.9993C15 25.2036 15.3161 24.4406 15.8787 23.878C16.4413 23.3154 17.2044 22.9993 18 22.9993H19M19 19.9493C18.6328 19.8742 18.2872 19.7175 17.9888 19.4908C17.6903 19.2641 17.4467 18.9732 17.2758 18.6396C17.105 18.3061 17.0113 17.9383 17.0017 17.5637C16.9922 17.189 17.067 16.817 17.2207 16.4752C17.3743 16.1333 17.6028 15.8304 17.8893 15.5888C18.1759 15.3472 18.513 15.1731 18.8759 15.0794C19.2388 14.9857 19.6181 14.9748 19.9858 15.0475C20.3534 15.1201 20.7001 15.2746 21 15.4993M31.5 26.9993H32C32.2652 26.9993 32.5196 26.8939 32.7071 26.7064C32.8946 26.5189 33 26.2645 33 25.9993C33 25.2036 32.6839 24.4406 32.1213 23.878C31.5587 23.3154 30.7956 22.9993 30 22.9993H29M29 19.9493C29.3672 19.8742 29.7128 19.7175 30.0112 19.4908C30.3097 19.2641 30.5533 18.9732 30.7242 18.6396C30.895 18.3061 30.9887 17.9383 30.9983 17.5637C31.0078 17.189 30.933 16.817 30.7793 16.4752C30.6257 16.1333 30.3972 15.8304 30.1107 15.5888C29.8241 15.3472 29.487 15.1731 29.1241 15.0794C28.7612 14.9857 28.3819 14.9748 28.0142 15.0475C27.6466 15.1201 27.2999 15.2746 27 15.4993M27.5 28.9993H20.5C20.2348 28.9993 19.9804 28.8939 19.7929 28.7064C19.6054 28.5189 19.5 28.2645 19.5 27.9993C19.5 27.2036 19.8161 26.4406 20.3787 25.878C20.9413 25.3154 21.7044 24.9993 22.5 24.9993H25.5C26.2956 24.9993 27.0587 25.3154 27.6213 25.878C28.1839 26.4406 28.5 27.2036 28.5 27.9993C28.5 28.2645 28.3946 28.5189 28.2071 28.7064C28.0196 28.8939 27.7652 28.9993 27.5 28.9993ZM26.5 19.4993C26.5 20.1623 26.2366 20.7982 25.7678 21.2671C25.2989 21.7359 24.663 21.9993 24 21.9993C23.337 21.9993 22.7011 21.7359 22.2322 21.2671C21.7634 20.7982 21.5 20.1623 21.5 19.4993C21.5 18.8363 21.7634 18.2004 22.2322 17.7315C22.7011 17.2627 23.337 16.9993 24 16.9993C24.663 16.9993 25.2989 17.2627 25.7678 17.7315C26.2366 18.2004 26.5 18.8363 26.5 19.4993Z" stroke="#8E66FF" stroke-width="2" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_870_156" x="0" y="0" width="48" height="43.9995" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="7"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.4 0 0 0 0 1 0 0 0 0.8 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_870_156"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_870_156" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="box">
                <div class="bg"><img src="bg-yellow.png"></div>
                <div class="text-wrapper">
                    <div class="title">ENTRATO IL:</div>
                    <div class="content yellow">{{ joinTime }}</div>
                </div>
                <div class="icon">
                    <svg width="48" height="43" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_870_13)">
                        <path d="M16.929 28.1421C16.0004 27.2135 15.2638 26.1111 14.7612 24.8979C14.2587 23.6846 14 22.3843 14 21.071C14 19.7578 14.2587 18.4575 14.7612 17.2442C15.2638 16.031 16.0004 14.9286 16.929 14M31.0711 14C31.9996 14.9286 32.7362 16.031 33.2388 17.2442C33.7413 18.4575 34 19.7578 34 21.071C34 22.3843 33.7413 23.6846 33.2388 24.8979C32.7362 26.1111 31.9996 27.2135 31.0711 28.1421M20.0711 24.9999C19.5551 24.484 19.1458 23.8715 18.8665 23.1974C18.5872 22.5233 18.4435 21.8007 18.4435 21.071C18.4435 20.3414 18.5872 19.6188 18.8665 18.9447C19.1458 18.2706 19.5551 17.6581 20.0711 17.1422M27.9289 17.1422C28.4449 17.6581 28.8542 18.2706 29.1335 18.9447C29.4128 19.6188 29.5565 20.3414 29.5565 21.071C29.5565 21.8007 29.4128 22.5233 29.1335 23.1974C28.8542 23.8715 28.4449 24.484 27.9289 24.9999M25.1111 21.071C25.1111 21.3657 24.994 21.6483 24.7857 21.8567C24.5773 22.0651 24.2947 22.1822 24 22.1822C23.7053 22.1822 23.4227 22.0651 23.2143 21.8567C23.006 21.6483 22.8889 21.3657 22.8889 21.071C22.8889 20.7764 23.006 20.4938 23.2143 20.2854C23.4227 20.077 23.7053 19.9599 24 19.9599C24.2947 19.9599 24.5773 20.077 24.7857 20.2854C24.994 20.4938 25.1111 20.7764 25.1111 21.071Z" stroke="#AEE33F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_870_13" x="0" y="0" width="48" height="42.1421" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="6.5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.890196 0 0 0 0 0.247059 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_870_13"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_870_13" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { useMenuData } from '@/stores/data';
    import { storeToRefs } from 'pinia';

    const menuData = useMenuData();
    const { data, joinTime } = storeToRefs(menuData);
</script>

<style scoped>
    header{
        width: 100%;
        height: 9%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-wrapper{
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .logo-wrapper .logo img{
        max-height: 100%;
    }

    .logo-wrapper .player-name-wrapper .player-name{
        font-weight: 700;
        font-size: 1.1rem;
        line-height: 1.2rem;
        color: #FFFFFF;
    }

    .logo-wrapper .player-name-wrapper .title{
        font-weight: 800;
        font-size: 0.9rem;
        line-height: 1rem;
        color: #FFFFFF;
        opacity: 0.35;
    }

    .box-wrapper{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .box-wrapper .box{
        position: relative;
        max-height: 100%;
        display: flex;
        width: fit-content;
        align-items: center;
        flex-shrink: none;
        padding: 0.2rem 1rem;
    }

    .box-wrapper .box .bg img{
        max-height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .box-wrapper .box .text-wrapper{
        display: flex;
        gap: 5px;
    }

    .box-wrapper .box .text-wrapper .title{
        font-size: 1rem;
        line-height: 1.2rem;
        color: #FFFFFF;
    }

    .box-wrapper .box .text-wrapper .content{
        font-size: 1rem;
        line-height: 1.2rem;
        color: #8E66FF;
        font-weight: 700;
    }

    .box-wrapper .box .icon{
        display: flex;
        align-items: center;
    }

    .content.yellow{
        color: #AEE33F !important;
    }
</style>
