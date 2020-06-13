<template>
<v-container>
  <v-row>
    <div :style="{backgroundColor:'#031927',width:'100%',height:'55%',marginTop:'5vh',color:'white',marginLeft:'-2%'}">

        <b><p :style="{ marginLeft : '5%',marginTop:'0.7%'}">Overview of my Teams</p></b>

        <v-btn small  @click="create()" :style="{position:'absolute', marginTop :' -2%', marginLeft : '50%'}">Create Team</v-btn>
    </div>

  </v-row>

  <v-row :style="{width:'100%',marginTop:'3vh',marginLeft:'-2%'}">
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
          @click="editItem(item)"
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


  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
     components: {
      
  },
    methods: {
     create () {
        this.$router.push({ name: "criar_equipas"});
    }
  }
  }
</script>