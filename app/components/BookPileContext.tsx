'use client'

import { createContext, useState, useContext } from 'react';
import { type Book } from "@/app/utils/types";

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

const bookPileProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookPile, setBookPile] = useBookPileState()

  return (
    <bookPileContext.Provider value={[bookPile, setBookPile]}>
      {children}
    </bookPileContext.Provider>
  )
}

export default bookPileProvider;