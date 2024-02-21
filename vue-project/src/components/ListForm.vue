<!-- Vue.component('todo-form', {
  data: () => ({
      newTodo: '',
  }),
  methods: {
      onsubmit() {
          this.submitHandler(this.newTodo);
      }
  },
  props: [
      'submitHandler',
  ],
  template: `<form @submit.prevent>
<label for="todo">
<input type="text" id="todo" placeholder="Todo..." v-model="newTodo" @input.prevent="onsubmit">
</label>
</form>`
}) -->

<template>
  <div>
    <form @submit.prevent>
      <label for="todo">
        <input type="text" id="todo" placeholder="Выберите товар..." v-model="newTodo" @input.prevent="onsubmit">
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DiplomaProjectListForm',

  data() {
    return {
      newTodo: '',
    };
  },

  mounted() {

  },

  methods: {
    onsubmit() {
      this.submitHandler(this.newTodo);
    }
  },
  props: [
    'submitHandler',
  ],
};
</script>

<style lang="scss" scoped></style>