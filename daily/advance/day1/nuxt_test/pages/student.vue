<template>
    <div>
      <ul>
        <li v-for="student of students" :key="student.id">
          {{ student.name }}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "student",
        data() {
          return {
            students: [
              {id: 1001, name: '张三'},
              {id: 1002, name: '李四'},
              {id: 1003, name: '王五'},
            ]
          }
        }
    }
</script>

<style scoped>

</style>
