package com.interview.libraries.service;

import com.interview.libraries.data.model.Book;
import com.interview.libraries.data.repository.BookRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    Logger LOGGER = LoggerFactory.getLogger(BookService.class);

    @Autowired
    private BookRepo bookRepository;

    public BookRepo getBookRepository() {
        return bookRepository;
    }

    public void setBookRepository(BookRepo bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks(){
        List<Book> books = new ArrayList<>();
        LOGGER.info("Fetching all books...");
        bookRepository.findAll().forEach(books::add);
        LOGGER.info("Number of books in library : {}", books.size());
        return books;
    }

    public void save(final Book book){
        LOGGER.info("Updating book :{}",book);
        bookRepository.save(book);
    }

    public void deleteBook(final Book book){
        LOGGER.info("Deleting book :{}",book);

        bookRepository.deleteById(book.getISBN());
    }
}
