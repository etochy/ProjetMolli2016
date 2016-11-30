package servlets;

import java.io.IOException;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.EmbeddedEntity;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.KeyRange;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class MainServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
		
		
		//creation des entités question dans le datastore :
		//https://cloud.google.com/appengine/docs/java/datastore/entities
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Entity question = new Entity("Question");
		question.setProperty("Theme",  "Histoire");
		question.setProperty("question", "Une jolie question ?");
		question.setProperty("réponse", "La bonne réponse");
		question.setProperty("f1", "la premiere mauvaise réponse");
		question.setProperty("f2", "la seconde mauvaise réponse");
		question.setProperty("f3", "la troisième mauvaise réponse");
		datastore.put(question);
		
		//httpRequest
		
		
		
		
		
		
		
	}
}
