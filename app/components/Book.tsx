import { type Book } from "@/app/utils/types"

interface BookProps {
  book: Book;
}

export default function Book(props: BookProps) {
  return (
    <div className="h-32 bg-blue-400" style={{width: `${props.book.width}%`}}>
      
    </div>
  )
}