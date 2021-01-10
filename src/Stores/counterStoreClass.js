import {
  makeObservable,
  observable,
  action,
  computed,
  makeAutoObservable,
} from "mobx";

export class CounterStoreClass {
  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   color: computed,
    //   dec: action,
    //   inc: action,
    // });
    makeAutoObservable(this);
  }

  count = 0;

  dec = () => this.count--;

  inc = () => this.count++;

  get color() {
    return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
  }
}
