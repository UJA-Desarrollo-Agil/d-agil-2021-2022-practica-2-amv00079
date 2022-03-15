// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Inicio del juego</h1>\
        <img src='./media/img/cama.png' class='float_right' width='250' height='200' >\
        <p> Bienvenido al inicio del juego. </p> \
        <p> Acabas de levantarte de la siesta y recuerdas que\
        has quedado con tus amigos a las 18:00 para ir al cine.</p>\
        \
        <p>Mientras te preparas para salir, comienza a llover.\
        No sabes si esperar al bus y llegar justo para ver la película con\
        ellos o coger un paraguas e ir andando como tenías previsto.\
       </p>\
        \
        <p class='transient'> Al final decides: \
         <a href='cogerparaguas'> Coger paraguas </a> o\
         <a href='esperarbus'> esperar el autobus. </a></p>"
       
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    cogerparaguas: new undum.SimpleSituation(
        "<h1>Coger un paraguas</h1>\
        <img src='./media/img/paraguas.png' class='float_right' width='200' height='170'>\
        <p> \
          Coges el paraguas y vas de camino al cine. \
          Cuando estás a punto de llegar, un coche pasa muy rápido a \
          tu lado y te salpica el agua de un charco, inmediatamente te enfadas \
          por haberte mojado aún llevando paraguas. \
        </p> \
        <p class='transient'> Pulsa para entrar al \
         <a href='cine'>  cine </a></p>"


    ),


    esperarbus: new undum.SimpleSituation(
        "<h1>Esperar el autobus</h1>\
        <img src='./media/img/bus.png' class='float_right' width='190' height='190'>\
        <p> \
        Esperas al autobús y tu amigos te llaman para saber por dónde vas\
        les dices que vas a llegar un poco tarde y que miren mientras la cartelera.\
        </p> \
        <p class='transient'> Pulsa para \
         <a href='cine2'>  continuar </a></p>"
    ),

    cine: new undum.SimpleSituation(
        "<h1>En el cine</h1>\
        <img src='./media/img/taquilla.png' class='float_right' width='210' height='210'>\
       \
        <p> Llegas al cine y te encuentras con tus amigos.\
          Miráis la cartelera para ver las películas que podéis ver.\
          Os llaman la atención dos totalmente diferentes, una comedia y una de terror.\
          Hacéis una votación, dos eligen comedia, otros dos terror... Te toca desempatar...\
          </p> \
          <p class='transient'> Al final decides: \
         <a href='terror'> Terror </a> o\
         <a href='comedia'> comedia. </a></p>"
    ),


    cine2: new undum.SimpleSituation(
        "<h1>En el cine</h1>\
        <img src='./media/img/taquilla.png' class='float_left' width='210' height='210'>\
       \
        <p> Llegas tarde al cine y tus amigos te están esperando.\
          Ellos están entre ver una pelicula de terror o una comedia\
          Te toca desempatar...\
          </p> \
          <p class='transient'> Al final decides: \
         <a href='terror'> Terror </a> o\
         <a href='comedia'> comedia. </a></p>"


    ),

    terror: new undum.SimpleSituation(
        "<h1>Terror</h1>\
        <img src='./media/img/terror.png' class='float_right' width='210' height='210'>\
       \
        <p> Sacáis las entradas y mientras esperáis la cola para entrar a la sala\
        piensas en comprar una bebida y palomitas o entrar sin nada a la sala.\
          </p> \
          <p class='transient'> Optas por: \
         <a href='peli1'> Comprar bebida y palomitas </a> o\
         <a href='peli2'> entrar sin nada a la sala. </a></p>"


    ),

   comedia: new undum.SimpleSituation(
    "<h1>Comedia</h1>\
    <img src='./media/img/risa.png' class='float_right' width='210' height='210'>\
   \
   \
    <p> Sacáis las entradas y mientras esperáis la cola para entrar a la sala\
    piensas en comprar una bebida y palomitas o entrar sin nada a la sala.\
      </p> \
      <p class='transient'> Optas por: \
     <a href='peli1'> Comprar bebida y palomitas </a> o\
     <a href='peli2'> entrar sin nada a la sala. </a></p>",
     

    ),

    peli1: new undum.SimpleSituation(
        "<h1>Tienda</h1>\
        <img src='./media/img/pal.png' class='float_left' width='210' height='180'>\
       \
        <p>Vas a la tienda y gastas el dinero que te quedaba.\
        \
        Cuando terminas de comprar vas a la sala de cine y te reunes con tus amigos.</p>\
        <p class='transient'> Pulsa para \
        <a href='peli2'> continuar</a></p>"
    
        ),


        peli2: new undum.SimpleSituation(
          
            "<h1>Sala de cine</h1>\
            <img src='./media/img/sala.png' class='float_right' width='210' height='180'>\
            \
            <p>Entráis a la sala de cine y disfrutáis la película.\
            Cuando termina es muy tarde y decides volver a casa </p>\
            <p class='transient'> Pulsa para \
            <a href='last'> volver a casa</a></p>"
        
            ),

    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Esperar el autobús"
    }),






    "last": new undum.SimpleSituation(
        "<h1>Vuelta a casa</h1>\
        <p>Llegas a casa y vas a dormir para ir descansado a clase al día siguiente</p>\
        \
        <h1>FIN</h1>",
        {
            tags: ["topic"],
            optionText: "Llegar a casa",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>Enhorabuena has completado el juego</p>"
                );
            }
        }
    ) 
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
   /* dinero: new undum.IntegerQuality(
        "Dinero", {priority:"0001", group:'stats'}
    ),
  
    estado: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Dinero, Stamina and Estado are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Estado</span>",
        {priority:"0003", group:'stats'}
    ),
*/
    inspiration: new undum.NonZeroIntegerQuality(
        "Completado", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Inicio", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progreso', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
   /*  character.qualities.dinero = 20;
    character.qualities.estado = 0; */
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>Comienza tu aventura.</p>");
};
