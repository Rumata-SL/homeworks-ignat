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
            <span className={'rangeValue'} style={{marginRight:'30px',boxSizing:'border-box', width:'50px'}}>{value1}</span>
            <SuperRange value={value1}
                        onChangeRange={onSuperRangeChange}
            />
            <span className={'rangeValue'} style={{marginLeft:'30px',boxSizing:'border-box', width:'50px'}}>{value2}</span>
            {/*<div className={'rangeSliderBox'} style={{width:'30%', margin:'0 auto'}}>
                <span className={'rangeValue'}>{value1}</span>
                <Slider className={'doubleRange'}
                        value={value1}
                        onChange={onSuperRangeChange}
                        railStyle={{backgroundColor: 'blue'}}
                        handleStyle={{borderColor: 'blueviolet', backgroundColor: 'blue'}}
                        trackStyle ={{backgroundColor: 'blueviolet'}}
                />
            <span className={'rangeValue'}>{value2}</span>

            </div>*/}


            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',boxSizing:'border-box'}}>
                <div className={"rangeSliderBox"}
                     style={{
                         width: "400px",
                         display: "flex",
                         flexDirection: "row",
                         justifyContent: "center",
                         alignItems: "center",
                         boxSizing:'border-box'
                     }}>
                    <div className={"rangeValue"} style={{marginRight:'30px',boxSizing:'border-box', width:'50px'}}>{value1}</div>
                    <Range value={[value1, value2]}
                           className={"doubleRange"}
                           railStyle={{
                               backgroundColor: "blue",
                               borderColor: "blue",
                           }}
                           handleStyle={[{
                               borderColor: "blue",
                               backgroundColor: "blue"
                           }, {
                               borderColor: "blue",
                               backgroundColor: "blue"
                           }]}
                           trackStyle={[{
                               backgroundColor: "white",
                               borderColor: "white",

                           }]}
                           allowCross={false}
                           onChange={onSuperDoubleRangeChange}/>
                    <span className={"rangeValue"} style={{marginLeft:'30px',boxSizing:'border-box', width:'50px'}}>{value2}</span>
                </div>
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
