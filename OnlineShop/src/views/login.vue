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
// import { computed } from 'vue';

   export default {
    data()  {
     return {
        username : null,
        UsernameValidFormat: false,
     }},
     computed: {
      UsernameValidation (){
        if (this.username?.length>=8){
       return "valid"
      }else{
        return "invalid"
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