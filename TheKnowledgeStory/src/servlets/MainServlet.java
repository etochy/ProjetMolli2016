package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

