<template>
    <v-card class="mx-auto pa-4 mt-4" width="100%" max-width="500" dir="rtl">
      <div class="text-center mb-4">
        <span style="color: orangered"> ورود به حساب کاربری </span>
      </div>
      <v-form dir="rtl" @submit.prevent="">
        <v-text-field 
        v-model="username"
          :class=" UsernameValidation "
          class="mb-4"
          clearable 
          label="نام کاربری یا شماره همراه"
          type="text"
          dir="ltr"
        ></v-text-field>
        <v-text-field
          class="mb-4"
          clearable
          label="رمز ورود"
          type="password"
          dir="ltr"
        ></v-text-field>
        <v-btn
          disabled
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          @click="authentication"
        >
          ورود
        </v-btn>
      </v-form>
      <v-radio-group class="mt-4 text-center" color="success">
        <template v-slot:label>
          <div>انتخاب <strong>نحوه ورود به حساب کاربری:</strong></div>
        </template>
        <v-radio value="شماره تلفن همراه">
          <template v-slot:label>
            <div><strong >شماره تلفن همراه</strong></div>
          </template>
        </v-radio>
        <v-radio value="نام کاربری">
          <template v-slot:label>
            <div><strong>نام کاربری</strong></div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card>
  
  </template>
<script>
   import { mapState, mapStores } from "pinia";
   import { useLoginStore } from "@/stores";

   export default {
    data()  {
     return {
        username : "",
        password : "",
        UsernameValidFormat: false,
     }},
    computed: {
      ...mapStores(useLoginStore),
      // ...mapState(loginStore, ["token"]),
      UsernameValidation () {
        if (this.username.length>=8){
        return "valid"
        } else {
          return "invalid"
        }
      }
    },
    mounted() {
    //this.authentication()
    },
     methods: {
      authentication() {
        if(this.userName.length > 0 && this.password.length > 0) {
          //if the backend response is 200
        const token = "njkn54jgdjgdjfh8875"
        this.loginStore.login(token)
        //  loginStore().login("dsfdgfgjhjkjlklkj") 
        console.log("***********", this.loginStore.isAuthenticated);
        }
      } 

     }
    
}
</script>
<style>
.valid{
    color: green;
}
.invalid{
    color: red;
}
</style>