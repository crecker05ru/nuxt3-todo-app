<template>
    <h1>Home</h1>
<div class="container">
    <h2>Content on dev</h2>
    <div class="content-buttons">
        <button class="content-button">List</button>
        <button class="content-button">Cards</button>
        <button class="add-button">Add</button>
    </div>
    <div class="todo-list">
        <div class="todo-list-wrapper flex">
            <div class="todos">
                <div class="todo-item">
            <div class="todo-title">Title</div>
            <div class="todo-content">Todo content</div>
            <input type="text" class="todo-input">
                <input type="checkbox" class="todo-checkbox" />

        </div>
    </div>
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
<style lang="scss">
body{
 background-color: #000;
 color: #fff;   
}
.container{
        width: 1080px;
        margin-left: auto;
        margin-right: auto;
    }
button{
        border: none;
        background-color: rgb(123, 0, 255) ;
        cursor: pointer;
        color: #fff;
        border-radius: 8px;
        padding: 5px 10px;
        transition: all ease-in .2s;
        &:active{
            transform: scale(.9,.9);
    }
    &:hover{
        background-color: rgb(147, 47, 255);
    }
}
input {
    outline: none;
    border: 1px solid transparent;
    border-radius: 5px;
}
input[type=checkbox]{
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in .2s;
    &:checked{
        background-color: rgb(123, 0, 255);
    }
}
.todo-list{
        background-color: rgb(35, 35, 35);
        border-radius: 8px;
}
.flex{
    display: flex;
}
</style>
