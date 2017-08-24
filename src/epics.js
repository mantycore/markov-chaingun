import { combineEpics } from 'redux-observable';

export default combineEpics(
    action$ =>
        action$.ofType('SOURCE_CHANGED')
            .debounceTime(1000)
            .mapTo({type: 'UPDATE_PREVIEW'}),

    action$ =>
        action$.ofType('SOURCE_CHANGED')
            .debounceTime(3000)
            .mapTo({type: 'PERSIST'}),

    (action$, store) =>
        action$.ofType('PERSIST')
            .map(() => {
                localStorage.setItem('markov-chaingun-source', store.getState().source);
                console.log(Date() + ' Source persisted to localStorage');
                return({type: 'PERSISTED'})
            })


);