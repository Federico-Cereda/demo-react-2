// COMPONENT COMPOSITION
import { PropsWithChildren, memo, useCallback, useState } from "react";

export const Demo3 = () => {
    console.log('Container')
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(2)
    const [x, setX] = useState(0)
    
    const inc = useCallback(() => {
        setValue1(s => s + 1)
    }, [])

    return (
        <>
        <h3>Container</h3>
        <button onClick={inc}>{value1}</button>
        <button onClick={() => setValue2(s => s + 1)}>{value2}</button>
        <button onClick={() => setX(Math.random())}>{x}</button>

        <Parent>
            <Child1>
                <Child1Son value={value1} />
            </Child1>
            <Child2 value={value2} />
            <Child3 increment={inc} />
        </Parent>
        </>
    );
}

const Parent = memo((props: PropsWithChildren) => {
    console.log(' Parent')
    return <div>
        <h1>Parent</h1>
        {props.children}
    </div>
})

const Child1 = memo((props:PropsWithChildren) => {
    console.log('  Child1')
    return <div>Child #1: {props.children}</div>
})

const Child1Son = memo((props: { value: number }) => {
    console.log('   Child1Son')
    return <div>Child1 Son: {props.value}</div>
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
