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
				<input type="text" name="SASCODE" id="SASCODE">
			</div>
			<div class="item_wrap">
				<span class="item_text">Job Number</span>
				<input type="text" name="JOBNUM" id="JOBNUM">
			</div>
			<div class="item_wrap">
				<span class="item_text">Debug CODE</span>
				<input type="text" name="DebugCode" id="DebugCode">
			</div>
			<div class="item_wrap">
				<span class="item_text">Language</span>
				<input type="text" name="LanguageCode" id="LanguageCode" value="">
			</div>
			<div class="item_wrap">
				<span class="item_text">Custom Option</span>
				<input type="text" placeholder="Be sure to use '&'" name="COP" id="COP">
			</div>
          </div>
          <div class="select_wrap">
            <div class="select_box">
                <v-select
                label="name"
                @input="changeWeek" 
                :options="clusterList"
                :value="activeClusterObject" 
                class="select_box"
                placeholder="Select a Cluster Value"></v-select>
            </div>
            <div class="select_box">
                <v-select
                label="name"
                @input="changeWeek" 
                :options="genValList"
                :value="activeGenValObject" 
                class="select_box"
                placeholder="Select a Gen Value"></v-select>
            </div> 
            <div class="select_box">
                <v-select
                label="name"
                @input="changeWeek" 
                :options="rsValList"
                :value="activeRsValObject" 
                class="select_box"
                placeholder="Select a Rs Value"></v-select>
            </div> 
          </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState ({
            activeClusterObject: 'activeCluster',
            activeGenValObject: 'activeGenVal',
            activeRsValObject: 'activRsVal',
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
            // changeWeek: 'changeWeekFunc'
        })
    }
}
</script>

<style scoped>

</style>