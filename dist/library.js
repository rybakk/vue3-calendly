'use strict';

var vue = require('vue');
var calendly = require('@/utils/calendly');

const _hoisted_1 = ["data-url"];


var script = {
  __name: 'VueCalendly',
  props: {
    url: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        default: 600,
    },
},
  emits: ['load'],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

const calendlyDiv = ref(null);

onMounted(() => {
    calendly.widget(calendlyDiv.value, {
        onLoad(e) {
            emit('load', e);
        },
    });
});

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", {
    ref_key: "calendlyDiv",
    ref: calendlyDiv,
    class: "calendly",
    style: vue.normalizeStyle({ 'height' : props.height + 'px' }),
    "data-url": props.url
  }, null, 12 /* STYLE, PROPS */, _hoisted_1))
}
}

};

script.__file = "src/VueCalendly.vue";

var components = { VueCalendly: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
