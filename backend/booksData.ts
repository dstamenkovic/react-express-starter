type Book = {
  id: string
  title: string
}

// asked chatgpt to generate an array of Arthur C. Clarke books
const books: Book[] = [
  { id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', title: '2001: A Space Odyssey' },
  { id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', title: 'Rendezvous with Rama' },
  { id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r', title: 'The City and the Stars' },
  { id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s', title: "Childhood's End" },
  { id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t', title: 'The Fountains of Paradise' },
  { id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u', title: 'The Songs of Distant Earth' },
  { id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v', title: 'The Sands of Mars' },
  { id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w', title: '2061: Odyssey Three' },
  { id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x', title: '3001: The Final Odyssey' },
  { id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y', title: 'A Fall of Moondust' },
]

export default books
