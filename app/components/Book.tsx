'use client'

import { type Book } from "@/app/utils/types"
import { useBookPile } from "./BookPileContext";
import { FaTrashCan } from "react-icons/fa6";
import ColourPicker from "./ColourPicker";

interface BookProps {
  book: Book;
}

export default function Book({ book }: BookProps) {
  const [bookPile, setBookPile] = useBookPile();

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {

    setBookPile((prev: Book[]) => {
      const newPile = [...prev]
      const index = newPile.findIndex(b => b.id === book.id);
      newPile[index].title = e.target.value;

      return newPile;
    })
  }

  const updateAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookPile((prev: Book[]) => {
      const newPile = [...prev]
      const index = newPile.findIndex(b => b.id === book.id);
      newPile[index].author = e.target.value;

      return newPile;
    })
  }

  const handleDelete = () => {
    setBookPile((prev: Book[]) => {
      return prev.filter(b => b.id !== book.id)
    })
  }

  return (
    <div className={`group relative h-20 md:h-32 p-8 flex justify-between border-black rounded-sm ${book.widthString}`} style={{backgroundColor: book.colour}}>
      <div className="flex flex-col items-start self-center">
        <input type="text" className="bg-transparent text-xl lg:text-4xl" value={book.title} onChange={updateTitle} />
        <input type="text" className="bg-transparent text-xs lg:text-sm" value={book.author} onChange={updateAuthor} />
      </div>
      <div className="hidden absolute bottom-2 right-2  h-8 items-center gap-2 group-hover:flex">
        <ColourPicker book={book} setBookPile={setBookPile} />
        <button onClick={handleDelete}>
          <FaTrashCan className="h-6 w-6"/>
        </button>
      </div>
    </div>
  )
}