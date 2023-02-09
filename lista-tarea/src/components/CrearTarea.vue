<template>
  <input type="text" v-model="nombre">
  <button @click="crearTarea">Crear</button>
</template>

<script>

export default {
  name: 'CrearTarea',
  data() {
    return {
      nombre: ''
    }
  },
  methods: {
    crearTarea() {
      if (this.nombre.length>3) {
        this.$emit('crearTarea', this.nombre);
      } 
    }
  }
}
</script>