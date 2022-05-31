import React, {ChangeEvent, useState} from "react";
import {Preloader} from "../../h10/Preloader";
import {requestApi} from "./requestApi";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {loadingAC} from "../../h10/bll/loadingReducer";

export const Request = () => {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)


    const [value, setValue] = useState<boolean>(false)
    const [goodAnswer, setGoodAnswer] = useState<string>("")
    const [badAnswer, setBadAnswer] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        requestApi.testRequest(value)
            .then(response => {
                setGoodAnswer(response.data.errorText)
                setError(false)
            })
            .catch(error => {
                setBadAnswer(error.response.data.errorText)
                setError(true)
            })
            .finally(() => {
                dispatch(loadingAC(true))
                setTimeout(() => {
                    dispatch(loadingAC(false))
                }, 1000)
            })
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.checked)
    }
    return (
        <div>
            {/*{loading && <Preloader/>}*/}
            {
                loading
                    ? (<Preloader/>)
                    : (<>
                        <div>
                            <button onClick={onClickHandler}>Click</button>
                            <input type="checkbox" onChange={onChangeHandler}
                                   checked={value}/>
                        </div>
                        <div style={{
                            color: "white",
                            fontSize: "2em"
                        }}>{!error && goodAnswer}</div>
                        <div style={{
                            color: "red",
                            fontSize: "2em"
                        }}>{!!error && badAnswer}
                        </div>
                    </>)
            }
        </div>
    );
};
