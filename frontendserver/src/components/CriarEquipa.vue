<template>
<v-container>
  <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5vh',color:'white',marginLeft:'-2%'}">
        <b><p :style="{ marginLeft : '5%',marginTop:'0.7%'}">Create a Team</p></b>
    </div>

  </v-row>
  <v-row :style="{width:'10%',marginTop:'3vh',marginLeft:'-1.8%'}">
     <v-text-field label="Team name" v-model="team_name" name="email" :rules="rules" hide-details="auto"></v-text-field>
  </v-row>
  <v-row :style="{width:'100%',marginTop:'3vh',marginLeft:'-2%'}">
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
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Player Name"></v-text-field>
                  </v-col>
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
      <p> Please insert any player</p>
    </template>
  </v-data-table>
  </div>
  </v-row>
</v-container>

</template>

<script>


  export default {
    props: {
      source: String,
    },
    initialize () {
        this.desserts = []
    },
    data: () => ({
      headers: [
        {
          text: 'Player name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Team', value: 'team' },
        { text: 'Nationality', value: 'nationality' },
        { text: 'Overall', value: 'overall' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedItem: {
        name: '',
        nationality: '',
        overall: '',
        team: '',
      },
      drawer: null,
     
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
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
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

  }
  }
</script>