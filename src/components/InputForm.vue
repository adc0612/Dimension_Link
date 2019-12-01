<template>
  <div>
      <div class="input_form_box">
          <div class="header_wrap">
            <h1 class="header_txt">Dimension Link</h1>
            <!-- <p class="info_txt">Type SAS Code to start</p> -->
          </div>
          <div class="textFieldWrap">
			<div class="item_wrap" :class="{focus: focusState}">
				<label for="sasCode" class="item_text">SAS CODE</label>
				<input type="text" @focus="focusState=true" @blur="focusState=false" v-model="sasCodeTxt" name="sasCode" id="sasCode" v-on:keyup.enter="submitForm">
				<!-- <input type="text" :value="sasCodeTxt" name="SASCODE" id="SASCODE" v-on:keyup.enter="submitForm"> -->
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
			<div class="item_wrap" :class="{focus: focusState}">
				<label for="jobNum" class="item_text">Job Number</label>
				<input type="text" v-model="jobNumTxt" name="jobNum" id="jobNum" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<label for="debugCode" class="item_text">Debug CODE</label>
				<input type="text" v-model="debugCodeTxt" name="debugCode" id="debugCode" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<label for="languageCode" class="item_text">Language</label>
				<input type="text" v-model="languageCodeTxt" name="languageCode" id="languageCode" value="" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<label for="customOpt" class="item_text">Custom Option</label>
				<input type="text" v-model="customOptTxt" name="customOpt" id="customOpt" v-on:keyup.enter="submitForm">
			</div>
			<div class="item_wrap">
				<label for="testID" class="item_text">Test ID</label>
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
        clusterVal: "",
        showModalSas: false,
        showModalDebug: false,
        regex: /[0-9]+/,

        focusState: false,
      }
    },
    computed: {
        ...mapState ({
            // activeClusterObject: 'activeCluster',
            // activeGenValObject: 'activeGenVal',
            // activeRsValObject: 'activeRsVal',
                // sasCodeTxt: 'sasCode',
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

            activeSasCode: 'getSASCode',
            }),
        
        // sasCodeTxt:{
        //     get (){
        //         return this.$store.state.sasCode
        //     },
        //     set (value) {
        //         this.$store.commit('setSasCode',value);
        //     }
        // }
        
    },
    methods: {
        ...mapMutations({
            setActiveCluster: 'setActiveCluster',
            setActiveGenVal: 'setActiveGenVal',
            setActiveRsVal: 'setActiveRsVal',
            setActiveScriptingServer: 'setActiveScriptingServer',
        }),
        clearInput () {
            this.sasCodeTxt = '';
            this.jobNumTxt = '';
            this.debugCodeTxt = '';
            this.languageCodeTxt = '';
            this.customOptTxt = '';
            this.testIDCodeTxt = '';
        },
        submitForm(){
            console.log(this.sasCodeTxt);
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
                    this.$store.commit('addOneItem',{sasCode,jobNumCode,debugCode,languageCode,customOptCode,testIDCode});
                }
                this.submitFunc(sasCode,jobNumCode,debugCode,languageCode,customOptCode,testIDCode);
                // this.clearInput();
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
    .input_form_box {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 500px;
        height: 550px;
        padding: 60px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #fff;
        opacity: 0.9;
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .item_wrap.focus > label{
        color:blue;
    }
    .closeModalBtn{
        float: right;
    }
    .closeModalBtn::after {
        content: "";
        clear: both;
    }
    .header_txt{
        color:#1428a0;
        font-size: 35px;
    }
    .header_wrap{
        margin-bottom: 20px;
    }
</style>