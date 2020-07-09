<template >
<div id="app">
      <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%',marginBottom:'3%'}">
        <p :style="{ marginLeft : '5%',marginTop:'4%'}">Details of <b>{{this.league}}</b></p>
    </div>

  </v-row>

<ul>
   <h2>Matches</h2>
    <div :style="{marginBottom:'1%'}" v-for="item in games" :key="item" >
    <center> <p :style="{color:'white',backgroundColor:'#031927'}"> <b>{{item.team1}}</b>   {{item.goals1}}   -   {{item.goals2}}  <b>{{item.team2}}</b>  </p></center>
    </div>
</ul>

<ul>
   <h2>Points</h2>
    <div :style="{marginBottom:'1%',backgroundColor:'#031927'}" v-for="item in points" :key="item" >
     
    <center> <p :style="{color:'white',backgroundColor:'#031927'}"> <b>{{item.name}}</b>    -   {{item.points}} </p></center>
    </div>
</ul>
</div>

</template>

<script>

import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
      league: '',
      teams:[],
      teste:[{team1:'ola',team2:'hello'},{team1:'cenas',team2:'pop'}],
      id:'',
      state:'',
      selected_team:'',
      teams_id: [],
      participating:[],
      participating_teams:[],
      points:[],
      games:[],
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
                   const url4 = "http://localhost:5011/games/lista/"+this.league
            axios.get(url4, config).then(res => {
                  this.games = res.data
                  console.log(this.games)
                  this.games.map((element)=>{
                    var flag=0;
                    if(element.goals1 > element.goals2){
                        console.log("ganha a team 1")
                        this.points.map((team)=>{
                          if(team.name == element.team1){
                            flag=1
                            team.points = team.points + 3
                          }
                          if(team.name == element.team2){
                            flag=1
                            team.points = team.points + 0
                          }
                        })
                        if(flag==0){
                          var team =' '
                          var team2 = ''
                          team = element.team1
                          team2 = element.team2
                          console.log(team)
                          this.points.push({name:team,points:3})
                          this.points.push({name:team2,points:0})
                        }
                    }

                    if(element.goals1 == element.goals2){
                        console.log("empate")
                         this.points.map((team)=>{
                          if(team.name == element.team1){
                            flag=1
                            team.points = team.points + 1
                          }
                          if(team.name == element.team2){
                            flag=1
                            team.points = team.points + 1
                          }
                        })
                        if(flag==0){
                          var team1 =' '
                          var team21 = ''
                          team = element.team1
                          team21 = element.team2
                          console.log(team)
                          this.points.push({name:team1,points:1})
                          this.points.push({name:team21,points:1})
                        }
                    }
                    if(element.goals1 < element.goals2){
                        console.log("ganha a team 2")
                                                console.log("ganha a team 1")
                        this.points.map((team)=>{
                          if(team.name == element.team2){
                            flag=1
                            team.points = team.points + 3
                          }
                          if(team.name == element.team1){
                            flag=1
                            team.points = team.points + 0
                          }
                        })
                        if(flag==0){
                          var team11 =' '
                          var team22 = ''
                          team11 = element.team1
                          team22 = element.team2
                          console.log(team)
                          this.points.push({name:team11,points:0})
                          this.points.push({name:team22,points:3})
                        }
                    }
                    
                  })
                
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
