import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import tasksReducer from '../reducers/tasks';
import { createLogger } from 'redux-logger';

export default function createStore(history) {
    // const logger = createLogger({
    //     collapsed: true,
    //     diff: true
    // });

    // ミドルウェア（ロガー）
    const logger = store => next => action => {
        // Action適用前のstateを表示
        console.log(store.getState());

        // どのようなActionが適用されたのかを表示
        console.log(action);
        const result = next(action);

        // Action適用後のstateを表示
        console.log(store.getState());
        console.log('----------------');

        return result;
    }

    // ミドルウェア（ローカルストレージ）
    const storageMiddleware = store => next => action => {
        const result = next(action);
        localStorage.setItem('app-state', JSON.stringify(store.getState()));
        return result;
    }

    return reduxCreateStore(
        combineReducers({
            // tasksReducerをtasksというkeyに割り当てる
            tasks: tasksReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(
            //logger,
            storageMiddleware,
            routerMiddleware(history)
        )
    );
}