import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options?.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
    })

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        onChangeOption && onChangeOption(newValue);
    }

    return (
        <select onChange={onChangeCallback} {...restProps} style={{width:"250px"}}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
