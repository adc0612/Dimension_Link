<template>
  <div>
    <div class="reference_box">
      <i class="fas fa-times refer_btn" @click="changeReferenceListStatus"></i>
      <h2>Reference</h2>
      <table class="reference_table">
        <tr class="reference_list" v-for="(item) in referenceList" v-bind:key="item.id">
            <td class="refernce_txt1">{{item.name}}</td>
            <td class="refernce_txt2">{{item.value}}</td>
        </tr>
      </table>
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
                referenceList: 'getReferenceList',
            }),
        ...mapMutations({
               changeReferenceListStatus: 'changeReferenceListStatus',


        }),
    },
}
</script>

<style scoped>
  .refer_btn{
    position: absolute;
    font-size: 25px;
    padding: 0 10px;
    line-height: 50px;
    color: rgb(117, 117, 117);
    right:60px;
      cursor: pointer;

  }
  .reference_box {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 500px;
        min-width: 300px;
        height: 550px;
        padding: 50px 60px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background: #fff;
        /* background: url("../assets/img/woodPatern.png"); */
    }
    .reference_box > h2{
      line-height: 30px;
      font-size: 1.3rem;
      color: #138c6f;
      margin-top: 10px;
    }
    table.reference_table {
			border-collapse: collapse;
			text-align: left;
			/* width: calc(100% - 10px); */
			line-height: 1.5;
			border-top: 1px solid #ccc;
			border-left: 3px solid #009688;
			margin: 40px 10px 20px 0;
		}

		table.reference_table th {
			width: 147px;
			padding: 8px;
			font-weight: bold;
			vertical-align: top;
			color: #153d73;
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc;

		}

		table.reference_table td {
			width: 349px;
			padding: 8px;
			vertical-align: top;
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
		}
</style>