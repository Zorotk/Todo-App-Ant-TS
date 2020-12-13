import React, {useState} from 'react';
import {Checkbox, List, Button, Spin, Modal} from "antd";
import {TodoInterface} from "./App";
import {useHistory} from 'react-router-dom'

type TodoList = {
    data: TodoInterface[], toggle(id: number | string): void,
    remove(id: number | string): void, filter: any, search: any, loading: boolean
}
export const TodoList: React.FC<TodoList> = ({data, toggle, remove, filter, search, loading}) => {
    const [curentDescription, setcurentDescription] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory()
    const showDescription = (id: any) => {
        history.push(`/${id}`)
        setIsModalVisible(true)
        setcurentDescription(id)
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }
    return (
        <div>
            <Modal
                title="подробное описание"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {data.map((el) => {
                    if (el.id === curentDescription) {
                        return (<div key={el.id}>
                            <div>Подробно№{el.id}</div>
                            {el.title}</div>)
                    }
                    return null
                })}

            </Modal>

            {loading ? <div className="example">
                    <Spin/>
                </div> :
                <List
                    bordered
                    dataSource={data.filter(el => filter === undefined ? el : el.completed === filter).filter(word => Object.values(word).some((value) =>
                        typeof value !== "string"
                            ? value === Number(search)
                            : value.includes(search)
                    ))}
                    header={<div className={'todo-header'}>Список задач</div>}
                    renderItem={item => (
                        <List.Item className={'list'}
                                   actions={[<Button className={'description'}
                                                     onClick={() => showDescription(item.id)}>подробней</Button>,
                                       <Button onClick={() => remove(item.id)}>X</Button>]}>

                            <Checkbox checked={item.completed}
                                      onChange={() => toggle(item.id)}/>      &nbsp;   {item.title}
                        </List.Item>
                    )}
                />}
        </div>
    );
};

