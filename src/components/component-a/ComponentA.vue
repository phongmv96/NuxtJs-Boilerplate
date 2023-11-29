<template>
  <div @click.prevent="useFoo" class="component-a cursor-pointer">
    Component A - auto import composable useFoo
  </div>
  <div @click.prevent="useBar" class="component-a cursor-pointer">
    Component A - auto import composable useBar
  </div>
</template>

<script lang="ts" setup></script>
<style scoped src="./_style.scss"></style>
