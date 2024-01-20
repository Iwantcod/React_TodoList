import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';


const TodoList = (props) => {
  const list = props.data;    // props.data를 list로 저장. 이 list에는 각 투두리스트의 id와 사용자가 작성한 리스트의 내용이 담겨있다.
  const id = list.id;

  const onClick = (e) => {
    const preList = [...props.todoList];    // 현재의 todoList 배열을 복제
    const newList = preList.filter((v) => v.id !== id); // 복제한 배열에 변경사항(제거사항) 반영
    props.handleList(newList);              // 변경사항이 반영된 배열을 todoList에 덮어씌우기
    localStorage.setItem('data', JSON.stringify(newList));
    if(localStorage.getItem('data') === '[]') {
      localStorage.removeItem('data');      // 요소를 제거했는데 그 요소가 로컬스토리지에 남은 마지막 요소였다면, 해당 아이템 자체를 삭제.
    }


  }

  return (
    <h3>
      {list.data}
      <DeleteTwoTone twoToneColor={"#FF0000"} onClick={onClick}/>
    </h3>
  );
}



export default TodoList;