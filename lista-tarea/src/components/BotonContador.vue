<template>
  <h1 @click="numero++">{{ numero }}</h1>
</template>

<script>
export default {
  name: 'BotonContador',
  data() {
    return {
      numero: 1
    }
  }
}
</script>
