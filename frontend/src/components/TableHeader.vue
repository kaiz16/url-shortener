<script>
export default {
  name: "TableHeader",
};
</script>

<template>
  <th
    scope="col"
    class="px-6 py-3 text-left content-label uppercase tracking-wider"
  >
    <slot />
  </th>
</template>
