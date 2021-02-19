import { ADD } from "../actionTypes";

const initialState = {
    add: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
