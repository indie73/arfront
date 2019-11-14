<template lang="pug">
    #app
        .header
            .container
                img(:src="require('./assets/logo.png')")
        .options(v-if="this.logined")
            .container
                ul
                    li
                        button(type="button" v-on:click.prevent="print()")
                            | Печать
        Menu(v-if="this.logined")
        Login(v-if="!this.logined")
        router-view(v-if="this.logined")
</template>

<script>
    import Login from '@/components/Login.vue'
    import Menu from '@/components/Menu.vue'

    export default {
        components: {
            Login,
            Menu,
        },
        methods: {
            print() {
                window.print();
            }
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
		overflow: hidden;
        text-align: center;
    }

    .header {
        border-bottom: solid 1px #000;
        padding: 7px 0;
        box-shadow: 0 0 7px rgba(#fff, 0.35);
        text-align: left;
        background: #fdffa0;
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

    .options {
        border-bottom: solid 1px #fdffa0;
        padding: 15px 0;

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                button {
                    display: block;
                    outline: none;
                    border: none;
                    padding: 0;
                    text-decoration: none;
                    color: #f09a3b;
                    background: none;
                    cursor: pointer;

                    img {
                        display: block;
                        margin-bottom: 8px;
                        width: 40px;
                    }

                    &:hover,
                    &.is-active {
                        color: #fdffa0;
                    }
                }
            }
        }

        @media print {
            display: none;
        }
    }
</style>
