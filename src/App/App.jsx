import React from 'react';
import {connect} from 'react-redux'
import {addItem, updateItem, removeItem} from '../store/actions/todoAction'

import TaskItem from "../components/TaskItem";
import Alert from "../components/Alert";

import deleteIcon from '../static/delete.svg';
import './App.scss';

const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

const App = ({todosItem, addItem, updateItem, removeItem}) => {
    const [error, setError] = React.useState('');
    const [title, setTitle] = React.useState('');

    React.useEffect(() => {
        const timer = setTimeout(() => setError(''), 3000);
        return () => {
            console.log('clear')
            clearTimeout(timer);
        }
    }, [error])

    // Записываем в локальный State значение из input
    const inputEnter = ({target}) => setTitle(target.value);

    //Отправляем данные с формы
    const todoFormSend = (e) => {
        e.preventDefault();
        if (title.trim() === '' || title.length <= 3) {
            setError('Поле должно содержать больше 3 символов, так же не должно содержать пробелов')
            return;
        }
        const id = generateUniqueId();
        const newItem = {
            id,
            title,
            complete: false
        }
        addItem(newItem);
        setTitle('');
    }

    // Перевод задачи в стутус сhecked, сделано через замыкание,
    // так как прописывать каждому элементу анонимную ф-цию, сказываеться на производительности (тут это не особо будет заметно).
    const completedItem = (id) => () => updateItem(id);

    //Удаление выбраных задач
    const removeTodoItem = () => removeItem();

    return (
      <>
          {error.length ? <Alert message={error}/> : null}

          <div className="wrapper">
              <div className="todo">
                  <div className="todo__header">
                      <h4>TODO list</h4>
                      <span className="todo__header-delete">
                <img src={deleteIcon} alt="delete" onClick={removeTodoItem}/>
            </span>
                  </div>
                  <div className="todo__body">
                      {
                          todosItem.todos.length ? todosItem.todos.map((item) => <TaskItem key={item.id}
                                                                                           completedItem={completedItem}
                                                                                           item={item}/>) : null
                      }
                  </div>
                  <div className="todo__footer">
                      <form onSubmit={todoFormSend} className="add-form">
                          <button type="submit" className="todo__add-button">x</button>
                          <input type="text" className="task-input" value={title} onChange={inputEnter}/>
                      </form>
                  </div>
              </div>
          </div>
      </>
    );
}
const mapStateToProps = state => ({
    todosItem: state.todos
})
export default connect(mapStateToProps, {addItem, updateItem, removeItem})
(App);
