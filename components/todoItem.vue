<template>
                    <div class="todo-item">
                        <div class="todo-title"><span class="todo-article">ID:</span> {{data.id}}</div>
            <div class="todo-title"><span class="todo-article">Title:</span> {{data.title}}</div>
            <div class="todo-content"><span class="todo-article">Description:</span>  {{data.description}}</div>
            <span class="todo-article">Done</span><input type="checkbox" class="todo-checkbox" v-model="checked" />
            <button class="btn-delete" @click="deleteTodo">Delete</button>
                
        </div>
</template>
<script>
import { defineComponent,ref } from '@vue/composition-api'

export default defineComponent({
    name: 'todoItem',
    emits: ['delete'],
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    setup(props,ctx) {
        const checked = ref(props.data.done)
        
        const deleteTodo = () => {
            ctx.emit('delete',props.data.id)
        }

        return {
            checked,
            deleteTodo
            }
    },
})
</script>
<style lang="scss" scoped>
.todo{
    &-article{
        font-size: 18px;
        font-weight: 700;
    }
}
.btn{
    &-delete{
        background-color: #000;
    }
}
</style>
