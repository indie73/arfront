<template lang="pug">
    .container
        .block
            .list
                .title
                    | Список инструкций
                table
                    thead
                        tr
                            th Номер
                            th Название
                            th Ссылка
                    tbody
                        tr(v-for="instruction in instructions"
                            :key="instruction.id")
                            td {{instruction.id}}
                            td {{instruction.name}}
                            td
                                router-link(:to="'/instructions/' + instruction.id") Перейти
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                instructions: null,
            }
        },
        created() {
            this.getInstructions()
        },
        methods: {
            getInstructions() {
                axios.get('http://indieteam.online/api/v1/instructions', {})
                    .then(response => {
                        this.instructions = response.data.instructions;
                    });
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
