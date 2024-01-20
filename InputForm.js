import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import shortId from 'shortid';

const InputForm = (props) => {

  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    if(localStorage.getItem('data') !== null) {
      const loadData = JSON.parse(localStorage.getItem('data'));
      setTodoList(loadData);
    }
  }, []);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();


    const listForm = {
      id: shortId.generate(),
      data: todoText
    };
    const newList = [...todoList];
    newList.push(listForm);
    setTodoList(newList);     // 이 newList를 로컬스토리지에 계속해서 덮어씌우면서 저장하면 된다.
    localStorage.setItem('data', JSON.stringify(newList));      // stringify를 통해 JSON STRING으로 변환해주지 않으면 객체로 인식되어 제대로 저장이 안된다.
    setTodoText('');
    
  }



  return (
    <div>
      
      <form onSubmit={onSubmit}>
        <input placeholder='Write your to-do-list' value={todoText} onChange={onChangeTodoText} required autoFocus/>
      </form>
      {todoList.map((v) => <TodoList key={v.id} data={v} todoList={todoList} handleList={setTodoList}/>)}
    </div>
  )
}


export default InputForm;