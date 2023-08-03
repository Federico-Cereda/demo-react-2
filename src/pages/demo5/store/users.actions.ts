type LoadUsers = { type: 'loadUsers', payload: any[] }
type DeleteUser = { type: 'deleteUser', payload: number }
type ServerError = { type: 'serverError', payload: string }
type ShowPending = { type: 'showPending' }

export type AppActions = LoadUsers | DeleteUser | ServerError | ShowPending