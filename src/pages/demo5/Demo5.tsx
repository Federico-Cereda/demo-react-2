// useReducer + CRUD
import axios from "axios"
import { memo, useEffect, useReducer } from "react"
import { initialState, usersReducer } from "./store/users.reducer"

export const Demo5 = () => {
    const [data, dispatch] = useReducer(usersReducer, initialState)

    useEffect(() => {
        dispatch({ type: 'showPending' })
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch({ type:'loadUsers', payload: res.data })
            })
            .catch((e) => {
                dispatch({ type:'serverError', payload: 'data not loaded' })
            })
        }, 2000)

    }, [])

    function DeleteUser(id: number) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {
                    dispatch({ type:'deleteUser', payload: id })
                })
                .catch((e) => {
                    dispatch({ type:'serverError', payload: 'user not deleted' })
                })
    }

    return (
        <div>
            { data.pending  && <div>Pending...</div> }
            { data.error  && <div>{data.error}</div> }
            <Child1 dispatch={dispatch} />
            {JSON.stringify(data.list)}
        </div>
    );
}

export const Child1 = memo((props:any) => {
    console.log('render child')
    return <div>
        <button onClick={() => props.dispatch({ type: 'showPending' })}>Show pending</button>
    </div>
})
