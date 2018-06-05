<template>
    <div class="nameToMail">
      <form id="uploadFile">
        <input type="file" name="file" id="file" @change="toUploadFiles">
      </form>
      <img src="static/images/name2mail.png" alt="" class="example-img">
    </div>
</template>

<script>
  import { uploadExcel,downloadExcel } from "../api/api";

  export default {
    name: "nameToMail",
    methods:{
      toUploadFiles() {
        console.log()
        let form = document.querySelector('#uploadFile'),
            fd = new FormData(form);
        uploadExcel(fd,'name2mail').then(res=>{
          if(res.data.code === 2000) {
            window.location.href = window.location.origin + res.data.result;

          }
        })

      }
    }
  }
</script>

<style scoped lang="less">
  .nameToMail {
    text-align: center;
    padding: 100px 0 0 0;
    .example-img {
      margin-top: 100px ;
    }
  }
</style>
