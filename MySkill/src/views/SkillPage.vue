@IonicPage()
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary" menu="main-manu"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button color="secondary" auto-hide="false" :menu="$route.params.id.toLowerCase()+'-details'"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <component v-bind:is="currentSkillComponent"></component>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import DLPComponent from "./skills/DLPComponent.vue";
import EDIComponent from "./skills/EDIComponent.vue";
import IonicComponent from "./skills/IonicComponent.vue";
import MFAComponent from "./skills/MFAComponent.vue";
import RPAComponent from "./skills/RPAComponent.vue";
import SAPComponent from "./skills/SAPComponent.vue";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
export default defineComponent({
  name: 'SkillPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    DLPComponent,
    EDIComponent,
    IonicComponent,
    MFAComponent,
    RPAComponent,
    SAPComponent
  },
  computed:{
    currentSkillComponent() {
      return this.$route.params.id+"Component";
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
