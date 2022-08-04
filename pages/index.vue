<template>
    <h1>Home</h1>
<div class="container">
    <h2>Content on dev</h2>
    <div class="content-buttons">
        <button class="content-button">List</button>
        <button class="content-button">Cards</button>
        <button class="add-button" @click="addTodo">Add</button>
        <input type="text" class="todo-input" v-model="title" placeholder="Title"/>
        <input type="text" class="todo-input" v-model="description" placeholder="Decription"/>
    </div>
    <div class="todo-list">
        <div class="todo-list-wrapper flex">
            <div class="todos">
               <template v-for="todo in todosListReactive" :key=" todo.id">
                 <todo-item :data="todo"></todo-item>
               </template>
    </div>
        </div>
    </div>

</div>

</template>
<script>
import { defineComponent,reactive,ref } from '@vue/composition-api'
const todosList = [
    {
        id: 1,
        title: 'vodolaz',
        description: 'lere-lero-lero-lero-lero',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
        {
        id: 2,
        title: 'Jojo',
        description: 'Yes',
        done: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]
export default defineComponent({
    name: 'home',
    setup() {
        let count = 3
        const title = ref('')
        const description = ref('')
        const todosListReactive = reactive([...todosList])
        const addTodo = () => {
        const item = {
        id: count++,
        title: title.value,
        description: description.value,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
        } 
            if(todosListReactive.filter(item => item.id !== item.id)){
                todosListReactive.push(item)
                title.value = ''
                description.value= ''
                console.log('todoItem',item)
                console.log('todosListReactive',todosListReactive)
            } else {
                return
            }
        }
        
        return {
            title,
            description,
            todosListReactive,
            todosList,
            addTodo
        }
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

.btn-active{
    background-color: rgb(147, 47, 255);
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
        &:hover{
        border: 4px solid #fff;
        background-color: rgb(123, 0, 255);
    }
    }
    &:hover{
        border: 7px solid #fff;
        background-color: rgb(123, 0, 255);
    }
}
.todo{
    &-list{
        background-color: rgb(35, 35, 35);
        border-radius: 8px;
        padding: 10px;
}
&-item{
    background-color: rgb(132, 0, 255);
    border-radius: 8px;
    display: flex;
    column-gap: 10px;
    height: 50px;
    align-items: center;
    padding: 5px;
    margin-top: 10px;
}
}
.flex{
    display: flex;
}
</style>
