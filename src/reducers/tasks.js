const initialState = {
  task: "",
  tasks: []
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        //concatで新たな配列を生成
        tasks: state.tasks.concat([action.payload.task])
      }

    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      }

    default:
      return state;
  }
};
