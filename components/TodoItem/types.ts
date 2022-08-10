import type { Ref, ComputedRef } from 'vue';
import type { Todo } from '../../store/todo/types'

export type TodoItemPropData = Todo;

export interface TodoItemProps {
    data: TodoItemPropData | null
}

export interface TodoItemInstance {
    isChecked: Ref<boolean>;
    handleDeleteBtnClick: () => void;
}
