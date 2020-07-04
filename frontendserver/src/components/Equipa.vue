<template>
<v-container>
  <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%'}">
        <p :style="{ marginLeft : '5%',marginTop:'2%'}"><b>Team Name : </b>{{this.team_name}}</p>
    </div>

  </v-row>

  <v-row :style="{width:'100%',marginTop:'3vh',marginLeft:'0.25%'}">
      <div :style="{width:'100%'}">
  <v-card>
    <v-card-title>
      Players
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
        <v-icon
          small
          class="mr-2"
          @click="consult(item)"
        >
          mdi-eye
        </v-icon>
      </template>
      <template v-slot:no-data>
       <p :style="{marginTop:'2vh'}"> No data to show</p>
      </template></v-data-table>
    </v-card>
</div>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
    props: {
      source: String,
    },
     data: () => ({
      id : '',
      team_name: '',
      items : [],
      headers: [
        {
          text: "Player Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Actions", value: "actions", sortable: false }
      ],
    }),
    created() {
            this.team_name = this.$route.params.name;
            
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
            const url = "http://localhost:5011/teams/personalTeam/players/"+this.id+"/"+this.team_name
            console.log(url)
            let config = {
            headers: {
                Authorization:
                "Bearer " +
                this.getToken
            }
            };
            axios.get(url, config).then(res => {
                console.log("montado2" + res.data[0].players);
                let items_aux= []
                items_aux = res.data[0].players
                for(let i=0;i< items_aux.length;i++){
                  this.items.push({name:items_aux[i][0].name})
                  console.log(items_aux[i][0].name)
                }
                console.log("items",this.items)
            });
        });
  },
    computed: {
      ...mapGetters(["getToken"])
    },
    methods: {
    consult(item) {
      this.$router.push({
        name: "consultar_jogador",
        params: { player: item.name }
      });
    }
  }
}
</script>