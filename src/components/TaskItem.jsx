import React from 'react';
import cn from 'classnames';

export default ({ item, completedItem }) => {

    const optionsTitle = cn({
        "title-text": true,
        "title-text-checked": item.complete
    });

    return (
      <div className="todo__task">
          <label>
              <input type="checkbox" className="todo__checkbox" onChange={completedItem(item.id)}/>
              <span className="fake">check</span>
              <span className={optionsTitle}>{item.title}</span>
          </label>
      </div>
    );
}
