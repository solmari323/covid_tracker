<template>
  <div class="to-do-list">
      <h3>To Do's</h3>
      <div class="list">
            <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"ToDos",
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