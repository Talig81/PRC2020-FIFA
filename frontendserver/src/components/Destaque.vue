<template>
  <div :style="{backgroundColor:'black',width:'100%'}">
          <h1 :style="{color:'white',marginLeft:'5vh',marginTop:'5vh'}">Em Destaque</h1>
          <table>
          <th v-for="i in items" :key="i">
               <div :style="{backgroundColor:'black',width:'100%',height:'2%'}"></div>
                <Ouro :style="{width:'100%',marginLeft:'3vh',marginTop:'12vh'}"/>
          </th>
          </table>
        </div>
</template>

<script>
/*Neste momentos os items estão fixos assim como os valores dos atributos nomes e etc das cartas
que nas proximas versoes vao ter de ser passados como params para as cartas 
*/
import Ouro from './CartaOuro';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
       items : ["a","b","c","d"]
    }),
    components: {
        Ouro,
  },
  }
</script>
