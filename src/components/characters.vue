<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {bands, type Band} from "../data/charalist";
import {ref, onMounted} from "vue";
const b = ref<Band[]>([]);
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

gsap.registerPlugin(ScrollTrigger);
const idIndex = bands.map((value) => {
  let index = 0;
  const result = value.chara.map(()=>{
    const result = `#chara-${value.id}-${index}`
    index++
    return result
  })
  return [`#logo-${value.id}`, result].flat()
});

onMounted(async()=>{
  let tls: Array<gsap.core.Timeline> = [];
  idIndex.forEach((value, logoIndex) => {
    const tl = gsap.timeline({repeat:0, scrollTrigger:{trigger: value[0], start:'bottom 80%', end: 'bottom 80%'}});
    tls.push(tl);
    value.forEach((value) => {

      tls[logoIndex].from(`${value}`, {y: -20,opacity: 0, duration: 0.75}, '-=0.5');
    })
  });
  // for(let i = 0; i < bands.length; i++){
  //   b.value.push({
  //     band: bands[i].band,
  //     logo: bands[i].logo,
  //     chara: []
  //   });
  //   for(let m = 0;m < bands[i].chara.length; m++){
  //     b.value[i].chara.push(bands[i].chara[m])
  //     await sleep(100)
  //   }
  // }
})

</script>

<template>
<div class="w-full flex flex-col items-center" id="scrollTriggerStart">
  <div>
    <h1>Characters</h1>
  </div>
  <div v-for="band in bands" class="flex flex-col items-center">
    <img :src="band.logo" :id="`logo-${band.id}`" class="w-32 mt-5">
    <div class="grid grid-cols-5 justify-center gap-2">
      <div v-for="(chara, index) in band.chara" :id="`chara-${band.id}-${index}`" class="relative h-40 max-w-20 md:h-72 md:max-w-32" >
        <a v-if="chara.enable" class="w-full h-full" :href="chara.link">
          <div class="w-full h-full overflow-hidden backdrop-blur-sm bg-opacity-50 rounded-md" :style="{backgroundColor: chara.color}">
            <img :src="chara.image" class="charabox h-full object-cover" />
          </div>
          <div class="scale-75 md:scale-100 absolute max-w-full md:max-w-full bottom-0 left-0 bg-white bg-opacity-50 backdrop-blur-sm rounded-md p-1 ">
            <p>{{chara.name}}</p>
          </div>
        </a>
        <div v-else class="w-full h-full">
          <div class="w-full h-full overflow-hidden backdrop-blur-sm bg-opacity-50 rounded-md" :style="{backgroundColor: chara.enable? chara.color : 'gray'}">
            <img :src="chara.image" class="h-full object-cover" style="filter: grayScale(100%);"/>
          </div>
          <div class="scale-75 md:scale-100 absolute max-w-full md:max-w-full bottom-0 left-0 bg-white bg-opacity-50 backdrop-blur-sm rounded-md p-1 ">
            <p>{{chara.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.charabox {
  transition: transform 0.5s;
}
.charabox:hover {
  transform: scale(1.1);
  transition: transform 0.5s;
}

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
