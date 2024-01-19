<script setup>
import calendly from '@/utils/calendly'

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

const emit = defineEmits(['load'])

const calendlyDiv = ref(null)

onMounted(() => {
    calendly.widget(calendlyDiv.value, {
        onLoad(e) {
            emit('load', e)
        },
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
