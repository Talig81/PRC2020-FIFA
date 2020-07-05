<template>
<v-container>
  <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5vh',color:'white'}">
        <b><p :style="{ marginLeft : '5%',marginTop:'0.7%'}">Create a Team</p></b>
    </div>
  </v-row>
  <v-row>
    <v-col class="d-flex" cols="6" sm="3">
        <v-select
          :items="consoles"
          label="Select platform"
          solo
          v-model="selected_console"
        ></v-select>
      </v-col>
      <v-col align="center"> 
        <span> Logo </span>
        <div>
          <img src="../assets/logo.png"/>
    <span class="border border-dark"></span>
    <span class="border-top border-dark"></span>
    <span class="border-right border-dark"></span>
    <span class="border-bottom border-dark"></span>
    <span class="border-left border-dark"></span>
  </div>
        
      </v-col>
  </v-row>
  <v-row :style="{width:'20%',marginLeft:'0.5vh'}">
     <v-text-field label="Team name" v-model="team_name" name="team_name" :rules="rules" hide-details="auto"></v-text-field>
  </v-row>
  <v-row :style="{width:'100%',marginTop:'3vh'}">
      <div :style="{width:'100%'}">
<v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Add players</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >Add Player</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="8">
                     <v-text-field
                      v-model="editedItem.name"
                      id="editedItem.name"
                      label="Player"
                      name="editedItem.name"
                      prepend-icon="mdi-soccer"
                      type="text"
                    />
                   </v-col>

                  
                <div class="input-group-append">
                    <v-btn  :style="{marginLeft:'4vh'}"  class="btn btn-primary" @click="searchPlayer" @keyup.enter="searchProducts" type="button">
                        Search
                    </v-btn>
                </div>
                <div :style="{marginTop:'5vh'}">
                   <v-overflow-btn
                  class="my-2"
                  :items="dropdown_players"
                  label="Search Results"
                  editable
                  item-value="player"
                  v-model="editedItem.name"
                  
                  ></v-overflow-btn>
                </div>
                 
                </v-row>

              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <p> Please insert a player</p>
    </template>
  </v-data-table>
  </div>
  </v-row>
  
  <v-row>
     <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5vh',color:'white'}">
    <p :style="{marginLeft:'2%',marginTop:'2%'}"> Total price : {{this.total}}</p>
    <div v-if="this.count>0">
       <p :style="{marginLeft:'2%',marginTop:'2%'}"> Defensive Rating : {{this.defes/this.count}}</p>
      <p :style="{marginLeft:'2%',marginTop:'2%'}"> Ofensive Rating : {{this.atc/this.count}}</p>
    </div>
    <div v-else>
       <p :style="{marginLeft:'2%',marginTop:'2%'}"> Defensive Rating : 0</p>
      <p :style="{marginLeft:'2%',marginTop:'2%'}"> Ofensive Rating : 0</p>
    </div>
     </div>
  </v-row>

  <v-row>
    <v-btn :style="{marginTop:'3vh',marginLeft:'0.5vh'}" class="btn btn-primary" @click="createTeam" @keyup.enter="searchProducts" type="button">
                        Create Team
                    </v-btn>
  </v-row>
</v-container>

</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
  export default {
    props: {
      source: String,
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
      this.loggedIn();
    });
     const url1 = "http://45.76.32.59:5011/users/teste"
    let config1 = {
      headers: {
        Authorization:
          "Bearer " +
          this.getToken
      }
    };
    axios.get(url1, config1).then(res => {
        console.log(res.data);
      this.id = res.data.user.id;
    });
  },
    initialize () {
        this.desserts = []
    },
    data: () => ({
      count:0,
      atc:0,
      defes:0,
      index: 0,
      prices : [],
      drib: [],
      def: [],
      shot: [],
      pass: [],
      pac:[],
      phys:[],
      total:0,
      editedIndex: -1,
      consoles: ['Playstation', 'Xbox', 'PC - Origin'],
      selected_console : '',
      headers: [
        {
          text: 'Player name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Price',
          align: 'start',
          sortable: false,
          value: 'price',
        },
        {
          text: 'Defensive rating',
          align: 'start',
          sortable: false,
          value: 'defense',
        },
        {
          text: 'Atacking rating',
          align: 'start',
          sortable: false,
          value: 'atack',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedItem: {
        name: '',
      },
      drawer: null,
      dropdown_players: [
    ],
      defaultItem: {
        name: '',
      },
      team_name:'',
      desserts:[]
    }),
     components: {
  },
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Player' : 'Edit Player'
      },
      ...mapGetters(["getToken"])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },
  methods: {
     close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          console.log(this.editedIndex)
          this.editedItem.price = this.prices[this.editedIndex]
          console.log( this.editedItem.def)
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.editedItem.price = this.prices[this.dropdown_players.indexOf(this.editedItem.name)]
          this.editedItem.atack = Math.floor((parseInt(this.drib[this.dropdown_players.indexOf(this.editedItem.name)]) + parseInt(this.pac[this.dropdown_players.indexOf(this.editedItem.name)]) + parseInt(this.shot[this.dropdown_players.indexOf(this.editedItem.name)]))/3)
          this.editedItem.defense =  Math.floor((parseInt(this.def[this.dropdown_players.indexOf(this.editedItem.name)]) + parseInt(this.pass[this.dropdown_players.indexOf(this.editedItem.name)]) + parseInt(this.phys[this.dropdown_players.indexOf(this.editedItem.name)]))/3)
          this.desserts.push(this.editedItem)
          this.total = this.total + parseInt(this.editedItem.price)
          this.atc = this.atc + this.editedItem.atack
          this.defes = this.defes + this.editedItem.defense
          this.count = this.count +1 
        }
        console.log("selecionado" + this.selected)

        this.close()
      },
    editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        
      },
      searchPlayer(){
        const url = "http://localhost:5011/players/search/"+this.editedItem.name+'/'+this.selected_console;
        let config = {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        };
        axios.get(url, config).then(res => {
          this.aux = res.data;
          this.dropdown_players = res.data;
          let r=this.dropdown_players.map((obj)=>obj.player.toString())
          this.prices = this.dropdown_players.map((obj)=>obj.price)
          this.drib = this.dropdown_players.map((obj)=>obj.drib)
          this.def = this.dropdown_players.map((obj)=>obj.def)
          this.shot = this.dropdown_players.map((obj)=>obj.shot)
          this.pass = this.dropdown_players.map((obj)=>obj.pass)
          this.pac = this.dropdown_players.map((obj)=>obj.pac)
          this.phys = this.dropdown_players.map((obj)=>obj.phys)
          console.log("aqui" + this.drib + this.def)
          this.dropdown_players=r
    });
    },
    createTeam(){
      console.log("create team")
      console.log(this.team_name)
      console.log(this.desserts[0].name)
      console.log(this.selected_console)
      console.log(this.desserts)
      console.log(this.atc)
      console.log(this.defes)
      //falta mandar o pedido para o backend com as infos
      let config = {
          headers: {
            Authorization: "Bearer " + this.getToken
          }
        };
      axios.post('http://localhost:5011/teams/addTeam', {

                    name: this.team_name,
                    userId: this.id,
                    players:this.desserts,
                    price:this.total,
                    platform : this.selected_console,
                    atck: this.atc/this.count,
                    defense:this.defes/this.count
                },config)

                .then(function (response) {

                    console.log(response.data);

                })

                .catch(function (error) {

                    console.log("Erro ao adicionar a equipa" + error)

                });
        this.$router.push({
        name: "teams",
      });
    }
  }
  }
</script>