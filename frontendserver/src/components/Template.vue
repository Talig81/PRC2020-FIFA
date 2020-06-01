<template>
  <v-app id="inspire">
   
    <v-app-bar
      app
      color="#0B4F6C"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FIFA Companion</v-toolbar-title>
    </v-app-bar>

    <v-footer
      color="#0B4F6C"
      app
    >
      <span class="white--text">&copy;Produced by Tiago Baptista and Manuel Moreno</span>
    </v-footer>
  </v-app>
</template>

<script>


  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>