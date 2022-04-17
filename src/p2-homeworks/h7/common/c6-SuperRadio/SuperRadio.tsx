import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions = options ? options.map((options) => (
        <label>
            <input
                type={name}
                value={options}
                name={options}
                checked={options === value}
                onChange={onChangeCallback}
            />
            {options}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
