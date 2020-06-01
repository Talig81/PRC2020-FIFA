<template>
<v-container>
  <v-row>
    <v-col>
    <div>
       <Destaque/>
       <Cards/>
    </div>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import Destaque from './Destaque';
import Cards from './CardInicial';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
     components: {
       Destaque,
       Cards
  },
  }
</script>