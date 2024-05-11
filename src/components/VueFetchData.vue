<script setup lang="ts">
import {marked} from "marked";
import { defineProps, ref, onMounted } from 'vue';
import mxClient from "../utils/mx-space-client";
import {idCharaMap} from "../data/charalist";

const isLoading = ref<boolean|'error'>(true);
const infoMd = ref<string>("");
const props = defineProps<{pageSlug: String}>();
const findChara = (slug: string) => idCharaMap.findIndex((chara) => chara.strid === slug);
const chara = idCharaMap[findChara(props.pageSlug.toString())];
const [client, endpoint] = mxClient();

onMounted(async() => {
  try{
    const info = await fetch(endpoint + `/posts/id${chara.strid}/${chara.strid}`).then((res) => res.json());
    infoMd.value = await marked(info.text);
  } catch (error) {
    isLoading.value = 'error';
  }
  isLoading.value = false;
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div class="mdProse" v-if="infoMd!==''" v-html="infoMd"></div>
    <p class="loading" v-else-if="isLoading === true">Loading...</p>
    <p v-else-if="isLoading === 'error'">エラーが発生しました</p>
    <p v-else>まだ情報がありません</p>
  </Transition>
</template>

<style scoped>
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(0, 40px);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
