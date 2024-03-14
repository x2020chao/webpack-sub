<template>
  <template v-for="item in props.menu">
    <template v-if="item.children">
      <el-sub-menu :index="item.label">
        <template #title>{{ item.label }}</template>
        <Menu :menu="item.children" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.label" @click="jump(item.router)">{{ item.label }}</el-menu-item>
    </template>
  </template>
</template>

<script setup>
import Menu from './Menu.vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()

const jump = (url) => {
  router.push(url)
}
</script>