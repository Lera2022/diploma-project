<!--
A nested tree component that recursively renders itself.
You can double click on an item to turn it into a folder.
-->

<script>
import TreeItem from './components/TreeItem.vue'
import ListsItem from './components/ListsItem.vue'

const treeData = {
  name: 'Каталог',
  img: './icon_hamburger.png',
  children: [
    {
      name: 'Складская техника',
      url: 'https://deltainzhiniring.ru/sklad/',
      img: './sklad.png'
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
      url: 'https://deltainzhiniring.ru/gruzopodyomnoe/',
      img: './gruz.png'
    },
    {
      name: 'Станки',
      url: 'https://deltainzhiniring.ru/stanki/',
      img: './stanki.png'
    },
    {
      name: 'Строительное оборудование',
      url: 'https://deltainzhiniring.ru/stroitelnoe/',
      img: './stroy.png'
    },
    {
      name: 'Окрасочное оборудование',
      url: 'https://deltainzhiniring.ru/okrasochnoe/',
      img: './okraska.png'
    },
    {
      name: 'Генераторы и электростанции',
      url: 'https://deltainzhiniring.ru/generatoryi/',
      img: './generatory.png'
    },
    {
      name: 'Компрессоры воздушные',
      url: 'https://deltainzhiniring.ru/kompressoryi',
      img: './kompressory.png'
    },
    {
      name: 'Сварочное оборудование',
      url: 'https://deltainzhiniring.ru/svarochnoe/',
      img: './svarochnoe.png'
    },
    {
      name: 'Пневматический инструмент',
      url: 'https://deltainzhiniring.ru/pnevmaticheskoe/',
      img: './pnevmatika.png'
    },
    {
      name: 'Профессиональное оборудование для общепита',
      url: 'https://deltainzhiniring.ru/kuxonnoe/',
      img: './obschepit.png'
    },
    {
      name: 'Упаковочное и фасовочное оборудование',
      url: 'https://deltainzhiniring.ru/upakovochnoe/',
      img: './upakovka.png'
    },
    {
      name: 'Материалы для гидроизоляции деформационных швов',
      url: 'https://deltainzhiniring.ru/akvastop/',
      img: './materialy.png'
    },
    {
      name: 'Оборудование для обустройства дорог и парковок',
      url: 'https://deltainzhiniring.ru/parkovochnoe/',
      img: './dorogi.png'
    },
    {
      name: 'Гидравлическое оборудование и инструменты',
      url: 'https://deltainzhiniring.ru/gidravlicheskoe/',
      img: './gidravlika.png'
    },
    {
      name: 'Оборудование для автосервиса',
      url: 'https://deltainzhiniring.ru/avtoservis/',
      img: './avtoservis.png'
    },
    {
      name: 'Оборудование для клининга',
      url: 'https://deltainzhiniring.ru/sadovaya/',
      img: './klining.png'
    },
    {
      name: 'Промышленная вентиляция и отопление',
      url: 'https://deltainzhiniring.ru/ventilyacziya/',
      img: './vent.png'
    },
    {
      name: 'Ультразвуковое оборудование',
      url: 'https://deltainzhiniring.ru/ultrazvuk/',
      img: './ultrazv.png'
    },
    {
      name: 'Насосное оборудование',
      url: 'https://deltainzhiniring.ru/nasosyi/',
      img: './nasosy.png'
    }
  ]
}

export default {
  components: {
    TreeItem,
    ListsItem
  },
  data() {
    return {
      treeData
    }
  }
}
</script>

<template>
  <div class="burger">

    <ul>
      <TreeItem class="item" :model="treeData"></TreeItem>
    </ul>

    <ListsItem />
  </div>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
  color: #fff;

  /* padding: 0 40px; */
}

.menu_item {
  margin-right: 10px;

}



.burger {
  /* display: flex;
  gap: 20px; */
  /* background-image: url(../public/icon_hamburger.png);
  background-repeat: no-repeat;
  background-position-y: center; */
  background-color: #2e7182;
  width: 270px;
  height: 42px;
  /* padding-left: 38px; */
}

.list_item {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 13px;
  margin-left: 15px;
  width: 270px;
  height: 44px;
  border-bottom: 1px #eee black;
}
</style>
