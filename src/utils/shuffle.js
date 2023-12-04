export const shuffle = (oldList) => {
    const newList = [...oldList];
    for (let x = 0; x < 5; x++) {
        let i = Math.floor(Math.random() * newList.length);
        let j = Math.floor(Math.random() * newList.length);

        let temp = newList[j];
        newList[j] = newList[i];
        newList[i] = temp;
    }

    return newList;
};
