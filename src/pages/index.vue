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
  <h3>Get name from store: {{ myStore.getName }}</h3>
  <h3>Update name to store:</h3>
  <input @keydown="onChangeName" placeholder="enter name" type="text" />
</template>
<script lang="ts" setup>
const title = computed(() => useI18('usage'))
const myStore = useMyStore()
const onChangeName = e => myStore.updateName(e.target.value)
</script>
