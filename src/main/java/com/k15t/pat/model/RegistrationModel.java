package com.k15t.pat.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

@XmlAccessorType(XmlAccessType.NONE)
@XmlRootElement(name = "user")
public class RegistrationModel implements Serializable {

    @XmlAttribute(name = "id")
    private int id;
    @XmlAttribute(name = "Name", required = true)
    private String Name;
    @XmlAttribute(name = "Password", required = true)
    private String Password;
    @XmlAttribute(name = "Address", required = true)
    private String Address;
    @XmlAttribute(name = "Email", required = true)
    private String Email;
    private String Number;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getNumber() {
        return Number;
    }

    public void setNumber(String number) {
        Number = number;
    }
}
