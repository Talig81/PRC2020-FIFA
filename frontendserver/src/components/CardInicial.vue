<template>
<table :style="{width:'100%'}">
  <th>
<v-card
    class="mx-auto"
    max-width="60vh"
    color="#0B4F6C"
    :style="{marginTop:'5vh'}"
  >
  
    <v-img
      class="white--text align-end"
      height="40vh"
      src="../assets/inicial/players.jpeg"
    >
     <v-card-title>Players</v-card-title>
    </v-img>

    <v-card-actions>
      <v-btn
        color="white"
        text
      >
        Explorar
      </v-btn>
    </v-card-actions>
  </v-card>
  </th>
  <th >
     <v-card
    class="mx-auto"
    max-width="60vh"
    color="#0B4F6C"
    :style="{marginTop:'5vh'}"
  >
    <v-img
      class="white--text align-end"
      height="40vh"
      src="../assets/inicial/teams.jpg"
    >
      <v-card-title>Teams</v-card-title>
    </v-img>



    <v-card-actions>
      <v-btn
        color="white"
        text
      >
        Explorar
      </v-btn>
    </v-card-actions>
  </v-card>
  </th>
</table>
  
</template>

<script>
  /** Nos props vamos ter que ter todas as infos para preencher os campos necessários */
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
