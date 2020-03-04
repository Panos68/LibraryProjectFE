import Axios from "./base"

export async function getAll(){
    try{
        const {data} = await Axios.get("/book");
        return data;
    }
    catch (error){
        throw error;
    }
}

export async function addBook(book){
    try{
        await Axios.post("/book",book);
    }
    catch (error){
        throw error;
    }
}