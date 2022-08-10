<template>
  <div>
    <div class="auth-container">
      <h1>Auth</h1>
      <input type="text" placeholder="email" class="auth" v-model="email" />
      <input
        type="password"
        placeholder="password"
        class="auth"
        v-model="password"
      />
      <button type="button" @click="authorize">login</button>
      <button type="button" @click="redirectToBack">back</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import type { AuthPageInstance } from "./types";

export default defineComponent({
  name: "auth",

  setup(): AuthPageInstance {
    const router = useRouter();
    const email = ref(null);
    const password = ref(null);
    const loading = ref(null);
    const error = ref(null);
    const loginMode = ref(false);

    const login = () => {};
    const register = () => {};

    const redirectToBack = () => {
      router.push("/");
    };
    const authorize = async () => {
      loading.value = true;
      let err;
    };

    return {
      email,
      password,
      authorize,
      redirectToBack,
    };
  },
});
</script>
