import com.fasterxml.jackson.databind.ObjectMapper;
import com.k15t.pat.ApplicationBootstrap;
import com.k15t.pat.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = ApplicationBootstrap.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public final class UserControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }


    }

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

    @Test
    public void contextLoads() {
    }

    @Test
    public void registerUserWithWeakPassword() throws Exception {

        User user = new User();
        user.setEmail("admin@gmail.com");
        user.setName("abu");
        user.setNumber("070567778");
        user.setPassword("admin");
        user.setAddress("buziga");
        ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/v1/users", user, User.class);
        Assert.assertEquals(postResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }

    @Test
    public void registerUserWithoutEmail() throws Exception {

        User user = new User();
        user.setName("abu");
        user.setNumber("070567778");
        user.setPassword("admin");
        user.setAddress("buziga");
        ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/v1/users", user, User.class);
        Assert.assertEquals(postResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }

    @Test
    public void registerUserWithoutName() throws Exception {

        User user = new User();
        user.setEmail("admin@gmail.com");
        user.setNumber("070567778");
        user.setPassword("admin");
        user.setAddress("buziga");
        ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/v1/users", user, User.class);
        Assert.assertEquals(postResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }

    @Test
    public void registerUserWithoutNumber() throws Exception {

        User user = new User();
        user.setEmail("admin@gmail.com");
        user.setName("abu");
        user.setPassword("admin");
        user.setAddress("buziga");
        ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/v1/users", user, User.class);
        Assert.assertEquals(postResponse.getStatusCode(), HttpStatus.BAD_REQUEST);
    }

    @Test
    public void registerUserWithCorrectCredentials() throws Exception {
        LocalDateTime myObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("ddMMyyyyHHmmss");
        String formattedDate = myObj.format(myFormatObj);

        String mail = "".concat("ad").concat(formattedDate).concat("@gmail.com");
        User user = new User();
        user.setEmail(mail);
        user.setName("abu");
        user.setNumber("070567778");
        user.setPassword("admin12345678");
        user.setAddress("buziga");
        ResponseEntity<User> postResponse = restTemplate.postForEntity(getRootUrl() + "/api/v1/users", user, User.class);
        System.out.println(mail);
        Assert.assertEquals(postResponse.getStatusCode(), HttpStatus.CREATED);

    }

}
