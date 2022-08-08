export const increament = (id) => {
    return {
        type: 'INCREAMENT',
        payload: id

    }
}

export const decreament = () => {
    return {
        type: 'DECREAMENT',
    }
}