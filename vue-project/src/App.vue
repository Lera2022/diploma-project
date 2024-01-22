<!--
A nested tree component that recursively renders itself.
You can double click on an item to turn it into a folder.
-->

<script>
import TreeItem from './components/TreeItem.vue'

const treeData = {
  name: 'Каталог',
  children: [
    {
      name: 'Складская техника',
      url: 'https://deltainzhiniring.ru/sklad/',
      // children: [
      //   {
      //     name: 'Складская техника',
      //     url: 'https://deltainzhiniring.ru/sklad/',
      //   },
      //   {
      //     name: 'Складская техника',
      //     url: 'https://deltainzhiniring.ru/sklad/',
      //   },
      // ]
    },
    {
      name: 'Грузоподъёмное оборудование',
      url: 'https://deltainzhiniring.ru/gruzopodyomnoe/'
    },
    {
      name: 'Станки',
      url: 'https://deltainzhiniring.ru/stanki/'
    },
    {
      name: 'Строительное оборудование',
      url: 'https://deltainzhiniring.ru/stroitelnoe/'
    },
    {
      name: 'Окрасочное оборудование',
      url: 'https://deltainzhiniring.ru/okrasochnoe/'
    },
    {
      name: 'Генераторы и электростанции',
      url: 'https://deltainzhiniring.ru/generatoryi/'
    },
    {
      name: 'Компрессоры воздушные',
      url: 'https://deltainzhiniring.ru/kompressoryi'
    },
    {
      name: 'Сварочное оборудование',
      url: 'https://deltainzhiniring.ru/svarochnoe/'
    },
    {
      name: 'Пневматический инструмент',
      url: 'https://deltainzhiniring.ru/pnevmaticheskoe/'
    },
    {
      name: 'Профессиональное оборудование для общепита',
      url: 'https://deltainzhiniring.ru/kuxonnoe/'
    },
    {
      name: 'Упаковочное и фасовочное оборудование',
      url: 'https://deltainzhiniring.ru/upakovochnoe/'
    },
    {
      name: 'Материалы для гидроизоляции деформационных швов',
      url: 'https://deltainzhiniring.ru/akvastop/'
    },
    {
      name: 'Оборудование для обустройства дорог и парковок',
      url: 'https://deltainzhiniring.ru/parkovochnoe/'
    },
    {
      name: 'Гидравлическое оборудование и инструменты',
      url: 'https://deltainzhiniring.ru/gidravlicheskoe/'
    },
    {
      name: 'Оборудование для автосервиса',
      url: 'https://deltainzhiniring.ru/avtoservis/'
    },
    {
      name: 'Оборудование для клининга',
      url: 'https://deltainzhiniring.ru/sadovaya/'
    },
    {
      name: 'Промышленная вентиляция и отопление',
      url: 'https://deltainzhiniring.ru/ventilyacziya/'
    },
    {
      name: 'Ультразвуковое оборудование',
      url: 'https://deltainzhiniring.ru/ultrazvuk/'
    },
    {
      name: 'Насосное оборудование',
      url: 'https://deltainzhiniring.ru/nasosyi/'
    }
  ]
}

export default {
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    }
  }
}
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}
</style>
