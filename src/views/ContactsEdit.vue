<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Изменить контакт</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illum nemo
                    aspernatur. Quidem asperiores a possimus quaerat hic assumenda repudiandae ullam eum unde
                    praesentium numquam dolorum porro ipsa, temporibus ab?</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-3">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                        <input v-model="contact.firstname" type="text" class="form-control" placeholder="Фамилия">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.middlename" type="text" class="form-control" placeholder="Имя">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.lastname" type="text" class="form-control" placeholder="Отчество">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.bday" type="text" class="form-control" placeholder="Дата рождения">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.email" type="text" class="form-control" placeholder="Электронная почта">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.number" type="text" class="form-control" placeholder="Номер телефона">
                    </div>
                    <div class="mb-2">
                        <input v-model="contact.photo" type="text" class="form-control" placeholder="URL фото">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Обновить">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.photo" class="contact-img">
            </div>
        </div>
    </div>

</template>

<script>
import { ContactService } from '@/services/Service';
export default {
    name: "ContactsEdit",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            contact: {
                firstname: '',
                middlename: '',
                lastname: '',
                bday: '',
                email: '',
                photo: '',
                number: '',

            },
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
    },
    methods : {
        updateSubmit : async function (){
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if(response){
                    return this.$router.push('/');//если все ок, перекинет
                }
                else {
                    return this.$router.push(`/contact/edit/${this.contactId}`)//остаемся на странице
                }
            }
            catch (error){
                console.log(error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>