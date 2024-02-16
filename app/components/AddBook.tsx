'use client'

import { useBookPile } from "./BookPileContext";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddBook() {
  const [bookPile, setBookPile] = useBookPile()

  const addBook = () => {
    const guid = crypto.randomUUID();

    const width = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

    const newBook = {
      id: guid,
      title: "New Book",
      author: "Author",
      colour: "#16A5A5",
      width: width,
    }

    setBookPile([...bookPile, newBook])
  }
  
  return (
    <button onClick={addBook} className="absolute top-4 left-4 p-2 bg-amber-300 rounded-lg flex items-center hover:bg-amber-400">
      Add Book
      <IoIosAddCircleOutline className="inline h-8 w-8 ml-1" />
    </button>
  )
}