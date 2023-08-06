import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main$2 = {
  data() {
    return {
      tempos: [
        {
          text: " 6 meses - Pre\xE7o alvo da eq9: R$ 0,03",
          value: 6,
          opcaoCallDivider: 0.016,
          strikePrice: 0.03
        },
        {
          text: "12 meses - Pre\xE7o alvo da eq9: R$ 0,06",
          value: 12,
          opcaoCallDivider: 0.022,
          strikePrice: 0.06
        },
        {
          text: "18 meses - Pre\xE7o alvo da eq9: R$ 0,10",
          value: 18,
          opcaoCallDivider: 0.028,
          strikePrice: 0.1
        },
        {
          text: "24 meses - Pre\xE7o alvo da eq9: R$ 0,35",
          value: 24,
          opcaoCallDivider: 0.051,
          strikePrice: 0.35
        },
        {
          text: "36 meses - Pre\xE7o alvo da eq9: R$ 0,60",
          value: 36,
          opcaoCallDivider: 0.061,
          strikePrice: 0.6
        },
        {
          text: "60 meses - Pre\xE7o alvo da eq9: R$ 1,00",
          value: 60,
          opcaoCallDivider: 0.064,
          strikePrice: 1
        }
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
        (tempo) => tempo.value === this.tempoInvestimento
      );
      if (!selectedTempo) {
        alert("Tempo de investimento inv\xE1lido.");
        return;
      }
      const strikePrice = selectedTempo.strikePrice;
      const currentDate = /* @__PURE__ */ new Date();
      const dataExercicio = new Date(currentDate);
      dataExercicio.setMonth(dataExercicio.getMonth() + selectedTempo.value);
      this.opcaoCall = (this.valorInvestimento / selectedTempo.opcaoCallDivider).toFixed(2);
      this.opcaoPut = (this.opcaoCall * strikePrice).toFixed(2);
      this.strikePrice = strikePrice.toFixed(2).replace(".", ",");
      this.dataExercicio = dataExercicio.toLocaleDateString("pt-BR").slice(0, 10);
      this.opcaoPut = `R$ ${this.opcaoPut.replace(".", ",")}`;
      this.opcaoCall = `  ${this.opcaoCall.replace(".", ",")} EQ9`;
      this.showResults = true;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))}><h1 class="display-3 text-center my-5">Simulador de Investimentos</h1><div class="row"><div class="col-md-6"><input${ssrRenderAttr("value", _ctx.valorInvestimento)} type="number" class="input-box" placeholder="Valor do Investimento em R$"></div><div class="col-md-6"><select class="input-box"><!--[-->`);
  ssrRenderList($data.tempos, (tempo) => {
    _push(`<option${ssrRenderAttr("value", tempo.value)}>${ssrInterpolate(tempo.text)}</option>`);
  });
  _push(`<!--]--></select></div></div><button class="btn-simular"> Simular </button><hr class="my-5">`);
  if ($data.opcaoCall !== null) {
    _push(`<div>`);
    if ($data.opcaoPut !== null) {
      _push(`<div><h3>Pre\xE7o de exerc\xEDcio da EQ9:</h3><p>R$ ${ssrInterpolate($data.strikePrice)}</p><h3>Data de Exerc\xEDcio:</h3><p>${ssrInterpolate($data.dataExercicio)}</p><h3>Op\xE7\xE3o de Venda - Valores em R$:</h3><p>${ssrInterpolate($data.opcaoPut)}</p><h3>Op\xE7\xE3o de Compra - Valores em EQ9:</h3><p>Tokens: ${ssrInterpolate($data.opcaoCall)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InputForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    id: String,
    title: String,
    value: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "result-item",
    id: $props.id
  }, _attrs))} data-v-fc53d628><h2 class="text-center" data-v-fc53d628>${ssrInterpolate($props.title)}</h2><p class="text-center" data-v-fc53d628>${ssrInterpolate($props.value)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResultItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fc53d628"]]);
const _sfc_main = {
  components: {
    InputForm: __nuxt_component_0,
    ResultItem: __nuxt_component_1
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
        }
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
        (tempo) => tempo.value === this.tempoInvestimento
      );
      if (!selectedTempo) {
        alert("Tempo de investimento inv\xE1lido.");
        return;
      }
      const strikePrice = selectedTempo.strikePrice;
      const currentDate = /* @__PURE__ */ new Date();
      const dataExercicio = new Date(currentDate);
      dataExercicio.setMonth(dataExercicio.getMonth() + selectedTempo.value);
      this.opcaoCall = (this.valorInvestimento / selectedTempo.opcaoCallDivider).toFixed(2);
      this.opcaoPut = (this.opcaoCall * strikePrice).toFixed(2);
      this.strikePrice = strikePrice.toFixed(2);
      this.dataExercicio = dataExercicio.toLocaleDateString("pt-BR").slice(0, 10);
      this.results = [
        { title: "Op\xE7\xE3o de Venda", value: `R$ ${this.opcaoPut}` },
        { title: "Pre\xE7o de Exerc\xEDcio", value: `R$ ${this.strikePrice}` },
        { title: "Data de Exerc\xEDcio", value: this.dataExercicio },
        { title: "Op\xE7\xE3o de Compra", value: `${this.opcaoCall} EQ9` }
      ];
      this.showResults = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputForm = __nuxt_component_0;
  const _component_ResultItem = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}><h1 class="text-center">Contrato de Op\xE7\xF5es EQ9</h1>`);
  _push(ssrRenderComponent(_component_InputForm, { onResultsCalculated: $data.showResults }, null, _parent));
  if ($data.showResults) {
    _push(`<div class="grid"><!--[-->`);
    ssrRenderList(_ctx.results, (item, index2) => {
      _push(ssrRenderComponent(_component_ResultItem, {
        key: index2,
        id: "result-" + index2,
        title: item.title,
        value: item.value
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-be58faf2.mjs.map
