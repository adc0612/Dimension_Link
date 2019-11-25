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
        },
        {
            id: "Cluster Z",
            preview: "https://ts-preview.ktrmr.com/surveyz.aspx?",
            live: "https://ts.ktrmr.com/surveyz.aspx?",
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
            id: "1",
            addr: "1"
        },
        {
            id: "0",
            addr: "0"
        },
    ],
    fTPBtns: [
        {
            id: 1,
            value: 'ftp://125.141.196.110:22/',
            name: 'Image FTP',
        },
        {
            id: 2,
            value: 'ftp://media.tns-global.com/multimedia/KO/',
            name: 'Video FTP',
        }
    ],
    debugBtns: [
        {
            id: 1,
            value: '\\\\WIN-CPEQHJJ1I36\\mrint\\src\\',
            name: 'Ouput Location',
        },
        {
            id: 2,
            value: '\\\\WIN-CPEQHJJ1I36\\mrint\\AutoActivate.bat ',
            name: 'Activation',
        }
    ],
    extractorBtn: [
        {
            id: 1,
            value: '\\\\kt.group.local\\ko_dimensions\\CFS2\\DPAT_Output_NA\\',
            name: 'Extrator File',
        },
    ],
    activeCluster: {
         id: "Cluster W",
        preview: "https://t2-test.ktrmr.com/surveyw.aspx?",
        live: "https://t2.ktrmr.com/surveyw.aspx?"
    },
    activeGenVal: {
        id: "Gen24",
        addr: "Gen24",
    },
    activeRsVal: {
        id: "1",
        addr: "1",
    },
    sasCode: "",
    jobNumCode: "",
    debugCode: "",
    LanguageCode: "",
    customOptCode: "",
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
    getActiveCluster(state) {
        return state.activeCluster;
    },
    getActiveGenVal(state) {
        return state.activeGenVal;
    },
    getActiveRsVal(state) {
        return state.activeRsVal;
    },
    defaultClusterSet(state){
        state.selectedCountry = state.clusterList[0];
    },
    defaultGenValSet(state) {
        state.selectedWeek = state.genValList[0];
    },
    defaultRsValSet(state) {
        state.selectedWeek = state.rsValList[0];
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
    getJobNumCode(state){
        return state.jobNumCode;
    },
    getDebugCode(state){
        return state.debugCode;
    },
    getLanguageCode(state) {
        return state.LanguageCode;
    },
    getCustomOptCode(state){
        return state.customOptCode;
    },
};

const mutations = {
    addOneItem(state, sasCodeItem) {
        const obj = {
            item: sasCodeItem
        };
        localStorage.setItem(sasCodeItem, JSON.stringify(obj));
        // this.todoItems.push(obj);
        state.sasCodeList.push(obj);
    },
    //객체롤 넘기면 payload 선언해서 접근 해야한다.
    removeOneItem(state,payload) {
        // console.log(payload.index);
        // 여기서 todoItem이 todoItems배열에 키이므로 그걸 사용해 지운다.
        localStorage.removeItem(payload.sasCodeItem.item);
        //splice를 slice대신 쓰는 이유는 slice는 그냥 삭제만 하지만 splice는 삭제하고 새 배열을 다시 로드 해준다.
        // localstorage에서 삭제 했으면 todoItems에서도 삭제해줘야 한다.
        //key를 가지고 있는 index와 1을 넣어준다. 1은 하나만 지우라는 뜻이다.
        state.sasCodeList.splice(payload.index, 1);
    },

    toggleOneItem(state, payload) {
        state.sasCodeList[payload.index].completed = !state.sasCodeList[payload.index].completed
        // todoItem.completed = !todoItem.completed;
        localStorage.removeItem(payload.sasCodeItem.item);
        localStorage.setItem(payload.sasCodeItem.item, JSON.stringify(payload.sasCodeItem));
        // console.log(payload.sasCodeItem.completed);
    },

    clearAllItems(state) {
        localStorage.clear();
        state.pro = [];
    },
    changeCountryFunc(state, payload) {
        state.selectedCountry = payload.country;
        state.menuStatus = !state.menuStatus;
    },
    changeMenuStatus(state){
        state.menuStatus = !state.menuStatus;
    },
    
    changeStorageURLStatus(state) {
        state.storageURLStatus = !state.storageURLStatus;
    },

    setActiveCluster(state, cluster) {
        state.activeCluster = cluster;
    },
    setActiveGenVal(state, genVal) {
        state.activeGenVal = genVal;
    },
    setActiveRsVal(state, rsVal) {
        state.activeRsVal  = rsVal;
    },
    setSasCode(state, sasCode) {
        state.sasCode  = sasCode;
    },
    setJobNumCode(state, jobNumCode) {
        state.jobNumCode = jobNumCode;
    },
    setDebugCode(state, debugCode) {
        state.debugCode  = debugCode;
    },
    setLanguageCode(state, languageCode) {
        state.languageCode  = languageCode;
    },
    setCustomOptCode(state, customOptCode) {
        state.customOptCode  = customOptCode;
    },
};

export default {
    state,
    getters,
    mutations
};