import React from "react";
import "../css/TodoitemList.css";
import Todoitem from "./Todoitem";

class TodoitemList extends React.Component {
  // *** Form.js 에서 Hook(useState) 사용으로 인해 제거
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.props.todos !== nextProps.todos;
  //   }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    console.log(todos);

    const todoList = todos.map(({ id, content, isComplete }) => (
      <Todoitem
        id={id}
        content={content}
        isComplete={isComplete}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoitemList;

// TodoitemList 컴포넌트는 3가지 props를 받는다.
// - todos: todo 객체들이 들어있는 배열
// - onToggle: 체크박스를 on/off 하는 함수
// - onRemove: todo 객체를 삭제하는 함수
