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
		
		
		//creation des entit�s question dans le datastore :
		//https://cloud.google.com/appengine/docs/java/datastore/entities
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Entity question = new Entity("Question");
		question.setProperty("Theme",  "Histoire");
		question.setProperty("question", "Une jolie question ?");
		question.setProperty("r�ponse", "La bonne r�ponse");
		question.setProperty("f1", "la premiere mauvaise r�ponse");
		question.setProperty("f2", "la seconde mauvaise r�ponse");
		question.setProperty("f3", "la troisi�me mauvaise r�ponse");
		datastore.put(question);
		
		//httpRequest
		
		
		
		
		
		
		
	}
}
