<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="grey" dark flat>
            <v-toolbar-title>Registar</v-toolbar-title>
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
                v-model="name"
                id="name"
                label="Name"
                name="Name"
                prepend-icon="mdi-account"
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
            <v-btn @click="submit()" v-on:keyup.enter="onEnter" color="dark">Register</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
      ...mapMutations(["setToken"]),
    submit() {
      axios
        .post("http://45.76.32.59:5011/users/register", {
          email: this.email,
          password: this.password,
          name: this.name
        })
        .then(response => {
          switch (response.status) {
            case 200:
              this.setToken(response.data.token);
              this.$router.push("/");
              break;
            default:
              this.$router.push("/register");
          }
        });
    }
  }
};
</script>