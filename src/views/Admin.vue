<template>
    <section class="vh-100 section">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-light text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <form @submit.prevent="submit">
                                <div class="form-outline form-white mb-4">
                                    <input type="username" class="form-control form-control-lg" id="username" v-model="username"
                                        required placeholder="Имя пользователя">
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" class="form-control form-control-lg" id="password" v-model="password"
                                        required placeholder="Пароль">
                                </div>
                                <button @click="login" type="submit" class="btn btn-outline-primary btn-lg px-5">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"

export default {
    name: "LogInAdmin",
    data() {
        return {
            username: '',
            password: '',
            error: ''
        }

    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:9000/user?username=${this.username}&password=${this.password}`);
            console.warn(result);

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped>
.section {
    background: url('https://azazeln28.neocities.org/codepen/image/image3.jpg');
    overflow: hidden;
    background-position: center center;
    background-size: cover;
}
.form-control:focus {
  border-color: rgb(126, 208, 246);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(33, 112, 151, 0.6);
}



</style>