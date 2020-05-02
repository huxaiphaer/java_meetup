package com.k15t.pat.repository;
import com.k15t.pat.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * User repository
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("select u from User u  where u.Email = :Email")
    public User findByEmail(@Param("Email") String Email);
}
