<template>
  <ion-content>
    <ion-menu side="end" menuId="dlp-details" contentId="dlp-main">
      <ion-toolbar color="primary">
        <ion-title>Knowledge DLP</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <ion-item
            v-for="(article, index) in dlpArticleList"
            lines="none"
            :key="index"
            v-on:click="handleClick(article.url)">
            <ion-label>{{ article.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <div v-bind:innerHTML="markedown"></div>
    <ion-router-outlet id="dlp-main"></ion-router-outlet>
  </ion-content>
</template>
<script lang="ts">
import {
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {marked} from "marked";
export default defineComponent({
  name: "DLPComponent",
  components: {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      dlpArticleList: [],
      markedown:""
    };
  },
  created() {
    fetch("assets/article/dlp.json").then(async (response) => {
      this.dlpArticleList = await response.json();
    });
  },
  methods: {
    handleClick(selectedURL:string){
      if(selectedURL!=""){
        let res = ""; 
        fetch("assets/article/dlp/" + selectedURL).then(async (response) => {
          res = await response.text();
          this.markedown = marked(res, { sanitize: false });
        });
      }else{
        this.markedown = "";
      }
    }
  },
});
</script>
