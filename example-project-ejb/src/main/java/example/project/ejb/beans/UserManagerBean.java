package example.project.ejb.beans;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.NotFoundException;

import example.project.ejb.interfaces.*;
import example.project.jpa.entities.User;

/**
 * Session Bean implementation class UserManagerBean
 */
@Stateless
public class UserManagerBean implements UserManagerBeanRemote, UserManagerBeanLocal {

	/**
	 * Default constructor.
	 */
	public UserManagerBean() {

	}

	@PersistenceContext(unitName = "example-project-jpa")
	private EntityManager em;

	@Override
	public List<User> getAllUsers() {

		List<User> userList = em
				.createNamedQuery("User.findAll", User.class)
				.getResultList();
		return userList;
	}

	@Override
	public User getUser(int id) {

		User user = em
				.find(User.class, id);
		return user;
	}

}
