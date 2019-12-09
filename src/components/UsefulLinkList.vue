<template>
  <div>
    <div class="useful_link_box">
      <i class="fas fa-times close_btn" @click="changeUsefulLinkListStatus"></i>
      <h2>Useful Link Address</h2>
      <div class="useful_link_box_inner1">
        <div class="dimensionNet_addr_box">
          <h3>Dimension Net - Scripting</h3>
          <div class="inner_box">
            <a class="dimensionNet_addr" target="_blank" :href="activeScriptingServer.scriptingNet">{{activeScriptingServer.scriptingNet}}</a>
          </div>
        </div>
        <div class="dimensionNet_addr_box">
          <h3>Dimension Net - Preview</h3>
          <div class="inner_box">
            <a class="dimensionNet_addr" target="_blank" :href="activeCluster.previewNet">{{activeCluster.previewNet}}</a>
          </div>
        </div>
        <div class="dimensionNet_addr_box">
          <h3>Dimension Net - Live</h3>
          <div class="inner_box">
            <a class="dimensionNet_addr" target="_blank" :href="activeCluster.liveNet">{{activeCluster.liveNet}}</a>
          </div>
        </div>
      </div>
      <div>
        <div class="inner_box server_link_box" v-for="(item) in usefulServerLinkList" v-bind:key="item.id">
          <h3>{{item.name}}</h3>
          <a class="link_addr" target="_blank" :href="activeScriptingServer.scriptingNet+item.value">{{activeScriptingServer.scriptingNet+item.value}}</a>
        </div>
        <div class="inner_box link_box" v-for="(item) in usefulLinkList" v-bind:key="item.id">
          <h3>{{item.name}}</h3>
          <a class="link_addr" target="_blank" :href="item.value">{{item.value}}</a>
        </div>
      </div>
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
                activeCluster: 'getActiveCluster',
                activeGenVal: 'getActiveGenVal',
                activeRsVal: 'getActiveRsVal',
                activeScriptingServer: 'getActiveScriptingServer',

                usefulServerLinkList: 'getUsefulServerLinkList',
                usefulLinkList: 'getUsefulLinkList',
            }),
  },
  methods: {
    ...mapMutations({
        changeUsefulLinkListStatus: 'changeUsefulLinkListStatus',

        }),
  }
}
</script>

<style scoped>
    .close_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    /* line-height: 50px; */
    color: rgb(117, 117, 117);
    right:60px;
      cursor: pointer;

  }
  .useful_link_box {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 500px;
        min-width: 300px;
        height: 580px;
        padding: 50px 60px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #fff;
        z-index: 99;
        width: 100%;

        /* background: url("../assets/img/woodPatern.png"); */
    }
    .useful_link_box > h2{
      line-height: 30px;
      font-size: 1.3rem;
      color: #138c6f;
    }
    .useful_link_box_inner1{
      margin-top: 30px;
    }
    .inner_box > a:hover{
      text-decoration: none;
      color: #138c6f;
    }
    .dimensionNet_addr_box > h3{
      color: #292ce8;
    }
    .server_link_box > h3{
      color: #ac3800;
    }
    .link_box:nth-child(1) > h3{
      color: red;
    }
    @media only screen and (max-width: 450px) {
        .useful_link_box{
            height: auto;
            padding: 20px;
            box-sizing: border-box;

        }
        .close_btn{
          right: 20px;
        }
    }
</style>