<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <InputForm class="inputForm_wrap" :class="{inputForm_wrap_hd:!inputFormStatus}"></InputForm>
    <ReferenceList class="referenceList_wrap" :class="{referenceList_wrap_hd:!referenceListStatus}"></ReferenceList>
    <UsefulLinkList class="usefulLinkList_wrap" :class="{usefulLinkList_wrap_hd:!usefulLinkListStatus}"></UsefulLinkList>
    <SasCodeList class="sasCodeList_wrap" :class="{sasCodeList_wrap_hd:!sasCodeListStatus}"></SasCodeList>
    <MainLinkList class="mainLinkList_wrap shadow"></MainLinkList>
  </div>
</template>

<script>
import Header from './Header'
import InputForm from './InputForm'
import ReferenceList from './ReferenceList'
import UsefulLinkList from './UsefulLinkList'
import SasCodeList from './SasCodeList'
import MainLinkList from './MainLinkList'
import {mapGetters, mapMutations} from 'vuex';
import ClickOutside from 'vue-click-outside'

export default {
  data(){
    return{
    }
  },
  computed: {
        ...mapGetters({
               inputFormStatus: 'getInputFormStatus',
               referenceListStatus: 'getReferenceListStatus',
               sasCodeListStatus: 'getSasCodeListStatus',
               usefulLinkListStatus: 'getUsefulLinkListStatus',
            }),
        ...mapMutations({
          changeReferenceListStatus: 'changeReferenceListStatus',
          // changeSasCodeListStatus: 'changeSasCodeListStatus',
          changeUsefulLinkListStatus: 'changeUsefulLinkListStatus',
        }),
    },
    components: {
      Header,
      InputForm,
      ReferenceList,
      UsefulLinkList,
      SasCodeList,
      MainLinkList,
    },
     directives: {
        ClickOutside
    }
}
</script>

<style scoped>
  .wrap{
    max-width: 1100px;
    min-width: 500px;
    margin: 0 auto;
    overflow: auto;
  }
  .header_wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    z-index: 99;
    background-color:#fff;
  }
  .mainLinkList_wrap{
    padding: 50px 30px 20px;
    margin-top: 70px;
  }
  .inputForm_wrap::before, .referenceList_wrap::before, .usefulLinkList_wrap::before{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color:#000;
        content: '';
        opacity: 0.9;
        z-index: 99;
    }
  .sasCodeList_wrap{
    width: 280px;
    padding: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    top: 70px;
    bottom: 0;
    left: 0;
    visibility: visible;
    opacity: 1;
    z-index:99;
    background-color:#fff;
  }  
  .inputForm_wrap, .sasCodeList_wrap, .referenceList_wrap, .usefulLinkList_wrap{
    visibility: visible;
    opacity: 1;
    /* transition: visibility 1s, opacity 0.4s linear; */

  }
  .inputForm_wrap_hd, .sasCodeList_wrap_hd, .referenceList_wrap_hd, .usefulLinkList_wrap_hd{
      visibility: hidden;
      opacity: 0;
      z-index:0;
  }
  

  @media only screen and (max-width: 450px) {
      .wrap{
        min-width: 300px;
      }
      .mainLinkList_wrap{
        padding: 20px 30px;
      }
      .sasCodeListStatus{
        width: 70%;
      }
    }
</style>