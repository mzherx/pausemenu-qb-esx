<template>
    <main>
        <div class="top">
            <div class="left">
                <div class="box" @click="menuData.setMenu(false); fetchNui('openMap')">
                    <div class="bg"><img src="map-ic.png"></div>

                    <div class="content">
                        <div class="icon"><img src="map-ic-mini.png"></div>

                        <div class="title-wrapper">
                            <div class="title">{{ locales.map }}</div>
                            <div class="subtitle">{{ locales.mapDesc }}</div>
                        </div>
                    </div>
                </div>
                <div class="box" @click="menuData.setMenu(false); fetchNui('openSettings')">
                    <div class="bg"><img src="settings-ic.png"></div>

                    <div class="content">
                        <div class="icon"><img src="settings-ic-mini.png"></div>

                        <div class="title-wrapper">
                            <div class="title">{{ locales.settings }}</div>
                            <div class="subtitle">{{ locales.settingsDesc }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="box">
                    <div class="bg"><img src="discord-ic.png"></div>

                    <div class="content">
                        <div class="icon"><img src="discord-ic-mini.png"></div>
                        <div class="title">{{ locales.discord }}</div>
                        <div class="subtitle">{{ locales.discordDesc }}</div>
                        <div class="btn" @click="openDiscord()">{{ locales.discordButton }}</div>
                    </div>
                </div>
                <div class="box">
                    <div class="bg"><img src="youtube-ic.png"></div>

                    <div class="content">
                        <div class="icon"><img src="youtube-ic-mini.png"></div>
                        <div class="title">{{ locales.youtubeTitle }}</div>
                        <div class="subtitle">{{ locales.youtubeDesc }}</div>
                        <div class="btn" @click="openYoutube()">{{ locales.youtubeButton }}</div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="box">
                    <div class="bg"><img src="announces-ic.png"></div>

                    <div class="title-wrapper">
                        <div class="icon"><img src="announces-ic-mini.png"></div>
                        <div class="title">PROJECT ANNOUNCES</div>
                    </div>

                    <div class="announces-wrapper">
                        <div class="announce" v-for="announce in data.Announces" :key="announce.message">
                            <div class="date">{{ announce.date }}</div>
                            <div class="title">{{ announce.title }}</div>
                            <div class="desc">{{ announce.message }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="bg"><img src="bg-image-1.png"></div>

            <div class="content">
                <div class="left">
                    <div class="title">{{ locales.bottomLeftTitle }}</div>
                    <div class="subtitle">{{ locales.bottomLeftDesc }}</div>
                </div>
                <div class="right">
                    <div class="title">{{ locales.bottomRightTitle }}</div>
                    <div class="subtitle">{{ locales.bottomRightSubtitle }}</div>
                    <div class="desctitle">{{ locales.bottomRightDesc }}</div>
                </div>
                <div class="btn-wrapper" @click="fetchNui('miscButton')">{{ locales.bottomRightButton }}</div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { useMenuData } from '@/stores/data';
    import { storeToRefs } from 'pinia';
    import { fetchNui } from '@/utils';

    const menuData = useMenuData();
    const { locales, data } = storeToRefs(menuData);

    const openYoutube = () => {
        window.invokeNative('openUrl', data.value.Youtube ?? 'https://youtube.com')
    }

    const openDiscord = () => {
        window.invokeNative('openUrl', data.value.Discord ?? 'https://discord.gg')
    }
</script>

<style scoped>
    main{
        width: 100%;
        height: calc(83% - 1rem);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .announces-wrapper{
        height: calc(100% - 10rem);
        overflow-y: scroll;
        width: 65%;
        display: flex;
        flex-direction: column;
        padding: 0rem 4rem 4rem 4rem;
        gap: 5rem;
    }

    .announces-wrapper::-webkit-scrollbar {
        width: 0px;
    }

    .right .title-wrapper{
        font-weight: 800;
        font-size: 32px;
        line-height: 108%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        padding: 2rem 3rem 1rem 3rem;
    }

    .right .date{
        background: #FF3838;
        border-radius: 4px;
        width: fit-content;
        padding: 0.5rem;
        font-weight: 800;
        font-size: 0.9rem;
        line-height: 108%;
        color: #FFFFFF;
    }

    .right .announce .title{
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 108%;
        color: #FFFFFF;
        margin-bottom: 1rem;
    }

    .right .announce .desc{
        font-weight: 600;
        font-size: 0.9rem ;
        line-height: 128%;
        color: #B9B9B9;
    }

    .left .box .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .left .box .content .title-wrapper{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .left .box .content .title-wrapper .title{
        font-family: 'Akrobat ExtraBold';
        font-size: 3rem;
        line-height: 108%;
        color: #FFFFFF;
    }

    .left .box .content .title-wrapper .subtitle{
        font-weight: 600;
        font-size: 0.9rem;
        line-height: 108%;
        color: rgba(255, 255, 255, 0.5);
        width: 50%;
    }

    .top{
        display: flex;
        gap: 0.5rem;
        width: 100%;
        height: 75%;
    }

    .left{
        display: flex;
        gap: 0.5rem;
        width: 30%;
        height: 100%;
        flex-direction: column;
    }

    .center{
        display: flex;
        gap: 0.5rem;
        width: 25%;
        height: 100%;
        flex-direction: column;
    }

    .center .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        padding: 0 6rem;
    }

    .center .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .center .title{
        font-size: 1.25rem;
        line-height: 108%;
        color: #FFFFFF;
        font-family: 'Akrobat ExtraBold';
        margin-bottom: 1rem;
    }

    .center .subtitle{
        font-family: 'Akrobat Bold';
        font-size: 12px;
        line-height: 108%;
        text-align: center;
        color: #ffffff7e;
        margin-bottom: 1rem;
    }

    .center .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 10px;
        background: #7748FC;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
        width: fit-content;
        font-size: 1rem;
        line-height: 108%;
        color: #FFFFFF;
        font-family: 'Akrobat Bold';
    }

    .center .box:last-child .btn{
        background: #FF3838;
    }

    .center .btn:hover{
        background: #8355ff;
    }

    .center .box:last-child .btn:hover{
        background: #ff2c2c;
    }

    .right{
        display: flex;
        gap: 0.5rem;
        width: 45%;
        height: 100%;
    }

    .box{
        width: 100%;
        height: 50%;
        border-radius: 6px;
        z-index: 10;
        position: relative;
        background: rgba(255, 255, 255, 0.0);
    }

    .left .box:hover{
        background: rgba(255, 255, 255, 0.007);
        cursor: pointer;
    }

    .right .box{
        height: 100%;
    }

    .center .box:first-child{
        height: 55%;
    }

    .center .box:last-child{
        height: 45%;
    }

    .left .box:first-child{
        height: 45%;
    }

    .left .box:last-child{
        height: 55%;
    }

    .box .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        overflow: hidden;
        border-radius: 6px;
    }

    .box .bg img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        object-fit: cover;
    }

    .left .box:first-child .bg{
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }

    .bottom{
        width: 100%;
        height: calc(25% - 0.5rem);
        position: relative;
        z-index: 10;
        overflow: hidden;
        border-radius: 6px;
    }

    .bottom img, .left img, .right img{
        height: 100%;
    }

    .bg img{
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        object-fit: cover;
    }

    .bottom .content{
        display: flex;
        width: 70%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 999;
    }

    .bottom .left{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .bottom .left .title{
        font-size: 3.1rem;
        line-height: 70%;
        font-weight: 900;
        color: #FFFFFF;
    }

    .bottom .left .subtitle{
        font-size: 4.1rem;
        line-height: 70%;
        font-weight: 900;
        color: #FFEB3A;
    }

    .bottom .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .bottom .right .title{
        font-weight: 800;
        font-size: 2rem;
        line-height: 70%;
        color: #FFFFFF;
    }

    .bottom .right .subtitle{
        font-weight: 800;
        font-size: 1.3rem;
        line-height: 100%;
        color: #FFEB3A;
    }

    .bottom .right .desctitle{
        font-weight: 800;
        font-size: 1rem;
        line-height: 100%;
        color: #FFFFFF;
        margin-top: 10px;
    }

    .bottom .btn-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1.2rem;
        gap: 10px;
        background: #F0CD14;
        border-radius: 6px;
        font-weight: 800;
        font-size: 1rem;
        line-height: 19px;
        text-transform: uppercase;
        color: #0F121C;
        cursor: pointer;
    }

    .bottom .btn-wrapper:hover{
        background: #FFEB3A;
    }
</style>
