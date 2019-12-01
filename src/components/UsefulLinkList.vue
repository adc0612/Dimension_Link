<template>
  <div>
    <h2>Useful Link Address</h2>
    <div class="link_addr_box" v-for="(item) in usefulServerLinkList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <a class="link_addr" target="_blank" :href="activeScriptingServer.scriptingNet+item.value">{{activeScriptingServer.scriptingNet+item.value}}</a>
    </div>
    <div class="link_addr_box" v-for="(item) in usefulLinkList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <a class="link_addr" target="_blank" :href="item.value">{{item.value}}</a>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';  
export default {
  data(){
    return{
    }
  },
  computed: {
        ...mapGetters({
                activeScriptingServer: 'getActiveScriptingServer',
                usefulServerLinkList: 'getUsefulServerLinkList',
                usefulLinkList: 'getUsefulLinkList',
            }),
        ...mapMutations({

        }),
    },
}
</script>

<style>

</style>