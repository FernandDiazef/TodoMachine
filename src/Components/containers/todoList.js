import { useState } from 'react';
import { EmptyTodos } from '../components-item/EmptyTodos/EmptyTodos';
import { TodoItem } from '../components-item/item/todoItem';
import { CreateTodoButton } from '../components-item/TodoButton/createTodoButton';
import { TodoCounter } from '../components-item/TodoCounter/todo-counter';
import { TodoSearch } from '../components-item/todoSearch/todosearch';
import { TodosError } from '../components-item/TodosError/TodosError';
import { TodosLoading } from '../components-item/TodosLoading/todosLoading';
import { useLocalStorage } from '../useLocalStore/useLocalStore';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el curso de introduccion a React.js', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
//   {text: 'Lallalal', completed: false},
//   {text: 'usar estados derivados', completed: false}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//  localStorage.removeItem('TODOS_V1')



function TodoList() {

  const [searchValue, setSearchValue] = useState('');
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  // const [auxTodo, setAuxTodo] = useState(todos);

  let serchedTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const CompletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

    // let filter = auxTodo.filter(todo => todo.text !== text)
    // let status = todos.filter(todo => todo.text !== text)

    // localStorage.setItem('TODOS_V1', JSON.stringify(filter));
    // saveTodos(status);
    // setAuxTodo(filter);


    // const newTodos = todos.filter((todo) => todo.text !== text)
    // saveTodo(newTodos, todos)
  }

  // const FiltroSelect = (event) => {
  //    switch (parseInt(event)){
  //     case 1:
  //       saveTodos(auxTodo);
  //       break;
  //     case 2:
  //       let completed = auxTodo.filter((item) => item.completed === true);
  //       saveTodos(completed);
  //       break;
  //     case 3:
  //       let noCompleted = auxTodo.filter((item) => item.completed === false);
  //       saveTodos(noCompleted);
  //     break;
  //     default:
  //       break;

  //    }
  // }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      // FiltroSelect={FiltroSelect}
      />
      <ul className={`d-flex justify-content-center row`}>
        {loading &&
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        }
        {error &&
          <TodosError />
        }
        {(!loading &&
          serchedTodos.length === 0) &&
          <EmptyTodos />
        }
        
        {serchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            todo={todo}
            completed={todo.completed}
            onCompleted={() => CompletedTodo(todo.text)}
            delete={() => deleteTodo(todo.text)}
          />
        ))}
      </ul>

      <CreateTodoButton />
    </>
  );
}

export { TodoList }