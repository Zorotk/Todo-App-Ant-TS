import React, {useState} from 'react';
import {Button, Input} from "antd";

interface TodoFormProps {
    onAdd(title: string): void,

}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [inputValue, setiputValue] = useState<string>('')

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setiputValue(event.target.value.trim())
    }
    const addTodo = () => {
        props.onAdd(inputValue)
        setiputValue('')
    };
    const keyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(inputValue)

            // @ts-ignore
            async function fetchAdd() {
                const newTodo = {title: inputValue, id: Date.now(), completed: false}
                const response = await fetch('https://5fd0ffe1b485ea0016eedd3b.mockapi.io/api/v1/todo/', {
                    method: 'POST',
                    body: JSON.stringify(newTodo)
                })
                const data = await response.json()
                console.log(data)
            }

            fetchAdd()

            setiputValue('')
        }
    };


    return (
        <div className={'todo-form'}>

            <div>
            </div>
            <Input value={inputValue} onKeyPress={keyPress} placeholder={'добавить задачу'}
                   onChange={inputHandler}/>
            <Button disabled={inputValue.length === 0} type={"primary"} onClick={addTodo}>добавить</Button>
        </div>
    );
};

export default TodoForm;