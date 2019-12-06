<template>
  <div class="wrap">
    <Header class="header_wrap"></Header>
    <InputForm class="inputForm_wrap" v-show="false" :class="{inputForm_wrap_hd:!inputFormStatus}"></InputForm>
    <ReferenceList class="referenceList_wrap" v-show="false" :class="{referenceList_wrap_hd:!referenceListStatus}"></ReferenceList>
    <UsefulLinkList class="usefulLinkList_wrap" :class="{usefulLinkList_wrap_hd:!usefulLinkListStatus}"></UsefulLinkList>
    <SasCodeList class="sasCodeList_wrap" v-show="false" :class="{sasCodeList_wrap_hd:!sasCodeListStatus}"></SasCodeList>
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

        }),
    },
    components: {
      Header,
      InputForm,
      ReferenceList,
      UsefulLinkList,
      SasCodeList,
      MainLinkList,
    }
}
</script>

<style scoped>
  .wrap{
    max-width: 1100px;
    min-width: 700px;
    margin: 0 auto;
  }
  .inputForm_wrap::before, .referenceList_wrap::before{
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
    }
    
  .inputForm_wrap, .sasCodeList_wrap, .referenceList_wrap, .usefulLinkList_wrap{
    visibility: visible;
    opacity: 1;
    transition: visibility 1s, opacity 0.5s linear;
  }
  .inputForm_wrap_hd, .sasCodeList_wrap_hd, .referenceList_wrap_hd, .usefulLinkList_wrap_hd{
      visibility: hidden;
      opacity: 0;
    }
</style>