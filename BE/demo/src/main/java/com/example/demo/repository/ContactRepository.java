package com.example.demo.repository;

import com.example.demo.model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

    List<Contact> findByFirstname(String firstname);


}
