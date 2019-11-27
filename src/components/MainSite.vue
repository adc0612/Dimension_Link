<template>
  <div class="url_list_wrap">
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
        <h2>Compile Address</h2>
        <div class="compile_addr_box" v-for="(item) in this.debugBtnList" v-bind:key="item.id">
          <h3>{{item.name}}</h3>
          <span class="compile_addr">{{"\\\\"+activeScriptingServer.id+item.value}}</span>
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