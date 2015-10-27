package example.project.rest.resources;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import example.project.ejb.interfaces.UserManagerBeanLocal;
import example.project.jpa.entities.User;

@RequestScoped
@Path("users")
public class UserResource {

	@EJB
	private UserManagerBeanLocal userManager;

	@GET
	@Produces("application/json")
	public Response getAllUsers() {

		try {

			List<User> users = userManager.getAllUsers();

			if (users == null) {
				return Response.status(Status.NOT_FOUND).build();
			}

			return Response.ok().entity(users).build();

		} catch (Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
		}
	}

	@GET
	@Path("/{id}")
	@Produces("application/json")
	public Response getUser(@PathParam("id") String id) {

		try {
			int userId = Integer.parseInt(id);

			User user = userManager.getUser(userId);

			if (user == null) {
				return Response.status(Status.NOT_FOUND).build();
			}

			return Response.ok().entity(user).build();
		} catch (NumberFormatException numException) {
			return Response.status(Status.BAD_REQUEST).entity("User id must be integer").build();

		} catch (Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
		}

	}
}
