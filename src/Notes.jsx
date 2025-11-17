import { useState } from "react";

export default function useNotes() {

    const [input, setInput] = useState("");
    const [inputList, setInputList] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('active');

    const handleSubmit = () => {
        if (!input.trim())
            return;
        setInputList(items => [...items,
            {
                id: crypto.randomUUID(),
                text: input,
                completed: false
            }]);    

        setInput("");
    }

    const toggleCompletedItems = (index) => {
        setInputList(items => items.map(item => item.id === index ? { ...item, completed: !item.completed } : item));
    }

    const deletedItemsList = (index) => {
        const item = inputList.find(item => item.id == index);
        if (!item) return;
        setDeletedItems(items => [...items, item]);
        setInputList(items => items.filter(item => item.id != index));
    }

    const getFilteredItem = () => {
        switch (currentFilter) {
            case 'active':
                return inputList.filter(items => !items.completed);
            case 'deleted':
                return deletedItems;
            case 'completed':
                return inputList.filter(items => items.completed);
            default:
                return inputList;
        }
    }

    return {
        input,
        setInput,
        inputList,
        handleSubmit,
        toggleCompletedItems,
        deletedItemsList,
        deletedItems,
        currentFilter,
        setCurrentFilter,
        getFilteredItem
    };

}