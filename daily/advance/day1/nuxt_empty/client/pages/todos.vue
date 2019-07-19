<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button @click="remove(todo)"> 删除 </button>
            </li>
            <li>
                <input placeholder="What needs to be done?" @keyup.enter="addTodo">
            </li>
        </ul>
        已经做完的: {{doneCounter}} <br/>
        未做完的  {{ undoneCounter }}<br/>

        合计 {{ allCounter }}<br/>
    </div>

</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        name: "todos",
        computed: {
            todos() {
                return this.$store.state.todos.list;
            },
            allCounter() {
                return this.$store.state.todos.list.length;
            },
            doneCounter() {
                return this.$store.state.todos.list.reduce((pre, current) => {
                    return pre + (current.done ? 1 : 0)
                }, 0)
            },
            undoneCounter() {
                return this.allCounter - this.doneCounter;
            }
        },
        methods: {
            addTodo(e) {
                this.$store.commit('todos/add', e.target.value);
                e.target.value = ''
            },
            ...mapMutations({
                toggle: 'todos/toggle'
            }),
            remove(todo) {
                this.$store.commit('todos/remove', {
                    todo
                });
            }
        }
    }
</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>
