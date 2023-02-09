<template>
  <CrearTarea @crearTarea="crearTarea" />
  <div>
    <DetalleTarea 
      v-for="tarea,index in tareas" 
      :key="index" 
      :nombre="tarea" 
      @pulsarBotonEliminar="eliminarTarea(index)"
      />
  </div>
</template>

<script>
import CrearTarea from './CrearTarea.vue';
import DetalleTarea from './DetalleTarea.vue';

export default {
    name: "ListaTareas",
    data() {
        return {
            tareas: ["comer", "dormir", "saltar", "estudiar", "ver la televisión", "jugar a la videoconsola"]
        };
    },
    methods: {
      eliminarTarea(index) {        
        this.tareas.splice(index, 1);
      },
      crearTarea(nombre) {
        this.tareas.push(nombre);
      }
    },
    components: { DetalleTarea, CrearTarea }
}
</script>