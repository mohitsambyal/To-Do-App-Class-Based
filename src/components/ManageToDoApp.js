//const { Component } = require("react")

import React, { Component, Fragment } from "react";
import ToDoList from "./ToDoList";

class ManageToDoApp extends Component {
  iniState = {
    name: "",
    id: 0,
  };
  state = {
    storeData: [],
    updateButton: false,
    stateDdate: this.iniState,
  };
  nameChange = (e) => {
    this.setState({
      ...this.state,
      stateDdate: {
        ...this.state.stateDdate,
        [e.target.name]: e.target.value,
      },
    });
  };

  dataSave = () => {
    let newArr = [...this.state.storeData];

    //edit case
    const obj = { ...this.state.stateDdate };
    if (obj.id > 0) {
      newArr[obj.id - 1].name = obj.name;
      this.setState({
        ...this.state,
        storeData: newArr,
        stateDdate: this.iniState,
        updateButton: false,
      });
    } else {
      //when new data added
      let newId = 1;
      if (newArr.length > 0) {
        const { id } = newArr[newArr.length - 1];
        newId = id + 1;
      }
      const newObj = {
        ...this.state.stateDdate,
        id: newId,
      };
      newArr.push(newObj);
      this.setState({
        storeData: newArr,
        stateDdate: this.iniState,
      });
    }
  };

  DeleteList = (name) => {
    const deletedArr = this.state.storeData.filter((x) => x.name !== name);
    this.setState({
      storeData: deletedArr,
    });
  };
  onEdit = (id) => {
    const recivData = this.state.storeData.filter((item) => item.id === id);
    const newNmae = recivData[0];
    this.setState(
      {
        ...this.state,
        stateDdate: newNmae,
        updateButton: true,
      },
      () => console.log("va", this.state)
    );
  };
  render() {
    const { name } = this.state.stateDdate;
    return (
      <Fragment>
        <h1> To-Do App Add/Delete/Update </h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => this.nameChange(e)}
        />
        <button type="button" onClick={() => this.dataSave()}>
          {this.state.updateButton === true ? "Update" : "Add"}
        </button>

        <ToDoList
          storeData={this.state.storeData}
          DeleteList={this.DeleteList}
          onEdit={this.onEdit}
        />
      </Fragment>
    );
  }
}
export default ManageToDoApp;
