<template>
<div>
<div :style="{marginBottom:'-20%',minHeight:'100%'}">
      <v-btn 
        v-if="this.logged_in==0" 
          icon :style="{marginLeft:'150vh',marginTop:'-9vh',postion:fixed,zIndex:999,color:'white'}"
           @click="showLogin"
      >
        <v-icon>mdi-login</v-icon>
        Login
      </v-btn>

      <v-btn  
        v-if="this.logged_in==0" 
          icon  :style="{marginLeft:'165vh',marginTop:'-15vh',postion:absolute,zIndex:999,color:'white'}"
           @click="showRegister"
      >
        <v-icon>mdi-pencil-plus-outline</v-icon>
        Register
      </v-btn>
    </div>
    <v-navigation-drawer
      dark
      clipped
      permanent
    >
      <v-list >
        <v-list-item v-for="([icon, text,toGo], i) in items" :to="toGo" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<style>
.v-navigation-drawer__content{
  min-height: 220.5vh !important
}
</style>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    items: [
      ["mdi-home", "Home","/"],
      ["mdi-home", "Home","/"],
      ["mdi-account", "Profile","/profile"],
      ["mdi-soccer", "My Teams","/teams"],
      ["mdi-account-multiple-plus", "Players","/players"],
    ],
     logged_in : 0
  }),
   methods: {
     loggedIn(){
       this.logged_in = 1;
     },
      showLogin() {
        this.$router.push({ name: "login"});
    },
    showRegister() {
        this.$router.push({ name: "registar"});
    }
    },
    computed: {

    ...mapGetters(["getToken"])
  },
    mounted: function() {
    const url = "http://45.76.32.59:5011/users/teste"
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
      }
    };
    axios.get(url, config).then(res => {
      console.log(res.data);
      this.name = res.data.user.nome;
      this.email = res.data.user.email;
      this.user = res.data.user;
      this.id = res.data.user.id;
      this.loggedIn();
      
    });
  }
};
</script>