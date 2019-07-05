<template>
    <div class="counter">
        {{ count }}
        <button @click="incNumber">inc</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        incNumber() {
            this.count++;
        }
    }
}
</script>

<style scoped>
    .counter {
        background: lightcoral;
    }
</style>
