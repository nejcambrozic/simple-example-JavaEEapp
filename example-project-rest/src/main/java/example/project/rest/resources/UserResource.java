package example.project.rest.resources;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

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
		
		List<User> users = userManager.getAllUsers(); 
		
		return Response.ok().entity(users).build();
	}

	@GET
	@Path("/test")
	@Produces("application/json")
	public Response test(){

		return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces("application/json")
	public Response getUser(@PathParam("id") int userId){
		
		User user = userManager.getUser(userId);
		return Response.ok().entity(user).build();
		
	}
}
