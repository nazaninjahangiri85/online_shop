<template>
  <v-card
  class="mx-auto"
  
>
  <v-container fluid>
    <v-row dense dir="rtl" class="text-center">
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="3"
      >
        <v-card
        class="mx-4 mb-4 pa-2"
        height="90%"
                rounded="lg"
        >
          <v-img
                 class="ma-2"
            :src="card.image"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="60%"
          >
           
          </v-img>
    <div class="title text-truncate">{{card.title}}</div>
    <div class="title text-truncate mt-4" style="color: teal">{{card.price * 50000}} تومان</div>

    

    <v-btn class="mt-8 mb-2" color="orange">
      خرید
    </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-card>
<Alert :activator="activator" :msg="msg" colorP="green"/>
</template>

<script>
import axios from "axios";
import Alert from '@/components/Alert.vue'
export default {
  components:{
    Alert
  },
  data() {
    return {
      collapseOnScroll: true,
      title: "Vue-2 Appssssssss",
      cards: null,
      activator: false,
      msg: ""
  
    };
  },
  mounted() {
   
   this.getAndShowCards()
  },
  
   methods: {
    getAndShowCards() {
      axios.get('https://fakestoreapi.com/products').then((response) => {
        console.log(response.data);
        this.activator = true
        this.msg = "داده ها با موفقیت  بارگیری شدند"
        this.cards = response.data;
      })
    }
  }
}
</script>

