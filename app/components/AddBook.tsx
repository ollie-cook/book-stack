'use client'

import { useBookPile } from "./BookPileContext";
import { IoIosAddCircleOutline } from "react-icons/io";

const possibleWidths= [
  "w-[70%] lg:w-[30%]",
  "w-[75%] lg:w-[35%]",
  "w-[80%] lg:w-[40%]",
  "w-[85%] lg:w-[45%]",
  "w-[90%] lg:w-[50%]"
]

export default function AddBook() {
  const [bookPile, setBookPile] = useBookPile()

  const addBook = () => {
    const guid = crypto.randomUUID();

    const width = Math.floor(Math.random() * (50 - 30 + 1)) + 30;
    const widthString = `w-[${width}%]`

    const randomNumber = Math.floor(Math.random() * possibleWidths.length);

    const newBook = {
      id: guid,
      title: "New Book",
      author: "Author",
      colour: "#16A5A5",
      width: width,
      widthString: possibleWidths[randomNumber]
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