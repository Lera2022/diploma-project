<script>
export default {
  name: 'TreeItem', // necessary for self-reference
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
  }
}
</script>

<template>
  <li>
    <!-- <img src="../assets/icon_hamburger.png" alt="иконка бургер-меню" width="18px" height="21px"> -->
    <!-- <a href="{{ model.url }}"></a> -->
    <a class=" list_item" :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType" :href="model.url"
      target="_blank">
      <img class="menu_item" :src="model.img" :alt="model.name">
      {{ model.name }}

      <!-- <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span> -->
    </a>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem class="item" v-for=" model  in  model.children " :model="model">
      </TreeItem>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
  </li>
</template>
