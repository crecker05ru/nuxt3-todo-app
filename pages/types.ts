import type { Ref, ReactiveEffect } from 'vue';
import type { Todo } from '../store/todo/types';

export interface MainPagePropData {

}

export interface TodoArray {

}

export interface AuthPageProps {
    data: MainPagePropData | null
}

export interface MainPageInstance {
    title: Ref<string>
    description: Ref<string>
    todosListReactive: Todo[];
    todosList: Array<Todo>,
    addTodo: () => void
    deleteTodo: (id: number) => void
    toAuth: () => void,
}
