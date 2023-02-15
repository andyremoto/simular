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
import ResultItem from "@/components/ResultItem.vue";

export default {
  components: {
    InputForm,
    ResultItem
  },
  data() {
    return {
      showResults: false,
      valorInvestimento: "",
      tempoInvestimento: null,
      tempos: [
        {
          text: "6 meses",
          value: 6,
          opcaoCallDivider: 0.016,
          strikePrice: 0.03
        },
        // ... (rest of the tempos) ...
      ],
      opcaoCall: null,
      opcaoPut: null,
      strikePrice: null,
      dataExercicio: null
    };
  },
  methods: {
    simularInvestimento() {
      if (!this.valorInvestimento || !this.tempoInvestimento) {
        alert(
          "Por favor, insira o valor do investimento e escolha o tempo de investimento."
        );
        return;
      }

      const selectedTempo = this.tempos.find(
        tempo => tempo.value === this.tempoInvestimento
      );
      if (!selectedTempo) {
        alert("Tempo de investimento inválido.");
        return;
      }

      const strikePrice = selectedTempo.strikePrice;
      const currentDate = new Date();
      const dataExercicio = new Date(currentDate);
      dataExercicio.setMonth(dataExercicio.getMonth() + selectedTempo.value);

      this.opcaoCall = (
        this.valorInvestimento / selectedTempo.opcaoCallDivider
      ).toFixed(2);
      this.opcaoPut = (this.opcaoCall * strikePrice).toFixed(2);
      this.strikePrice = strikePrice.toFixed(2);
      this.dataExercicio = dataExercicio
        .toLocaleDateString("pt-BR")
        .slice(0, 10);

      this.results = [
        { title: "Opção de Venda", value: `R$ ${this.opcaoPut}` },
        { title: "Preço de Exercício", value: `R$ ${this.strikePrice}` },
        { title: "Data de Exercício", value: this.dataExercicio },
        { title: "Opção de Compra", value: `${this.opcaoCall} EQ9` }
      ];

      this.showResults = true;
    }
  }
};
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

/* Additional styles for grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
</style>
