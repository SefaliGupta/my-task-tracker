import { useState } from "react";

export default function useNotes() {

    const [input, setInput] = useState("");
    const [inputList, setInputList] = useState([]);
    const [deletedItems, setDeletedItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);

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

    return { input, setInput, inputList, handleSubmit, removeItems, deletedItemsList, deletedItems, completedItems };

}