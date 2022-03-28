import React, {ChangeEvent} from "react"
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ""// need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyPress={(e)=>{if(e.key === "Enter") addUser()}}/>

            {/*<input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={(e)=>{if(e.key === "Enter") addUser()}}/>*/}

            <span>{error}</span>
            <SuperButton onClick={addUser}>add</SuperButton>

            {/*<button onClick={addUser}>add</button>*/}

            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
