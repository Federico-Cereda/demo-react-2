import { createContext, memo, useContext, useState } from "react";

interface AppState {
    value1: number;
    value2: number;
}

export const AppContext = createContext<AppState>({ value1: 0, value2: 0 })

export function Demo6 () {
    const [value1, setValue1] = useState(123)
    const [value2, setValue2] = useState(456)

    return <AppContext.Provider value={{ value1, value2 }}>
        <h4>Root</h4>
        <button onClick={() => setValue1(s => s + 1)}>{value1}</button>
        <Dashboard />
    </AppContext.Provider>
}

export const Dashboard = memo(() => {
    console.log('Dashboard')
    return <div>
        Dashboard
        <Panel1 />
        <Panel2 />
    </div>
})

function Panel1 () {
    console.log(' Child1')
    const state = useContext(AppContext)
    return <div>Panel1 {state.value1}</div>
}

const Panel2 = memo(() => {
    console.log(' Child2')
    const state = useContext(AppContext)
    return <div>Panel2 {state.value2}</div>
})
