import Slider from 'rc-slider/lib/Slider'
import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import 'rc-slider/assets/index.css';
import {Range} from "rc-slider";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onSuperRangeChange = (value: number) => {
        const valueIn = Math.min(Number(value), value2);
        setValue1(valueIn)
    }
    const onSuperDoubleRangeChange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={'wrapper'}>
            <h2>homework 11</h2>
            <hr/>


            {/*should work (должно работать)*/}
            <SuperRange value={value1}
                        onChangeRange={onSuperRangeChange}
            />
            {/*<div className={'rangeSliderBox'} style={{width:'30%', margin:'0 auto'}}>
                <span className={'rangeValue'}>{value1}</span>
                <Slider className={'doubleRange'}
                        value={value1}
                        onChange={onSuperRangeChange}
                        railStyle={{backgroundColor: 'blue'}}
                        handleStyle={{borderColor: 'blueviolet', backgroundColor: 'blue'}}
                        trackStyle ={{backgroundColor: 'blueviolet'}}
                />

            </div>*/}

            <div className={'rangeSliderBox'} style={{width:'13%',margin:'0 auto'}}>
                <span className={'rangeValue'}>{value1}</span>
                <Range value={[value1, value2]}
                       className={'doubleRange'}
                       railStyle={{backgroundColor: 'blue',height:'50%'}}
                       handleStyle={[{borderColor: 'blueviolet', backgroundColor: 'blue'}, {borderColor: 'blueviolet', backgroundColor: 'blue'}]}
                       trackStyle ={[{backgroundColor: 'blueviolet'}]}
                       allowCross={false}
                       onChange={onSuperDoubleRangeChange}/>
                <span className={'rangeValue'}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
