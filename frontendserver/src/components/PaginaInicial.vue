<template>
    <div>
       <Destaque/>
       <Cards/>
    </div>
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