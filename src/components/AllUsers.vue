<template>
    <div>
        <!--<b-table hover :items="users"></b-table>-->
        <table class="table table-dark table-striped" v-if="loader">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <table-user :users="users"></table-user>
        </table>
        <template v-else>
            <div id="app">
                <rotate-square2></rotate-square2>
            </div>
        </template>
    </div>
</template>


<script>
    import {mapState} from 'vuex'
    import TableUser from './TableUser';
    import {RotateSquare2} from 'vue-loading-spinner'

    export default {
        components: {TableUser,RotateSquare2},
        data(){
            return {

            }
        },
        computed:{
            users:function () {
                var users = this.$store.state.users;
                if(users.length > 0){
                    console.log("user state will be change that time call here");
                }else{
                    console.log("first time");
                }
                return users;
            },
            loader:function () {
                return this.$store.state.loader;
            }
        }
    }
</script>