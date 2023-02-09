<template>
  <div :style="estilo">
    {{ contenido }}
  </div>
</template>

<script>

export default {
  name: 'CuadroColor',
  props: {
    contenido: String,
    backgroundColor: String,
    ancho: Number,
    alto: Number,
  },
  computed: {
    estilo() {
      return `width: ${this.ancho}px; height: ${this.alto}px; background-color: ${this.backgroundColor};`;
    }
  }
}

</script>