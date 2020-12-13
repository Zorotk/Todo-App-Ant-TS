import React, {useState} from 'react';
import {Button, Input} from "antd";

interface TodoFormProps {
    onAdd(title: string): void,

}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [iputValue, setiputValue] = useState<string>('')

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setiputValue(event.target.value.trim())
    }
    const addTodo = () => {
        props.onAdd(iputValue)
        setiputValue('')
    }
    const keyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(iputValue)
            setiputValue('')
        }
    }

    return (
        <div className={'todo-form'}>
            <div>
            </div>
            <Input value={iputValue} onKeyPress={keyPress} placeholder={'добавить задачу'}
                   onChange={inputHandler}/>
            <Button disabled={iputValue.length === 0} type={"primary"} onClick={addTodo}>добавить</Button>
        </div>
    );
};

export default TodoForm;