export const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task
    }
});

export const addTask = (task) => ({
    // アクションの種類を一意に識別できる文字列またはシンボル
    type: 'ADD_TASK',
    // アクションの実行に必要な任意のデータ
    payload: {
        task
    }
});
