<template>
  <div
    @click.prevent="() => (str = useReverseString(str))"
    class="component-a cursor-pointer"
  >
    {{ `Component A - auto import composable useReverseString ${str}` }}
  </div>
</template>

<script lang="ts" setup>
const str = ref<string>('Hello world!!!')
</script>
<style scoped src="./_style.scss"></style>
