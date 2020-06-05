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
                     <v-card-title class="headline">Statistics</v-card-title>
                    </v-card>
                </th>
                <tr>
                    <td>
                       <v-card :style="{backgroundColor:'#031927',color:'white',height:'84vh',width:'35vh',marginTop:'5vh'}">
                            <table>
                                <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"><b> Name</b> : {{this.player1[0].name}}</p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Traits</b> : {{this.player1[0].features}} </p>
                                </tr>
                                <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Club</b> :{{this.player1[0].club.replace("_"," ")}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Nationality</b> : {{this.player1[0].nationality}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Foot</b> : {{this.player1[0].foot}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Height</b> : {{this.player1[0].height}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Weight</b> : {{this.player1[0].weight}}</p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Def WR</b> : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Atack WR  : </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> <b>Age</b> :{{this.player1[0].age}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Skills : </p>
                                </tr>
                            </table>
                        </v-card>
                    </td>
                    <td>
                       <v-card :style="{backgroundColor:'#031927',color:'white',height:'84vh',width:'98vh',marginTop:'5vh',marginLeft:'3.8vh'}">
                            <table :style="{width:'100%',marginTop:'5vh'}">
                              
                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Pace : </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Shooting : </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Passing : </p></b>
                                   </td>
                                </tr>

                                <tr>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Accelaration : </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Positioning : </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Vision : </p>
                                   </td>
                                </tr>
                                
                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Sprint Speed : </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Finishing : </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Crossing : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Shot Power : </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> FK Accuracy : </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Long Shots: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Short : </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Volleys: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Long : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Penalties: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Curv : </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Dribbling: </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Defending: </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Physicality : </p></b>
                                   </td>
                                </tr>

                                <tr>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear value="15"></v-progress-linear>
                                    </td>
                                </tr>

                                 <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agility: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Interceptions: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Jumping : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Balance: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Heading Accur: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Stamina : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Reactions: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Def Aware: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Strength : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Ball Control: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">Standing Tackle: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agression : </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Dribbling: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">Sliding Tackle: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agression : </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Composure: </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"></p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> </p>
                                   </td>
                                </tr>
                               
                                
                            </table>
                        </v-card>
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
