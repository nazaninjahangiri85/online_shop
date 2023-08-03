import { defineStore, createPinia } from 'pinia'
import axios from "axios"

export const useLoginStore = defineStore('login', {
    state: () => ({
      count: 0,
      isAuthenticated: false,
      token: '',
      successLoginAlert: false
    }),

    actions: {
      // since we rely on `this`, we cannot use an arrow function
      onStart() {
        console.log("start store", localStorage.getItem("token"));
        let token = localStorage.getItem("token")
        if (token) {
            this.isAuthenticated = true
            this.token = token
            this.successLoginAlert = false
            axios.defaults.headers.common['Authorization'] = "Token " + token
        } else {
            this.isAuthenticated = false
            this.token = ""
            this.successLoginAlert = false
            axios.defaults.headers.common['Authorization'] = ""
        }
      },

      login(token) {
         // this should dynamic by get response of auth from API
        if (token) {
            this.isAuthenticated = true
            this.token = token
            localStorage.setItem('token', token)
            this.successLoginAlert = true
            axios.defaults.headers.common['Authorization'] = "Token " + token
        } else { // some times event by hackers
            this.isAuthenticated = false
            this.token = ''
            localStorage.removeItem('token')
            this.successLoginAlert = false
            axios.defaults.headers.common['Authorization'] = ""
        }
      },

      logout() {
        this.isAuthenticated = false
        this.token = ''
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('token')
        this.successLoginAlert = false
      },       
    },
  })

const store = createPinia()

export default store