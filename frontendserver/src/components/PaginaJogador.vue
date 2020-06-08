<template>
<div>
  <div :style="{backgroundColor:'#031927',width:'35vh',height:'45vh',marginTop:'5vh',marginLeft:'5vh'}">
          <table>
                <th>
                <Ouro  v-bind:player ="this.player1" :style="{width:'100%',marginLeft:'-1.65vh',marginTop:'2.5vh'}"/>
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
                            :style="{marginLeft:'9vh'}"
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
                                <p>Price Min ps4: {{this.player1[0].ps_min}} </p>
                             </td>  
                             <td>
                                <p>Price Min xbox: {{this.player1[0].xbox_max}} </p>
                             </td>
                             <td>
                                  <p>Price Min pc: {{this.player1[0].pc_max}} </p>
                             </td>
                             
                         </tr>

                         <tr>
                             <td>
                                <p :style="{marginTop:'2vh'}">Price Max ps4: {{this.player1[0].ps_max}} </p>
                             </td>  
                             <td>
                                 <p :style="{marginTop:'2vh'}">Price Max xbox: {{this.player1[0].xbox_min}} </p>
                             </td>
                             <td>
                                 <p :style="{marginTop:'2vh'}">Price Max pc: {{this.player1[0].pc_min}} </p>
                             </td>
                         </tr>

                          <tr>
                             <td>
                                <p :style="{marginTop:'2vh'}">Price latest ps4: {{this.player1[0].ps_last}} </p>
                             </td>  
                             <td>
                                  <p :style="{marginTop:'2vh'}">Price latest xbox: {{this.player1[0].xbox_last}} </p>
                             </td>
                             <td>
                                 <p :style="{marginTop:'2vh'}">Price latest pc: {{this.player1[0].pc_last}} </p>
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
                                   <p :style="{marginTop:'10vh',marginLeft:'1vh'}"><b> Name</b> : {{this.player1[0].name}}</p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Traits</b> : {{this.player1[0].features}} </p>
                                </tr>
                                <tr>
                                   <p :style="{marginTop:'4vh',marginLeft:'1vh'}"> <b>Club</b> :{{this.player1[0].club.replace("_"," ")}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Nationality</b> : {{this.player1[0].nationality}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Foot</b> : {{this.player1[0].foot}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Height</b> : {{this.player1[0].height}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Weight</b> : {{this.player1[0].weight}}</p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> <b>Age</b> :{{this.player1[0].age}} </p>
                                </tr>
                                 <tr>
                                   <p :style="{marginTop:'3vh',marginLeft:'1vh'}"> Skills : {{this.player1[0].skill}}</p>
                                </tr>
                            </table>
                        </v-card>
                    </td>
                    <td>
                       <v-card :style="{backgroundColor:'#031927',color:'white',height:'84vh',width:'98vh',marginTop:'5vh',marginLeft:'3.8vh'}">
                            <table :style="{width:'100%',marginTop:'5vh'}">

                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Pace : {{this.player1[0].pac}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Shooting : {{this.player1[0].shot}}</p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Passing : {{this.player1[0].pass}}</p></b>
                                   </td>
                                </tr>

                                <tr>
                                    <td>
                                        <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Accelaration : {{this.player1[0].acce}}</p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Positioning : {{this.player1[0].pos_shoot}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Vision : {{this.player1[0].vision_pass}}</p>
                                   </td>
                                </tr>
                                
                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Sprint Speed : {{this.player1[0].sprint}}</p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Finishing : {{this.player1[0].finish}}</p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Crossing : {{this.player1[0].crossing_pass}}</p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Shot Power : {{this.player1[0].power_shoot}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> FK Accuracy : {{this.player1[0].free_pass}} </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Long Shots: {{this.player1[0].long_shot}}  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Short : {{this.player1[0].short_pass}}</p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Volleys: {{this.player1[0].volleys_shoot}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Long : {{this.player1[0].long_pass}} </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Penalties: {{this.player1[0].penalties}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Curv :{{this.player1[0].curve_pass}} </p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Dribbling: {{this.player1[0].drib}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Defending: {{this.player1[0].def}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Physicality : {{this.player1[0].phys}} </p></b>
                                   </td>
                                </tr>

                                <tr>
                                    <td>
                                        <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                    <td>
                                        <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                    <td>
                                         <v-progress-linear :style="{marginLeft:'1vh',width:'80%'}" value="10"></v-progress-linear>
                                    </td>
                                </tr>

                                 <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agility: {{this.player1[0].agility_drib}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Interceptions:{{this.player1[0].intercept_def}}  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Jumping : {{this.player1[0].jumping_phys}} </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Balance: {{this.player1[0].balance_drib}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Heading Accur: 80</p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Stamina : {{this.player1[0].stamina_phys}}</p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Reactions: {{this.player1[0].reactions_drib}}</p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Def Aware: {{this.player1[0].def}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Strength : {{this.player1[0].strength_phys}} </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Ball Control: {{this.player1[0].control_drib}}  </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">Standing Tackle: {{this.player1[0].std_def}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agression : {{this.player1[0].agres_phys}}</p>
                                   </td>
                                </tr>

                                 <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Dribbling: {{this.player1[0].drib_drib}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}">Sliding Tackle: {{this.player1[0].slid_def}} </p>
                                   </td>
                                   <td>
                                        <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Agression : {{this.player1[0].agres_phys}} </p>
                                   </td>
                                </tr>

                                <tr>
                                   <td>
                                       <p :style="{marginTop:'1vh',marginLeft:'1vh'}"> Composure: {{this.player1[0].composure_drib}} </p>
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

          <table :style="{marginBottom:'2vh',marginTop:'5vh',marginBottom:'10vh'}">
               <th>
                    <div :style="{color:'white',height:'7vh',width:'35vh'}">
                    </div>
               </th>
               <th>
                   <v-card
                    :style="{width:'98vh',position:'absolute',backgroundColor:'#031927',color:'white',borderSpacing:'20vh',height:'7vh',marginLeft:'3.8vh'}"
                    >
                     <v-card-title class="headline">Statistics</v-card-title>
                    </v-card> 
               </th>
               <tr>
                    <td></td>
                    <td>
                        <v-card :style="{backgroundColor:'#031927',color:'white',height:'35vh',width:'98vh',marginTop:'5vh',marginLeft:'3.8vh'}">
                            <table :style="{width:'100%',marginTop:'5vh'}">
                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'6vh',marginLeft:'6vh'}"> CB : {{this.player1[0].cb}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'6vh',marginLeft:'6vh'}"> LWB : {{this.player1[0].lwb}} </p></b>
                                   </td>
                                    <td>
                                        <b><p :style="{marginTop:'6vh',marginLeft:'6vh'}"> LM : {{this.player1[0].lm}}</p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'6vh',marginLeft:'6vh'}"> LF : {{this.player1[0].lf}} </p></b>
                                   </td>
                                </tr>
                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> CDM : {{this.player1[0].cdm}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> RWB : {{this.player1[0].rwb}}</p></b>
                                   </td>
                                    <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> CAM : {{this.player1[0].cam}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> LW : {{this.player1[0].lw}} </p></b>
                                   </td>
                                </tr>
                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> LB : {{this.player1[0].lb}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> CM : {{this.player1[0].cm}} </p></b>
                                   </td>
                                    <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> CF : {{this.player1[0].cf}} </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> RW : {{this.player1[0].rw}} </p></b>
                                   </td>
                                </tr>
                                <tr>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> RB : {{this.player1[0].rb}}  </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> RM : {{this.player1[0].rm}} </p></b>
                                   </td>
                                    <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> RF : {{this.player1[0].rf}}  </p></b>
                                   </td>
                                   <td>
                                        <b><p :style="{marginTop:'1vh',marginLeft:'6vh'}"> ST : {{this.player1[0].st}} </p></b>
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

import Ouro from './CartaOuro';
import axios from "axios";
  export default {
    props: {
      source: String,
    },
     data: () => ({
      drawer: null,
      player1: [],
      player_name: ''
    }),
    created() {
            this.player_name = this.$route.params.player;
        },
     mounted: function() {
    console.log("param" +this.player_name)
    const url = "http://localhost:5011/players/complete/"+this.player_name;
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
