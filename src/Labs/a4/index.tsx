import React from "react";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import BooleanStateVariables from "./BooleanStateVariables";
import Counter from "./Counter";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return(
    <>
      <h1>Assignment 4</h1>
      <PassingFunctions theFunction={sayHello} />
      <ClickEvent />
      <PassingDataOnEvent />
      <Counter />
      <BooleanStateVariables/>
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />

      <ReduxExamples/>
    </>
  );
};
export default Assignment4;