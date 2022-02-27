<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    :default-active="defaultActive"
    text-color="#fff"
    unique-opened
    router
  >
    <el-sub-menu :index="item.id" v-for="(item, index) in menus" :key="item.id">
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="'/' + it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
      >
        <template #title>
          <el-icon>
            <component :is="icon"></component>
          </el-icon>
          <span>{{ it.authName }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from '@/api/menu'
import { ref } from 'vue'

const iconList = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const icon = ref('menu')
const defaultActive = ref(sessionStorage.getItem('path') || '/users')
const menus = ref([])
const initMenuList = async () => {
  menus.value = await menuList()
}
initMenuList()

const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
</script>

<style></style>
