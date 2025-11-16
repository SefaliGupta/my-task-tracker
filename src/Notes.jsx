import { useState } from "react";

export default function useNotes() {

    const [input, setInput] = useState("");
    const [inputList, setInputList] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('active');

    const handleSubmit = () => {
        if (!input.trim())
            return;
        setInputList(items => [...items,
            {
                id: crypto.randomUUID(),
                text: input
            }]);    

        setInput("");
    }

    const removeItems = (index) => {
        const item = inputList.find(item => item.id === index);
        if (!item) return;
        setCompletedItems(items => [...items, item]);
        setInputList(items => items.filter(item => item.id !== index));
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
                return inputList;
            case 'deleted':
                return deletedItems;
            case 'completed':
                return completedItems;
        }
    }

    return {
        input,
        setInput,
        inputList,
        handleSubmit,
        removeItems,
        deletedItemsList,
        deletedItems,
        completedItems,
        currentFilter,
        setCurrentFilter,
        getFilteredItem
    };

}