const errorHandler = (store) => (next) => (action) => {
    //throw new Error("Test error");
    try {
        next(action)
    } catch(e){
        console.log('AAAAA, Error', e)
    }
}

export default errorHandler;