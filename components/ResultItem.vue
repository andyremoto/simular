<template>
  <div class="result-item" :id="id">
    <h2 class="text-center">{{ title }}</h2>
    <p class="text-center">{{ value }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    value: String
  }
};
</script>

<style scoped>
.result-item {
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>


<style scoped>
.result-item {
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>

<style scoped>
.result-item {
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>

<style scoped>
.result-item {
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
  background-color: #f4f4f4;
  text-align: center;
}
</style>
