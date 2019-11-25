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
				<input type="text" v-model="sasCodeTxt" name="SASCODE" id="SASCODE" v-on:keyup.enter="submitForm">
			</div>
            <Modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">
                    Warning!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>
                <div slot="body">
                    <span v-show="modaltxt1">Please type SAS Code </span>
                    <span v-show="modaltxt2">Debug code should be in numeric</span>
                </div>
            </Modal>
			<div class="item_wrap">
				<span class="item_text">Job Number</span>
				<input type="text" v-model="jobNumTxt" name="JOBNUM" id="JOBNUM">
			</div>
			<div class="item_wrap">
				<span class="item_text">Debug CODE</span>
				<input type="number" v-model="debugCodeTxt" name="DebugCode" id="DebugCode">
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
          <div class="submit_but_wrap">
              <button>Submit</button>
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
        jobNumTxt: "",
        debugCodeTxt: "",
        languageCodeTxt: "",
        customOptTxt: "",
        showModal: false,
        modaltxt1: true,
        modaltxt2: false,
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
                this.modaltext1 = true;
                this.modaltext2 = false;
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
            this.jobNumTxt = '';
            this.debugCodeTxt = '';
            this.languageCodeTxt = '';
            this.customOptTxt = '';
        },
        submitForm(){
            let sasCode = this.sasCodeTxt.trim();
            let jobNumCode = this.jobNumTxt.trim();
            let debugCode = this.debugCodeTxt.trim();
            let languageCode = this.languageCodeTxt.trim();
            let customOptCode = this.customOptTxt.trim();
            if (this.sasCodeTxt == '') {
                this.modaltext1 = true;
                this.modaltext2 = false;
                this.showModal = !this.showModal;
            }else if(this.debugCodeTxt == '') {
                this.modaltext1 = false;
                this.modaltext2 = true;
                this.showModal = !this.showModal;
            }else{
                
                let sasCodeLeng = sasCode.length;

                if (debugCode == ''){
                    debugCode = 5
                    this.$store.commit('setDebugCode',debugCode)
                }else{
                    this.$store.commit('setDebugCode',debugCode)
                }
                if (languageCode != ''){
                    languageCode = "&lang=" + languageCode;
                }
                if (customOptCode != ''){
                    customOptCode = "&"+ customOptCode;
                }
                if (sasCodeLeng>3 && sasCodeLeng<16){
                    this.$store.commit('addOneItem',sasCode);
                }
                this.$store.commit('setSasCode',sasCode);
                this.$store.commit('setJobNumCode',jobNumCode);
                this.$store.commit('setDebugCode',debugCode);
                this.$store.commit('setLanguageCode',languageCode);
                this.$store.commit('setCustomOptCode',customOptCode);
                this.clearInput();
            }
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