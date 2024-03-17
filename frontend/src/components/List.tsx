import type { Book } from '../types'

type Props = {
  books: Book[]
}

const List = ({ books }: Props) => {
  return (
    <div className="mx-auto my-8 p-4 text-center">
      <h1 className="text-gray-500 text-4xl my-4">Arthur C. Clarke books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
