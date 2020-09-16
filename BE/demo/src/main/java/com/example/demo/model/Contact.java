package com.example.demo.model;

import javax.persistence.*;


@Entity
@Table(name = "contact")
public class Contact {
    private long id;
    private String firstname;
    private String lastname;
    private String address;
    private int phone;


    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", address='" + address + '\'' +
                ", phone=" + phone +
                '}';
    }


    public Contact(long id, String firstname, String lastname, String address, int phone) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "firstname")
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    @Column(name = "lastname")
    public String getLastname() {
        return lastname;
    }


    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    @Column(name = "phone")
    public int getPhone() {
        return phone;
    }

    public void setPhone(int number) {
        this.phone = number;
    }


    public Contact() {
    }


}
