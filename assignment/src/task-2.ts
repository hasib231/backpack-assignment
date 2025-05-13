type Book = {
    title: string;
    author: string;
    year: number;
  };
  
  const books: Book[] = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
  ];
  
  function getBookTitles(bookArray: Book[]): string[] {
    return bookArray.map(book => book.title);
  }
  
  console.log(getBookTitles(books));
  