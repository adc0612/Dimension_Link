<template>
  <div class="input_form_wrap">
      <div class="input_form_box">
          <div class="header_wrap">
            <p class="header_text">Samsung Campaign<br>Test Page</p>
            <!-- <p class="header_text"></p> -->
            <p class="week_select_header">Select Week</p>
          </div>
          <div class="textFieldWrap">
			<div class="item_wrap">
				<span class="item_text">SAS CODE</span>
				<input type="text" v-model="sasCodeTxt" name="SASCODE" id="SASCODE" v-on:keyup.enter="addSasCode">
			</div>
            <Modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">
                    Warning!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>
                <div slot="body">
                    Please type SAS Code 
                </div>
            </Modal>
			<div class="item_wrap">
				<span class="item_text">Job Number</span>
				<input type="text" v-model="jobNumberTxt" name="JOBNUM" id="JOBNUM">
			</div>
			<div class="item_wrap">
				<span class="item_text">Debug CODE</span>
				<input type="text" v-model="debugCodeTxt" name="DebugCode" id="DebugCode">
			</div>
			<div class="item_wrap">
				<span class="item_text">Language</span>
				<input type="text" v-model="languageCodeTxt" name="LanguageCode" id="LanguageCode" value="">
			</div>
			<div class="item_wrap">
				<span class="item_text">Custom Option</span>
				<input type="text" v-model="customOptTxt" placeholder="Be sure to use '&'" name="COP" id="COP">
			</div>
          </div>
          <div class="select_wrap">
            <div class="select_box">
                <v-select
                label="id"
                @input="setActiveCluster"
                :options="clusterList"
                :value="activeCluster"
                class="select_box"
                placeholder="Select a Cluster Value"></v-select>
            </div>
            <div class="select_box">
                <v-select
                label="id"
                @input="setActiveGenVal"
                :options="genValList"
                :value="activeGenVal"
                class="select_box"
                placeholder="Select a Gen Value"></v-select>
            </div> 
            <div class="select_box">
                <v-select
                label="id"
                @input="setActiveRsVal"
                :options="rsValList"
                :value="activeRsVal" 
                class="select_box"
                placeholder="Select a Rs Value"></v-select>
            </div> 
          </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';  
import Modal from './common/modal.vue';

export default {
    data () {
      return {
        sasCodeTxt: "",
        jobNumberTxt: "",
        debugCodeTxt: "",
        languageCodeTxt: "",
        customOptTxt: "",
        showModal: false,
      }
    },
    computed: {
        ...mapState ({
            activeClusterObject: 'activeCluster',
            activeGenValObject: 'activeGenVal',
            activeRsValObject: 'activeRsVal',
            }),
        ...mapGetters({
            clusterList: 'getClusterList',
            genValList: 'getGenValList',
            rsValList: 'getRsValList',
            activeCluster: 'getActiveCluster',
            activeGenVal: 'getActiveGenVal',
            activeRsVal: 'getActiveRsVal',
            })
    },
    methods: {
        ...mapMutations({
            setActiveCluster: 'setActiveCluster',
            setActiveGenVal: 'setActiveGenVal',
            setActiveRsVal: 'setActiveRsVal'
        }),
        addSasCode(){
            // if (this.sasCodeTxt !== '') {
            //     let text = this.sasCodeTxt.trim();
            //     let n = text.length;
            //     if (n>3 && n<16){
            //         this.$store.commit('addOneItem',text);
            //     }
            //     this.clearInput();
            // }else{
            // this.showModal = !this.showModal;
            // }
            if (this.sasCodeTxt == '') {
                this.showModal = !this.showModal;
                
            }else{
                let text = this.sasCodeTxt.trim();
                let n = text.length;
                if (n>3 && n<16){
                    this.$store.commit('addOneItem',text);
                }
                this.clearInput();
            }
        },
        clearInput () {
            this.sasCodeTxt = '';
        }
    },
    components: {
      Modal
    }
}
</script>

<style scoped>
    .closeModalBtn{
        float: right;
    }
    .closeModalBtn::after {
    content: "";
    clear: both;
  }
</style>