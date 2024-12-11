   //task 1
   class PrintEditionItem {

    constructor(name,releaseDate,pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    
    }
 
    fix() {
        this.state *=  1.5; 
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        }
        if (number > 100) {
            this._state = 100;
        } else {
        this._state = number;
    }
}

    get state () {
        return this._state;
    }

}
    class Magazine extends PrintEditionItem {

    constructor(name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount)
        this.type = "magazine";
}
}
    class Book extends PrintEditionItem {

    constructor(author,name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount)
        this.author = author
        this.type = "book"
    }
}
    class NovelBook extends Book {
        constructor(author,name,releaseDate,pagesCount) {
            super(author,name,releaseDate,pagesCount)
            this.type = "novel"
            
        }
    }
    class FantasticBook extends Book {
        constructor(author,name,releaseDate,pagesCount) {
            super(author,name,releaseDate,pagesCount)
            this.type = "fantastic"
            
        }
    }
    class DetectiveBook  extends Book {
        constructor(author,name,releaseDate,pagesCount) {
            super(author,name,releaseDate,pagesCount)
            this.type = "detective"
        }
    }


    //task 2


    class Library {
        constructor(name,books){
            this.name = name 
            this.books = []
        }
        addBook(book){
            if (book.state > 30) {
                this.books.push(book)
            }
        }


        findBookBy(type, value){
            const findBookByParamBook = this.books.find(item => item[type] === value)
            return !!findBookByParamBook ? findBookByParamBook : null;

        }
        
        giveBookByName(bookName) {
            const index = this.books.findIndex(book => book.name === bookName);
            if (index !== -1){
                return this.books.splice(index , 1 )[0]
            }
            return null
        }
    }


