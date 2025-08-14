<template>
  <PageView>
    <template #header>
      <div class="text-1rem h-56px lh-56px box-border flex items-center justify-between bg-#323233 p-1rem">
        <div></div>
        <div class="text-center font-bold text-18px text-#fff">笔记</div>
        <img v-if="!isDark" width="25" height="25" :src="darkThemeIcon" @click="handleSetTheme(true)" />
        <img v-else width="25" height="25" :src="lightThemeIcon" @click="handleSetTheme(false)" />
      </div>
    </template>
    <div class="overflow-auto h-full bg-[var(--color-bg)] text-[var(--color-text)] p-0.5rem box-border">
      <van-empty v-if="noteList.length === 0" class="h-full"
        image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" image-size="80"
        description="快去添加笔记吧～" />
      <div v-else>
        <div v-for="item in noteList" :key="item.id" class="list-box mb-10px">
          <div class="text-18px font-bold">{{item.title}}</div>
          <div class="text-14px text-#999 mt-10px">{{item.desc}}</div>
          <div class="text-14px text-#999 mt-10px">{{new Date(item.time).toLocaleString()}}</div>
        </div>
      </div>
      <div class="bg-#F6C445 rounded-full w-56px h-56px flex items-center justify-center shadow fixed bottom-2rem right-1rem" @click="goToEdit">
        <van-icon name="plus" color="#fff" size="1.8rem" class="font-bold" />
      </div>
    </div>
  </PageView>
</template>

<script setup lang="ts">
import PageView from "../components/PageView.vue";
import { ref } from "vue";
import { setTheme } from "../ts/theme";
import darkThemeIcon from "@/assets/img/dark-theme.svg";
import lightThemeIcon from "@/assets/img/light-theme.svg";
import {useRouter} from 'vue-router'

const router = useRouter()

const isDark = ref(document.documentElement.classList.contains("dark"));
const handleSetTheme = (val: boolean) => {
  isDark.value = val;
  setTheme(val ? "dark" : "light");
};

const noteList = ref<any>([
  {
    id: 1,
    title: '笔记1',
    desc: '这是笔记1的描述',
    time: 1755159391196
  },
  {
    id: 1,
    title: '笔记1',
    desc: '这是笔记1的描述',
    time: 1755159391196
  }
])

function goToEdit(){
  router.push({
    path: '/edit',
    query: {
      id: 1
    }
  })
}


</script>

<style scoped>
.list-box{
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--color-bg-list);
}
</style>
