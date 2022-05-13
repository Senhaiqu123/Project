package com.Senhai.app.rest.Repo;
import com.Senhai.app.rest.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long>{

}
