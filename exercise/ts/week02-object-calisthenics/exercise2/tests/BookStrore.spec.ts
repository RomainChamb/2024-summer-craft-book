import { BookStore, BookInventory } from '../src/BookStore';




describe('titre', () => {
    it('', () => {
       const bookStore = new BookStore();
       bookStore.addBook('Titre', 'Author', 5);
       expect(bookStore.inventory()).toEqual([
           { title: 'Titre', author: 'Author', copies: 5 }
       ]);
    });
    it('', () => {
       const bookStore = new BookStore();
       bookStore.addBook('Titre', 'Author', 5);
       bookStore.addBook('Titre', 'Author', 2);
       expect(bookStore.inventory()).toEqual([
           { title: 'Titre', author: 'Author', copies: 7 }
       ]);
    });
    it('', () => {
       const bookStore = new BookStore();
       bookStore.addBook('Titre', 'Author', 3);
       bookStore.sellBook('Titre', 'Author', 1);
       expect(bookStore.inventory()).toEqual([
           { title: 'Titre', author: 'Author', copies: 2 }
       ]);
    });
    it('', () => {
       const bookStore = new BookStore();
       bookStore.addBook('Titre', 'Author', 3);
       bookStore.sellBook('Titre', 'Author', 3);
       expect(bookStore.inventory()).toEqual([
       ]);
    });
    it('', () => {
        const bookStore = new BookStore();
        bookStore.sellBook('Titre', 'Author', 3);
        expect(bookStore.inventory()).toEqual([
        ]);
    });
});
