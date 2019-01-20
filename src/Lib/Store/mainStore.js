import {observable, decorate} from 'mobx';

class MainStore {

    constructor(){
        this.openPage = "";
    }

    changeOpenPage(page){
        this.openPage = page;
    }

}

decorate(MainStore, {
    openPage: observable,
});

const mainStore = new MainStore();
export default mainStore;
export {mainStore};