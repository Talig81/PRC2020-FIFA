<template>
  <div>
    <v-card>
      <v-card-title>
        Players
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="15"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-eye</v-icon>
          <v-icon small class="mr-2" @click="addPlayer(item)">mdi-account-plus</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="show_details">Reset</v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      items: [],
      headers: [
        { text: "Player", value: "player" },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Overall", value: "overall" },
        { text: "Club", value: "club" },
        { text: "Position", value: "position" },
        { text: "Nationality", value: "nationality" },
        { text: "Quality", value: "quality" },
        { text: "Age", value: "age" },
        { text: "Foot", value: "foot" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      search: ""
    };
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "consultar_jogador",
        params: { player: item.player }
      });
    },
    addPlayer(item) {
      const url = "http://45.76.32.59:5011/users/addPlayer";
      let config = {
        headers: {
          Authorization: "Bearer " + this.getToken
        }
      };
      console.log(config)
      let body = {
        playerName: item.player
      };
      axios.post(url,body,config).then();
    }
  },
  mounted: function() {
    const url = "http://45.76.32.59:5011/players/simple";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.items = res.data;
      console.log(this.items);
    });
  }
};
</script>