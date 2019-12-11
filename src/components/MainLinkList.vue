<template>
  <div>
    <div class="server_addr_wrap addr_wrap">
      <h2>Server Address</h2>
      <div class="server_addr_box addr_box">
        <h3>Scripting Link</h3>
        <div class="inner_box">
          <a class="server_addr" target="_blank" :href="activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode">
            {{activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode}}
          </a>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode"></i>
        </div>
      </div>
      <div class="server_addr_box addr_box">
        <h3>Preview Link</h3>
        <div class="inner_box">
            <a class="server_addr" target="_blank" :href="activeCluster.preview+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode">
            {{activeCluster.preview+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode}}
            </a>
            <i class="far fa-copy copy_but" title="copy" v-clipboard="activeCluster.preview+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode"></i>
        </div>
      </div>
      <div class="server_addr_box addr_box">
        <h3>Live Test Link</h3>
        <div class="inner_box">
          <a class="server_addr" target="_blank" :href="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+'&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode">
            {{activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+'&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode}}
          </a>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+'&i.test=1&debug='+activeDebugCode+activeLanguageCode+activeCustomOptCode"></i>
        </div>
      </div>
      <div class="server_addr_box addr_box">
        <h3>Live Link</h3>
        <div class="inner_box">
          <a class="server_addr" target="_blank" :href="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+activeLanguageCode+activeCustomOptCode">
            {{activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+activeLanguageCode+activeCustomOptCode}}
          </a>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+activeLanguageCode+activeCustomOptCode"></i>
        </div>
      </div>
    </div>

    <div class="compile_addr_wrap addr_wrap">
      <h2>Compile & Data output Address</h2>
      <div class="compile_addr_box addr_box" v-for="(item) in this.debugBtnList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <div class="inner_box">
          <span class="compile_addr">{{"\\\\"+activeScriptingServer.id+item.value+activeSASCode}}</span>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="'\\\\'+activeScriptingServer.id+item.value+activeSASCode"></i>
        </div>
      </div>
      <div class="compile_addr_box addr_box">
        <h3>Data Output Address</h3>
        <div class="inner_box">
          <a class="compile_addr" target="_blank" :href="'\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\'+activeSASCode">
            {{"\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\"+activeSASCode}}
          </a>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="'\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\'+activeSASCode"></i>
        </div>
      </div>
    </div>

    <!-- <div class="dimensionNet_addr_wrap addr_wrap">
      <h2>Dimension Net URL</h2>
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
    </div> -->

    <div class="ftp_addr_wrap addr_wrap">
      <h2>FTP Address</h2>
      <div class="ftp_addr_box addr_box" v-for="(item) in this.ftpBtnList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <div class="inner_box">
          <span class="ftp_addr">{{item.value+activeJobNumCode}}</span>
          <i class="far fa-copy copy_but" title="copy" v-clipboard="item.value+activeJobNumCode"></i>
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
              clusterList: 'getClusterList',
              genValList: 'getGenValList',
              rsValList: 'getRsValList',
              scriptingServerList: 'getScriptingServerList',
              debugBtnList: 'getDebugBtnList',
              ftpBtnList: 'getFTPBtnList',

              activeCluster: 'getActiveCluster',
              activeGenVal: 'getActiveGenVal',
              activeRsVal: 'getActiveRsVal',
              activeScriptingServer: 'getActiveScriptingServer',

              activeSASCode: 'getSASCode',
              activeJobNumCode: 'getJobNumCode',
              activeDebugCode: 'getDebugCode',
              activeLanguageCode: 'getLanguageCode',
              activeCustomOptCode: 'getCustomOptCode',
              activeTestIDCode: 'getTestIDCode',
            }),
        ...mapMutations({

        }),
    },
}
</script>

<style scoped>
  .addr_wrap > h2{
    font-size: 1.2rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    color: #1ea26a;
  }
  .addr_wrap > div{
    padding-left: 10px; 
  }
  .addr_wrap:nth-child(n+2) {
    margin-top: 30px;
  }
  .inner_box > a:hover{
    text-decoration: none;
    color: #138c6f;
  }
  .copy_but{
      cursor: pointer;
      float: right;
      font-size: 1.5rem;
      margin-right: 20px;
  }
  .copy_but:hover{
    color: #138c6f;
  }
  .inner_box{
    position: relative;
  }
  .inner_box::after {
    content: "";
    clear: both;
  }
  .inner_box > a, .inner_box > span{
        display: block;
        margin-right: 60px;
      }
    .inner_box > i{
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
  }
  @media only screen and (max-width: 450px) {
      .mainLinkList_wrap{
        padding: 20px 15px;
      }
      /* .server_addr_box{
        height: 70px;
      } */
      
      .addr_wrap > h2{
        font-size: 0.9rem;
      }
      .addr_box > h3{
        font-size: 0.8rem;
      }
      .inner_box > a, .inner_box > span{
        font-size: 0.75rem;
        margin-right: 40px;
      }
      .inner_box > i{
        font-size: 1.3rem;
      }
    }

</style>