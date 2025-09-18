<template>
  <v-app>
    <v-navigation-drawer
      permanent
    >
      <v-list nav>
        <v-list-item
          v-for="(page, index) of pages"
          :key="`page${index}`"
          :prepend-icon="page.icon"
          :title="page.title"
          :value="page.value"
          :to="page.to"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
<script setup>

const pages = [
  {
    title: "ダッシュボード",
    value: "home",
    icon: "mdi-view-dashboard",
    to: `/`,
  },
]

</script>