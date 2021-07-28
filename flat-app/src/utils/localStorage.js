const getData = (key) => {
    try{
        let data = localStorage.getItem(key)
        data =  JSON.parse(data)
        return data
    }
    catch{
        return undefined
    }
}

const saveData = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
}

const deleteData = (key) => {
    localStorage.removeItem(key)
}

export {getData,saveData,deleteData}