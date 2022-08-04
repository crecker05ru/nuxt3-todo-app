<template>
                    <div class="todo-item">
            <div class="todo-title">{{data.title}}</div>
            <div class="todo-content">{{data.description}}</div>

                <input type="checkbox" class="todo-checkbox" v-model="checked" />

        </div>
</template>
<script>
import { defineComponent,ref } from '@vue/composition-api'

export default defineComponent({
    name: 'todoItem',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    setup(props,ctx) {
        const checked = ref(props.data.done)

        return {
            checked
            }
    },
})
</script>
