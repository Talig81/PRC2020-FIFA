<template>
<div>
  <div :style="{backgroundColor:'#031927',width:'35vh',height:'45vh',marginTop:'5vh',marginLeft:'5vh'}">
          <table>
                <th>
                <Ouro  v-bind:player ="this.player1" :style="{width:'100%',marginLeft:'-1.5vh',marginTop:'2.5vh'}"/>
                </th>
                <th>
                    <v-card
                    :style="{width:'98vh',position:'absolute',backgroundColor:'#031927',color:'white',borderSpacing:'20vh',height:'45vh'}"
                    >
                     <v-card-title class="headline">Prices</v-card-title>
                     <table :style="{width:'100%'}">
                         <th>
                            <v-img
                            height="6vh"
                            width="18vh"
                            src="../assets/consoles/ps4.png"
                            :style="{marginLeft:'8vh'}"
                            ></v-img>
                         </th>
                         <th>
                            <v-img
                            height="6vh"
                            width="18vh"
                            src="../assets/consoles/xbox.png"
                            :style="{marginLeft:'7vh'}"
                            ></v-img>
                         </th>
                         <th>
                            <v-img
                            height="6vh"
                            width="18vh"
                            src="../assets/consoles/pc.png"
                            :style="{marginLeft:'8vh'}"
                            ></v-img>
                         </th>
                     </table>
                     <table :style="{width:'100%',marginTop:'5vh'}">
                        

                         <tr>
                             <td>
                                Price Min ps4:
                             </td>  
                             <td>
                                 Price Min xbox:
                             </td>
                             <td>
                                 Price Min pc:
                             </td>
                             
                         </tr>

                         <tr>
                             <td>
                                Price Max ps4:
                             </td>  
                             <td>
                                 Price Max xbox:
                             </td>
                             <td>
                                 Price Max pc:
                             </td>
                         </tr>

                          <tr>
                             <td>
                                Price Lateste ps4:
                             </td>  
                             <td>
                                 Price Latest xbox:
                             </td>
                             <td>
                                 Price Latest pc:
                             </td>
                         </tr>

                        
                     </table>
                    </v-card>
                </th>
          </table>

        </div>
          <div :style="{width:'35vh',height:'7vh',marginTop:'5vh',marginLeft:'5vh'}">
          <table>
                <th>
                     <v-card :style="{backgroundColor:'#031927',color:'white',height:'7vh',width:'35vh'}">
                  <v-card-title class="headline">Personal Info</v-card-title>
                   </v-card>
                </th>
                <th>
                    <v-card
                    :style="{width:'98vh',position:'absolute',backgroundColor:'#031927',color:'white',borderSpacing:'20vh',height:'7vh',marginLeft:'3.8vh'}"
                    >
                     <v-card-title class="headline">Prices</v-card-title>
                    </v-card>
                </th>
                <tr>
                    <td>
                       <v-card :style="{backgroundColor:'#031927',color:'white',height:'72vh',width:'35vh',marginTop:'5vh'}">
                            <table>
                                <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Name : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Traits : </p>
                                </tr>
                                <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Club : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Nationality : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Weak Foot : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Heigth : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Weigth : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Def WR : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Atack WR  : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Age : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Skills : </p>
                                </tr>
                            </table>
                        </v-card>
                    </td>
                    <td>
                        cenas
                    </td>
                </tr>
          </table>
        </div>
    </div>
</template>

<script>
/*Neste momentos os items estão fixos assim como os valores dos atributos nomes e etc das cartas
que nas proximas versoes vao ter de ser passados como params para as cartas 
*/
import Ouro from './CartaOuro';
import axios from "axios";
  export default {
    props: {
      source: String,
    },
     data: () => ({
      drawer: null,
      player1: [],
    }),
     mounted: function() {
    const url = "http://localhost:5011/players/card/Ronaldo-Normal";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.player1 = res.data;
      console.log(this.player1)
    });

  },
    components: {
        Ouro,
  },
  }
</script>
