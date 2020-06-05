<template>
<v-container>
  <v-row>
    <v-col>
    <div>
        <p>Input team name</p>
        <p></p>
    </div>
    </v-col>
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
  }
</script>