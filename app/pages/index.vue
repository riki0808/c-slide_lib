<template>
  <v-container fluid class="fill-height flex-column align-center justify-center">
    <h1 class="mb-16">ダッシュボード</h1>
    <div class="d-flex align-center justify-center">
      <v-btn variant="outlined" width="120" class="ml-5" @click="signOut">ログアウト</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import {definePageMeta} from "#imports";

definePageMeta({})

async function signOut() {
  await auth.signOut();
  navigateTo('/signin');
}
</script>
