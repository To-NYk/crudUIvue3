<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Просмотр профиля</p>
                <br />
                <br />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <img :src="contact.photo" class="contact-img">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Фамилия : <span class="fw-bold">{{contact.firstname}}</span></li>
                    <li class="list-group-item">Имя : <span class="fw-bold">{{contact.middlename}}</span></li>
                    <li class="list-group-item">Отчество : <span class="fw-bold">{{contact.lastname}}</span></li>
                    <li class="list-group-item">Дата рождения : <span class="fw-bold">{{contact.bday}}</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">{{contact.email}}</span></li>
                    <li class="list-group-item">Номер телефона : <span class="fw-bold">{{contact.number}}</span></li>
                </ul>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <router-link to="/" class="btn btn-success my-2"><i class="fa fa-arrow-right-circle-left"></i> Назад
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ContactService } from '@/services/Service';

export default {
    name: "ContactsMore",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            contact: {},
            errorMsg: null
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
        }
        catch (error) {
            this.errorMsg = error;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>