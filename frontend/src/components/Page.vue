<script>
export default {
  name: "Page",
  setup() {},
};
</script>

<template>
  <main class="px-4 pb-10 sm:px-6 md:px-8">
    <slot name="breadcrumb" />

    <!-- <div class="flex-1 min-w-0 mt-4">
      <h1 class="text-2xl leading-8 font-semibold text-gray-900">
        {{ $route.name }}
      </h1>
    </div> -->

    <div class="max-w-[975px] mx-auto mt-6">
      <div class="mb-4">
        <slot name="actions" />
      </div>

      <slot />
    </div>
  </main>
</template>
