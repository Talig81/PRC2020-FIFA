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
        :items="participating_teams"
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
        <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%'}">
         <p v-if="state==1" :style="{marginLeft:'2%',marginTop:'1%'}">  Current State : Open </p>
          <p v-else :style="{marginLeft:'2%',marginTop:'1%'}">  Current State : Closed </p>
    </div>
    </v-row>
   
     <v-row>
       <v-row  v-if="state=1">
        <v-col class="d-flex" cols="6" sm="3">
          <v-select
            :style="{marginLeft : '4%'}"
            :items="teams"
            label="Select a team "
            solo
            v-model="selected_team"
          ></v-select>
        </v-col>
         <v-col class="d-flex" cols="6" sm="6">
              <v-btn
                  color="primary"
                  :style="{marginLeft : '50%'}"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                  @click="participate"
                >Participate</v-btn>
          </v-col>
      </v-row>
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
      state:'',
      selected_team:'',
      teams_id: [],
      participating:[],
      participating_teams:[],
       headers: [
        { text: "Name", value: "name" },
        { text: "Platform", value: "platform" },
        { text: "Price", value: "price" },
        { text: "Atack Rating", value: "atack" },
        { text: "Defense Rating", value: "defense" },
      ],
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
            this.teams_id = res.data.map((obj)=>obj._id)
            console.log(this.teams_id)
        });

    });
  },
   computed: {
      ...mapGetters(["getToken"])
    },
   created() {
            this.league = this.$route.params.name;
            let config = {
            headers: {
              Authorization:
                "Bearer " +
                this.getToken
            }
          };
            const url2 = "http://localhost:5011/league/list/"+this.league
            axios.get(url2, config).then(res => {
                  this.state = res.data[0].state
                  this.participating = res.data[0].teams
                          // agora tenho o id das equipas tenho de ir buscar as infos das equipas ao backend
         console.log("fora"+this.participating)
         this.participating.map((id)=>{
         console.log("here")
          // fazer pedido ao backend para cada team e dar append no array participating_teams
           const url3 = "http://localhost:5011/teams/getById/"+id
            axios.get(url3, config).then(res => {
                 this.participating_teams.push({name:res.data[0].name,platform:res.data[0].platform,price:res.data[0].price,atack:res.data[0].atck,defense:res.data[0].defense})
                 console.log(this.participating_teams)
        });
        });

        })

        },

  methods: {
      participate(){
      let config = {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        };
      if(this.selected_team){
        // tenho a team selecionada preciso do ID
        let team_id = ''
        team_id = this.teams_id[this.teams.indexOf(this.selected_team)]
        console.log(team_id)
         axios.post('http://localhost:5011/league/participate/'+this.league+'/'+team_id,config)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log("Erro ao adicionar a equipa" + error)
                });
        this.$router.push({
        name: "leagueList",
      });
      }
      else {
        console.log("select a team")
      }
     
    }
  }
};
</script>
