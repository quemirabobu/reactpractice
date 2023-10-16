import {useCallback, useState} from "react";
import React from 'react';
import EffectOfComponent from "./EffectOfComponent";

function CallbackOfComponent() {
    const [count, setCount] = useState(0);

    // 이 함수는 ParentComponent가 리렌더링 될 때마다 새로 생성됩니다.
    const handleChildAction = useCallback(  () => {
        console.log("Child action handled!");
    },[])

    return (
        <div>
            <button onClick={() => {setCount(count + 1)

            console.log(count);
            }}>Increase Count</button>
            <ChildComponent onAction={handleChildAction} />
        </div>
    );
}

const ChildComponent = React.memo(({ onAction }) => {
    console.log("Child component rendered!");
    return <button onClick={onAction}>Child Button</button>;
});
export default CallbackOfComponent;
