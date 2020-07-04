<template>
  <v-container>
    <v-row>
        Lista das ligas e o estado delas
    </v-row>
  </v-container>
</template>

<script>


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