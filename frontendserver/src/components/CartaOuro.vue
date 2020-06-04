<template>
   <div>
        <v-img
            height="40vh"
            width="40vh"
            src="../assets/cards/gold.png"
        ></v-img>
        <div :style="{marginTop:'-18vh',marginLeft:'8vh',position:'absolute'}">
               <b>{{this.player[0].name}}</b>  
        </div>
        <v-img :style="{marginTop:'-36vh',marginLeft:'17vh',position:'absolute'}"
            height="17vh"
            width="17vh"
            src="../assets/cards/example.png"
        ></v-img>
       <table :style="{marginTop:'-37vh',marginLeft:'8vh',position:'absolute'}">
           <th>
               {{this.player[0].overall}}
           </th>
           <tr>
               {{this.player[0].position}}
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
               <b> {{this.player[0].pac}}</b> PAC
           </td>
           <td>
               <b> {{this.player[0].drib}}</b>DRI
           </td>
           <tr>
               <td><b> {{this.player[0].shot}}</b> SHO </td>
                <td><b> {{this.player[0].def}}</b> DEF </td>
           </tr>
           <tr>
               <td><b> {{this.player[0].pass}}</b> PAS </td>
                <td><b> {{this.player[0].phys}}</b> PHY </td>
           </tr>
       </table>
   </div>
</template>

<script>
  /** Nos props vamos ter que ter todas as infos para preencher os campos necessários */
  export default {
   props: {
     player: Array,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
