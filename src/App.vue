<template>
  <div id="app">
    <InputForm></InputForm>
    <SasCodeList v-show="false"></SasCodeList>
    <MainSite></MainSite>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'
import SasCodeList from './components/SasCodeList.vue'
import MainSite from './components/MainSite.vue'
export default {
 components: {
      InputForm,
      SasCodeList,
      MainSite
  }
}
</script>

<style>
/* base css */
html,
body,
button,
fieldset,
form,
h1,
h2,
input,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}

body,
button,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select,
table,
textarea {
  font-size: 14px;
  font-family: ubuntu, HelveticaNeue, AppleSDGothicNeo-Regular, Dotum, '돋움', sans-serif;
}

button,
input {
  -webkit-border-radius: 0;
     -moz-border-radius: 0;
          border-radius: 0;
}

fieldset,
img {
  border: 0;
}

ol,
ul {
  list-style: none;
}

address,
em {
  font-style: normal;
}

a {
  color: #000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ol,
ul {
  list-style: none;
}

.blind {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
}

html,body{
  height: 100%;
}

.shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
