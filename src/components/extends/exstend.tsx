import React, {useState} from 'react';
import {Progress} from "antd";
import './extends.css'
import DatePicker from "antd/es/date-picker";
import Input from "antd/es/input";

const Extends = () => {
    const [progressValue, setprogressValue] = useState<number>()
    return (
        <div className={'extends'}>
            <Input max={100} min={0} onChange={(e) => setprogressValue(+e.target.value)} type="number"/>
            <div className={'progress'}>
                <Progress percent={progressValue} status="active"/>
                <Progress strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }} type="circle" percent={progressValue}/>
                <div>
                    <DatePicker/>
                    <DatePicker picker="month"/>
                    <DatePicker picker="week"/>
                </div>
            </div>
        </div>
    );
};

export default Extends;