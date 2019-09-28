<template>
    <div class="container">
        <div class="list">
            <table>
                <thead>
                <tr>
                    <th>Код</th>
                    <th>Название</th>
                    <th>Количество</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="detail in this.details"
                    :key="detail.id">
                    <td>{{detail.shortName}}</td>
                    <td>{{detail.name}}</td>
                    <td>{{detail.count}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="list">
            <table>
                <thead>
                <tr>
                    <th>Код</th>
                    <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="detail in this.steps"
                    :key="detail.id">
                    <td>{{detail.id}}</td>
                    <td>{{detail.description}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
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
        watch:{
            details(){
                console.log(this.details)
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
