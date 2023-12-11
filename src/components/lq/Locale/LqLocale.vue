<script setup>
const { locale } = useI18n()
</script>
<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="vi">vi</option>
        <option value="ko">ko</option>
      </select>
    </form>
  </div>
</template>
