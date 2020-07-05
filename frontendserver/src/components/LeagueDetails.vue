<template>
<div id="app">
      <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%'}">
        <b><p :style="{ marginLeft : '5%',marginTop:'4%'}">Details of {{this.league}}</p></b>
    </div>

  </v-row>
  <v-app id="inspire">
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
    >
        <v-list-item-content>
          <div class="overline mb-4">Game Resume</div>
          <v-list-item-title class="headline mb-1">Teams1 vs Team2</v-list-item-title>
          <v-list-item-subtitle>0-0</v-list-item-subtitle>
        </v-list-item-content>
    </v-card>
  </v-app>
</div>
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
