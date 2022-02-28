<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>
<script>
import { useAppStore } from "./store/useAppStore";
export default {
  setup() {
    const store = useAppStore();
    const { getURLs } = store;

    getURLs();
  },
};
</script>
<style>
html,
body,
#app {
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
}

#content {
  width: 100%;
  height: 100%;
}
</style>
