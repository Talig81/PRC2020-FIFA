<template>
  <v-container class="grey lighten-5 pa-0" grid-list-md fluid>
    <v-row no-gutters>
      <v-col>
        <v-card class="mx-auto" max-width="600" tile>
          <v-img class="pa-4" height="100%" src="/logo.png">
            <v-row align="center" class="fill-height">
              <v-col align-content="center" class="pa-0" cols="12">
                  <v-avatar class="profile align-center" color="grey" size="150" roundtile>
                      <v-img v-if="hasAvatar(user)" :src="auxiliar(user)"></v-img>
                      <v-img v-else src="../assets/logo.png" to="/profile" link></v-img>
                    </v-avatar>
              </v-col>
              <v-card flat class="text-xs-center ma-3">
                <v-list-item>
                  <v-list-item-title class="headline">{{name}} </v-list-item-title>
                </v-list-item>
                <div class="pa-1">
                  <v-icon>mdi-account-card-details</v-icon>
                  <span>{{id}}</span>
                </div>

                <div class="pa-1">
                  <v-icon>mdi-email</v-icon>
                  <span>{{email}}</span>
                </div>

           

                <div class="pa-1">
                  <v-icon>mdi-comment-text-outline</v-icon>
                  <span>Biografia</span>
                  <div align="center">
                      <v-btn
                          color="success"
                          @click="chooseFile()"
                          class="font-weight-light"
                        >Upload Avatar</v-btn>
                        <input
                          class="mx-0 font-weight-light"
                          type="file"
                          accept="image/*"
                          @change="uploadImage($event)"
                          id="fileUpload"
                          hidden
                        />
                  </div>
                </div>
              </v-card>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>


import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: {

    ...mapGetters(["getToken"])
  },
  data: () => ({
    name: "",
    email: "",
    avatar: "",
    user: null
    
  }),
  
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
      this.src = "http://45.76.32.59:5011/uploads/" + res.data.user.id + "/avatar" + res.data.user.avatar
      
    });

    
  },
  methods: {
    hasAvatar(i) {
      if (i.avatar == null || i.avatar === undefined) return false;
      else return true;
    },
    auxiliar(i) {
      return (
        "http://45.76.32.59:5011/uploads/" +
        i.id +
        "/avatar/" +
        i.avatar
      );
    },
    uploadImage(event) {
      const url = "http://45.76.32.59:5011/users/image";
      let data = new FormData();
      data.append("image", event.target.files[0]);
      let config = {
        headers: {
          "Content-Type": "image/*",
          Authorization: "Bearer " + this.getToken
        }
      };
      axios.post(url, data, config);
    },
     chooseFile() {
      document.getElementById("fileUpload").click();
    },
  }
};
</script>