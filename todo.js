const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {id: 1, name: 'estudiar'},
        {id: 2, name: 'aprender'},
        {id: 3, name: 'rezar'},
      ],
      newTask: '',
      filter: '',
    }
  },
  methods: {
    addTask() {
      let max = Math.max(...this.tasks.map(t => t.id));
      this.tasks.push({
        id: max+1,
        name: this.newTask
      });        
      this.newTask = '';
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
    }
  }
}).mount('#app');