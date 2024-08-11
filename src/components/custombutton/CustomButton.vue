<template>
  <Button v-bind="$attrs" class="btn w-full">
    <slot>Entrar</slot>
  </Button>
</template>

<script>
import { Button } from '@/components/ui/button'

export default {
  name: 'CustomButton',
  components: {
    Button
  },
  inheritAttrs: false
}
</script>

<style scoped>
.btn {
  background-color: var(--primary-color);
}

.btn:hover {
  background-color: var(--primary-color-hover);
}

.btn:active {
  background-color: var(--primary-color-active);
}
</style>
