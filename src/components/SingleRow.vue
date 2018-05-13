<template>
    <tr>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.mobile}}</td>
        <td>{{user.image}}</td>
        <td> <button  v-on:click="editUser()" class="btn-info"> EDIT </button> </td>
        <td> <button v-on:click="deleteUser()" class="btn-danger"> DELETE </button> </td>

    </tr>
</template>

<script>
    import {mapActions} from 'vuex';
    //import example from "../Api";
    export default {
        name:"SingleRow",
        data(){
            return {

            }
        },
        props:['user'],
        methods:{
            ...mapActions(['deleteUserAction']),
            editUser:function () {

                this.$emit("editUser",this.user);

            },
            deleteUser:function () {

                var deleteStatus = confirm("Are you sure to delete that Record");
                if(deleteStatus){
                    this.deleteUserAction(this.user.id);
                }

            }
        }
    }
</script>