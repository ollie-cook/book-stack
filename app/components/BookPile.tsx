'use client'

import Book from "./Book"
import { useBookPile } from "./BookPileContext";

export default function BookPile() {
  const [bookPile] = useBookPile()

  return (
    <div className="min-h-screen w-full flex flex-col-reverse justify-start items-center bg-red-300">
      {
        bookPile.map(book => {
          return <Book key={book.id} book={book} />
        })
      }
    </div>
  )
}