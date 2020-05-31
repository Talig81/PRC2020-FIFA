<template>
  <v-app class="theme">
    <v-content class="colored">
      <Template/>
    </v-content>
  </v-app>
</template>

<script>
import Template from './components/Template';

export default {
  name: 'App',

  components: {
    Template,
  },

  data: () => ({
    //
  }),
};
</script>
