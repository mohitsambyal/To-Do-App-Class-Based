import React, { Fragment, useEffect } from "react";
const ToDoList = (props) => {
  useEffect(() => {
    document.title = "To-Do App";
  });
  return (
    <Fragment>
      {" "}
      {props.storeData && props.storeData.length > 0 && <h2>List</h2>}
      <ul className="nobull">
        {props.storeData &&
          props.storeData.length > 0 &&
          props.storeData.map((item, index) => (
            <li key={item.id}>
              {item.name}{" "}
              <button type="button" onClick={() => props.onEdit(item.id)}>
                Edit
              </button>
              <button type="button" onClick={() => props.DeleteList(item.name)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};
export default ToDoList;
