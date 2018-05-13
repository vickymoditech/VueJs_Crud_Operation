import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apihost} from './Api'
import example from "./Api";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      users:[],
      loader:false
  },
  actions: {

    async initaction({commit}){
        await axios.get(apihost+'/api/users').then(function (response) {
            commit('initmutation', response.data);
            console.log("init action");
        }).catch(function (error) {
            console.log(error);
        });
    },
      async deleteUserAction({commit},id){
          //debugger;
          await axios({
              method: 'delete',
              url: apihost+'/api/users',
              data: {
                  id:id
              }
          }).then(function (response) {
              commit('deleteUserMutation',id);
          }).catch(function (error) {
              console.log(error);
          });
      },
      async editUserAction({commit},user){

          await axios({
              method: 'put',
              url: apihost+'/api/users',
              data: {
                  id:user.id,
                  name:user.name,
                  age:user.age,
                  mobile:user.mobile,
                  image:user.image
              }
          }).then(function (response) {
              commit('editUserMutation',user);
          }).catch(function (error) {
              console.log(error);
          });
      },
      async newUserAction({commit},user){

          await axios({
              method: 'post',
              url: apihost+'/api/users',
              data: {
                  id:example.getGuid(),
                  name:user.name,
                  age:user.age,
                  mobile:user.mobile,
                  image:user.image
              }
          }).then(function (response) {
              commit('newUserMutation',user);
          }).catch(function (error) {
              console.log(error);
          });
      }
  },
  mutations: {

      initmutation(state,users){
          state.loader = true;
          state.users = users;
      },
      deleteUserMutation(state,id){
          //debugger;
          let index = state.users.findIndex((data) => data.id == id);
          state.users.splice(index, 1);
      },
      editUserMutation(state,user){

          var olduser = state.users.find((data) => data.id == user.id);
          olduser.name = user.name;
          olduser.age = user.age;
          olduser.mobile = user.mobile;
          olduser.image = user.image;

      },
      newUserMutation(state,user){

          state.users.push(user);

      }

  }
})



