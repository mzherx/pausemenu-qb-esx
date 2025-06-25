<template>
    <div class="data-wrapper">
        <div class="data-box">
            <div class="icon"><img src="account-id.png"></div>
            <div class="title-wrapper">
                <div class="title">ACCOUNT ID</div>
                <div class="content">{{ data.accountid }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="money.png"></div>
            <div class="title-wrapper">
                <div class="title">MONEY</div>
                <div class="content">$ {{ data.money }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="bank.png"></div>
            <div class="title-wrapper">
                <div class="title">BANK</div>
                <div class="content">$ {{ data.bank }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="job.png"></div>
            <div class="title-wrapper">
                <div class="title">JOB</div>
                <div class="content">{{ data.job.name + " " + data.job.grade }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="phone.png"></div>
            <div class="title-wrapper">
                <div class="title">PHONE</div>
                <div class="content">{{ data.phone }}</div>
            </div>
        </div>
        <div class="data-box" v-if="data.gang">
            <div class="icon"><img src="gang.png"></div>
            <div class="title-wrapper">
                <div class="title">GANG</div>
                <div class="content">{{ data.gang }}</div>
            </div>
        </div>
        <div class="data-box" v-if="data.discord">
            <div class="icon"><img src="discord.png"></div>
            <div class="title-wrapper">
                <div class="title">DISCORD</div>
                <div class="content">{{ data.discord }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="time.png"></div>
            <div class="title-wrapper">
                <div class="title">ORARIO</div>
                <div class="content">{{ time }}</div>
            </div>
        </div>
        <div class="data-box">
            <div class="icon"><img src="weather.png"></div>
            <div class="title-wrapper">
                <div class="title">Tempo</div>
                <div class="content">{{ data.weather }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useMenuData } from '@/stores/data';
    import { storeToRefs } from 'pinia';

    const menuData = useMenuData();
    const { data, time } = storeToRefs(menuData);

    menuData.startTimer()
</script>

<style scoped>
    .data-wrapper{
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
    }

    .data-box{
        width: 100%;
        height: 100%;
        background: rgba(217, 217, 217, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 6px;
        display: flex;
        align-items: center;
        padding-right: 15px;
    }

    .data-box .title{
        font-weight: 800;
        font-size: 0.9rem;
        line-height: 108%;
        color: rgba(255, 255, 255, 0.5);
    }

    .data-box .content{
        font-weight: 800;
        font-size: 1rem;
        line-height: 108%;
        color: #FFFFFF;
    }

    .data-box .icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
