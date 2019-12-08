<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(sasCodeItem,index) in this.storedSasCodeList" v-bind:key="sasCodeItem.item" v-on:click="loadOneSascode({sasCodeItem,index})" class="list_item shadow">
        <span>
          {{sasCodeItem.item}}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({sasCodeItem,index})">
          <i class="fas fa-trash-alt" title="Delete"></i>
        </span>
      </li>
    </transition-group>
    <div class="clearAllbtn_box"  v-on:click="clearTodo" title="Delete All">
      <span class="clearAllBtn">Clear All</span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations({
      //mutation 적용 후 전달되는인자가 하나여야하고 하나이면 인자를 안 써줘도 자동으로 입력된다.
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
      loadOneSascode: 'loadOneSascode',
      clearTodo: 'clearAllItems',
    }),
    //vuex mutaions 전 코드
    // removeTodo(sasCodeItem, index) {
    //   // this.$emit("removesasCodeItem", sasCodeItem, index);
    //   // {sasCodeItem,index} 이렇게 쓰면 객체에 담아서 보낼수 있다.
    //   this.$store.commit('removeOneItem',{sasCodeItem,index});
    // },
    // toggleComplete(sasCodeItem, index) {
    //   // this.$emit("togglesasCodeItem", sasCodeItem, index);
    //   this.$store.commit('toggleOneItem',{sasCodeItem,index});
    // }
  },
  computed: {
    ...mapGetters(['storedSasCodeList'])
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.clearAllbtn_box{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 3px;
  font-size: 1.1rem;
  background-color:#f46f6f;
  color: #fff;
  cursor: pointer;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* list item transition effect */

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>