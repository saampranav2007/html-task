class Book {
    constructor(title, author, PublishedYear) {
        this.title = title;
        this.author = author;
        this.PublishedYear = new Date(PublishedYear);
    }

    getSummary() {
        return `${this.title} was published by the Author ${this.author} in the year ${this.PublishedYear.getFullYear()}`;
    }
}

class Ebook extends Book {
    constructor(title, author, PublishedYear, fileSize) {
        super(title, author, PublishedYear);
        this.fileSize = fileSize;
    }

    getSummary() {
        return `${super.getSummary()} File size: ${this.fileSize}MB`;
    }
}

const book1 = new Book("Pride and Prejudice", "Jane Austen", 1942);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1949);

const book3 = new Ebook("The Catcher in the Rye", "J. D. Salinger", 1951, 2.2);
const book4 = new Ebook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 1.2);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());
console.log(book4.getSummary());