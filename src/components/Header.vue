<template>
  <div>
    <div class="header_box shadow">
      <i class="fas fa-bars menu_btn" @click="changeSasCodeListStatus"></i>
      <h1 class="header_title">DIMENSION LINK</h1>
      <i class="fas fa-info-circle refer_btn" @click="changeReferenceListStatus"></i>
      <i class="fas fa-link link_btn" @click="changeUsefulLinkListStatus"></i>
      <i class="fas fa-home back_btn" @click="changeInputFormStatus"></i>
      <div class="active_val_wrap">
        <span>{{activeSASCode}}</span>
        <span>{{activeCluster.id}}</span>
        <span>{{activeGenVal.id}}</span>
        <span>{{activeScriptingServer.id}}</span>
      </div>
      
      <!-- <i class="fas fa-arrow-circle-left back_btn"></i> -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters({
              activeCluster: 'getActiveCluster',
              activeGenVal: 'getActiveGenVal',
              activeScriptingServer: 'getActiveScriptingServer',
              activeSASCode: 'getSASCode',
            })
    },
    methods: {
      ...mapMutations({
        changeInputFormStatus: 'changeInputFormStatus',
        changeReferenceListStatus: 'changeReferenceListStatus',
        changeSasCodeListStatus: 'changeSasCodeListStatus',
        changeUsefulLinkListStatus: 'changeUsefulLinkListStatus',
      })
    },
}
</script>

<style scoped>
  .header_box{
    position: relative;
  }
  .header_title{
    line-height: 50px;
    text-align: center;
    font-size: 1.7rem;
    letter-spacing: 2px;
    color: #138c6f;
  }
  .header_title>span{
    font-size:0.9rem;
    letter-spacing: 0;
    color: #002377;
  }
  .menu_btn{
    position: absolute;
    font-size: 30px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    left: 0;
    /* visibility: hidden;
    opacity: 0; */
    transition: visibility 1s, opacity 0.5s linear;
  }
  .refer_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right:110px;
      cursor: pointer;

  }
  .link_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right: 55px;
      cursor: pointer;

  }
  .back_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right: 5px;
      cursor: pointer;

  }
  .header_box::after {
    content: "";
    clear: both;
  }
  .active_val_wrap{
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .active_val_wrap > span{
    font-size: 0.9rem;
    color:#f46354;
    margin-right: 10px;
    font-weight: 700;
  }
  /* @media only screen and (max-width: 700px) {
    .menu_btn{
      opacity: 1;
      visibility: visible;
    }
  } */
  @media only screen and (max-width: 450px) {
      .header_title{
        font-size: 1.2rem;
        margin-right: 60px;
      }
      .active_val_wrap>span{
        font-size: 0.7rem;
      }
      .menu_btn{
        font-size: 25px;
      }
      .refer_btn{
        font-size: 20px;
        right: 85px;
        padding: 0;
      }
      .link_btn{
        font-size: 20px;
        right: 50px;
        padding: 0;
      }
      .back_btn{
        font-size: 20px;
      }
    }
</style>