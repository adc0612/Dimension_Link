<template>
  <div>
    <div class="header_box">
      <i class="fas fa-bars menu_btn" @click="changeSasCodeListStatus"></i>
      <h1 class="header_title">DIMENSION LINK</h1>
      <i class="fas fa-info-circle refer_btn" @click="changeReferenceListStatus"></i>
      <i class="fas fa-link link_btn" @click="changeUsefulLinkListStatus"></i>
      <i class="fas fa-home back_btn" @click="changeInputFormStatus"></i>
      <!-- <i class="fas fa-arrow-circle-left back_btn"></i> -->
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
    computed: {
        ...mapGetters({
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
  
  .header_title{
    line-height: 50px;
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 2px;
    color: #0d3593;
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
  }
  .link_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right: 55px;
  }
  .back_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    top: 0;
    right: 5px;
  }
  .header_box::after {
    content: "";
    clear: both;
  }
  /* @media only screen and (max-width: 700px) {
    .menu_btn{
      opacity: 1;
      visibility: visible;
    }
  } */
</style>