<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Добавить контакт</p>
                <br />
                <br />
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-3">
                <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input required v-model="contact.firstname" type="text" class="form-control"
                            placeholder="Фамилия">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.middlename" type="text" class="form-control" placeholder="Имя">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.lastname" type="text" class="form-control" placeholder="Отчество">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.bday" type="text" class="form-control" placeholder="Дата рождения">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="email" class="form-control"
                            placeholder="Электронная почта">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.number" type="number" class="form-control" placeholder="Номер телефона">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="URL фото">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Добавить">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" class="contact-img-big">
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/Service';
export default {
    name: "ContactsAdd",
    data: function () {
        return {
            contact: {
                id: '',
                firstname: '',
                middlename: '',
                lastname: '',
                bday: '',
                email: '',
                photo: '',
                number: '',
            }
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ContactService.createContact(this.contact);
                if (response) {
                    return this.$router.push('/');//если все ок, перекинет
                }
                else {
                    return this.$router.push('/contact/add')//остаемся на странице
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>

</style>