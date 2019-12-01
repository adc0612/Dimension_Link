<template>
  <div>
    <div class="server_addr_wrap">
      <h2>Server Address</h2>
      <div class="server_addr_box">
        <h3>Scripting Link</h3>
        <a class="server_addr" target="_blank" :href="activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode">
          {{activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode}}
        </a>
      </div>
      <div class="server_addr_box">
        <h3>Preview Link</h3>
        <a class="server_addr" target="_blank" :href="activeCluster.preview+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode">
          {{activeCluster.preview+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode}}
        </a>
      </div>
      <div class="server_addr_box">
        <h3>Live Test Link</h3>
        <a class="server_addr" target="_blank" :href="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+'&i.test=1&debug='+activeDebugCode+activeLanguageCode">
          {{activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode+'&i.test=1&debug='+activeDebugCode+activeLanguageCode}}
        </a>
      </div>
      <div class="server_addr_box">
        <h3>Live Link</h3>
        <a class="server_addr" target="_blank" :href="activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode">
          {{activeCluster.live+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&rs='+activeRsVal.addr+'&pid='+activeTestIDCode}}
        </a>
      </div>
    </div>

    <div class="compile_addr_wrap">
      <h2>Compile & Data output Address</h2>
      <div class="compile_addr_box" v-for="(item) in this.debugBtnList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <span class="compile_addr">{{"\\\\"+activeScriptingServer.id+item.value+activeSASCode}}</span>
      </div>
      <div class="compile_addr_box">
        <h3>Data Output Address</h3>
        <a class="compile_addr" target="_blank" :href="'\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\'+activeSASCode">
          {{"\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\"+activeSASCode}}
        </a>
      </div>
    </div>

    <div class="dimensionNet_addr_wrap">
      <h2>Dimension Net URL</h2>
      <div class="dimensionNet_addr_box">
        <h3>Dimension Net - Scripting</h3>
        <a class="dimensionNet_addr" target="_blank" :href="activeScriptingServer.scriptingNet">{{activeScriptingServer.scriptingNet}}</a>
      </div>
      <div class="dimensionNet_addr_box">
        <h3>Dimension Net - Preview</h3>
        <a class="dimensionNet_addr" target="_blank" :href="activeCluster.previewNet">{{activeCluster.previewNet}}</a>
      </div>
      <div class="dimensionNet_addr_box">
        <h3>Dimension Net - Live</h3>
        <a class="dimensionNet_addr" target="_blank" :href="activeCluster.liveNet">{{activeCluster.liveNet}}</a>
      </div>
    </div>

    <div class="ftp_addr_wrap">
      <h2>FTP Address</h2>
      <div class="ftp_addr_box" v-for="(item) in this.ftpBtnList" v-bind:key="item.id">
        <h3>{{item.name}}</h3>
        <span class="ftp_addr">{{item.value+activeJobNumCode}}</span>
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

<style>

</style>