<template>
  <Transition>
    <div div class="cont" v-if="open">
      <HeaderComponent/>
      <DataComponent/>
      <MainSection/>
    </div>
  </Transition>
</template>

<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
  import DataComponent from './components/DataComponent.vue';
  import MainSection from './components/MainSection.vue';
  import { useMenuData } from './stores/data';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  import nuiEvents from './utils/nui-events'
  import { fetchNui } from './utils';

  const menuData = useMenuData();
  const { open } = storeToRefs(menuData);

  onMounted(() => {
      nuiEvents()
  })

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuData.setMenu(false)
      fetchNui('closeMenu')
    }
  })
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/akrobat');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Akrobat', sans-serif;
    user-select: none;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  html {
    font-size: calc(0.5em + 0.8vh);
  }

  .cont{
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    background: rgba(8, 10, 13, 0.95);
  }
</style>
