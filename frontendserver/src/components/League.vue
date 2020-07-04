<template>
  <v-container>
    <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%'}">
        <b><p :style="{ marginLeft : '5%',marginTop:'4%'}">Overview of {{this.league}}</p></b>
    </div>

  </v-row>


    <v-card>
      <v-card-title>
        Teams Participating
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="15"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-eye</v-icon>
        </template>
        <template v-slot:no-data>
          <p>Empty</p>
        </template>
      </v-data-table>
    </v-card>


     <v-row>
        <p> Current State : </p>
    </v-row>
      <v-row>
        Eventualmente metemos resultados ??
    </v-row>
   <v-row>
    <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="teams"
          label="Select a team "
          solo
          v-model="selected_console"
        ></v-select>
        
      </v-col>
  </v-row>
     <v-row>
       <div v-if="state=1" >
        <v-col class="d-flex" cols="6" sm="3">
              <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >Participate</v-btn>
            
          </v-col>
       </div>
  </v-row>

  </v-container>
</template>

<script>

import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
      league: '',
      teams:[],
      id:'',
      state:''
    }),
  components: {

  },
    mounted: function () {
    const url1 = "http://45.76.32.59:5011/users/teste"
    let config1 = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
      }
    };
    axios.get(url1, config1).then(res => {
        this.id = res.data.user.id;
         const url = "http://localhost:5011/teams/personalTeam/"+this.id
    let config = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
      }
    };
    axios.get(url, config).then(res => {
        this.teams = res.data.map((obj)=>obj.name)
        console.log(this.teams)
    });
    });
  },
   computed: {
      ...mapGetters(["getToken"])
    },
   created() {
            this.league = this.$route.params.name;
        },

  methods: {}
};
</script>
