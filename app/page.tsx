import BookPile from "./components/BookPile"
import BookPileContext from "./components/BookPileContext"
import AddBook from "./components/AddBook"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#60522f] to-[#463816]">
    <BookPileContext>
      <AddBook />
      <BookPile />
    </BookPileContext>
    </main>
  );
}
