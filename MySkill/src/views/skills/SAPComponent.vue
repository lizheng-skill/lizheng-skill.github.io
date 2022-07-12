<template>
  <ion-content>
    <ion-menu side="end" menuId="sap-details" contentId="sap-main">
      <ion-toolbar color="primary">
        <ion-title>SAP Basis</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list :items="sapArticleList">
          <ion-item v-for="(article, index) in sapArticleList" lines="none" :key="index" :router-link="article.url" >
            <ion-label>{{ article.title }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="sap-main"></ion-router-outlet>
  </ion-content>
</template>
<script lang="ts">
import {
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent} from 'vue';
export default defineComponent({
  name: 'SAPComponent',
  components: {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  },
  data() {
    var list:any;
    fetch("article/sap.json").then(json => {list = json})
    return {
      sapArticleList: list,
    };
  },
});

</script>
