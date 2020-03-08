package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import java.util.*; 
import com.google.gson.Gson;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/login")
public class LoginServlet extends HttpServlet {

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html");
    /*Gson gson  = new Gson();
    Gson gson2  = new Gson();
    JSONObject json = new JSONObject();
    List<String> turntoJSon = new ArrayList<String>();*/

    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn()){
      String userEmail = userService.getCurrentUser().getEmail();
      String urlToRedirectToAfterUserLogsOut = "/";
      String logoutUrl = userService.createLogoutURL(urlToRedirectToAfterUserLogsOut);
      /*Login login = new Login(userEmail,logoutUrl);
      json.put("useremail", userEmail);
      json.put("logoutUrl", logoutUrl);
      turntoJSon.add("Hello " + userEmail + "!");
      turntoJSon.add("<p>Logout <a href=\"" + logoutUrl + "\">here</a>.</p>"); 

      response.setContentType("application/json;");
      response.getWriter().println(json.toString());
      response.getWriter().println(gson2.toJson("<p>Logout <a href=\"" + logoutUrl + "\">here</a>.</p>"));
      response.getWriter().println(gson.toJson("Hello " + userEmail + "!"));
      response.setContentType("application/json;");
      System.out.println(gson.toJson(login));
      response.getWriter().println(gson.toJson(login));*/
      response.getWriter().println("Hello " + userEmail + "!");
      response.getWriter().println("<p>Logout <a href=\"" + logoutUrl + "\">here</a>.</p>");
    }else{
      String urlToRedirectToAfterUserLogsIn = "/";
      String loginUrl = userService.createLoginURL(urlToRedirectToAfterUserLogsIn);
      /*Login login = new Login("\"" + loginUrl + "\">");
      response.setContentType("application/json;");
      turntoJSon.add("Hello stranger please sign in to leave a comment.");
      turntoJSon.add("<p>Login <a href=\"" + loginUrl + "\">here</a>.</p>");
      response.getWriter().println(gson.toJson(turntoJSon));
      response.getWriter().println(gson.toJson("Hello stranger please sign in to leave a comment."));
      response.setContentType("text/html");
      response.setContentType("application/json;");
      System.out.println(gson.toJson(login));
      response.getWriter().println(gson.toJson(login));*/
      response.getWriter().println("Hello stranger please sign in to leave a comment.");
      response.getWriter().println("<p>Login <a href=\"" + loginUrl + "\">here</a>.</p>"); 
  }
  }
  }

   







