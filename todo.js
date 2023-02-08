const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
      newPriority: 'low',
      filter: '',
      priority_options: ['low', 'medium', 'high'],
    }
  },
  methods: {
    addTask() {
      let max = Math.max(0,...this.tasks.map(t => t.id));
      this.tasks.push({
        id: max+1,
        name: this.newTask,
        priority: this.newPriority
      });        
      this.newTask = '';
      document.querySelector('#newTask').focus();
    },
    deleteTask(id) {
      // console.log('id', id);
      // let index = this.tasks.indexOf(t => t.id==id);
      // console.log(index);
      // this.tasks.splice(index,1);      
      this.tasks = this.tasks.filter(t => t.id != id);
    },
  },
  computed: {
    taskSize() {
      return this.tasks.length;
    },
    searchTasks() {
      return this.tasks.filter(t => t.name.includes(this.filter));
    },
    stringTasks() {
      return JSON.stringify(this.tasks);
    } 
  },
  watch: {
    newTask(newNewTask, oldNewTask) {
      this.newTask = newNewTask.toUpperCase();
      console.log('watcher', ' viejo: ', oldNewTask, ' nuevo: ', newNewTask);
    },
    stringTasks(newString) {
      console.log('cambiando tareas');
      localStorage.tasks = newString;
    }
  }, 
  mounted() {
    this.tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  },
}).mount('#app');