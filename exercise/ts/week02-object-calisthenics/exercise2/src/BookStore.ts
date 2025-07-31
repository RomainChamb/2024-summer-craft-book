import { Book } from './book';


export type Title = string;
export type Author = string;
export type NumberOfCopies = number;

export class BookStore {
    private bookInventory: BookInventory = new BookInventory();

    addBook(title: Title | null, author: Author | null, copies: NumberOfCopies): void {
        if (!(title !== null && author !== null && copies > 0)) {
            return;
        }
        let foundBook = this.searchBook(title, author);
        if (foundBook !== null) {
            foundBook.addCopies(copies);
            return;
        }
        this.bookInventory.add(new Book(title, author, copies));
    }

    private searchBook(title: Title, author: Author): Book | null {
        return this.findBookInStore(title, author) ?? null;
    }

    sellBook(title: Title, author: Author, copies: NumberOfCopies): void {
        const bookToRemove = this.findBookInStore(title, author);
        if(!!bookToRemove) {
            this.removeBook(bookToRemove, copies);
        }
    }

    private findBookInStore(title: Title, author: Author) {
        return this.bookInventory.find(title, author);
    }

    private removeBook(book: Book, copies: NumberOfCopies) {
        book.removeCopies(copies);
        if (!book.hasAtLeastOneCopy()) {
            this.bookInventory.remove(book);
        }
    }

    inventory() {
        return this.bookInventory.all();
    }
}
export class BookInventory {
    private books: Book[] = [];

    all(): Book[] {
        return this.books;
    }

    add(book: Book) {
        this.books.push(book);
    }

    find(title: Title, author: Author) {
        return this.books.find(book => book.isBook(title, author));
    }

    remove(book: Book) {
        this.books = this.books.filter(b => b !== book);
    }
}
