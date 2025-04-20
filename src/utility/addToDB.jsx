const getStoreBook=()=>{
const storeBookSTR=localStorage.getItem('readList')
if(storeBookSTR){
    const storeDAta=JSON.parse(storeBookSTR)
    return storeDAta
}
else{
    return []
}
}


const assToStoreDB=(id)=>{
const storeBookData=getStoreBook()
if (storeBookData.includes(id)){
    alert('ami thik aci')
}
else{
    storeBookData.push(id);
const data=JSON.stringify(storeBookData)
localStorage.setItem("readList",data)
}

}
export{assToStoreDB,getStoreBook}