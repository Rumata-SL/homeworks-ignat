import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";


const themes = ["main-theme", "dark", "red", "some"];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme]} >
            <hr/>
            <div>
                <div>
                    <span className={s[theme + "-text"]}>
                homeworks 12
               </span>
                </div>
                <div>
                    <SuperSelect
                        options={themes}
                        onChangeOption={onChangeCallback}
                        value={theme}
                    />
                </div>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
