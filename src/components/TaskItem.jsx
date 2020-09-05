import React from 'react';

export default ({ item, completedItem }) => {
    return (
      <div className="todo__task">
          <label>
              <input type="checkbox" className="todo__checkbox" onChange={completedItem(item.id)}/>
              <span className="fake">check</span>
              <span className="title-text title-text-checked">{item.title}</span>
          </label>
      </div>
    );
}
