<template>
  <div>
    <ListForm :submit-handler="submitHandler" />
    <div>
      <div v-for="(todo, idx) in newTodoList">
        {{ todo.name }}
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
      todos: [{ name: 'гидравлическая тележка (рохля) самоходная', url: 'https://deltainzhiniring.ru/sklad/telezhki/samoxodnyie/' }, { name: 'кипятильник', url: 'https://deltainzhiniring.ru/kuxonnoe/teplovoe/kipyatilniki/' }, { name: 'листогибочный станок', url: 'https://deltainzhiniring.ru/stanki/listogibyi/' }, { name: 'генератор бензиновый', url: 'https://deltainzhiniring.ru/generatoryi/benzinovyie/' }],
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

<style lang="scss" scoped>
.hidden {
  visibility: hidden;
}
</style>