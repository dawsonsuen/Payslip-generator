import { computed, observable, action } from "mobx";

export class UserStore {
    constructor() {
    }
    @observable public isLoggedOn: boolean = true;
}

export const userStore = new UserStore();