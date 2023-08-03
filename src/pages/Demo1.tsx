// Esempio di useCallback e memo
import { memo, useCallback, useState } from "react"

export function Demo1() {
    console.log('Parent')
    const [value, setValue] = useState<number>(0)
    const [random, setRandom] = useState<number>(0)


    const inc = useCallback(() => {
        setValue(prev => prev + 1);
    }, [])

    return <div>
        <button onClick={inc}>Counter {value}</button>
        <button onClick={() => setRandom(Math.random())}>Random {random}</button>
        <Child onInc={inc}/>
    </div>
}
 export const Child = memo((props: any) => {
    console.log('Child')
    return <div>
        Child
        <button onClick={props.onInc}>+</button>
    </div>
 })
