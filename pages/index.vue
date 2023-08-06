<template>
  <div id="app">
    <h1 class="text-center">Contrato de Opções EQ9</h1>

    <InputForm @resultsCalculated="showResults" />

    <div v-if="showResults" class="grid">
      <ResultItem
        v-for="(item, index) in results"
        :key="index"
        :id="'result-' + index"
        :title="item.title"
        :value="item.value"
      />
    </div>
  </div>
</template>

<script>
import InputForm from "@/components/InputForm.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

.text-center {
  text-align: center;
}

</style>
