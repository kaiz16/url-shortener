<template>
  <component
    :is="tag"
    v-bind="$attrs"
    @click="disabled ? null : $emit('click')"
    :disabled="disabled"
    :class="[
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      'flex flex-row items-center justify-center px-3 py-2 transition-all duration-300 border border-transparent rounded-md shadow-sm hover:opacity-80 font-medium',
    ]"
  >
    <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24" v-if="loading">
      <path
        fill="currentColor"
        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
      />
    </svg>
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    tag: {
      type: String,
      default: () => "button",
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ["click"],
};
</script>
