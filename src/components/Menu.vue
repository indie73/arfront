<template lang="pug">
    .menu.container
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
</template>

<style scoped lang="scss">
    .menu {
        border-bottom: solid 1px #fdffa0;
        text-align: left;

        ul {
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 8px 20px;
            border-left: solid 1px #fdffa0;
            border-right: solid 1px #fdffa0;

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
            }
        }
    }
</style>
