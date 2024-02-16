import BookPile from "./components/BookPile"
import BookPileContext from "./components/BookPileContext"
import AddBook from "./components/AddBook"

export default function Home() {
  return (
    <main className="relative min-h-screen">
    <BookPileContext>
      <AddBook />
      <BookPile />
    </BookPileContext>
    </main>
  );
}
