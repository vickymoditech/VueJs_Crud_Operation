<template>
  <div class="home">

      <input type="button" v-on:click='showModel' value="New Entry" class="btn-info"/>
      <br>
      <br>

      <all-users></all-users>

      <b-modal v-model="show"
               title="New User Add"
               :header-bg-variant="headerBgVariant"
               :header-text-variant="headerTextVariant"
               :body-bg-variant="bodyBgVariant"
               :body-text-variant="bodyTextVariant"
               :footer-bg-variant="footerBgVariant"
               :footer-text-variant="footerTextVariant">

          <b-container>

              <form id="app" @submit="newForm">

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

  </div>
</template>

<script>
// @ is an alias to /src
import AllUsers from '@/components/AllUsers.vue'
import {mapActions} from 'vuex'
var _ = require('lodash');

export default {
  name: 'home',
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
    components:{
      AllUsers
    },
    methods:{
        ...mapActions(['newUserAction']),
        newForm:function (){
            var check = true;
            if(this.user.name == null || this.user.name == ""){
                this.errors.push("Invalid User Name");
                check = false;
            }
            if(this.user.age == null || this.user.age == ""){
                this.errors.push("Invalid User Age");
                check = false;
            }
            if(this.user.mobile == null || this.user.mobile == ""){
                this.errors.push("Invalid User Mobile");
                check = false;
            }
            if(this.user.image == null || this.user.image == ""){
                this.errors.push("Invalid User Image");
                check = false;
            }
            if(check){

                var data = _.clone(this.user);

                this.newUserAction(data);
                //alert("successfully Add New User");
                this.show = !this.show;
            }
        },
        clearModel:function () {
            this.user.id = "";
            this.user.name = "";
            this.user.age = "";
            this.user.mobile = "";
            this.user.image = "";
            this.errors = [];
        },
        showModel:function () {
            this.clearModel();
            this.show = !this.show;
        }
    }
}
</script>
