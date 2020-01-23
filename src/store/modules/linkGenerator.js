const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== '') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};
const state = {
    sasCodeList: storage.fetch(),
    clusterList : [
        {
            id: "Cluster W",
            preview: "https://t2-test.ktrmr.com/surveyw.aspx?",
            live: "https://t2.ktrmr.com/surveyw.aspx?",
            previewNet: "https://livew.ktrmr.com/",
            liveNet: "https://livew.ktrmr.com/",
        },
        {
            id: "Cluster Z",
            preview: "https://ts-preview.ktrmr.com/surveyz.aspx?",
            live: "https://ts.ktrmr.com/surveyz.aspx?",
            previewNet: "https://livez.ktrmr.com/",
            liveNet: "https://livez.ktrmr.com/",
        },
    ],
    genValList : [
        {
            id: "Gen24",
            addr: "Gen24",
        },
        {
            id: "Gen25",
            addr: "Gen25",
        },
        {
            id: "Gen26",
            addr: "Gen26",
        },
        {
            id: "Gen27",
            addr: "Gen27",
        },
        {
            id: "Gen28",
            addr: "Gen28",
        },
        {
            id: "Gen29",
            addr: "Gen29",
        },
        {
            id: "Gen30",
            addr: "Gen30",
        },
        {
            id: "Gen31",
            addr: "Gen31",
        },
        {
            id: "Gen32",
            addr: "Gen32",
        },
        {
            id: "Gmi29",
            addr: "Gmi29",
        },
    ],
    rsValList: [
        {
            id: "rs val: 1",
            addr: "1"
        },
        {
            id: "rs val: 0",
            addr: "0"
        },
    ],
    scriptingServerList: [
        {
            id: "WIN-CPEQHJJ1I36",
            name: "WIN-CPEQHJJ1I36 (W Server, Z Server)",
            jobBuilderAddr: "http://WIN-CPEQHJJ1I36.grpitsrv.com/JobBuilder/",
            scriptingAddr: "https://scripting601-aw2a.grpitsrv.com/mrIWeb/mrIweb.dll?",
            scriptingNet: "http://WIN-CPEQHJJ1I36.grpitsrv.com",
        },
        {
            id: "WIN-ORVIQIAUF0Q",
            name: "WIN-ORVIQIAUF0Q (W Server, Z Server)",
            jobBuilderAddr: "http://WIN-ORVIQIAUF0Q.grpitsrv.com/JobBuilder/",
            scriptingAddr: "https://scripting601-aw2b.grpitsrv.com/mrIWeb/mrIweb.dll?",
            scriptingNet: "http://WIN-ORVIQIAUF0Q.grpitsrv.com/",
        },
        {
            id: "WIN-JJ0AC4JJO5F",
            name: "WIN-JJ0AC4JJO5F (Z Server)",
            jobBuilderAddr: "http://WIN-JJ0AC4JJO5F.grpitsrv.com/JobBuilder",
            scriptingAddr: "https://scripting601-aw2b.grpitsrv.com/mrIWeb/mrIweb.dll?",
            scriptingNet: "http://WIN-JJ0AC4JJO5F.grpitsrv.com/",
        },
    ],
    fTPBtns: [
        {
            id: 1,
            value: 'ftp://125.141.196.111/',
            name: 'Image FTP',
        },
        {
            id: 2,
            value: '\\\\amznfsxsvtdpvph.kt.group.local\\share\\CDN_Media\\Multimedia\\KO',
            name: 'Video FTP',
        }
    ],
    debugBtns: [
        {
            id: 1,
            value: '\\mrint\\src\\',
            name: 'Ouput Location',
            urlAddr: '"\\\\"+activeScriptingServer.id+item.value',
        },
        {
            id: 2,
            value: '\\mrint\\AutoActivate.bat ',
            name: 'Activation',
            urlAddr: '"\\\\"+activeScriptingServer.id+item.value',

        }
    ],
    extractorBtn: [
        {
            id: 1,
            value: '\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\',
            name: 'Extractor File',
        },
    ],
    usefulServerLinkList: [
        {
            id: 'slink1',
            value: '/JobBuilder/',
            name: 'Job Builder URL'
        },
        // {
        //     id: 'slink2',
        //     value: 'mrIWeb/images/default.asp',
        //     name: 'Survey Link URL'
        // }
    ],
    usefulLinkList: [
        {
            id: 'link1',
            value: 'https://extractor-client-prod.azurewebsites.net/',
            name: 'Extractor URL'
        },
        {
            id: 'link2',
            value: 'http://citrixwebus.grpitsrv.com/Citrix/XenApp/auth/login.aspx',
            name: 'Citrix URL'
        },
        {
            id: 'link3',
            value: 'https://kgo-support.freshdesk.com/support/home',
            name: 'KGO Support URL'
        },
        {
            id: 'link4',
            value: 'https://konnect.kantaroperations.com',
            name: 'Kantar Konnect URL'
        },
        {
            id: 'link5',
            value: 'https://reg1.ktrmr.com/Registrar/Login/Default.aspx?',
            name: 'Registrar URL'
        },
    ],
    referenceList: [
        {
            id: '1',
            name: 'project',
            value: 'Project id mdd filename(ex: AD42GZ)',
        },
        {
            id: '2',
            name: 's',
            value: '샘플 provider(GEN24,GMI29...)',
        },
        {
            id: '3',
            name: 'pid',
            value: '패널id, 임의부여(usally: auto)',
        },
        {
            id: '4',
            name: 'rs',
            value: '재시작 가능여부(1: 가능)',
        },
        {
            id: '5',
            name: 'i.test',
            value: '링크에 “i.test=1” 안붙이면 Real respondent',
        },
        {
            id: '6',
            name: 'debug=5',
            value: '디버그모드',
        },
        {
            id: '7',
            name: 'i.timeout=0',
            value: '재접속 제한시간을 없애줌',
        },
        {
            id: '8',
            name: 'aar=1',
            value: 'if you pass value “aar = 1 then you don’t need to wait for 10 minutes',
        },
        {
            id: '9',
            name: 'http protocall',
            value: 'secs.aspx : https, 	surbeys.aspx : http (usally used)',
        },
        
    ],
    activeCluster: {
         id: "Cluster W",
        preview: "https://t2-test.ktrmr.com/surveyw.aspx?",
        live: "https://t2.ktrmr.com/surveyw.aspx?",
        previewNet: "https://livew.ktrmr.com/",
        liveNet: "https://livew.ktrmr.com/",
    },
    activeGenVal: {
        id: "Gen24",
        addr: "Gen24",
    },
    activeRsVal: {
        id: "rs val: 1",
        addr: "1",
    },
    activeScriptingServer: {
        id: "WIN-CPEQHJJ1I36",
        name: "WIN-CPEQHJJ1I36 (W Server, Z Server)",
        jobBuilderAddr: "http://WIN-CPEQHJJ1I36.grpitsrv.com/JobBuilder/",
        scriptingAddr: "https://scripting601-aw2a.grpitsrv.com/mrIWeb/mrIweb.dll?",
        scriptingNet: "http://WIN-CPEQHJJ1I36.grpitsrv.com",
    },
    sasCode: "",
    jobNumCode: "",
    debugCode: "",
    languageCode: "",
    customOptCode: "",
    testIDCode: "",

    inputFormStatus: true,
    referenceListStatus: false,
    sasCodeListStatus: false,
    sasCodeListStatusInput: false,
    usefulLinkListStatus: false,
    menuStatus: true,
    storageURLStatus: false
};

const getters = {
    storedSasCodeList(state) {
        return state.sasCodeList;
    },
    getClusterList(state) {
        return state.clusterList;
    },
    getGenValList(state) {
        return state.genValList;
    },
    getRsValList(state) {
        return state.rsValList;
    },
    getScriptingServerList(state) {
        return state.scriptingServerList;
    },
    getActiveCluster(state) {
        return state.activeCluster;
    },
    getActiveGenVal(state) {
        return state.activeGenVal;
    },
    getActiveRsVal(state) {
        return state.activeRsVal;
    },
    getActiveScriptingServer(state) {
        return state.activeScriptingServer;
    },
    getMenuStatus(state){
        return state.menuStatus;
    },
    getFTPBtnList(state) {
        return state.fTPBtns;
    },
    getDebugBtnList(state) {
        return state.debugBtns;
    },
    getExtratorList(state) {
        return state.extractorBtn;
    },
    getStorageURLStatus(state){
        return state.storageURLStatus;
    },

    getSASCode(state){
        return state.sasCode;
    },
    getJobNumCode(state){
        return state.jobNumCode;
    },
    getDebugCode(state){
        return state.debugCode;
    },
    getLanguageCode(state) {
        return state.languageCode;
    },
    getCustomOptCode(state){
        return state.customOptCode;
    },
    getTestIDCode(state){
        return state.testIDCode;
    },

    getUsefulServerLinkList(state){
        return state.usefulServerLinkList;
    },
    getUsefulLinkList(state){
        return state.usefulLinkList;
    },
    getReferenceList(state){
        return state.referenceList;
    },

    getInputFormStatus(state) {
        return state.inputFormStatus;
    },
    getReferenceListStatus(state) {
        return state.referenceListStatus;
    },
    getSasCodeListStatus(state) {
        return state.sasCodeListStatus;
    },
    getSasCodeListStatusInput(state) {
        return state.sasCodeListStatusInput;
    },
    getUsefulLinkListStatus(state) {
        return state.usefulLinkListStatus;
    },
};

const mutations = {
//   addOneItem(state, sasCodeItem) {
//     const obj = {
//       item: sasCodeItem
//     };
//     localStorage.setItem(sasCodeItem, JSON.stringify(obj));
//     // this.todoItems.push(obj);
//     state.sasCodeList.push(obj);
//   },
  addOneItem(state, {sasCode,jobNumCode,debugCode,languageCode,customOptCode,testIDCode}) {
    console.log(sasCode);
    console.log(jobNumCode);
    console.log(debugCode);
    console.log(languageCode);
    console.log(customOptCode);
    if (localStorage.getItem(sasCode) != null) {
        let temp = localStorage.getItem(sasCode);
        localStorage.removeItem(temp.item);
        state.sasCodeList.splice(temp.index, 1);
        console.log('deletion has been done');
    } 
    const obj = {
      item: sasCode,
      jobNumCode: jobNumCode,
      debugCode: debugCode,
      languageCode: languageCode,
      customOptCode: customOptCode,
      testIDCode: testIDCode,
      activeCluster: state.activeCluster,
      activeGenVal: state.activeGenVal,
      activeRsVal: state.activeRsVal,
      activeScriptingServer: state.activeScriptingServer,
    };
    localStorage.setItem(sasCode, JSON.stringify(obj));
    // this.todoItems.push(obj);
    state.sasCodeList.push(obj);
  },
  //객체롤 넘기면 payload 선언해서 접근 해야한다.
  removeOneItem(state, payload) {
    // console.log(payload.index);
    // 여기서 todoItem이 todoItems배열에 키이므로 그걸 사용해 지운다.
    localStorage.removeItem(payload.sasCodeItem.item);
    //splice를 slice대신 쓰는 이유는 slice는 그냥 삭제만 하지만 splice는 삭제하고 새 배열을 다시 로드 해준다.
    // localstorage에서 삭제 했으면 todoItems에서도 삭제해줘야 한다.
    //key를 가지고 있는 index와 1을 넣어준다. 1은 하나만 지우라는 뜻이다.
    state.sasCodeList.splice(payload.index, 1);
  },

  loadOneSascode(state, payload) {
      console.log(payload.sasCodeItem.item);
      console.log(payload.sasCodeItem.activeCluster);
      let tempSasCode = payload.sasCodeItem.item;
      let tempJobNumCode = payload.sasCodeItem.jobNumCode;
      let tempDebugCode = payload.sasCodeItem.debugCode;
      let tempLanguageCode = payload.sasCodeItem.languageCode;
      let tempCustomOptCode = payload.sasCodeItem.customOptCode;
      let tempTestIDCode = payload.sasCodeItem.testIDCode;
      let tempActiveCluster = payload.sasCodeItem.activeCluster;  
      let tempActiveGenVal = payload.sasCodeItem.activeGenVal;  
      let tempActiveRsVal = payload.sasCodeItem.activeRsVal;  
      let tempActiveScriptingServer = payload.sasCodeItem.activeScriptingServer;  
      console.log(tempActiveScriptingServer);
      state.sasCode = tempSasCode;
      state.jobNumCode = tempJobNumCode;
      state.debugCode = tempDebugCode;
      state.languageCode = tempLanguageCode;
      state.customOptCode = tempCustomOptCode;
      state.testIDCode = tempTestIDCode;
      state.activeCluster = tempActiveCluster;  
      state.activeGenVal = tempActiveGenVal;  
      state.activeRsVal = tempActiveRsVal;  
      state.activeScriptingServer = tempActiveScriptingServer;
      state.sasCodeListStatus = false;  
      state.sasCodeListStatusInput = false; 
      state.inputFormStatus = false; 
  },
  clearAllItems(state) {
    localStorage.clear();
    state.sasCodeList = [];
      state.sasCodeListStatus = false;
      state.sasCodeListStatusInput = false; 
  },
  changeMenuStatus(state) {
    state.menuStatus = !state.menuStatus;
  },

  changeStorageURLStatus(state) {
    state.storageURLStatus = !state.storageURLStatus;
  },

  setActiveCluster(state, cluster) {
    state.activeCluster = cluster;
    // setClusterFunc(state,cluster);
  },
  setActiveGenVal(state, genVal) {
    state.activeGenVal = genVal;
  },
  setActiveRsVal(state, rsVal) {
    state.activeRsVal = rsVal;
  },
  setActiveScriptingServer(state, scriptingServer) {
    state.activeScriptingServer = scriptingServer;
  },
  setSasCode(state, sasCode) {
    state.sasCode = sasCode;
  },
  setJobNumCode(state, jobNumCode) {
    state.jobNumCode = jobNumCode;
  },
  setDebugCode(state, debugCode) {
    state.debugCode = debugCode;
  },
  setLanguageCode(state, languageCode) {
    state.languageCode = languageCode;
  },
  setCustomOptCode(state, customOptCode) {
    state.customOptCode = customOptCode;
  },
  setTestIDCode(state, testIDCode) {
    state.testIDCode = testIDCode;
  },

  changeInputFormStatus(state) {
      state.inputFormStatus = !state.inputFormStatus;
      state.sasCodeListStatus = false;
  },
  changeReferenceListStatus(state) {
      state.referenceListStatus = !state.referenceListStatus;
  },
  changeSasCodeListStatus(state) {
      state.sasCodeListStatus = !state.sasCodeListStatus;
  },
  changeSasCodeListStatusInput(state) {
      state.sasCodeListStatusInput = !state.sasCodeListStatusInput;
  },
  changeUsefulLinkListStatus(state) {
      state.usefulLinkListStatus = !state.usefulLinkListStatus;
  },
};

// function setClusterFunc(state,cluster){
//     state.activeCluster = cluster;
// }

export default {
    state,
    getters,
    mutations
};