<template>
  <h1>Index page</h1>
  <ComponentA />
  <LqButton />
  <LqSelect />
  <LqInput />
  <hr />
  <LqLocale />
  <h1>$t: {{ $t('usage') }}</h1>
  <h2>auto import use18n: {{ title }}</h2>
  <hr />
</template>
<script lang="ts" setup>
const title = computed(() => useI18('usage'))
</script>
