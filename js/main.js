const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
  },
  methods: {
    addItem() {
      if(this.newItem == '') return;
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo);
      this.newItem = '';
    },
    removeTodo(index) {
      if(this.todos[index].isDone === true) {
        this.todos.splice(index, 1);
      } else {
        alert('タスクが完了していません。');
      }
    } 
  }
});