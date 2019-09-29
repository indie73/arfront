<template lang="pug">
    .container
        .block
            .list
                .title
                    | Необходимые детали
                table
                    thead
                        tr
                            th Код
                            th Название
                            th Количество
                    tbody
                        tr(v-for="detail in this.details"
                            :key="detail.id")
                            td {{detail.shortName}}
                            td {{detail.name}}
                            td {{detail.count}}
            .list
                .title
                    | Шаги сборки
                table
                    thead
                        tr
                            th Код
                            th Описание
                    tbody
                        tr(v-for="detail in this.steps"
                            :key="detail.id")
                            td {{detail.id}}
                            td {{detail.description}}
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                details: null,
                steps: null,
            }
        },
        created() {
            this.getInstructions()
        },
        methods: {
            getInstructions() {
                axios.get('http://indieteam.online/api/v1/instructions/1', {})
                    .then(response => {
                        this.steps = response.data.steps;
                        this.details = response.data.details;
                    });
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
            }
        }
    }
</style>
