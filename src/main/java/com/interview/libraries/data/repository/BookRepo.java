package com.interview.libraries.data.repository;

import com.interview.libraries.data.model.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface BookRepo extends CrudRepository<Book, String> {
}
