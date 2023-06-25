import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE_T0_ADD = "change-value-to-add";
const SUBMIT_VALUE_TO_ADD = "submit-value-to-add";
// action - a map that always has a "type" property and in some cases the payload property(used to perform any operation on
// the input passed by the user)
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE_T0_ADD:
      state.valueToAdd = action.payload;
      return;
    case SUBMIT_VALUE_TO_ADD:
      state.count = state.count + state.valueToAdd;
      return;
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // state-State variable, dispatch- function to change state, map(2nd argument)- initial values of the state
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_T0_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: SUBMIT_VALUE_TO_ADD,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add It</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
