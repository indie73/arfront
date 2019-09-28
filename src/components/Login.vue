<template lang="pug">
.login
    form.content(action="#" v-on:submit.prevent="login()")
        .errors(v-if="this.errors")
            | Не правильный логин или пароль
        .field
            label(for="name") Имя пользователя
            input#name(type="text" name="name")
        .field
            label(for="password") Пароль
            input#password(type="password" name="password")
        .submit
            button(type="submit") Войти

</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                // Тестовые данные
                name: 'Денис',
                password: '123456',
                errors: false,
            }
        },
        methods: {
            login() {
                let name = document.getElementById('name').value;
                let password = document.getElementById('password').value;

                if (this.name === name && this.password === password) {
                    this.errors = false;
                    this.logIn();
                } else {
                    this.errors = true;
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        font-size: 14px;

        .content {
            border: solid 1px #cccccc;
            padding: 25px;
        }

        .errors {
            margin-bottom: 15px;
            color: red;
            font-size: 12px;
        }

        .field {
            + .field {
                margin-top: 15px;
            }

            label {
                margin-bottom: 5px;
                display: block;
            }

            input {
                outline: none;
                border: solid 1px #d4d4d4;
                border-radius: 5px;
                padding: 0 15px;
                width: 100%;
                height: 30px;
                background: #fff;

                &:focus {
                    box-shadow: inset 1px 2px 3px rgba(#000, 0.15);
                }
            }
        }

        .submit {
            margin-top: 20px;

            button {
                outline: none;
                border: none;
                width: 80px;
                height: 30px;
                color: #fff;
                background: dodgerblue;
                cursor: pointer;

                &:hover {
                    background: lighten(dodgerblue, 10%);
                }
            }
        }
    }
</style>
