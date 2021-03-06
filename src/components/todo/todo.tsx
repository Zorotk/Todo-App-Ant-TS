import React, {useState, useEffect} from 'react';
import "antd/dist/antd.css";


import {Radio, Input} from "antd";




import TodoForm from "../../todoForm";
import {TodoList} from "../../todoList";
import {useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";

declare var confirm: (question: string) => boolean

export interface TodoInterface {
    title: string,
    id: string | number,
    completed: boolean;
}

interface RootState {
    toolkit: any,
    count: number
}

const Todo: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const [data, setdata] = useState<TodoInterface[]>([])
    useEffect(() => {
        fetchTodo()
    }, [])
const auth=useSelector((state: RootState) => state.toolkit.auth)

    const dataHandler = (title: string) => {
        const newData: TodoInterface = {title: title, id: Date.now(), completed: false}
        setdata(prev => [newData, ...prev])
    }

    const toggleHandler = (id: number) => {
        setdata(prev => prev.map(d => {
            if (d.id === id) {
                d.completed = !d.completed
            }
            return d
        }))
    }

    async function fetchTodo() {
        await fetch('https://5fd0ffe1b485ea0016eedd3b.mockapi.io/api/v1/todo/',
        )
            .then(response => (response.json())).then(data => setdata(data)).then(() => setLoading(false))
    }

    const removeHandler = (id: number) => {
        const should = confirm('удалить')
        if (should) {
            setdata(prev => prev.filter(d => d.id !== id))
        }
    }

    const [value, setValue] = React.useState(undefined);
    const onChange = (e: any) => {
        setValue(e.target.value);
    };
    const [searchTodo, setsearchTodo] = useState('')
    return (
        <BrowserRouter>
        <div>
            {!auth.indefinite && <div className={'todo'}>
                <Input className={'search'} placeholder={'поиск'} value={searchTodo}
                       onChange={(e) => setsearchTodo(e.target.value)}/>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={true}>выполнено</Radio>
                    <Radio value={undefined}>все</Radio>
                    <Radio value={false}>не выполнено </Radio>
                </Radio.Group>
                <TodoForm onAdd={dataHandler}/>
                <TodoList data={data} toggle={toggleHandler} remove={removeHandler}
                          filter={value} search={searchTodo} loading={loading}/>
            </div>}
        </div>
        </BrowserRouter>
    );
};

export default Todo;