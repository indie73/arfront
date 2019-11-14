<template lang="pug">
    .container
        .block
            .list
                .title
                    | Контрольные точки
                table
                    thead
                        tr
                            th Номер
                            th Пользователь
                            th Время
                            th Инструкция
                    tbody
                        tr(v-for="point in control_points"
                            :key="point.id")
                            td {{point.id}}
                            td {{point.username}}
                            td {{new Date(point.time * 1000) | moment("DD-MM-YYYY, h:mm:ss")}}
                            td
                                router-link(:to="'/instructions/' + point.instructionId") Посмотреть инструкцию

</template>

<script>
    import axios from 'axios'
    import {moment} from 'moment'

    export default {
        data() {
            return {
                control_points: null,
            }
        },
        created() {
            this.getPoints()
        },
        methods: {
            getPoints() {
                axios.get('http://indieteam.online/api/v1/control_points', {})
                    .then(response => {
                        this.control_points = response.data.control_points;
                    });
            },
            moment() {
                return moment();
            },
            formatDate(date) {
                let monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];

                let day = date.getDate();
                let monthIndex = date.getMonth();
                let year = date.getFullYear();
                let hours = date.getHours();
                let minuts = date.getMinutes();
                let seconds = date.getSeconds();

                return `${day} ${monthNames[monthIndex]} ${year} ${hours}:${minuts}:${seconds}`;
            }
        },
    }
</script>

<style scoped lang="scss">
    .title {
        font-weight: 700;
        margin: 0 0 15px;
        text-align: left;
    }

    .list {
        text-align: left;

        + .list {
            margin-top: 50px;
        }

        table {
            th {
                padding: 5px 15px;

                + th {
                    border-left: solid 1px #fdffa0;
                }
            }

            td {
                border-top: solid 1px #fdffa0;
                padding: 5px 15px;

                + td {
                    border-left: solid 1px #fdffa0;
                }

                a {
                    color: inherit;

                    &:hover {
                        color: #fdffa0;
                    }
                }
            }
        }
    }
</style>
