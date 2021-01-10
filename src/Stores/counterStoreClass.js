import {
  makeObservable,
  observable,
  action,
  computed,
  autorun,
  when,
  reaction,
} from "mobx";

export class CounterStoreClass {
  constructor() {
    makeObservable(this, {
      count: observable,
      color: computed,
      dec: action,
      inc: action,
    });

    //autorun(() => console.log("This autorun...count :" + this.count));
    // when(
    //   () => this.count > 5,
    //   () => console.log("Its works!")
    // );
    const disposer = reaction(
      () => this.count,
      (count, prevCount) => {
        console.log(`Count: ${count} _____ PrevCount: ${prevCount}`);

        if (count > 10) {
          console.log("Disposer...");
          disposer();
        }
      }
    );
  }

  count = 0;

  dec = () => this.count--;

  inc = () => this.count++;

  get color() {
    return this.count > 0 ? "green" : this.count < 0 ? "red" : "black";
  }
}
