<template>
  <ion-content>
    <ion-menu side="end" menuId="ionic-details" contentId="ionic-main">
      <ion-toolbar color="primary">
        <ion-title>Knowledge DLP</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <ion-item>What's DLP</ion-item>
          <ion-item>How to DLP</ion-item>
          <ion-item>Where to Get DLP</ion-item>
          <ion-item>DLP Solutions</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="ionic-main"></ion-router-outlet>
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
  name: 'IonicComponent',
  components: {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  }

});
</script>
