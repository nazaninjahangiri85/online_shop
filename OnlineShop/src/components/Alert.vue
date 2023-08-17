<template>
    <div class="text-center">
      <v-btn
        color="red-darken-2"
        @click="snackbar = true"
      >
        Open Snackbar
      </v-btn>
  
      <v-snackbar
        v-model="snackbar"
        :color="color"
        multi-line
      >
        {{ text }}
  
        <template v-slot:actions>
          <v-btn
            color="red"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
  <script>
  export default {

    props:{ 
     activator: {
        type: Boolean,
     default: false
    },
    msg: {
        type: String,
        default: ""
    },
    colorP: {
        type : String,
        default: "white"
    }
},
    data: () => ({
      snackbar: false,
      text: `I am a multi-line snackbar.\nI can have more than one line. This is another line that is quite long.`,
      color: "white"
    }),
    watch:{
      activator (){
        this.snackbar = this.activator
        this.text = this.msg
        this.color = this.colorP
      }
    },
    mounted() {
        this.snackbar = this.activator
    }
  }
</script>