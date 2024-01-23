<template>
  <div>
    <ListForm :submit-handler="submitHandler" />
    <div>
      <div v-for="(todo, idx) in newTodoList">
        {{ todo }}
      </div>
    </div>
  </div>
</template>

<script>
import ListForm from './ListForm.vue';

export default {
  name: 'DiplomaProjectListsItem',
  data() {
    return {
      todos: ['Lorem ipsum dolor', 'sit amet, consectetur', 'error et facilis', 'Aliquam beatae deserunt'],
      pattern: ''
    };
  },
  mounted() {
  },
  methods: {
    submitHandler(data) {
      this.pattern = data;
    }
  },
  computed: {
    newTodoList() {
      return this.todos.filter(el => this.pattern ? el.includes(this.pattern) : el);
    }
  },
  components: { ListForm }
};
</script>

<style lang="scss" scoped></style>