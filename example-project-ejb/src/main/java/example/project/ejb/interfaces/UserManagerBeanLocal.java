package example.project.ejb.interfaces;

import java.util.List;

import javax.ejb.Local;

import example.project.jpa.entities.User;

@Local
public interface UserManagerBeanLocal {
	public List<User> getAllUsers();
	public User getUser(int id);
}
