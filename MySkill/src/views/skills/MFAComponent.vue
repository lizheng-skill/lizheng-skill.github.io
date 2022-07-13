<template>
  <ion-content>
    <ion-menu side="end" menuId="mfa-details" contentId="mfa-main">
      <ion-toolbar color="primary">
        <ion-title>Knowledge DLP</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <ion-item
            v-for="(article, index) in mfaArticleList"
            lines="none"
            :key="index"
            v-on:click="handleClick(article.url)">
            <ion-label>{{ article.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <div v-bind:innerHTML="markedown"></div>
    <ion-router-outlet id="mfa-main"></ion-router-outlet>
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
import { defineComponent} from 'vue';
import {marked} from "marked";
export default defineComponent({
  name: 'MFAComponent',
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
      mfaArticleList: [],
      markedown:""
    };
  },
  created() {
    fetch("assets/article/mfa.json").then(async (response) => {
      this.mfaArticleList = await response.json();
    });
  },
  methods: {
    handleClick(selectedURL:string){
      if(selectedURL!=""){
        let res = ""; 
        fetch("assets/article/mfa/" + selectedURL).then(async (response) => {
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
