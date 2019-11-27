<template>
  <div class="url_list_wrap">
      <div class="server_addr_wrap">
        <h2>Server Address</h2>
        <div class="server_addr_box">
          <h3>Scripting 서버</h3>
          <a class="server_addr" target="_blank" :href="activeScriptingServer.scriptingAddr+'i.project='+activeSASCode+'&s='+activeGenVal.addr+'&id=1&chk=na&pid=auto&i.test=1&debug='+activeDebugCode+activeLanguageCode">ie</a>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';  
export default {
  computed: {
        ...mapGetters({
              clusterList: 'getClusterList',
              genValList: 'getGenValList',
              rsValList: 'getRsValList',
              scriptingServerList: 'getScriptingServerList',
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