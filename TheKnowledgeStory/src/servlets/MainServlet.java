package servlets;

import java.io.*;
import java.util.* ;
import javax.servlet.* ;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class MainServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
		}
	public  void doPost(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException  {
			
				doGet(request, response) ;
			}
		}	

	
	/*
	creation des entités question dans le datastore :
	https://cloud.google.com/appengine/docs/java/datastore/entities
	try {
			
	DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		
		//Utile pour faire les highscore
		//------------------------------------------
		// Demande tous les 5 derniers messages triés par date décroissante
			
		Query q = new Query("Question").addSort("question", SortDirection.DESCENDING);
        List<Entity> results = datastore.prepare(q).asList(FetchOptions.Builder.withLimit(5));
		req.setAttribute("messages", results);
        this.getServletContext().getRequestDispatcher("/WEB-INF/guestbook.jsp").forward(req, resp);

		} catch (ServletException e) {

        e.printStackTrace();

		} catch (IOException e) {

         e.printStackTrace();

		}
	}

	public void doPost(HttpServletRequest req, HttpServletResponse resp) {  

	     try {

	            DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();


	            // Stocke une question

				Entity question = new Entity("Question");
				question.setProperty("Theme",  "Histoire");
				question.setProperty("question", "Une jolie question ?");
				question.setProperty("réponse", "La bonne réponse");
				question.setProperty("f1", "la premiere mauvaise réponse");
				question.setProperty("f2", "la seconde mauvaise réponse");
				question.setProperty("f3", "la troisième mauvaise réponse");
				datastore.put(question);


	            resp.sendRedirect("/");

	        } catch (IOException e) {

	            e.printStackTrace();

	        }

	    }		
		
	 */



