'use client'

import { createContext, useState, useContext, useEffect } from 'react';
import { type Book } from "@/app/utils/types";
import Cookies from "js-cookie"

const useBookPileState = () => {
  return useState<Book[]>([]);
}

export const bookPileContext = createContext<ReturnType<typeof useBookPileState> | null>(null);

export const useBookPile = () => {
  const bookPile = useContext(bookPileContext)
  if (bookPile === null) {
    throw new Error('useBookPile must be used within a bookPileProvider')
  }
  return bookPile
}

const BookPileProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookPile, setBookPile] = useBookPileState()
  const [fetchedCookies, setFetchedCookies] = useState(false)

  useEffect(() => {
    const cookie = Cookies.get('books')
    if (cookie) {
      setBookPile(JSON.parse(cookie))
    }
    setFetchedCookies(true)
  },[])

  useEffect(() => {
    if (fetchedCookies == true) {
      Cookies.set('books', JSON.stringify(bookPile), { expires: 365 })
    }
  },[bookPile])

  return (
    <bookPileContext.Provider value={[bookPile, setBookPile]}>
      {children}
    </bookPileContext.Provider>
  )
}

export default BookPileProvider;