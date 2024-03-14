<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <Menu :menu="menu" />
      </el-menu>
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script setup>
import Menu from '../../components/Menu.vue';
const menu = [
  {
    label: '管理菜单',
    children: [
      {
        label: '一',
        children: [
          {
            label: '应用1',
            router: '/aside/app-one'
          },
          {
            label: '应用2',
            router: '/aside/app-two'
          }
        ]
      },
      {
        label: '二',
        children: [
          {
            label: '应用1',
            router: '/aside/app-one'
          },
          {
            label: '应用2',
            router: '/aside/app-two'
          }
        ]
      }
    ]
  }
]
</script>