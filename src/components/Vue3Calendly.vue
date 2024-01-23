<script setup>
import calendly from '../utils/calendly'
import { onMounted, ref } from 'vue'

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        default: 600,
    },
})

const emit = defineEmits(['load', 'calendlyEvent'])

const calendlyDiv = ref(null)

onMounted(() => {
    calendly.widget(calendlyDiv.value, {
        onLoad(e) {
            emit('load', e)
        },
    })
    window.addEventListener("message", function(e) {
        if(e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0) {
            emit('calendlyEvent', e.data)
        }
    })
})
</script>

<template>
  <div
    ref="calendlyDiv"
    class="calendly"
    :style="{ 'height' : props.height + 'px' }"
    :data-url="props.url"
  />
</template>
