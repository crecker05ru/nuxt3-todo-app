<template>
    <h1>Home</h1>
<div class="container">
    <h2>Content</h2>
    <div class="todos">
        <div class="todo-item">
            <div class="todo-title">Title</div>
            <div class="todo-content">Todo content</div>
            <input type="text" class="todo-input">
            <button class="todo-button">Add</button>
            <button class="todo-button">Done</button>
        </div>
    </div>
</div>

</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'home',
    setup() {
        
    },
})
</script>
<style scoped>
    .container{
        width: 1080px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
