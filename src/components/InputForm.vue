<template>
  <div>
      <div class="input_form_box">
        <div class="header_wrap">
            <i class="fas fa-bars menu_btn" @click="changeSasCodeListStatusInput"></i>
            <h1 class="header_txt" @click="hideSasCodeList">Dimension Link</h1>
        </div>
        <SasCodeList class="sasCodeList_inputForm" :class="{sasCodeList_inputForm_hd:!sasCodeListStatusInput}"></SasCodeList>

        <div class="textFieldWrap" @click="hideSasCodeList">
            <div class="item_wrap" :class="{focus: focusState1, active: activeState1}">
            <label for="sasCode" class="item_text">SAS CODE</label>
            <!-- <input type="text" @input="activeState1=true" @focus="focusState1=true" @blur="focusState1=false" v-model="sasCodeTxt" name="sasCode" id="sasCode" v-on:keyup.enter="submitForm"> -->
            <input type="text" @change="activeFunc" @focus="focusState1=true" @blur="focusState1=false" v-model="sasCode" name="sasCode" id="sasCode" v-on:keyup.enter="submitForm" v-focus>
            <!-- <input type="text" @input="activeFunc" @focus="focusState1=true" @blur="focusState1=false" v-model="setSasCodeTemp" name="sasCode" id="sasCode" v-on:keyup.enter="submitForm"> -->
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
            <div class="item_wrap" :class="{focus: focusState2, active: activeState2}">
                <label for="jobNum" class="item_text">FTP Folder Name</label>
                <!-- <input type="text" @input="activeState2=true" @focus="focusState2=true" @blur="focusState2=false" v-model="jobNumCode" name="jobNum" id="jobNum" v-on:keyup.enter="submitForm"> -->
                <input type="text" @input="activeFunc" @focus="focusState2=true" @blur="focusState2=false" v-model="jobNumCode" name="jobNum" id="jobNum" v-on:keyup.enter="submitForm">
            </div>
            <div class="item_wrap" :class="{focus: focusState3, active: activeState3}">
                <label for="debugCode" class="item_text">Debug CODE</label>
                <input type="text" @input="activeFunc" @focus="focusState3=true" @blur="focusState3=false" v-model="debugCode" name="debugCode" id="debugCode" v-on:keyup.enter="submitForm">
            </div>
            <div class="item_wrap" :class="{focus: focusState4, active: activeState4}">
                <label for="languageCode" class="item_text">Language</label>
                <input type="text" @input="activeFunc" @focus="focusState4=true" @blur="focusState4=false" v-model="languageCode" name="languageCode" id="languageCode" value="" v-on:keyup.enter="submitForm">
            </div>
            <div class="item_wrap" :class="{focus: focusState6, active: activeState6}">
                <label for="testID" class="item_text">Test ID</label>
                <input type="text" @input="activeFunc" @focus="focusState6=true" @blur="focusState6=false" v-model="testIDCode" name="testID" id="testID" v-on:keyup.enter="submitForm">
            </div>
            <div class="item_wrap" :class="{focus: focusState5, active: activeState5}">
                <label for="customOpt" class="item_text">Custom Option</label>
                <input type="text" @input="activeFunc" @focus="focusState5=true" @blur="focusState5=false" v-model="customOptCode" name="customOpt" id="customOpt" v-on:keyup.enter="submitForm">
            </div>
        </div>
        <div class="select_wrap" @click="hideSasCodeList">
            <div class="select_box">
            <v-select
            label="id"
            @input="setActiveCluster"
            :options="clusterList"
            :value="activeCluster"
            class="select_box"
            placeholder="Select a Cluster Value"></v-select>
            </div>
        <!-- <div class="select_box">
            <v-select
            menu-props="auto"
            label="id"
            @input="setActiveGenVal"
            :options="$store.linkGenerator.state.genValList"
            :value="$store.linkGenerator.state.activeGenVal"
            class="select_box"
            placeholder="Select a Gen Value"></v-select>
        </div>  -->
            <div class="select_box">
                <v-select
                menu-props="auto"
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
                label="name"
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
import { mapFields } from 'vuex-map-fields';
import Modal from './common/modal.vue';
import SasCodeList from './SasCodeList'
export default {
    data () {
      return {
        // sasCodeTxt: "",
        // jobNumCode: "",
        // debugCode: "",
        // languageCode: "",
        // customOptCode: "",
        // testIDCode: "",
        clusterVal: "",
        showModalSas: false,
        showModalDebug: false,
        regex: /[0-9]+/,

        focusState1: false,
        focusState2: false,
        focusState3: false,
        focusState4: false,
        focusState5: false,
        focusState6: false,
        activeState1: false,
        activeState2: false,
        activeState3: false,
        activeState4: false,
        activeState5: false,
        activeState6: false,
      }
    },
    computed: {
        ...mapFields([
            'sasCode',
            'jobNumCode',
            'debugCode',
            'languageCode',
            'customOptCode',
            'testIDCode',
        ]),
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
            sasCodeListStatusInput: 'getSasCodeListStatusInput',
            
            }),
        // setSasCodeTemp: {
        //     get(){
        //         return (this.sasCodeTxt == '') ? false: this.$store.commit('getSASCode');
                
        //     },
        //     set(val){
        //         this.sasCodeTxt =val;

        //     }
        // }
        // setSasCodeTemp: function() {
        //         return (this.sasCode == '') ? false: this.$store.commit('getSASCode');
        // }
        
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
            changeSasCodeListStatusInput: 'changeSasCodeListStatusInput',
            // changeInputFormStatus: 'changeInputFormStatus',
        }),
        clearInput () {
            this.sasCode = '';
            this.jobNumCode = '';
            this.debugCode = '';
            this.languageCode = '';
            this.customOptCode = '';
            this.testIDCode = '';
        },
        submitForm(){
            console.log(this.sasCode);
            // let sasCode = this.sasCodeTxt.trim();
            let sasCode = this.sasCode.trim();
            let jobNumCode = this.jobNumCode.trim();
            // let debugCode = this.debugCode.trim();
            let debugCode = this.debugCode;
            let languageCode = this.languageCode.trim();
            let customOptCode = this.customOptCode.trim();
            let testIDCode = this.testIDCode.trim();
            if (this.sasCode == '') {
                this.showModalSas = !this.showModalSas;
            }else if( (debugCode != '') && (!this.regex.test(this.debugCode))) {
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
                    if (!languageCode.includes("&lang=")){
                        languageCode = "&lang=" + languageCode;
                    }
                }
                if (customOptCode != ''){
                    if (!languageCode.includes("&")){
                        customOptCode = "&"+ customOptCode;
                    }
                }
                if (testIDCode === ''){
                    testIDCode = "{패널아이디}";
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
            this.$store.commit('changeInputFormStatus');
        },
        hideSasCodeList(){
            let tempStat = this.$store.getters.getSasCodeListStatusInput;
            if (tempStat){
                this.$store.commit('changeSasCodeListStatusInput');
            }
        },
        activeFunc(){
            if (this.sasCode ==''){
                this.activeState1 = false;
            }else{
                this.activeState1 = true;
            }
            if (this.jobNumCode ==''){
                this.activeState2 = false;
            }else{
                this.activeState2 = true;
            }
            if (this.debugCode ==''){
                this.activeState3 = false;
            }else{
                this.activeState3 = true;
            }
            if (this.languageCode ==''){
                this.activeState4 = false;
            }else{
                this.activeState4 = true;
            }
            if (this.customOptCode ==''){
                this.activeState5 = false;
            }else{
                this.activeState5 = true;
            }
            if (this.testIDCode ==''){
                this.activeState6 = false;
            }else{
                this.activeState6 = true;
            }
        }
    },
    watch:{
        sasCodeChck: function (val) {
            val = this.sasCode;
            if (val==''){
                if (this.sasCode ==''){
                    this.activeState1 = false;
                }else{
                    this.activeState1 = true;
                    val = this.sasCode;
                }
            }else{
                val = this.sasCode;
                this.activeState1 = true;
            }
        }
    },
    directives: {
        focus: {
            // 디렉티브 정의
            inserted: function (el) {
            el.focus()
            }
        }
    },
    components: {
      Modal,
      SasCodeList,

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
        max-width: 500px;
        min-width: 300px;
        height: 650px;
        padding: 50px 60px;
        border-radius: 10px;
        background: #fff;
        z-index: 99;
        width: 100%;
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .sasCodeList_inputForm{
        width: 280px;
        padding: 5px;
        box-sizing: border-box;
        position: absolute;
        top: 85px;
        bottom: 0;
        left: 0;
        visibility: visible;
        opacity: 1;
        z-index:99;
        background-color:#fff;
    } 
    .sasCodeList_inputForm{
        visibility: visible;
        opacity: 1;
        transition: visibility 1s, opacity 0.5s linear;
    }
    .sasCodeList_inputForm_hd{
        visibility: hidden;
      opacity: 0;
      z-index:0;
    }
    .header_wrap{
        position: relative;
    }
    .input_form_box .menu_btn{
        position: absolute;
        font-size: 30px;
        color: rgb(117, 117, 117);
        top: -30px;
        left: -30px;
        /* visibility: hidden;
        opacity: 0; */
        transition: visibility 1s, opacity 0.5s linear;
        cursor: pointer;
    }
    .item_wrap{
        display: block;
        position: relative;
        z-index: 1;
        margin: 1.5em 0;
    }
    .item_wrap > label{
        position: absolute;
        top: -3px;
        left: auto;
        max-width: 100%;
        height: 2.7em;
        line-height: 2.7em;
        color: #767676;
        font-size: 1.142em;
        cursor: text;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all .2s;
        z-index: -1;
        transform: translate3d(0, 3px, 0) scale(1);
        transform-origin: left top;
    }
    .item_wrap > input{ 
        display: block;
        width: 100%;
        color:#138c6f;
        border: none;
        /* border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: medium; */
        border-bottom: 1px solid#DDD;
        background-color:transparent;
        box-sizing: border-box;
        height: 2.7em;
        line-height: 1.2;
        font-size: 1.142em;
    }
    .item_wrap.focus > label{
        top: -1.9em;
        left: auto;
        font-size: 0.875em;
        color:#138c6f;
    }
    .item_wrap.active > label{
        top: -1.9em;
        left: auto;
        font-size: 0.875em;
        color:#138c6f;
    }
    .select_box{
        margin:1em 0;
    }
    .closeModalBtn{
        float: right;
    }
    .closeModalBtn::after {
        content: "";
        clear: both;
    }
    .header_txt{
        color:#138c6f;
        font-size: 1.7rem;
        text-align: center;
    }
    .header_wrap{
        margin-bottom: 20px;
    }
    .submit_but_wrap{
        text-align: center;
        margin: 1.5rem 0;
    }
    .submit_but_wrap > button{
        border: 2px solid #000;
        color: #000;
        min-width: 270px;
        max-width: 270px;
        min-height: 3.125em;
        min-width: 180px;
        padding: .5em 1.5em;
        background: transparent;
        border-radius: .5em;
        font-weight: bold;
        font-size: 1em;
        line-height: 1.2;
        letter-spacing: .01em;
        word-break: break-all;
        text-transform: uppercase;
        cursor: pointer;
        box-sizing: border-box;
    }
    .submit_but_wrap > button:hover{
        border: 2px solid #138c6f;
        color: #138c6f;
    }
    @media only screen and (max-width: 450px) {

        .input_form_box{
            height: auto;
            padding: 20px;
            box-sizing: border-box;

        }
        .header_txt{
            font-size: 1.5rem;
        }
        .input_form_box .menu_btn{
            top: 0;
            left: 0;
        }
        .sasCodeList_inputForm{
            width: 70%;
            top: 55px;
        }
        .item_wrap{
            margin: 0.8rem 0;
        }
        .item_wrap > label{
            font-size: 0.9rem;
        }
    }
</style>