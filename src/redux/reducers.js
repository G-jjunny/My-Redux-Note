import { ADD_TODO } from "./actions";

// state
// ['코딩', '점심먹기'];
// [{text: "coding", done: false}, {text: "점심먹기", done: false}]

const initialState = []; // 초기값을 설정

export function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState; // 아무 변화가 없을 때 previousState반환
}
