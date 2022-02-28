<template>
  <div class="p-0 border-none relative">
    <label v-if="label" class="block text-sm mb-1 font-medium">
      {{ label }}
    </label>
    <div
      v-if="$slots['icon']"
      class="absolute inset-y-0 left-0 mt-6 ml-2 flex items-center pointer-events-none text-black/50"
    >
      <slot name="icon"></slot>
    </div>
    <input
      class="focus:ring-black/90 focus:border-black/90 block w-full py-2 px-4 sm:text-sm border-black/90 border-2 rounded-md"
      :class="{ 'pl-10': $slots['icon'] }"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  emits: ["update:modelValue", "keyup.enter"],
  computed: {
    value: {
      set(val) {
        this.$emit("update:modelValue", val);
      },
      get() {
        return this.modelValue;
      },
    },
  },
};
</script>
