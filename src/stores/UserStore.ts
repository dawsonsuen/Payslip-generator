import { observable, action } from "mobx";
import { Redirect } from "react-router";

export class UserStore {
    constructor() {
    }

    @observable public isLoggedOn: boolean;
    @observable public isLoggingIn: boolean;

    signin(username: string, password: string): void{
        this.isLoggingIn = true;

        if (!(username == "myobtest" && password == "myobtest")) {
            this.isLoggingIn = false;
            return;
        } 
        this.isLoggedOn = true;
        this.isLoggingIn = false;
    }
}

export const userStore = new UserStore();