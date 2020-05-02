package com.k15t.pat.controller;

import com.k15t.pat.model.User;
import com.k15t.pat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/v1")
@Validated
@ConfigurationProperties("spring.datasource")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /***
     * Controller for adding Java meetUp users.
     * @param user
     * @return
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) throws Exception {

        User _user = userRepository.findByEmail(user.getEmail());

        if (_user == null) {

            user.setPassword(hashPassword(user.getPassword()));
            return userRepository.save(user);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sorry, email already exists");
        }
    }

    public String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();
        return myHash;
    }

}
