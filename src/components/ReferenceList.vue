<template>
  <div>
    <h2>Reference</h2>
    <li class="refernce_box" v-for="(item) in referenceList" v-bind:key="item.id">
        <span class="refernce_txt1">{{item.name}}</span>
        <span class="refernce_txt2">{{item.value}}</span>
    </li>
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
                referenceList: 'getReferenceList',
            }),
        ...mapMutations({

        }),
    },
}
</script>

<style>

</style>