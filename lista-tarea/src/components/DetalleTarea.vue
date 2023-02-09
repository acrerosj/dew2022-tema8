<template>
  <div>
    <button
      @click="$emit('pulsarBotonEliminar')"
    >
    Eliminar
    </button>
    {{ nombre }}
  </div>
</template>

<script>

export default {
  name: 'DetalleTarea',
  props: {
    nombre: String
  }
}
</script>