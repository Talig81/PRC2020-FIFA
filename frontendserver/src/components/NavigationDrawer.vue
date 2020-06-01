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

<script>
export default {
  data: () => ({
    items: [
      ["mdi-home", "Complexity","/complex"],
      ["mdi-home", "Home","/"],
      ["mdi-account", "Profile","/profile"],
      ["mdi-email", "Messages","/chat"],
      ["mdi-account-group","Groups","/groups"],
      ["mdi-plus-box", "Add Post","/addpost"],
      ["mdi-account-multiple-check", "Friends","/friends"],
      ["mdi-calendar", "Eventos","/eventos"],
      ["mdi-earth", "Utilizadores", "/users"],
    ],
  })
};
</script>