import { AppActions } from "./users.actions";

interface UserState {
    list: any[],
    error: string | null,
    pending: boolean
}

export const initialState: UserState = {
    list: [],
    error: null,
    pending: false
};

export function usersReducer(state: UserState, action:AppActions) {
    switch (action.type) {
        case "loadUsers":
            return {...state, list: action.payload, pending: false, error: null }
        case "deleteUser":
            return {...state, list: state.list.filter(item => item.id !== action.payload), pending: false, error: null }
        case "serverError":
            return {...state, list: [], pending: false, error: action.payload }
        case "showPending":
            return {...state, pending: true }
    }
    return state;
}
