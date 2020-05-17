package com.interview.libraries.data.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="Book")
public class Book {

    @Id
    @Column(name = "ISBN")
    private String ISBN;

    @Column(name = "title")
    private String title;

    @Column(name = "publisher")
    private String publisher;

    @Column(name = "copies")
    private int copies;

    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL, mappedBy = "book")
    @JsonManagedReference
    private Set<Author> author;

    @PreRemove
    public void removeAuthors(){
        for(Author a:author){
            a.setBook(null);
        }
    }

    public Book(){

    }

    public Book(String ISBN, String title, String publisher, int copies, Set<Author> author) {
        this.ISBN = ISBN;
        this.title = title;
        this.publisher = publisher;
        this.copies = copies;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "ISBN='" + ISBN + '\'' +
                ", title='" + title + '\'' +
                ", publisher='" + publisher + '\'' +
                ", copies=" + copies +
                ", author=" + author +
                '}';
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getCopies() {
        return copies;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }

    public Set<Author> getAuthor() {
        return author;
    }

    public void setAuthor(Set<Author> author) {
        this.author = author;
    }
}
