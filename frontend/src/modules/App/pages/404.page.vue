<template>
  <main
    class="fixed h-screen w-screen z-50 bg-zinc-900 top-0 flex flex-col items-center justify-center"
  >
    <h1 class="text-4xl text-white font-semibold">Page not found</h1>
    <p class="mt-4 text-white">We can't seem to find what you're looking for</p>
    <Button
      class="mt-4 bg-white text-black h-min"
      tag="router-link"
      to="/"
    >
      Home
    </Button>
  </main>
</template>

<script>
import Page from "@/components/Page.vue";
import Button from "@/components/Button.vue";
export default {
  name: "404Page",
  components: {
    Page,
    Button
  },
};
</script>
