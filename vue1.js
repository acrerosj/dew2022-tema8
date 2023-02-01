const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hola Vue!',
      saludo: '¡que pasa!',
      modulo: 'DSW',
    }
  }
}).mount('#app')