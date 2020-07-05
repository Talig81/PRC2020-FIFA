<template>
  <v-container>
    <v-row>
      <div
        :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5.5vh',color:'white',marginLeft:'0.5%'}"
      >
        <b>
          <p :style="{ marginLeft : '5%',marginTop:'4%'}">Overview of my Teams</p>
        </b>

        <v-btn
          small
          @click="create()"
          :style="{position:'absolute', marginTop :' -3%', marginLeft : '50%'}"
        >Create Team</v-btn>
      </div>
    </v-row>

    <v-row :style="{width:'100%',marginTop:'3vh',marginLeft:'0.25%'}">
      <div :style="{width:'100%'}">
  <v-card>
    <v-card-title>
      My teams
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
        <v-icon
          small
          class="mr-2"
          @click="deletion(item)"
        >
          mdi-delete
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
    source: String
  },
  mounted: function() {
    const url1 = "http://45.76.32.59:5011/users/teste";
    let config1 = {
      headers: {
        Authorization: "Bearer " + this.getToken
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
        this.items=res.data
    });
    });
  },
  computed: {
    ...mapGetters(["getToken"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Player" : "Edit Player";
       
    },
  
    methods: {
     create () {
        this.$router.push({ name: "criar_equipas"});
    },
    deletion(){
      // falta chamar axios para a rota que temos de criar no backend 
       this.$router.push({
        name: "teams",
      });
    },
    consult(item) {
      this.$router.push({
        name: "consultar_equipa",
        params: { name: item.name }
      });
    }
  },
    data: () => ({
      id:'',
      drawer: null,
      items:[],
      headers: [
        {
          text: "Team Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Platform", value: "platform" },
        { text: "Atacking Rating", value: "atck" },
        { text: "Defensive Rating", value: "defense" },
        { text: "Price", value: "price" },
        { text: "Actions", value: "actions", sortable: false }
      ],
    }),
     components: {
  }
}
}
</script>