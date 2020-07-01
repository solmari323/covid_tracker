<template>
  <div class="to-do-list">
      <h3>To Do's</h3>
      <div class="list">
            <ToDo v-for="todo in todos" :key="todo.id" :todo="todo.todo" :id="todo.id" :isCompleted="todo.completed" @check-todo="$emit('check-todo', todo.id)"></ToDo>
      </div>
  </div>
</template>

<script>
import ToDo from "./ToDo"
export default {
    name:"ToDos",
    components: {ToDo},
    props: {
        todos:undefined,
    },
    methods:{

    },
}
</script>

<style scoped>
.to-do-list {
    width: 85vw;
}

h3 {
    font-size: 15px;
    font-weight: 500;
    color: #1F6357;
    margin-top: 30px;
    margin-bottom: 20px;
}

</style>