import React, {useState} from "react";
import {View} from 'react-native'
import CircleButton from "../../Components/CircleButton";
import styles from "./styles";
import TodoBlock from "../../Components/TodoBlock";
import {todoProps} from "../../Constants/todo";
import {categoriesData, initialTodoData} from "../../Constants/todoStructure";

const generateId = () =>  Math.floor(Math.random() * Math.floor(1000))

const initialTask = {
    [todoProps.id]: null,
    [todoProps.isCompleted]: 'Нове завдання',
    [todoProps.name]: null,
    [todoProps.category]: false
}

const Main = () => {
    const [todoData, setTodoData] = useState(initialTodoData)

    const addNewTask = () => {
        setTodoData([
            ...todoData,
            {
                ...initialTask,
                [todoProps.id]: generateId().toString(),
            },
        ]);
    }

    const deleteTask = ({id}) => {
        const newTodoData = todoData.filter((item) => item.id !== id)
        setTodoData(newTodoData)
    }

    const onChangeTask = ({key, value, id}) => {
        const newTodoData = todoData.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    [key]: value
                }
            } else {
                return item
            }
        })

        setTodoData(newTodoData)
    }

    const filterTodoData = ({data, status}) => data.filter(item => item.isCompleted === status)

    return (
        <View style={styles.container}>
            <TodoBlock
                todoData={filterTodoData({data: todoData, status: false})}
                title={'Нові завдання'}
                onChangeTodo={onChangeTask}
                todoCategories={categoriesData}
                onDeleteTodo={deleteTask}
            />
            <TodoBlock
                todoData={filterTodoData({data: todoData, status: true})}
                title={'Виконані завдання'}
                onChangeTodo={onChangeTask}
                todoCategories={categoriesData}
                onDeleteTodo={deleteTask}
            />
            <CircleButton add={addNewTask} />
        </View>
    )
}

export default Main