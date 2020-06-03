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
    ></v-data-table>
    </v-card>
</div>
</template>


<script>
import axios from "axios";
  export default {
    data () {
      return {
        items: [],
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Overall', value: 'overall' },
          { text: 'Club', value: 'club' },
          { text: 'Position', value: 'position' },
          { text: 'Nationality', value: 'nationality' },
          { text: 'Quality', value: 'quality' },
          { text: 'Age', value: 'age' },
          { text: 'Foot', value: 'foot' },
        ],
        search: '',
      }
    },
      mounted: function() {
    const url = "http://localhost:5011/players/simple";
    let config = {
      headers: {
        Authorization: "Bearer " + this.getToken
      }
    };
    axios.get(url, config).then(res => {
      this.items = res.data;
      console.log(this.items)
    });
  }

  }
</script>