# VUE3-CALENDLY

A vue3 component to integrate Calendly as a component.

### Installation

```
$ npm install vue3-calendly
```

### Component integration

```
import { createApp } from 'vue'
import App from './App.vue'

import Vue3Calendly from 'vue3-calendly'

createApp(App)
  .use(Vue3Calendly)
  .mount('#app')
  ```

### Component use

```
<template>
    <Vue3Calendly url="https://calendly.com/YOUR_URL" :height="600" />
</template>
```

### Events
```
@load
@calendlyEvent
```
