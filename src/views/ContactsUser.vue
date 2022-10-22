<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text success fw-bold">Управление пользователями
                    <router-link to="/contacts/add" class="btn btn-success btn-sm">
                        <i class="fa fa-plus-square" aria-hidden="true"></i> Добавить
                    </router-link>
                </p>
                <br />
                <br />
                <form>
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Поиск" />
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-outline-dark" value="Поиск">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- анимация загрузки -->
    <!-- <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Prealoder />
                </div>
            </div>
        </div>
    </div> -->

    <!-- Для ошибки -->
    <div v-if="!loading && errorMsg">
        <div class="conteiner mt-3">
            <div class="row">
                <div class="col">
                    <div class="h3 text-danger">{{errorMsg}}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="contacts.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="contact of contacts" :key="contact">
                <div class="card my-2 list-group-item-secondary">
                    <div class="card__body">
                        <div class="row align-items-center ">
                            <div class="col-sm-4">
                                <img :src="contact.photo" class="contact-img">
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-group">
                                    <li class="list-group-item">Фамилия : <span
                                            class="fw-bold">{{contact.firstname}}</span></li>
                                    <li class="list-group-item">Имя : <span
                                            class="fw-bold">{{contact.middlename}}</span></li>
                                    <li class="list-group-item">Отчество : <span
                                            class="fw-bold">{{contact.lastname}}</span></li>
                                    <li class="list-group-item">Дата рождения : <span
                                            class="fw-bold">{{contact.bday}}</span></li>
                                    <li class="list-group-item">Номер : <span class="fw-bold">{{contact.number}}</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- p-0 убирает паддинг -->

                            <div class="col-sm-1 p-0d-flex flex-column justify-content-center align-item-center">
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-2">
                                    <i class="fa fa-reply"></i>
                                </router-link>
                                <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-2">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-2">
                                    <i class="fa fa-pencil"></i>
                                </router-link>
                                <button class="btn btn-danger my-2" @click="clickDeleteContact(contact.id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactService } from '@/services/Service';
export default {
    name: "ContactsUser",
    data: function () {
        return {
            contacts: [], //дата
            errorMsg: null //ошибки сервера
        }
    },
    created: async function () {
        try {
            let response = await ContactService.getAllContacts();
            this.contacts = response.data;
        }
        catch (error) {
            this.errorMsg = error;
        }
    },
    methods: {
        clickDeleteContact: async function (contactId) {
            try {
                let response = await ContactService.deleteContact(contactId);
                if (response) {
                    let response = await ContactService.getAllContacts();
                    this.contacts = response.data;
                }
            }
            catch (error) {
                this.errorMsg - error;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>