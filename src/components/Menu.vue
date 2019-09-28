<template lang="pug">
    .menu.container
        .content
            ul

                li
                     router-link(
                        to="/"
                        v-slot="{ href, route, navigate, isActive, isExactActive }")
                        a(:class="isActive ? 'is-active' : ''" :href="href")
                            img(:src="require('../assets/icon-2.png')")
                            | Материалы инструкции
                li
                    router-link(
                        to="/points"
                        v-slot="{ href, route, navigate, isActive, isExactActive }")
                        a(:class="isActive ? 'is-active' : ''" :href="href")
                            img(:src="require('../assets/icon-1.png')")
                            | Контрольние точки
            ul
                li
                    button(type="button" v-on:click.prevent="print()")
                        | Печать
</template>

<script>
    export default {
        methods: {
            print() {
                window.print();
            }
        },
    }
</script>

<style scoped lang="scss">
    .menu {
        border-bottom: solid 1px #fdffa0;
        text-align: left;

        .content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 20px;
            border-left: solid 1px #fdffa0;
            border-right: solid 1px #fdffa0;
        }

        ul {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;

            li {
                + li {
                    margin-left: 20px;
                }

                a {
                    display: block;
                    text-decoration: none;
                    color: #f09a3b;

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

                button {
                    outline: none;
                    border: none;
                    width: 80px;
                    height: 30px;
                    color: #4f4f4f;
                    background: #fdffa0;
                    cursor: pointer;

                    &:hover {
                        background: darken(#fdffa0, 10%);
                    };
                }
            }
        }
    }
</style>
