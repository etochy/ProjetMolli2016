public class GenQuestion {

  public String question;
  public String sujet;


    public void GenQuestion(){

      switch (type) {
              case ou:
                question = "Où a eu lieu " + sujet + " ?" ;
                break;
              case quand:
                question = "Quand a eu lieu " + sujet + " ?" ;  
                break;
              case qui:
                question = "Qui a participé à " +  sujet + " ?";
                break;
              default: question = "Erreur";
                       break;
          }
          System.out.println(question);
      }
  }


    }






}
