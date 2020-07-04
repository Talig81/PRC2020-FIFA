<template>
  <div>
    <v-card>
      <v-card-title>
        Leagues
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
        </template>
        <template v-slot:no-data>
          <p>Empty</p>
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
        { text: "Name", value: "name" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
        { text: "State ( 1-Open |  0 - Closed )", value: "state" },
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
        name: "league",
        params: { name: item.name }
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
    const url = "http://localhost:5011/league/list";
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