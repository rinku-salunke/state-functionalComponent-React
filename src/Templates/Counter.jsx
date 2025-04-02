import { useState } from "react";


function Counter(){

const [count, setCount ]=useState(1000);

function increaseCount(){


    setCount(currentCount=>currentCount+1);
}


return<>
<div>

    <h1>count is:{count}</h1>
    <button onClick={increaseCount}>count ++</button>
</div>

</>
}

export default Counter;