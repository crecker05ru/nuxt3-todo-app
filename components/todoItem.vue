<template>
  <div class="todo-item">
    <div class="todo-item__id">
      <span class="todo-item__label">ID:</span> {{ data.id }}
    </div>
    <div class="todo-item__title">
      <span class="todo-item__label">Title:</span> {{ data.title }}
    </div>
    <div class="todo-item__content">
      <span class="todo-item__label">Description:</span> {{ data.description }}
    </div>
    <div class="todo-content__date">
      <span class="todo-item__label">Created:</span> {{ data.createdAt }}
    </div>
    <span class="todo-item__label">Done</span>
    <input v-model="isChecked" type="checkbox" class="todo-item__checkbox" />
    <button type="button" class="btn-delete" @click="handleDeleteBtnClick">
      Delete
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "todoItem",

  emits: ["delete"],

  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  setup(props, ctx) {
    const isChecked = ref(props.data || props.data.done);

    const handleDeleteBtnClick = () => {
      ctx.emit("delete", props.data.id);
    };

    return {
      isChecked,
      handleDeleteBtnClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-item {
  background-color: rgb(132, 0, 255);
  border-radius: 8px;
  display: flex;
  column-gap: 10px;
  height: 50px;
  align-items: center;
  padding: 5px;
  margin-top: 10px;

  &__list {
    background-color: rgb(35, 35, 35);
    border-radius: 8px;
    padding: 10px;
  }

  &__label {
    font-size: 18px;
    font-weight: 700;
  }
}

.btn {
  &-delete {
    background-color: #000;
  }
}
</style>
