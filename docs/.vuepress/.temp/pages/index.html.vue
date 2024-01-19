<template><div><h1 id="vue3-calendly" tabindex="-1"><a class="header-anchor" href="#vue3-calendly" aria-hidden="true">#</a> VUE3-CALENDLY</h1>
<p>A vue3 component to integrate Calendly as a component.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install vue3-calendly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="component-integration" tabindex="-1"><a class="header-anchor" href="#component-integration" aria-hidden="true">#</a> Component integration</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { createApp } from 'vue'
import App from './App.vue'

import VueCalendly from 'vue3-calendly'

createApp(App)
  .use(VueCalendly)
  .mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-use" tabindex="-1"><a class="header-anchor" href="#component-use" aria-hidden="true">#</a> Component use</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;template>
    &lt;VueCalendly url="https://calendly.com/YOUR_URL" :height="600" />
&lt;/template>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


