<template>
    <div id="app">
        <Menu v-if="this.logined" />
        <Login v-if="!this.logined" msg="Welcome to Your Vue.js App"/>
        <router-view v-if="this.logined"/>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue'
    import Menu from '@/components/Menu.vue'

    export default {
        components: {
            Login,
            Menu,
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Helvetica, sans-serif;
        font-size: 14px;
        color: #f09a3b;
        background: #454545;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .container {
        padding: 0 20px;
    }

    .block {
        margin: 20px 0;
        border: solid 1px #fdffa0;
        padding: 15px;
        background: #4f4f4f;
    }
</style>
