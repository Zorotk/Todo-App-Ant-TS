import React from 'react';
import {Progress} from "antd";
import './extends.css'
import DatePicker from "antd/es/date-picker";
import Input from "antd/es/input";
import {useDispatch, useSelector} from "react-redux";
import {progres, setlogin, setpassword, setauth} from '../toolkitRudux/reducer';
import Button from "antd/es/button";
import {useHistory} from 'react-router-dom'

interface RootState {
    toolkit: any
}

const Extends = () => {
    const history = useHistory()
    const auth = useSelector((state: RootState) => state.toolkit.auth)
    const password = useSelector((state: RootState) => state.toolkit.password)
    const login = useSelector((state: RootState) => state.toolkit.login)

    const progress = useSelector((state: RootState) => state.toolkit.progressValue)
    const dispatch = useDispatch()
    const formSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
    }
    const formHandler = () => {

        if (login === auth.login && password === auth.password) {
            dispatch(setauth(false))
            history.push(`/todo`)
            dispatch(setlogin(''))
        }
    }


    return (
        <div className={'extends'}>
            <div onSubmit={formSubmit}>
                <Input placeholder='test' onChange={(e) => dispatch(setlogin(e.target.value))}/>
                <Input placeholder='12345' type={'number'} onChange={(e) => dispatch(setpassword(+e.target.value))}/>
                <Button onClick={formHandler}>войти</Button>
            </div>


            {!auth.indefinite && <div className={'progress'}>
                <Input max={100} min={0} onChange={(e) => dispatch(progres(+e.target.value))} type="number"/>
                <Progress percent={progress} status="active"/>
                <Progress strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }} type="circle" percent={progress}/>
                <div>
                    <DatePicker/>
                    <DatePicker picker="month"/>
                    <DatePicker picker="week"/>
                </div>
            </div>}
        </div>
    );
};

export default Extends;