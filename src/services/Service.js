import axios from "axios";
/* eslint-disable */
export class ContactService {

    //Дом

    static serverURL = `http://localhost:9000`;

    //Все

    static getAllContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    //Просмотр профиля

    static getContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }

    //Создание

    static createContact(contact){
        let dataURL = `${this.serverURL}/contacts/`;
        return axios.post(dataURL, contact);
    }

    //Изменение

    static updateContact(contact, contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataURL, contact);
    }

    //Удаление

    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataURL);
    }

}