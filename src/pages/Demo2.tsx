// DRILLING PROPS con useCallback e memo
import { memo, useCallback, useState } from "react";

export const Demo2 = () => {
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(2)
    const [x, setX] = useState(0)

    console.log('Container')
    
    const inc = useCallback(() => {
        setValue1(s => s + 1)
    }, [])

    return (
        <>
        <h3>Container</h3>
        <button onClick={inc}>{value1}</button>
        <button onClick={() => setValue2(s => s + 1)}>{value2}</button>
        <button onClick={() => setX(Math.random())}>{x}</button>
        <Parent data1={value1} data2={value2} increment={inc} />
        </>
    );
}

type ParentProps = { data1: number, data2: number, increment: () => void }

const Parent = memo((props:ParentProps) => {
    console.log(' Parent')
    return <div>
        Parent
        <Child1 value={props.data1} />
        <Child2 value={props.data2} />
        <Child3 increment={props.increment} />
    </div>
})

type Child1Props = { value: number }

const Child1 = memo((props:Child1Props) => {
    console.log('  Child1')
    return <div>Child #1: {props.value}</div>
})

type Child2Props = { value: number }

const Child2 = memo((props:Child2Props) => {
    console.log('  Child2')
    return <div>Child #2: {props.value}</div>
})

interface Child3Props {
    increment: () => void
}

const Child3 = memo((props:Child3Props) => {
    console.log('  Child3')
    return <div>
        <button onClick={props.increment}>Update value1</button>
    </div>
})
