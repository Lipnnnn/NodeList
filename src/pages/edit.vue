<template>
  <PageView>
    <template #header>
      <div class="text-1rem h-56px lh-56px box-border flex items-center justify-between bg-#323233 p-1rem text-#fff">
        <img :src="leftIcon" width="25" height="25" @click="handleBack" >
        <div class="text-#fff" @click="handleSave">保存</div>
      </div>
    </template>
    <div class="overflow-auto h-full bg-[var(--color-bg)] text-[var(--color-text)]">
      <!-- 编辑区 -->
      <div ref="editorRef" class="editor" contenteditable="true" @paste="handlePaste"></div>
    </div>
  </PageView>
</template>

<script setup lang="ts">
import PageView from "../components/PageView.vue";
import { onMounted, ref } from "vue";
import leftIcon from '@/assets/img/left.svg'
import {useRouter} from 'vue-router'
const router = useRouter()

// 编辑器
const editorRef = ref<any>({})
// 监听粘贴事件
function handlePaste(e: any) {
  const clipboardItems = e.clipboardData?.items || []
  let handled = false

  for (const item of clipboardItems) {
    if (item.type.startsWith('image/')) {
      e.preventDefault() // 阻止默认粘贴行为
      const file = item.getAsFile()
      const url = URL.createObjectURL(file)

      // 插入图片到光标位置
      insertImageAtCursor(url)
      handled = true
    }
  }

  // 如果没有图片，就不阻止，让文字正常粘贴
  if (!handled) return
}
// 插入图片到光标位置
function insertImageAtCursor(url: string) {
  const img = document.createElement('img')
  img.src = url
  img.style.maxWidth = '100%'
  img.style.borderRadius = '8px'

  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) {
    editorRef.value.appendChild(img)
    return
  }
  const range = sel.getRangeAt(0)
  range.insertNode(img)

  // 移动光标到图片后面
  range.setStartAfter(img)
  range.setEndAfter(img)
  sel.removeAllRanges()
  sel.addRange(range)
}

// 保存，暂时先存储到localStorage
function handleSave(){
  const html = editorRef.value.innerHTML
  // showToast(`已保存内容长度: ${html.length}`)
  console.log('保存内容:', html)
  // const title = document.title
  // const desc = editorRef.value.innerText
  // const time = Date.now()
  // const id = Number(new Date())
  // const note = {
  //   id,
  //   title,
  //   desc,
  //   time
  // }
  // console.log(note)
}

function handleBack(){
  router.back();
}

onMounted(()=>{
  const html = '你好<div><img src="blob:http://localhost:5173/2e8639ed-b93c-47db-a9a3-785a403d5b19" style="max-width: 100%; border-radius: 8px;"><br></div><div>&lt;div style="color: red"&gt;红色&lt;/div&gt;</div>'
  if(html){
    editorRef.value.innerHTML = html
  }
})

</script>

<style scoped>
.editor {
  height: 100%;
  border: 1px solid #ccc;
  border-top: none;
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 16px;
  line-height: 1.5em;
}
.editor img {
  display: block;
  margin: 8px 0;
}
</style>
