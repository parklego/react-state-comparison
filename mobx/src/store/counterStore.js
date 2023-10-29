import { makeAutoObservable } from "mobx";

class CounterStore {
  constructor() {
    makeAutoObservable(this);
  }

  number = 0;

  incresement = () => {
    this.number++;
  };

  decreasement = () => {
    this.number--;
  };
}

export default CounterStore;
