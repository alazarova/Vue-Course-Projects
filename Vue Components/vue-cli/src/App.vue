<template>
<div class="container">
       <app-server-status></app-server-status>
  <app-header></app-header>
  <div class="row">
    <app-servers></app-servers>
    <app-server-details></app-server-details>
  </div>
  <app-footer></app-footer>
</div>
</template>

<script>
import ServerStatus from './Home.vue'
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer,
    'app-server-status': ServerStatus
  }
}

</script>

<style>
.container{
      display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
