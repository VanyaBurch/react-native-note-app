import {todoProps} from "./todo";

export const categoriesData = {
    finance: 'Фінанси',
    wishList: 'Список покупок',
    weekend: 'Відпочинок'
}

export const initialTodoData = [
    {
        [todoProps.id]: '1',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Завдання 1',
        [todoProps.category]: categoriesData.finance
    },
    {
        [todoProps.id]: '2',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Завдання 2',
        [todoProps.category]: categoriesData.wishList
    },
    {
        [todoProps.id]: '3',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Завдання 3',
        [todoProps.category]: categoriesData.finance
    },
    {
        [todoProps.id]: '4',
        [todoProps.isCompleted]: true,
        [todoProps.name]: 'Завдання 4',
        [todoProps.category]: categoriesData.weekend
    },
    {
        [todoProps.id]: '5',
        [todoProps.isCompleted]: false,
        [todoProps.name]: 'Завдання 5',
        [todoProps.category]: categoriesData.finance
    },
]