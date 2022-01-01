import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = 0;

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);

const onchange = () => (num.innerText = countStore.getState());

countStore.subscribe(onchange);

const addOne = () => countStore.dispatch({ type: "ADD" });
const minusOne = () => countStore.dispatch({ type: "MINUS" });

add.addEventListener("click", addOne);
minus.addEventListener("click", minusOne);
