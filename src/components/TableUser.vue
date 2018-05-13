<template>

        <tbody>
                <template v-for="user in users">
                    <single-row :user="user" @editUser="editUser"></single-row>
                </template>

                <b-modal v-model="show"
                         title="Modal Variants"
                         :header-bg-variant="headerBgVariant"
                         :header-text-variant="headerTextVariant"
                         :body-bg-variant="bodyBgVariant"
                         :body-text-variant="bodyTextVariant"
                         :footer-bg-variant="footerBgVariant"
                         :footer-text-variant="footerTextVariant">

                    <b-container>

                        <form id="app" @submit="editForm">

                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                                <ul>
                                    <li v-for="error in errors">{{ error }}</li>
                                </ul>
                            </p>


                        <b-row class="mb-1">
                            <b-col cols="2">Name</b-col>
                            <b-col> <input type="text" v-model="user.name">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Age</b-col>
                            <b-col> <input type="number" v-model="user.age" min="0">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Mobile</b-col>
                            <b-col> <input type="number" v-model="user.mobile" size="10">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Image</b-col>
                            <b-col> <input type="text" v-model="user.image">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2"></b-col>
                            <b-col> <input class="btn-info" type="submit" value="Submit"> </b-col>
                        </b-row>

                        </form>

                    </b-container>

                    <div slot="modal-footer" class="w-100">
                        <p class="float-left">Modal Footer Content</p>
                        <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
                            Close
                        </b-btn>
                    </div>
                </b-modal>
        </tbody>

</template>



<script>

    import SingleRow from './SingleRow';
    import {mapActions} from 'vuex';
    export default {
        name:"SingleUser",
        data(){
            return {
                show: false,
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                bodyBgVariant: 'light',
                bodyTextVariant: 'dark',
                footerBgVariant: 'warning',
                footerTextVariant: 'dark',
                user:{id:"",name:"",age:"",image:"",mobile:""},
                errors:[]
            }
        },
        props:['users'],
        components:{
            SingleRow
        },
        methods:{
            ...mapActions(['editUserAction']),
            editUser:function (user) {
                this.user.id = user.id;
                this.user.name = user.name;
                this.user.age = user.age;
                this.user.image = user.image;
                this.user.mobile = user.mobile;
                this.show = !this.show;
            },
            editForm:function (){

                if(this.user.name == null || this.user.name == ""){
                    this.errors.push("Invalid User Name");
                }else if(this.user.age == null || this.user.age == ""){
                    this.errors.push("Invalid User Age");
                }else if(this.user.mobile == null || this.user.mobile == ""){
                    this.errors.push("Invalid User Mobile");
                }else if(this.user.image == null || this.user.image == ""){
                    this.errors.push("Invalid User Image");
                }else{
                    this.editUserAction(this.user);
                    alert("successfully updated data");
                    this.show = !this.show;
                }
            }
        }
    }
</script>