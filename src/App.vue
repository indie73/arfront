<template>
    <div id="app">
        <div id="nav" v-if="this.logined">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <Login v-if="!this.logined" msg="Welcome to Your Vue.js App"/>
        <router-view v-if="this.logined"/>
    </div>
</template>

<script>
    import Login from '@/components/Login.vue'

    export default {
        components: {
            Login,
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
        color: #f09a3b;
        background: #454545;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
