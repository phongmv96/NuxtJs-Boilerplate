<script setup>
const { locale } = useI18n()
</script>
<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
        <option value="ko">Korean</option>
      </select>
    </form>
  </div>
</template>
