export const ADD_TODO = "ADD_TODO";

// 모든 액션의 정의하고 액션 생성 함수를 만드는 곳이다.
// 액션의 타입을 정의하고 액션의 생성자를 생성
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo,
  };
}
