<template>
  <v-container>
    <v-row>
      <v-col>
        <div :id="id">
          <img
            v-bind:src="'https://upload.wikimedia.org/wikipedia/commons/8/82/Soccer_Field_Transparant.svg'"
          />
        </div>
      </v-col>
      <v-col>
        <table>
          <tr v-for="i in inputItems" :key="i">
            <td>
              <vue-draggable-resizable :w="50" :h="50">
                <div class="numberCircle"> {{i.number}}</div>
              </vue-draggable-resizable><span> {{i.number}} - {{i.name}} </span>
              
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  data() {
    return {
      inputItems: [
        {
         number: "10",
            name: "TaliG81",
          id: 0
        },
        {
          number: "7",
          name: "Ronaldo",
          id: 1
        },
        {
          number: "11",
          name: "Tiago 'Baptista Bomb' Batista",
          id: 1
        }
      ]
    };
  },
  components: {
    VueDraggableResizable
  },
  methods: {}
};
</script>

<style scoped>
.wrapper {
  width: 50%;
  height: 50%;
  border: 1px solid #000;
  border-radius: 10px;
  position: relative;
}

.numberCircle {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 8px;

  background: #fff;
  border: 2px solid #666;
  color: #666;
  text-align: center;

  font: 22px Arial, sans-serif;
}
</style>