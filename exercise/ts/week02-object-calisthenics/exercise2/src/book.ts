import {Author, NumberOfCopies, Title} from "./BookStore";

export class Book {
    private title: Title;
    private author: Author;
    private copies: NumberOfCopies;

    constructor(title: Title, author: Author, copies: NumberOfCopies) {
        this.title = title;
        this.author = author;
        this.copies = copies;
    }

    addCopies(additionalCopies: NumberOfCopies): void {
        if (additionalCopies > 0) {
            this.copies += additionalCopies;
        }
    }

    removeCopies(soldCopies: NumberOfCopies): void {
        if (soldCopies > 0 && this.copies >= soldCopies) {
            this.copies -= soldCopies;
        }
    }
    isBook(title: Title, author: Author) {
        return this.title === title && this.author === author;
    }

    hasAtLeastOneCopy() {
        return this.copies > 0;
    }
}
