import toast from 'react-hot-toast'

const getStoredData =()=>{
    const storedData = localStorage.getItem("cart");
    if(storedData){
        return JSON.parse(storedData)
    }
    return [];
}


const saveStoredData = id =>{
    const storeData = getStoredData();
    const isExist = storeData.find( data => data.id === id.id);
    if(isExist){
        return toast.error("Already Bookmarked")
    }
    else{
        storeData.push(id)
        localStorage.setItem("cart", JSON.stringify(storeData))
        toast.success('Bookmarked Successfully!')
    }
}


export {getStoredData, saveStoredData}