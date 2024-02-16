'use client'

import { useBookPile } from "./BookPileContext";

export default function AddBook() {
  const [bookPile, setBookPile] = useBookPile()

  const addBook = () => {
    const guid = crypto.randomUUID();

    const width = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

    const newBook = {
      id: guid,
      title: "New Book",
      colour: "blue",
      width: width,
    }

    setBookPile([...bookPile, newBook])
  }
  
  return (
    <button onClick={addBook} className="absolute">
      Add Book
    </button>
  )
}