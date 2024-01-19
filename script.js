Vue.component('TreeItem', { // necessary for self-reference
  props: {
      model: Object
  },
  data() {
      return {
          isOpen: false
      }
  },
  computed: {
      isFolder() {
          return this.model.children && this.model.children.length
      }
  },
  methods: {
      toggle() {
          if (this.isFolder) {
              this.isOpen = !this.isOpen
          }
      },
      changeType() {
          if (!this.isFolder) {
              this.model.children = []
              this.addChild()
              this.isOpen = true
          }
      },
      addChild() {
          this.model.children.push({
              name: 'new stuff'
          })
      }
  },
  template: `
<li>
  <div
    :class="{ bold: isFolder }"
    @click="toggle"
    @dblclick="changeType">
    {{ model.name }}
    <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
  </div>
  <ul v-show="isOpen" v-if="isFolder">
    <!--
      A component can recursively render itself using its
      "name" option (inferred from filename if using SFC)
    -->
    <tree-item
      class="item"
      v-for="model in model.children"
      :model="model">
    </tree-item>
    <li class="add" @click="addChild">+</li>
  </ul>
</li>
`
})

new Vue({
    el: '#app',
    name: 'My Tree',
    data: {
        children: [
            { name: 'hello' },
            { name: 'wat' },
            {
                name: 'child folder',
                children: [{
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }]
                }
                ]
            }
        ]
    }
})


// createApp({
//   components: {
//     TreeItem
//   },
//   data() {
//     return {
//       treeData
//     }
//   }
// }).mount('#app')

// items: [ {
//     name: 'Складская техника',
//     url: 'https://deltainzhiniring.ru/sklad/',
//     children: [
//         {
//             name: 'Складская техника',
//             url: 'https://deltainzhiniring.ru/sklad/',
//         },
//         {
//             name: 'Складская техника',
//             url: 'https://deltainzhiniring.ru/sklad/',
//         },
//     ]
// },
// {
//     name: 'Грузоподъёмное оборудование',
//     url: 'https://deltainzhiniring.ru/gruzopodyomnoe/'
// },
// {
//     name: 'Станки',
//     url: 'https://deltainzhiniring.ru/stanki/'
// },
// {
//     name: 'Строительное оборудование',
//     url: 'https://deltainzhiniring.ru/stroitelnoe/'
// },
// {
//     name: 'Окрасочное оборудование',
//     url: 'https://deltainzhiniring.ru/okrasochnoe/'
// },
// {
//     name: 'Генераторы и электростанции',
//     url: 'https://deltainzhiniring.ru/generatoryi/'
// },
// {
//     name: 'Компрессоры воздушные',
//     url: 'https://deltainzhiniring.ru/kompressoryi'
// },
// {
//     name: 'Сварочное оборудование',
//     url: 'https://deltainzhiniring.ru/svarochnoe/'
// },
// {
//     name: 'Пневматический инструмент',
//     url: 'https://deltainzhiniring.ru/pnevmaticheskoe/'
// },
// {
//     name: 'Профессиональное оборудование для общепита',
//     url: 'https://deltainzhiniring.ru/kuxonnoe/'
// },
// {
//     name: 'Упаковочное и фасовочное оборудование',
//     url: 'https://deltainzhiniring.ru/upakovochnoe/'
// },
// {
//     name: 'Материалы для гидроизоляции деформационных швов',
//     url: 'https://deltainzhiniring.ru/akvastop/'
// },
// {
//     name: 'Оборудование для обустройства дорог и парковок',
//     url: 'https://deltainzhiniring.ru/parkovochnoe/'
// },
// {
//     name: 'Гидравлическое оборудование и инструменты',
//     url: 'https://deltainzhiniring.ru/gidravlicheskoe/'
// },
// {
//     name: 'Оборудование для автосервиса',
//     url: 'https://deltainzhiniring.ru/avtoservis/'
// },
// {
//     name: 'Оборудование для клининга',
//     url: 'https://deltainzhiniring.ru/sadovaya/'
// },
// {
//     name: 'Промышленная вентиляция и отопление',
//     url: 'https://deltainzhiniring.ru/ventilyacziya/'
// },
// {
//     name: 'Ультразвуковое оборудование',
//     url: 'https://deltainzhiniring.ru/ultrazvuk/'
// },
// {
//     name: 'Насосное оборудование',
//     url: 'https://deltainzhiniring.ru/nasosyi/'
// }
// ],
// show:false,