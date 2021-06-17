import React from "react";
import "../css/Todoitem.css";

class Todoitem extends React.Component {
  // *** Form.js 에서 Hook(useState) 사용으로 인해 제거
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.props.isComplete !== nextProps.isComplete;
  //   }
  render() {
    const { content, isComplete, id, onToggle, onRemove } = this.props;
    console.log(id);

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="todo-item-remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-item-text ${isComplete && "isComplete"}`}>
          <div>{content}</div>
        </div>
        {isComplete && <div className="isComplete-mark">✓</div>}
      </div>
    );
  }
}

export default Todoitem;

/*
    Todoitem 컴포넌트는 총 5개의 props를 받는다
    - content: todo 내용
    - isComplete: 체크박스 on/off 상태를 의미하며, 오늘 할 일의 완료 유무를 판단.
    - id: Todoitem의 Key 값
    - onToggle: 체크박스를 on/off 시키는 함수
    - onRemove: Todoitem을 삭제시키는 함수
*/
