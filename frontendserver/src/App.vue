<template>
  <v-app class="theme">
    <v-content class="colored">
      <v-app-bar app color="#0B4F6C" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>FIFA Companion</v-toolbar-title>

      </v-app-bar>
      <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
        <v-row no-gutters>
          <v-col cols="2">
            <NavigationDrawer />
          </v-col>
          <v-col cols="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
      <v-footer color="#0B4F6C" app>
        <span class="white--text" :style="{marginLeft:'30vh'}">&copy;Produced by Tiago Baptista and Manuel Moreno</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    NavigationDrawer
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
      this.logged_in=1
    });

  }
};
</script>
