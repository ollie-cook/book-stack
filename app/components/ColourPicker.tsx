'use client'

import { useState } from "react";
import { CompactPicker } from 'react-color';
import { IoIosColorPalette } from "react-icons/io";
import { type Book } from "@/app/utils/types"

interface ColourPickerProps {
  book: Book;
  setBookPile: Function;
}

export default function ColourPicker(props: ColourPickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateColour = (colour: any, event: any) => {
    props.setBookPile((prev: Book[]) => {
      const newPile = [...prev];
      const index = newPile.findIndex((book) => book.id === props.book.id);
      newPile[index].colour = colour.hex;

      return newPile
    })
  }

  return (
    <div className="relative h-6">
      <button onClick={() => setIsOpen(!isOpen)}><IoIosColorPalette className="h-6 w-6"/></button>
      {
        isOpen == true && 
        <CompactPicker 
          color={ props.book.colour }
          onChangeComplete={ updateColour }
          className="absolute top-2 right-1/2 translate-x-1/2 bg-white border border-gray-300 z-10" 
        />
      }

      </div>
    
  )
}

//