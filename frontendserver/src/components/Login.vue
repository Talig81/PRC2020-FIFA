<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                id="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="text"
              />
              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                name="password"
                type="password"
                prepend-icon="mdi-lock"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit()" v-on:keyup.enter="onEnter" color="purple"
              >Login</v-btn
            >
            <v-spacer />
            <v-btn to="/register">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations,mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    ...mapMutations(["setToken"]),
    ...mapGetters(["loggedIn"]),
    submit() {
      
      axios
        .post("http://45.76.32.59:5011/users/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          switch (response.status) {
            case 200:
              this.setToken(response.data.token);
 

              this.$router.push("/asdfasdf");
              break;
            default:
              this.$router.push("/login");
          }
        });
    }
  }
};
</script>