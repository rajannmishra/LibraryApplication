package com.interview.libraries.controllers;

import com.interview.libraries.data.model.Book;
import com.interview.libraries.data.repository.BookRepo;
import com.interview.libraries.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
public class LibraryController {

    Logger LOGGER = LoggerFactory.getLogger(LibraryController.class);

    @Autowired
    private BookService bookService;


    @RequestMapping(value = "/getBooks", method = RequestMethod.GET, produces = "application/json")
    public List<Book> getBooks() {

        List<Book> books =bookService.getAllBooks();

        return books;
    }

    @RequestMapping(value="/add", method = RequestMethod.POST, produces = "application/json")
    public List<Book> addBook(@RequestBody @Valid final Book book){
       bookService.save(book);
       return getBooks();

    }

    @RequestMapping(value="/delete", method = RequestMethod.POST, produces = "application/json")
    public List<Book> update(@RequestBody @Valid final Book book){
        bookService.deleteBook(book);
        return getBooks();
    }
}
