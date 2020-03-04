import React, { useEffect,useState} from "react";

import Grid from "@material-ui/core/Grid";
import BookCard from "../../components/BookCard";
import { getAll,addBook } from "../../api/books";

export default function BookList() {
  const [books,setBooks] = useState([])
  useEffect(() => {
    async function fetchData(){
      const books = await getAll();
      setBooks(books)
    }
    fetchData()
  },[]);

  useEffect(() => {
    async function add(){
      await addBook({name:"harry"});
    }
    add()
  },[]);



  return (
    <div>
      <h1>BookList</h1>
      <Grid container spacing={1}>
        {books.map(book => (
          <Grid item lg={2} key={book.id}>
            <BookCard cardBook={book}></BookCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
