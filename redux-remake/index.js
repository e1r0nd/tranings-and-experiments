function stateUpdate(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.ammount;
    } else if (action.type === 'DECREMENT') {
        return state - action.ammount;
    } else {
        return state;
    }
}

class Store {
    constructor(updateState, state) {
        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }

    get state() {
        return this._state;
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        this._callbacks = this._callbacks.filter(cb =>  cb !=== callback);
    }
}

const store = new Store(stateUpdate, 0);

const unsubscribe = store.subscribe(() => console.log('State changed:', store.state));

store.update({type: 'INCREMENT', ammount: 5});
unsubscribe();
store.update({type: 'DECREMENT', ammount: 4});