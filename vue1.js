const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hola Vue!',
      saludo: '¡que pasa!',
      modulo: 'DSW',
      mostrar: false,
      frutas: ["manzana", "pera", "platano", "naranja", "kiwi"],
      fruta: null,
      cliente: {
        id: 5,
        name: 'Pepe',
        age: 33,
      }
    }
  },
  methods: {
    mayusculas() {
      this.cliente.name = this.cliente.name.toUpperCase();
    }
  },
}).mount('#app')