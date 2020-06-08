<template>
    <v-navigation-drawer
      dark
      clipped
      permanent
    >
      <v-list>
        <v-list-item v-for="([icon, text,toGo], i) in items" :to="toGo" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<style>
.v-navigation-drawer__content{
  min-height: 220.5vh !important
}
</style>
<script>
export default {
  data: () => ({
    items: [
      ["mdi-home", "Home","/"],
      ["mdi-account", "Teams","/teams"],
      ["mdi-account", "Players","/players"],
    ],
  })
};
</script>