import {markdown} from 'markdown';

let source = localStorage.getItem('markov-chaingun-source') || '';

const reducer = (state = {
    source,
    preview: markdown.toHTML(source)
}, action) => {
    switch (action.type) {
        case 'SOURCE_CHANGED':
            return {...state, source: action.source};
        case 'UPDATE_PREVIEW':
            return {...state, preview: markdown.toHTML(state.source)};
        default:
            return state;
    }
};

export default reducer;