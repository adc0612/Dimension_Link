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
            <Modal v-if="showModalSas" @close="showModalSas = false">
                <h3 slot="header">
                    Warning!
                    <i class="closeModalBtn fas fa-times" @click="showModalSas = false"></i>
                </h3>
                <div slot="body">
                    Please type SAS Code
                </div>
            </Modal>
            <Modal v-if="showModalDebug" @close="showModalDebug = false">
                <h3 slot="header">
                    Warning!
                    <i class="closeModalBtn fas fa-times" @click="showModalDebug = false"></i>
                </h3>
                <div slot="body">
                    Debug code should be in numeric
                </div>
            </Modal>
			<div class="item_wrap">
				<span class="item_text">Job Number</span>
				<input type="text" v-model="jobNumTxt" name="JOBNUM" id="JOBNUM" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<span class="item_text">Debug CODE</span>
				<input type="number" v-model="debugCodeTxt" name="DebugCode" id="DebugCode" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<span class="item_text">Language</span>
				<input type="text" v-model="languageCodeTxt" name="LanguageCode" id="LanguageCode" value="" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<span class="item_text">Custom Option</span>
				<input type="text" v-model="customOptTxt" name="COP" id="COP" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<span class="item_text">Test ID</span>
				<input type="text" v-model="testIDCodeTxt" name="testID" id="testID" v-on:keyup.enter="submitForm">
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
            <div class="select_box">
                <v-select
                label="id"
                @input="setActiveScriptingServer"
                :options="scriptingServerList"
                :value="activeScriptingServer" 
                class="select_box"
                placeholder="Select a Scripting Server"></v-select>
            </div> 
          </div>
          <div class="submit_but_wrap">
              <button v-on:click="submitForm">Submit</button>
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
        testIDCodeTxt: "",
        showModalSas: false,
        showModalDebug: false,
        regex: /[0-9]+/,
      }
    },
    computed: {
        ...mapState ({
            // activeClusterObject: 'activeCluster',
            // activeGenValObject: 'activeGenVal',
            // activeRsValObject: 'activeRsVal',
            }),
        ...mapGetters({
            clusterList: 'getClusterList',
            genValList: 'getGenValList',
            rsValList: 'getRsValList',
            scriptingServerList: 'getScriptingServerList',
            activeCluster: 'getActiveCluster',
            activeGenVal: 'getActiveGenVal',
            activeRsVal: 'getActiveRsVal',
            activeScriptingServer: 'getActiveScriptingServer',
            })
    },
    methods: {
        ...mapMutations({
            setActiveCluster: 'setActiveCluster',
            setActiveGenVal: 'setActiveGenVal',
            setActiveRsVal: 'setActiveRsVal',
            setActiveScriptingServer: 'setActiveScriptingServer',
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
                this.showModalSas = !this.showModalSas;
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
            this.testIDCodeTxt = '';
        },
        submitForm(){
            let sasCode = this.sasCodeTxt.trim();
            let jobNumCode = this.jobNumTxt.trim();
            let debugCode = this.debugCodeTxt.trim();
            let languageCode = this.languageCodeTxt.trim();
            let customOptCode = this.customOptTxt.trim();
            let testIDCode = this.testIDCodeTxt.trim();
            if (this.sasCodeTxt == '') {
                this.showModalSas = !this.showModalSas;
            }else if( (debugCode != '') && (!this.regex.test(this.debugCodeTxt))) {
                this.showModalDebug = !this.showModalDebug;
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
                if (testIDCode == ''){
                    testIDCode = "{패널ID}";
                }
                if (sasCodeLeng>3 && sasCodeLeng<16){
                    this.$store.commit('addOneItem',sasCode);
                }
                this.submitFunc(sasCode,jobNumCode,debugCode,languageCode,customOptCode,testIDCode);
            //      this.$store.commit('setSasCode',sasCode);
            // this.$store.commit('setJobNumCode',jobNumCode);
            // this.$store.commit('setDebugCode',debugCode);
            // this.$store.commit('setLanguageCode',languageCode);
            // this.$store.commit('setCustomOptCode',customOptCode);
                this.clearInput();
            }
        },
        submitFunc(sasCode,jobNumCode,debugCode,languageCode,customOptCode,testIDCode){
            this.$store.commit('setSasCode',sasCode);
            this.$store.commit('setJobNumCode',jobNumCode);
            this.$store.commit('setDebugCode',debugCode);
            this.$store.commit('setLanguageCode',languageCode);
            this.$store.commit('setCustomOptCode',customOptCode);
            this.$store.commit('setTestIDCode',testIDCode);
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