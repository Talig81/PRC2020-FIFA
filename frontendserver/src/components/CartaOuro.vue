<template>
   <div>
        <v-img
            height="40vh"
            width="40vh"
            src="../assets/cards/gold.png"
        ></v-img>
        <div :style="{marginTop:'-18vh',marginLeft:'17vh',position:'absolute'}">
               <b>NOME</b>  
        </div>
        <v-img :style="{marginTop:'-36vh',marginLeft:'17vh',position:'absolute'}"
            height="17vh"
            width="17vh"
            src="../assets/cards/example.png"
        ></v-img>
       <table :style="{marginTop:'-37vh',marginLeft:'8vh',position:'absolute'}">
           <th>
               RATING
           </th>
           <tr>
               position
           </tr>
           <tr>
              <v-img :style="{marginTop:'1vh'}"
                height="3vh"
                width="5vh"
                src="../assets/cards/country.png"
              ></v-img>
           </tr>
           <tr>
              <v-img :style="{marginTop:'1vh'}"
                height="5vh"
                width="5vh"
                src="../assets/cards/club.png"
              ></v-img>
           </tr>
       </table>
       <table  :style="{marginTop:'-15vh',marginLeft:'10vh',borderSpacing:'1vh',position:'absolute'}">
           <td>
               <b>value</b> PAC
           </td>
           <td>
               <b>value</b>DRI
           </td>
           <tr>
               <td><b>value</b> SHO </td>
                <td><b>value</b> DEF </td>
           </tr>
           <tr>
               <td><b>value</b> PAS </td>
                <td><b>value</b> PHY </td>
           </tr>
       </table>
   </div>
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
