import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

// stateの取得に関する定義
function mapStateToProps({ tasks }) {
    return {
        task: tasks.task,
        tasks: tasks.tasks
    };
}

// stateの書き換えに関する定義
function mapDispatchToProps(dispatch) {
    return {
        addTask(task) {
            dispatch(addTask(task))
        },
        inputTask(task) {
            dispatch(inputTask(task))
        },
        redirectToError(){
            dispatch(push("/error"))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);