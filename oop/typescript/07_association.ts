/* A general term: when one class uses or connects to another.
 * Can be one-to-one, one-to-many, etc.
 * */
class Author {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Book {
  title: string;
  author: Author; // Association

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }
}

const author = new Author("George Orwell");
const book = new Book("1984", author);
