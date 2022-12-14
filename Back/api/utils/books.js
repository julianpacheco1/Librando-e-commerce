const { Book } = require("../models");
const bookService = require("../services/bookService");

const books = [
  {
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    genre: "Novela de Aventuras",
    description:
      "Obedecer a los padres siempre ha sido lo correcto, eso trae una vida de mucha tranquilidad y sensatez, no hacerlo es todo lo contrario, trae desgracia y muerte. Este principio lo tenía en mente el autor Daniel Defoe cuando escribió su novela Robinson Crusoe. ¿Quién es Robinson Crusoe? Es un personaje que emula la terquedad de la juventud, nació en Nueva York, en medio de una familia acaudalada, el cual a medida que fue creciendo mostró su interés por navegar en el mar, sin saber que a futuro sería una gran desdicha. Su padre siempre lo había encaminado por las leyes, para que fuera un abogado y se dedicara a este oficio, pero Crusoe se niega abiertamente y decide hacer lo que en realidad quería: ir a navegar, por lo que a los 19 años realiza su primer y único viaje, donde experimentará una realidad que jamás pensó que viviría.",
    editorial: "Om",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Robinson-Crusoe.jpg",
    price: 2350,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las minas del rey Salomón",
    author: "Autor: H. Rider Haggard",
    genre: "Novela de Aventuras",
    description:
      "Las minas del rey Salomón es un libro de aventura inspirado en el rey Salomón que describe la Biblia, sin embargo solo se ha tomado el punto de que fue un hombre con muchas riquezas en su tiempo, debido a su gran sabiduría. El autor parte de ese hecho y crea esta maravillosa novela, donde trata de expresar a través de sus líneas, la importancia de valores como: el compañerismo, el respeto a otras culturas, y la perseverancia.La obra relata la historia de un hombre cazador de elefantes llamado Allan Quatermain, el cual emprende un viaje a lugares inexplorados de África para dar con las minas del rey y así conseguir su tesoro. En este viaje, Allan se encontrará con tribus desconocidas, donde tendrá que aprender a dialogar, aparte de ello enfrentará peligros insospechados que pondrán en riesgo su vida más de una vez.",
    editorial: "Susaeta",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/LAS-MINAS-DEL-REY-SALOMON.jpg",
    price: 2583,
    stock: 10,
    deleted: false,
  },

  {
    title: "La isla del tesoro",
    author: "Robert Louis Stevenson",
    genre: "Novela de Aventuras",
    description:
      "Robert Louis Stevenson es un autor bestseller, ha escrito libros famosos como: El náufrago, El extraño caso del Dr. Jekyll y Mr Hyde, y La isla del tesoro. Sus libros han sido vendidos a nivel mundial, y son considerados como clásicos de literatura. La edición presente de La isla del tesoro es una versión reducida, pero sigue conservando toda la frescura del original, también contiene ilustraciones en base al relato, que ayudarán al lector a imaginarse los ambientes en donde se desarrolla la novela. Cuenta la historia de Jim, un niño que por casualidad se encontró con un extraño mapa de un viejo marinero, el cual contenía la ruta hacia una isla donde se encuentra un tesoro buscado por los siete mares, pero que no ha sido hallado todavía. A partir de ese punto la vida de Jim cambiará, y se aventurará sorteando muchos peligros para dar con el tesoro.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/06/La-isla-del-tesoro.jpg",
    price: 1440,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los viajes de Gulliver",
    author: "Jonathan Swift",
    genre: "Novela de Aventuras",
    description:
      "Recuerdo cuando niño mis padres me hacían ver Los viajes de Gulliver en serie animada, para ese entonces Gulliver era uno de mis personajes favoritos, un aventurero que era secuestrado por enanos y en ocasiones se encontraba en un mundo de gigantes, etc. lo que me gustaba era como se libraba de sus peligros. Sin embargo, cabe destacar que su libro es muchísimo mejor, dejando de lado su trama infantil para convertirse en una historia profunda, que tiene como fin hacer una crítica a la sociedad inglesa del siglo XVIII.El libro Los viajes de Gulliver en nuestros tiempos es considerado un clásico de literatura que vale la pena leer por su riqueza y dura crítica hacia el comportamiento humano, donde los enanos, los gigantes, los científicos disparatados y los caballos domina hombres tienen un significado muy particular.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Los-viajes-de-Gulliver.jpg",
    price: 922,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los tres mosqueteros",
    author: "Alejandro Dumas",
    genre: "Novela de Aventuras",
    description:
      "Los tres mosqueteros es una novela muy famosa, llevada a caricatura y a películas cinematográficas, su autor Alejandro Dumas, fue un hombre muy citado en su tiempo, y fue el autor de grandes éxitos, incluyendo: 'El Conde de Montecristo', 'El Tulipán Negro' y 'La reina Margot'. Los tres mosqueteros son tres personajes muy diferentes, pero muy unidos y habilidosos con la espada, Athos es uno de ellos, el cual tiene la habilidad de no alterarse y mantener la calma en situaciones que generalmente producen turbación, Pothos es un fanfarrón que siempre habla demás y quiere lucirse en todo momento, mientras que Aramis es un hombre muy refinado, de gustos y sabores delicados, que parece ser de la nobleza.Estos tres personajes acompañarán a un Duque que llega a París con la esperanza de convertirse en mosquetero del Rey.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Los-tres-mosqueteros.jpg",
    price: 2496,
    stock: 10,
    deleted: false,
  },

  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Novela de Aventuras",
    description:
      "Hasta hace pocos años pensaba que Moby Dick era un relato real y no una historia de aventuras, su trama es tan impactante y emocionante que permite pensar que fue un suceso totalmente verídico, sin embargo nunca fue así.Moby Dick es una historia famosa, tanto su libro como sus películas han cautivado a millones de personas en todo el mundo, convirtiéndose en uno de los cuentos más leído de todos los tiempos. Narra la historia de un capitán llamado Ahab, quien quería a toda costa encontrar a una enorme ballena que se encontraba en el fondo del océano, la cual era culpable de muchas leyendas de marineros, de barcos destruidos, de hombres desaparecidos, etc. Ahab también había probado de primera mano el terror de Moby Dick, el leviatán que le arrancó su pierna, por lo que el capitán anhela venganza.",
    editorial: "Penguin",
    front: "https://infolibros.org/wp-content/uploads/2020/07/Moby-Dick.jpg",
    price: 2704,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las aventuras de Tom Sawyer",
    author: "Mark Twain",
    genre: "Novela de Aventuras",
    description:
      "Tom Sawyer es un joven muy travieso, huérfano de padres, por lo que su tía Polly decide criarlo. Debido a sus travesuras, Tom siempre es reprendido por su tía, y aunque suele molestarse, Tom la ama profundamente ya que es su familiar más cercano. Tom conoce a Huckleberry Finn, quien será su buen amigo, con el cual vivirá aventuras humorísticas y dramáticas de las que salen más airosos de lo que hubiesen podido salir los adultos. Al pasar del tiempo, mientras crece y estudia, conocerá a Rebeca Tatcher, con quien vivirá la mejor de todas sus aventuras. El libro Las Aventuras de Tom Sawyer de Mark Twain emula la vida aventurera que todo joven quiere llevar, o quería en un tiempo antiguo, es una de esas historias que de niño te hacen volar la imaginación, mientras que siendo adulto te sacan unas cuantas carcajadas.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Las-aventuras-de-Tom-Sawyer.jpg",
    price: 1368,
    stock: 10,
    deleted: false,
  },

  {
    title: "Viaje al centro de la tierra",
    author: "Julio Verne",
    genre: "Novela de Aventuras",
    description:
      "¿A quién no le gustaría viajar al centro de la tierra?, Bajo esta premisa son varias las novelas escritas por diferentes autores, y también son varias las películas que se han hecho, es sin duda una de las cosas que a cualquier ser humano le gustaría realizar.Julio Verne lo hizo, en su imaginación fue al centro de la tierra, por lo que en este relato podrás leer su consideración al respecto. Viaje al centro de la tierra, trata acerca de un profesor de mineralogía que logra descifrar el mapa de tan ansiado lugar, y luego de eso no lo piensa ni un momento para embarcarse junto con su sobrino y un guía a esta apasionante aventura. El centro de la tierra no es un lugar de fácil acceso, por lo que tendrán que hacerse camino a través de la chimenea de un volcán ubicado en Islandia.",
    editorial: "Hetzel",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Viaje-al-centro-de-la-tierra.jpg",
    price: 1104,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los ritos del agua",
    author: "Eva García Sáenz",
    genre: "Novela de Aventuras",
    description:
      "Vuelve Eva García Sáenz, la famosa escritora de 'La saga de los longevos', y de 'El silencio de la ciudad blanca', esta vez lo hace con su libro Los ritos del agua, el cual ha sido muy esperado por los lectores. Los ritos del agua es el segundo libro de una trilogía, y continúa con las aventuras de Kraken, en esta ocasión todo sucede en base a unos ritos que se practicaban hace 2600 años, donde se asesinaba a personas que estaban esperando un hijo, y se hacía de una forma cruel, la víctima era quemada, colgada y sumergida en un gran caldero. El problema surge cuando una antigua novia de Kraken es asesinada de esta misma forma, por lo que el detective deberá detener al asesino, el punto es, que la comisionada de la subcomisaría está embarazada y al parecer Kraken es el padre, colocándolo así como una potencial víctima.",
    editorial: "Planeta",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Los-ritos-del-agua.jpg",
    price: 3720,
    stock: 10,
    deleted: false,
  },

  {
    title: "El corazón de las tinieblas",
    author: "Joseph Conrad",
    genre: "Novela de Aventuras",
    description:
      "Personas que han leído este libro, han comentado lo siguiente: 'Se lee de un tirón, hay más tensión por lo que sugiere que por lo que cuenta. Apasionante, dinámico, imposible no leerlo, totalmente imperdible'. Partiendo de esos buenos comentarios, se puede notar que es una historia bastante fresca y entretenida, por lo que se puede leer de manera rápida y disfrutar de esa lectura. El corazón de las tinieblas ocurre en El Congo, donde los habitantes adoran a una persona llamada kurtz como si fuera un dios para ellos. El asunto es, que kurtz se volvió loco, y también contrajo enfermedades bestiales peligrosas, por lo que los protagonistas deben encontrarlo a como dé lugar, y para ello deben introducirse en la selva profunda del Congo llena de peligros para dar con el paradero de esta persona.",
    editorial: "1 Editores",
    front:
      "https://infolibros.org/wp-content/uploads/2020/06/El-coraz%C3%B3n-de-las-tinieblas.jpg",
    price: 1674,
    stock: 10,
    deleted: false,
  },

  {
    title: "El prisionero de Zenda",
    author: "Anthony Hope",
    genre: "Novela de Aventuras",
    description:
      "La imaginación, el orden de ideas, y la creatividad, son elementos necesarios para desarrollar una buena trama, muchos escritores tienen esto de sobra, mientras que a otros les falta mucho. Anthony Hope se ha consagrado como un excelente escritor, creando obras literarias de gran calidad que trascienden el tiempo. Su libro El prisionero de Zenda desde su edición, reunió todo lo necesario para ser una gran obra, en ella se pueden notar personajes bien creados, con los cuales el autor comunica un excelente mensaje: las sociedades nunca pasan de moda. La trama se desarrolla en la Europa elegante del siglo XIX, donde los héroes del momento luchan contra villanos súper inteligentes, mientras que la sociedad vive en desenfrenos diarios: las doncellas adineradas con sus cuellos llenos de perlas siendo acechadas por los ladrones, las infieles esposas siendo fugitivas con amantes jóvenes, etc.",
    editorial: "Zenda Aventuras",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/El-prisionero-de-Zenda.jpeg",
    price: 2321,
    stock: 10,
    deleted: false,
  },

  {
    title: "El corsario negro",
    author: "Emilio Salgari",
    genre: "Novela de Aventuras",
    description:
      "Emilio di Roccanera es un pirata aventurero, el cual tiene una buena fama en los siete mares, su nombre es temido por otros piratas, pero también es envidiado por muchos que son mediocres marineros. Emilio ha condicionado su comportamiento bajo tres elementos: la venganza, el amor a una duquesa flamenca, y la fidelidad hacia un juramento realizado. Entre sus aventuras Emilio, mejor conocido como El corsario negro, surca los mares con gran facilidad, obtiene tesoros inalcanzables, vence criaturas tempestuosas, y mantiene siempre su tranquilidad e indiferencia ante el peligro que le rodea. El corsario negro es una novela juvenil, recomendada a todos los adolescentes y niños a partir de los 10 años, es una historia que cautivará su atención mientras que les enseña acerca de valores y comportamientos que valen la pena seguir.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/El-Corsario-Negro.jpg",
    price: 1045,
    stock: 10,
    deleted: false,
  },

  {
    title: "Veinte mil leguas de viaje submarino",
    author: "Julio Verne",
    genre: "Novela de Aventuras",
    description:
      "Julio Verne definitivamente tenía un espíritu aventurero, sus obras así lo demuestran, fue conocido cuando estaba en vida como uno de los hombres más imaginativos del momento, y sin duda lo sigue siendo hoy. El libro Veinte mil leguas de viaje submarino cuenta la historia de un equipo compuesto por varios amigos, entre los que destacan el capitán Nemo y el biólogo Aronnax, los cuales se embarcan en una aventura acuática a bordo del Nautilus. En este submarino tendrán que sortear muchos peligros, como: combatir calamares gigantes, sobrevivir a un terrible remolino en medio del mar, navegar bajo los hielos templados de la Antártida, etc. La presente edición es resumida de la original y está destinada a un público infantil, por lo que será una buena historia que contar a los niños antes de dormir.",
    editorial: "RBa",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/Julio-Verne-4.jpg",
    price: 1100,
    stock: 10,
    deleted: false,
  },

  {
    title: "La vuelta al mundo en ochenta días",
    author: "Julio Verne",
    genre: "Novela de Aventuras",
    description:
      "La vuelta al mundo en ochenta días es una obra de Julio Verne, donde el autor expresa su espíritu aventurero bajo un desafío, el cual ha sido catalogado como uno de los viajes más trepidantes que se han podido narrar. La obra se centra en la resolución de una pregunta: ¿Se puede dar la vuelta al mundo en 80 días?, muchos lo han intentado pero no han logrado conseguirlo, por lo que aparece en escena el personaje principal, Phileas Fogg es su nombre, y tratará de cumplir con éxito esta empresa. Phileas es un hombre excéntrico y muy adinerado, con un carácter bastante pedante, quien comenzará su viaje por tierra, para luego adentrarse en el mar, allí encontrará muchas dificultades y peligros para poder avanzar, pero él piensa que tiene todo controlado.",
    editorial: "RBa",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/La-vuelta-al-mundo-en-80-d%C3%ADas.jpg",
    price: 1397,
    stock: 10,
    deleted: false,
  },

  {
    title: "La flecha negra",
    author: "Robert Louis Stevenson",
    genre: "Novela de Aventuras",
    description:
      "'Los cuatro recibiréis lo que es de razón, una flecha negra en vuestro corazón', es el mensaje que tiene de cabeza a los oficiales, y que los protagonistas de la novela comunican a sus futuras víctimas. La obra de Robert Louis Stevenson lleva al lector a los episodios más negros en la historia de los Estados Unidos, cuando salen a flote asesinos en serie que matan a diario a personas de un disparo. La única diferencia, es que el personaje principal es un justiciero y no un delincuente, su alias es John Arregla-todo, quién es el capitán de la hermandad La flecha negra, los cuales son un grupo de personas que ocultamente matan a aquellos que son considerados criminales, acertándoles una flecha negra en su corazón, seguidas de un mensaje donde indica por qué han sido asesinados.",
    editorial: "Anaya",
    front:
      "https://infolibros.org/wp-content/uploads/2020/07/La-Flecha-Negra.jpg",
    price: 1520,
    stock: 10,
    deleted: false,
  },

  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Novela de Ciencia Ficción",
    description:
      "Dune es un libro fabuloso, cuando fue lanzado en el año 1965 alcanzó un gran éxito y aceptación, cosechando incluso premios como Nébula y Hugo por su calidad de narración y contenido fantasioso. Dune describe un mundo imaginario, en el cual hay un sistema político, ecología y estructura social propias de la imaginación del autor, se desarrolla en un planeta llamado Arrakis, un planeta fuera de vegetación y lleno de arena por todos lados, así como el oro en nuestra tierra, el agua es el bien más preciado en el planeta Arrakis, constituyendo una fuente de 'poder' para aquellos que la poseen. Cada personaje posee una actitud característica, hay quienes tienen poderes, quienes poseen cualidades intelectuales sobresalientes, entre otros buenos personajes que complementan en gran medida el desarrollo de la trama.",
    editorial: "Debolsillo",
    front: "https://infolibros.org/wp-content/uploads/2020/05/Dune.jpg",
    price: 3914,
    stock: 10,
    deleted: false,
  },

  {
    title: "El juego de Ender",
    author: "Orson Scott Card",
    genre: "Novela de Ciencia Ficción",
    description:
      "El juego de Ender es un libro de ciencia ficción algo diferente a los demás, no hay robots en él, trata de videojuegos en gran manera y el protagonista es un súper genio llamado Andrews que se denomina asimismo como Ender. Andrews tiene 6 años, y es un prodigio, es el tercer hijo de una familia de la tierra, donde tener un tercer hijo es algo prohibido, sin embargo, su increíble talento le permite sobrevivir y entrar en el mundo de la guerra en su niñez. Hay una raza que quiere acabar con los humanos, se llaman los insectores, seres extraterrestres con cualidades telepáticas y colonizadores. Las capacidades de Ender se desarrollan en un juego de simulación de guerra bajo gravedad cero donde es llevado a situaciones extremas para dar origen a ideas indestructibles, las cuales se hacen necesarias para vencer a los insectores.",
    editorial: "Nova",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/El-juego-de-ender.jpg",
    price: 3999,
    stock: 10,
    deleted: false,
  },

  {
    title: "Guía del autoestopista galáctico",
    author: "Douglas Adams",
    genre: "Novela de Ciencia Ficción",
    description:
      "Imagina que estás comiendo un jueves por la tarde y de repente la tierra comience a ser demolida para construir una nueva autopista hiperespacial, donde veas tu casa ser derribada y sin poder hacer nada. ¿Qué harías? Así comienza la historia de este maravilloso libro Guía del autoestopista galáctico. Arthur es la víctima de semejante abuso, el cual considera esto como lo último que se puede soportar, debido a eso decide escapar de la tierra y para esto pide ayuda a su amigo Ford Prefect, quien es un extraterrestre amante de una pirata. El éxito de la radionovela fue tanto que se llevó a la literatura para luego ser llevada a cómics y a series televisivas. Actualmente sigue siendo un éxito, y el libro de este autor ya fallecido es un bestseller reconocido a nivel mundial.",
    editorial: "Anagrama",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/Gu%C3%ADa-del-autoestopista-gal%C3%A1ctico.jpg",
    price: 3150,
    stock: 10,
    deleted: false,
  },

  {
    title: "1984",
    author: "George Orwell",
    genre: "Novela de Ciencia Ficción",
    description:
      "La historia narrada en este libro es de aquellas historias que se dicen hoy en día 'cualquier parecido con la realidad es mera coincidencia',. Cuando su autor George Orwell la escribió no pensó que algún día se pudiera vivir algo igual o parecido. El libro 1984 narra una situación vivida en la ciudad de Londres donde la Policía del Pensamiento se encarga de controlar de forma asfixiante la vida de los ciudadanos. Para ello se encarga de manipular la información, y allí es donde entra el protagonista Winston Smith. Winston tiene como trabajo reescribir la historia y adaptarla a lo que el gobierno considera la versión oficial de los hechos, por lo que luego de un tiempo siendo cómplice de las mentiras, decide sublevarse contra el poder que los somete y gobierna.",
    editorial: "Debolsillo",
    front: "https://infolibros.org/wp-content/uploads/2020/05/1984.jpg",
    price: 2834,
    stock: 10,
    deleted: false,
  },

  {
    title: "Solaris",
    author: "Stanislaw Lem",
    genre: "Novela de Ciencia Ficción",
    description:
      "Solaris es una historia de ciencia ficción y terror combinadas, donde la claustrofobia es algo normal. Es considerada un clásico y ha sido leída por miles de personas que con gusto y aceptación han dado su visto bueno, incluyendo a personas no amantes de este género.Solaris se desarrolla en un lugar de observación terrestre, en una estación donde hay solamente tres tripulantes, los cuales tienen problemas de conducta bastante extraños, por lo que Kris Kelvin, un investigador, es enviado a resolver o esclarecer el porqué de las conductas extrañas. Al llegar a Solaris se encuentra con su esposa quien se había suicidado dos años antes y no recuerda nada de lo sucedido. Sin perder el asombro, luego de un tiempo se da cuenta que el lugar los hace enfrentar sus miedos más íntimos, dando así origen a sus raras conductas.",
    editorial: "Impedimenta",
    front: "https://infolibros.org/wp-content/uploads/2020/05/Solaris.jpg",
    price: 3555,
    stock: 10,
    deleted: false,
  },

  {
    title: "Metro 2033",
    author: "Dmitry Glukhovsky",
    genre: "Novela de Ciencia Ficción",
    description:
      "El libro Metro 2033 es una obra de arte de ciencia ficción que ha sido llevada a videojuegos, donde ha tenido muy buena aceptación; su desarrollo es profundo y su trama bastante interesante. El libro trata de una historia de supervivencia de la humanidad, donde ya quedan pocos debido a una guerra que ha devastado todo a su paso. El mundo ha sido prácticamente destruido, y los pocos sobrevivientes, han estado viviendo en los suburbios de la red de metro en la ciudad de Moscú, Rusia. Debido a la guerra, es imposible vivir en la superficie, el ambiente está contaminado, y las condiciones no son aptas, ya que todo, en su mayor parte ha sido destruido. Sin embargo, las personas restantes han estado viviendo bajo la superficie, donde incluso han creado una nueva civilización, una jamás vista, la cual deben proteger a toda costa.",
    editorial: "Booket",
    front: "https://infolibros.org/wp-content/uploads/2020/05/Metro-2033.jpg",
    price: 6529,
    stock: 10,
    deleted: false,
  },

  {
    title: "Un mundo feliz",
    author: "Aldous Huxley",
    genre: "Novela de Ciencia Ficción",
    description:
      "El libro Un mundo feliz es un mundo de ciencia ficción donde Aldous Huxley ha desarrollado su trama en el éxito del capitalismo, donde los consumidores reinan y viven en máxima comodidad, donde se cumplen todos los sueños habidos y por haber de sus habitantes. El libro describe una utopía perfecta, donde los habitantes viven seguros, libres de enfermedades, sin preocupaciones, y con todo el éxito que se pueda describir. Para mantener este estilo de vida se han sacrificado valores humanos esenciales, donde se ha creado un solo gobierno para toda la humanidad. Los seres humanos ya no nacen de manera natural, sino que son creados como si de un experimento se tratara, en sistema invitro y en una probeta donde ya se les han encomendado antes de nacer sus labores sociales, clases sociales y un control de los sentimientos a través de una droga distribuida por el gobierno. Si quieres conocer más sobre esta obra te invitamos a que visites nuestro canal de YouTube y veas nuestro resumen animado de Un Mundo Feliz.",
    editorial: "Debolsillo",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/Un-mundo-feliz.jpg",
    price: 2834,
    stock: 10,
    deleted: false,
  },

  {
    title: "El marciano",
    author: "Andy Weir",
    genre: "Novela de Ciencia Ficción",
    description:
      "Cuando Ernest Cline, autor de Ready Player One leyó el libro, dijo lo siguiente: 'Weir ha creado un thriller de supervivencia que no da tregua, entretenido y creativo, un McGyver atrapado en Marte que se lee, se siente y se vive de manera tan real y terrible como la verdadera historia de Apollo 13'. Trata de la historia de un astronauta que 6 días atrás se había convertido en el primer hombre en pisar Marte, pero, por sucesos inesperados y desconocidos como una tormenta de polvo se iba a convertir en el primer hombre en morir en marte, o eso pensaba él, cuando fue dejado atrás por su tripulación al haberlo dado por muerto. Acompaña a Mark en esta increíble historia de supervivencia, y disfruta la lectura del libro El marciano mientras se te ponen los pelos de punta.",
    editorial: "B de Books",
    front: "https://infolibros.org/wp-content/uploads/2020/05/El-marciano.jpg",
    price: 1453,
    stock: 10,
    deleted: false,
  },

  {
    title: "Yo, robot",
    author: "Isaac Asimov",
    genre: "Novela de Ciencia Ficción",
    description:
      "Isaac Asimov es un científico reconocido y un escritor futurista, ha elaborado las leyes de la robótica, y las plantea en esta fulgurante obra. El libro Yo, robot es una obra magistral que hacer ver la necesidad de robots en la vida humana, todo comienza con un robot creado de forma básica sin ninguna funcionalidad especial para luego ir avanzando hasta un robot que coquetea con las sensibilidades humanas y características de pensamiento. Para Isaac esto es posible y así lo plasma en sus libros. Yo, robot presenta minicuentos por así decirlo donde le da una importancia suprema a los robots, llevando al lector a imaginar o desear la inclusión de estos en la vida real. 'Si ya existen las leyes de la robótica y avances tecnológicos, ¿porque no crearlos?'",
    editorial: "Edhasa",
    front: "https://infolibros.org/wp-content/uploads/2020/05/Yo-robot.jpg",
    price: 3825,
    stock: 10,
    deleted: false,
  },

  {
    title: "Crónicas Marcianas",
    author: "Ray Bradbury",
    genre: "Novela de Ciencia Ficción",
    description:
      "El libro Crónicas Marcianas es un texto imprescindible de leer para aquellos quienes les gusta la ciencia ficción. Ray Bradbury es conocido por su magistral forma de escribir, donde tiene el poder del autor que lleva al lector a introducirse en la obra hasta el punto que no puede dejar de leerla. La trama de Crónicas Marcianas se enfoca en el planeta Marte, donde existe una población que se verá colonizada por los humanos, que llegan como hormigas al planeta en cohetes plateados, para recrear una nueva vida en el planeta. En medio de su colonización, trajeron no solo sus hábitos destructivos de vida, sino también sus enfermedades, con lo cual han de contaminar a la población marciana hasta diezmarla. Esto traerá muchos conflictos entre ambas civilizaciones, donde la acción, el dolor, la muerte será algo común.",
    editorial: "Booket",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/Cronicas-marcianas.jpg",
    price: 2517,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los cantos de Hyperion",
    author: "Dan Simmons",
    genre: "Novela de Ciencia Ficción",
    description:
      "Hyperion es un mundo apocalíptico creado por el autor donde recrea una historia de ciencia ficción al estilo más alto de los Cuentos de Canterbury. El libro Los cantos de Hyperion trata de una sociedad extraña que está cercana a un posible Armagedón. En este maravilloso mundo habita una criatura temible llamada el Alcaudón, la cual es adorada por una Iglesia como el señor del dolor, y devora a todo aquel que se le acerca. En Hyperion existen tres clanes, los cuales son la Hegemonía, los enjambres Exter y las inteligencias artificiales del TecnoNucleo, quienes luchan entre sí para mantener el poder sobre las demás. Hay un culto religioso de gran peligro que 7 peregrinos trataran de resucitar, el cual les ayudará para ganar un estatus importante y de alto grado en la población.",
    editorial: "B de Bolsillo",
    front: "https://infolibros.org/wp-content/uploads/2020/05/HYPERION.jpg",
    price: 4770,
    stock: 10,
    deleted: false,
  },

  {
    title: "El cuento de la criada",
    author: "Autor: Margaret Atwood",
    genre: "Novela de Ciencia Ficción",
    description:
      "Existen autores que comunican a través de sus libros mensajes, pensamientos, ideas, creencias, etc., para influir en la población que los lee, muchos lo hacen para generar un cambio y otros para advertir de peligros. Este es el caso de Margaret quien por los años 80 escribió El cuento de la criada. El libro desarrolla su trama en la República de Gilead, un lugar donde esparce terror el poder del islamismo, y aprovechándose de estos, unos políticos teócratas se hacen con el poder de la nación y para ganar amparo del Islam suprimen la libertad de prensa y los derechos de las mujeres, abriendo así paso a una cruel dictadura. Las mujeres han sido relegadas a la procreación, donde se les impone que tengan hijos o mueran desterradas, claro está, es el gobierno quien decide con quien tendrán los hijos y que harán con ellos.",
    editorial: "Salamandra",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/El-cuento-de-la-criada.jpg",
    price: 6220,
    stock: 10,
    deleted: false,
  },

  {
    title: "El problema de los tres cuerpos",
    author: "Cixin Liu",
    genre: "Novela de Ciencia Ficción",
    description:
      "El problema de los tres cuerpos es un libro originario de China, donde nada más en su país vendió más de 4 millones de copias. El Wall Street Journal dijo 'China lanza una invasión sci-fi con la publicación de este libro. Su enorme éxito no quedó solo en China, sino que se extendió a nivel internacional donde personas como Barack Obama y Mark Zuckerberg fueros suscriptores. El interés por la geopolítica en el pasado y futuro de China atrae a millones de lectores que lograron hacer de este autor totalmente desconocido en alguien famoso. Trata de la cultura china y su avance tecnológico y científico que abre el mundo de la ciencia ficción a un punto totalmente diferente del que se tiene acostumbrado en este tipo de libros. Es la primera entrega de una excelente trilogía.",
    editorial: "Nova",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/El-problema-de-los-tres-cuerpos.jpg",
    price: 7500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Ubik",
    author: "Philip K. Dick",
    genre: "Novela de Ciencia Ficción",
    description:
      "El libro Ubik es un relato diferente, pocos son los libros de comedia en ciencia ficción y este es uno de ellos. El autor se encarga de mezclar estos dos géneros para realizar una excelente obra que te mantendrá leyendo desde que inicias hasta que terminas, pero no sin antes dar una carcajada. El libro comienza con una explosión, hay quienes quieren ver muerto a Glen Ruciter, sus competidores quienes orquestaron este acto terrorífico no saben si murió o no. Pero sin embargo hay un funeral, y en medio de ese funeral, todos los que asistieron comienzan a recibir mensajes extraños, raros e incluso tenebrosos, donde al parecer ellos serán los siguientes. Lo cierto es que los muertos pueden comunicarse con los vivos, darles consejos, comprar su reencarnación y luchar para no volver a morir.",
    editorial: "Booket",
    front: "https://infolibros.org/wp-content/uploads/2020/05/Ubik.jpg",
    price: 3600,
    stock: 10,
    deleted: false,
  },

  {
    title: "Trilogía de la fundación",
    author: "Issac Asimov",
    genre: "Novela de Ciencia Ficción",
    description:
      "Es un libro imprescindible para los amantes del género, para quienes no lo son es un libro recomendable. Su autor, Isaac Asimov es considerado entre los tres más grandes escritores de ciencia ficción que han existido. Así que, sus libros poseen calidad literaria que vale la pena leer. Su libro Trilogía de la fundación rápidamente se convirtió en un Bestseller desde su lanzamiento, en él se trata un tema central que está arraigado en el corazón humano, y es el deseo de controlarlo todo. Su historia se desarrolla por toda la galaxia, donde el hombre prácticamente está esparcido. Existe un imperio que está lleno de toda corrupción, debido a esto, hay un matemático calculador que por medio de sus estudios se da cuenta que el imperio va a caer y volverá la barbarie, por lo que traza un plan para evitarlo.",
    editorial: "Debolsillo",
    front:
      "https://infolibros.org/wp-content/uploads/2020/05/Trilogia-de-la-fundacion.jpg",
    price: 5999,
    stock: 10,
    deleted: false,
  },

  {
    title: "Peter Pan",
    author: "James Matthew Barrie",
    genre: "Cuentos de Hadas",
    description:
      "Peter vuela hasta la ventana de los Darling casi todas las noches para escuchar los cuentos que Wendy relata a sus hermanitos; pero una vez; después de recuperar su sombra; decide llevarlos al País de Nunca Jamás. ¿Volverán a ver a sus padres de nuevo o; como Peter Pan; serán niños para siempre? Las aventuras de Peter Pan han fascinado y entretenido a niños y no tan niños desde su publicación en 1904. Esta nueva versión del clásico de James Barrie; con preciosas ilustraciones; ha sido adaptada para que los jóvenes lectores de hoy viajen a un mundo de magia y fantasía sin igual.",
    editorial: "El Ateneo",
    front: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/586578.jpg",
    price: 2620,
    stock: 10,
    deleted: false,
  },

  {
    title: "Pinocho",
    author: "Carlo Collodi",
    genre: "Cuentos de Hadas",
    description:
      "Pinocho es mucho más que uno de los grandes clásicos de la literatura italiana: se trata de una obra esencial por su deliciosa mezcla de crueldad; humor y fantasía. La marioneta Pinocho aprende de sus errores; enmienda su inconstancia y se convierte en un ser humano de provecho responsable gracias a los buenos consejos del Grillo Parlante; que es la voz de su conciencia; y los desvelos de Geppetto y el Hada; que personifican el amor paterno y el materno; respectivamente. Carlo Collodi nos regala una parábola hermosa e imperecedera de la redención y de la madurez que pueden disfrutar los lectores de todas las edades.",
    editorial: "Alma",
    front: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/691431.jpg",
    price: 3702,
    stock: 10,
    deleted: false,
  },

  {
    title: "La Cenicienta",
    author: "Walt Disney",
    genre: "Cuentos de Hadas",
    description:
      "Una hermosa joven vive con su madrastra y las dos hijas de ésta, siendo destinada a las más molestas tareas de la casa. Un día acudirá al lugar un príncipe y la madrastra encerrará a la muchacha, mientras sus hijas se aprestan a conocer al recién llegado. Una vez que ha finalizado el prestigioso acto, la chica se siente realmente desolada porque también le hubiera gustado participar en el acto organizado por su Alteza. Entonces conoce al hada madrina, un personaje entrañable que diseñará todos los preparativos para conseguir que la Cenicienta tenga la ocasión de asistir a la fiesta en la que se van a reunir varias de las personalidades más destacadas del reino.",
    editorial: "Guadal",
    front: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/625640.jpg",
    price: 2699,
    stock: 10,
    deleted: false,
  },

  {
    title: "Blancanieves",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "Había una vez, al final del invierno, una joven y bondadosa reina que, paseando por el jardín de su palacio, vio una rosa roja creciendo a pesar del frío, cuando la fue tocar se pinchó el dedo con una espina, y dejó caer tres gotas de sangre en la nieve. Fue entonces cuando la reina deseó tener una hija con la piel tan blanca como la nieve, los labios tan rojos como la sangre y el pelo negro tan negro como el ébano. Al poco tiempo, su deseo se cumplió, naciendo una encantadora princesa a quien la reina y su esposo, el rey, decidieron llamar Blancanieves. Sin embargo, la reina, madre de Blancanieves, enfermó poco después de dar a luz y murió. El rey se casó posteriormente con una mujer muy bella pero fría y altiva. La segunda esposa del rey, la nueva reina, realmente era una hechicera muy poderosa, y además de ser egoísta, malvada, mala y excesivamente vanidosa, era poseedora de un espejo encantado.",
    editorial: "Una Luna",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_684647-MLA51671296507_092022-O.webp",
    price: 4200,
    stock: 10,
    deleted: false,
  },

  {
    title: "La bella durmiente",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "Había una vez dos reyes que esperaban con alegría el nacimiento de su primera hija, a la que llamarían Aurora. Para celebrarlo, organizaron una fiesta a la que invitaron a todos los habitantes del reino. Pero olvidaron invitar a la malvada bruja Maléfica que, enfurecida, lanzó un terrible hechizo sobre la princesa: el día de su décimosexto cumpleaños, se pincharía con el uso de una rueca y moriría. Pero sus tres divertidas hadas madrinas descubren una forma de romper el maleficio: no morirá, permanecerá dormida hasta que un valiente príncipe la bese...",
    editorial: "Colihue",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_690809-MLA52217097826_102022-O.webp",
    price: 790,
    stock: 10,
    deleted: false,
  },

  {
    title: "La sirenita",
    author: "Hans Christian Andersen",
    genre: "Cuentos de Hadas",
    description:
      "La Sirenita es uno de los relatos más hermosos de Hans Christian Andersen, en donde nos presenta la historia de una pequeña sirena que abandona el reino submarino por amor a un príncipe. Su deseo por obtener un alma eterna —al igual que los humanos al morir y no desvanecerse en el mar como las sirenas—, la hará pasar por difíciles momentos en su viaje imposible al mundo humano... Publicado en 1837, este relato entrelaza dentro de la magia de los cuentos de hadas, bellas lecciones de vida: el amor generoso y desinteresado, los sueños y la búsqueda del alma inmortal.",
    editorial: "Susaeta",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_651409-MLA41780465526_052020-O.webp",
    price: 2184,
    stock: 10,
    deleted: false,
  },

  {
    title: "La Bella y la Bestia",
    author: "Jeanne-Marie Leprince de Beaumont",
    genre: "Cuentos de Hadas",
    description:
      "Ningún cuento de hadas es, quizás, más conocido que La Bella y la Bestia. La literatura y el cine se han encargado de difundir universalmente las terribles y encantadoras aventuras de una joven virtuosa que debe sacrificarse por su padre, entregándose a un monstruo, para descubrir feliz e inevitablemente que su horrible prometido es el más hermoso de los príncipes. Pero nadie más desconocido, sin duda, que la auténtica autora de la historia, Gabrielle de Villeneuve (1685-1755), que cayó injustamente en el olvido luego de que una hábil narradora concentrase su novela en las dimensiones de un simple cuento infantil. La historia de la literatura abunda en injusticias semejantes, de las que con gran frecuencia fueron víctimas las mujeres; es paradójico que, en este caso, el cono de sombra en el que entró durante más de dos siglos Gabrielle de Villeneuve se haya debido a la luz que la posteridad prefirió proyectar sobre otra mujer, Jeanne-Marie Leprince de Beaumont. Mayor aún es esta injusticia si consideramos las enormes diferencias que existen entre las complejidades narrativas de la novela original y el carácter lineal del cuento, que redujo la historia a su esquema más simple. La novela de Gabrielle de Villeneuve tuvo que esperar a 1858 para ser traducida al inglés; la presente traducción que publica Ediciones De La Mirándola, primera al español, pretende devolverle a la obra su lugar en la historia de la literatura. Nuestra edición incluye en apéndice la posterior versión de Jeanne-Marie Leprince de Beaumont, así como dos de las principales fuentes del relato: la Fábula de Cupido y Psiquis, de Apuleyo, y el cuento El Rey Cerdo, de Straparola da Caravaggio.",
    editorial: "Independently Published",
    front:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/ba/44/ba44d606b29741ee19039bfbaf412498.jpg",
    price: 6656,
    stock: 10,
    deleted: false,
  },

  {
    title: "Caperucita Roja",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "Caperucita Roja es una niña que quería mucho a su abuelita; un día su madre le da una cesta con comida para que se la lleve a la abuelita, que está enferma y vive en una casa algo lejos de ellas. En el camino se encuentra con el Lobo Feroz que la reta a una carrera hasta la casa de la abuelita. El Lobo conoce dos caminos, el largo y el corto; engaña a Caperucita Roja diciéndole que tome el corto y que él tomaría el largo; astutamente, le enseña los caminos al revés y Caperucita Roja, sin saberlo, va por el camino largo.",
    editorial: "Anaya",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_697700-MLA41780476221_052020-O.webp",
    price: 6536,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los tres cerditos",
    author: "Scieszka, Jon",
    genre: "Cuentos de Hadas",
    description:
      "Los tres cerditos solo querían vivir tranquilos en el bosque sin que nadie los moleste. ¡Pero no! ¡Tenía que venir el insoportable del lobo, que se cree muy feroz, a soplar y derribar las casitas que ellos mismos habían construido! Claro que no le fue tan fácil con la casa del cerdo mayor que, además de ser de ladrillos, cuenta con la protección de la Agencia Internacional de Cuentos Tradicionales. Al lobo parece no importarle y comienza a intentar derribar la casa. Y pasó lo que tenía que pasar. Bueno, en realidad, pasaron un montón de cosas.",
    editorial: "Riderchail",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_836274-MLA46957075529_082021-O.webp",
    price: 1800,
    stock: 10,
    deleted: false,
  },

  {
    title: "Rapunzel",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "¡Menuda trenza! Una preciosa edición ilustrada de uno de los cuentos de hadas recopilados por los hermanos Grimm. En sus páginas desplegables se puede apreciar la magnífica escenografía de Francesca Dell'Orto. Rapunzel, una joven de larguísima cabellera, ha sido encerrada por una bruja malvada en una torre alta e inaccesible. Cada día, la bruja le pide que deje caer sus trenzas para poder trepar por ellas y subir a visitarla. ¿Conseguirá Rapunzel escapar de este triste destino?",
    editorial: "Edelvives",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_725826-MLA30767808917_052019-O.webp",
    price: 3306,
    stock: 10,
    deleted: false,
  },

  {
    title: "El gato con botas",
    author: "Charles Perrault",
    genre: "Cuentos de Hadas",
    description:
      "Hace mucho; mucho tiempo en un molino harinero vivía un señor con sus tres hijos. Como era muy viejito; el molinero se murió y los hijos se dividieron la herencia. El mayor se quedó con el molino; el segundo tomó el burro y el más joven sólo recibió el gato. -¿Qué puedo hacer con este gato inútil? -suspiraba el hijo más joven. -¡Señor; no debes preocuparte! -dijo confiado el gato-. Dame una bolsa y un par de botas. Luego mira lo que sucederá... Publicado en la antología Cuentos de mamá ganso por Charles Perrault en 1697 con el título de El gato maestro; este cuento ha tenido numerosas versiones a lo largo de los siglos.",
    editorial: "Colihue",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_637113-MLA52180486337_102022-O.webp",
    price: 790,
    stock: 10,
    deleted: false,
  },

  {
    title: "El patito feo",
    author: "Hans Christian Andersen",
    genre: "Cuentos de Hadas",
    description:
      "Una visión urbana y moderna de uno de los más populares cuentos para niños de todos los tiempos.",
    editorial: "Oceano",
    front: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/549650.jpg",
    price: 2450,
    stock: 10,
    deleted: false,
  },

  {
    title: "El flautista de Hamelín",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "En el reino más prolijo y ordenado, algo desconcertante sucede: miles de ratas, cansadas de vivir bajo las calles todas apretujadas, asoman sus bigotes al sol e invaden Hamelin con sorprendente libertad. El rey delibera preocupado, ¿cómo solucionar este problemón? Hasta que un joven extranjero arriba con la solución. Una historia que invita a reflexionar sobre el valor de la palabra dada.",
    editorial: "Estación Mandioca",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_893974-MLA45129411655_032021-O.webp",
    price: 950,
    stock: 10,
    deleted: false,
  },

  {
    title: "Pulgarcito",
    author: "Charles Perrault",
    genre: "Cuentos de Hadas",
    description:
      "Pulgarcito es un cuento escrito por Charles Perrault y publicado en 1697 en un recopilatorio de cuentos titulado Cuentos de antaño. El cuento nos narra la historia del diminuto Pulgarcito, un niño del tamaño del dedo pulgar de la mano. Aún así, era muy listo, y vemos como de manera ingeniosa escapa de numerosas peripecias que le ocurren en su viaje, mientras intenta conseguir fortuna para sus padres. ",
    editorial: "Colihue",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_609960-MLA51836261724_102022-O.webp",
    price: 790,
    stock: 10,
    deleted: false,
  },

  {
    title: "Hansel y Gretel",
    author: "Jacob y Wilhelm Grimm",
    genre: "Cuentos de Hadas",
    description:
      "Esta es la historia de Hansel y Gretel, que perdidos en el oscuro bosque encuentran una casa hecha de pan, y que con firmeza y valor logran engañar a la bruja.",
    editorial: "Libros del zorro rojo",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_706483-MLA50948621657_082022-O.webp",
    price: 3483,
    stock: 10,
    deleted: false,
  },

  {
    title: "Trilogía de Gormenghast",
    author: "Mervyn Peake",
    genre: "Novela Gótica",
    description:
      "La trilogía está compuesta por Titus Groan (1946), Gormenghast (1950) y Titus Alone (1959). Una novela, Boy in Darkness (1956), narra la historia de una breve aventura del joven Titus fuera del castillo, aunque no explicita el nombre del mismo. Lord Groan, que ha enloquecido definitivamente y cree estar metamorfoseándose en búho; su esposa, la obesa Lady Gertrude, que convive con centenares de pájaros, algunos de los cuales residen entre sus cabellos; el pequeño Titus, el heredero de ojos violeta; Soardust, el anciano maestro de ceremonias que tiraniza a los trágicos aristócratas. Y Steerpike, el joven cocinero, héroe y villano que confabula para destruir a la familia y conquistar el poder. Este elenco de excéntricos personajes circula por los oscuros corredores del colosal castillo de Gormenghast, tan laberíntico e inabarcable, violento y sofisticado como el universo literario de Peake. Las vívidas imágenes, las pinceladas poéticas y el humor hacen de 'Titus Groan', la primera entrega de la trilogía de Gormenghast, una obra emblemática que ha hipnotizado la mente de miles de lectores.",
    editorial: "Vintage",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_756793-MLA47125054630_082021-O.webp",
    price: 16500,
    stock: 10,
    deleted: false,
  },

  {
    title: "El Castillo de Otranto",
    author: "Horace Walpole",
    genre: "Novela Gótica",
    description:
      "El castillo de Otranto (The Castle of Otranto, en inglés) es una novela escrita por Horace Walpole en 1764. Es considerado el texto inaugural de la literatura de terror gótico, iniciando un género literario que llegó a ser extremadamente popular a finales del siglo XVIII y principios del XIX. El castillo de Otranto comenzó a forjar el tenebroso imaginario formado por ominosos castillos provistos de lúgubres mazmorras, por una naturaleza sombría y turbulenta, y por sucesos y percances inesperados y escalofriantes. Escrita de un tirón por Horace Walpole (1717-1797) a raíz de una pesadilla –circunstancia a la que acaso debe la agilidad de su trama–, la novela tiene el interés añadido de ser una de las primeras apariciones de lo que luego se llamaría el surrealismo en la literatura.",
    editorial: "Terramar",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_944834-MLA32731556693_112019-O.webp",
    price: 950,
    stock: 10,
    deleted: false,
  },

  {
    title: "Vathek",
    author: "William Beckford",
    genre: "Novela Gótica",
    description:
      "Vathek es una novela gótica escrita por William Beckford. Fue originalmente redactada en francés en 1782, y traducida después al inglés por el reverendo Samuel Henley. Esta versión fue publicada en 1786 sin mención alguna a Beckford como An Arabian Tale, From an Unpublished Manuscript («Un cuento árabe, de un manuscrito inédito»), afirmando que se trataba de una traducción de un cierto original árabe. Ese mismo año apareció la primera edición en francés. La primera traducción al español se publicó en 1969. Merecedora de un largo y cálido elogio de H. P. Lovecraft en su ensayo «El horror en la literatura», esta novela de William Beckford (1760-1844) narra la historia del califa Vathek, personaje desmesurado a quien su sed de conocimiento acaba precipitando en el Palacio del Fuego Subterráneo, el Infierno, donde encuentra a otros príncipes condenados que le relatan, a su vez, sus desventuras, dando lugar a los llamados tres «Episodios», publicados usualmente de forma exenta y desvinculados del texto original que los motivó. La presente edición de Javier Martín Lalanda corrige esta omisión histórica y reúne el texto íntegro de un relato que une al exotismo de lo maravilloso y del cuento oriental la truculencia de la narración gótica y un peculiar e irreverente sentido del humor.",
    editorial: "Valdemar",
    front: "https://jackmoreno.files.wordpress.com/2013/12/vathek.jpg",
    price: 4940,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los misterios de Udolfo",
    author: "Ann Radcliffe",
    genre: "Novela Gótica",
    description:
      "Ann Radcliffe (1764-1823) es la escritora más emblemática de la imaginación gótica, y sus novelas fueron punto de referencia para los autores que cultivaron el género. Tres obras se alzan en el altar de la literatura gótica: «Los misterios de Udolfo» de la Radcliffe, «El monje» de Lewis, y «Melmoth el errabundo» de Maturin (los tres editados en esta colección). «Los misterios de Udolfo» se desarrolla en el siglo XVI, y está ubicada en Francia e Italia. Emily, como todas las heroínas de la Radcliffe, se enfrenta a las adversidades y desastres provocados por Montoni con la fuerza de la racionalidad, después de haber sucumbido momentáneamente a la superstición. La persecución del malvado Montoni tiene lugar en el castillo de Udolfo, donde acontecen múltiples fenómenos sobrenaturales: vagas figuras extrañas, un fantasma en las almenas, sepulcrales voces misteriosas… «Los misterios de Udolfo», junto con «El Italiano», son las cimas del arte de Ann Radcliffe, y de la novela gótica y romántica. «A los conocidos atavíos góticos de sus predecesores, señala Lovecraft en su ensayo sobre la literatura de terror, Mrs. Radcliffe añadió un genuino sentido de lo sobrenatural, tanto en los escenarios como en los incidentes, que raya en la genialidad; cada pormenor de la ambientación y de la intriga contribuye artísticamente a crear la impresión de horror ilimitado que ella quería transmitir».",
    editorial: "Valdemar",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/los-misterios-de-udolfo.jpg",
    price: 8555,
    stock: 10,
    deleted: false,
  },

  {
    title: "El monje",
    author: "Matthew Gregory Lewis",
    genre: "Novela Gótica",
    description:
      "El 23 de septiembre de 1794, el joven Matthew Lewis con tan sólo diecinueve años, anunciaba en una carta a su madre que había escrito en sólo diez semanas una novela, entre 300 y 400 páginas en octava. Acababa de nacer una de las obras cumbre de la novela gótica, la forma más leída de literatura popular en Gran Bretraña y buena parte de Europa desde finales del siglo XVIII hasta bien mediado el siguiente. La opinión pública se debatió entre declarar El monje como obra de ingenio o tacharla de blasfema y obscena. Situada en un decadente, hipócrita y mítico Madrid gótico, Lewis mezcla dos tramas bastante espeluznantes: la del libidinoso y blasfemo monje Ambrosio y la historia de Ramón y su fatídico amor por la desdichada Inés. Ambas historias están entrelazadas para crear una tensión entre su envoltura sentimental y su trasfondo neta y sombríamente gótico.",
    editorial: "Valdemar",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/el-monje.jpg?w=193&h=300",
    price: 3901,
    stock: 10,
    deleted: false,
  },

  {
    title: "Manuscrito encontrado en Zaragoza",
    author: "Jan Potocki",
    genre: "Novela Gótica",
    description:
      "Contemporáneo de Mrs. Radcliffe y E.T.A. Hoffmann, el conde Jan Potocki nació en 1761 en el castillo de Pikow (Polonia) y fue un hombre ilustrado hasta la erudición, demócrata, progresista, etnógrafo, viajero empedernido y aventurero, que acabó sus días en 1815, suicidándose en su biblioteca con una bala de plata que él mismo había pulido pacientemente. El Manuscrito encontrado en Zaragoza es una de las obras más legendarias y emblemáticas de la literatura fantástica. De estructura laberíntica, narrada al modo de los decamerones, la obra transcribe el manuscrito hallado por un oficial de las tropas napoleónicas en Zaragoza, y cuenta las peripecias y viajes del noble caballero Alfonso Van Worden, episodios vividos o referidos sobre «bandidos, almas en pena y adictos a la Cábala», en una visión pintoresca, fantástica y prerromántica de la España profunda del siglo XVIII, llena de inolvidables historias de aparecidos, cabalistas, ventas encantadas o leyendas moriscas, traspasada de un aire picaresco deudor de la tradición española.",
    editorial: "Valdemar",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/manuscrito-encontrado-en-zaragoza.jpg",
    price: 2911,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los elixires del diablo",
    author: "E.T.A. Hoffmann",
    genre: "Novela Gótica",
    description:
      "Ernst Theodor Amadeus Hoffmann (1776-1822) no llegó a entrar con honores en las páginas de oro de la historia de la música, tal como anheló toda su vida; a cambio, su nombre ha quedado grabado para siempre, con letras de un extraño fulgor, en el libro de oro de la literatura universal y su recuerdo quedará asociado en la memoria del lector con el sabor agridulce de la fantasía, la alucinación, la pesadilla, la locura y, en definitiva, con el rico universo de lo siniestro y lo luminoso. Animado por la lectura y el éxito de El Monje de M.G. Lewis, Hoffmann madura la idea de Los elixires del diablo, para poner sobre el papel en poco más de un mes -en una suerte de trance al borde de la locurala espeluznante historia, contada en primera persona, de la vida del monje Medardo, que viene al mundo marcado por el estigma de una simiente maldita, cuyo origen se remonta a un horrible e inconfesable crimen cometido por uno de sus antepasados. Pero, a pesar de que su atormentada conciencia le conduce poco a poco hacia el laberinto de la locura, su futuro no está totalmente sellado, ya que siempre queda un resquicio de libertad que, con ayuda de la gracia divina, le permite luchar para alcanzar su salvación.",
    editorial: "Valdemar",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/los-elixires-del-diablo.jpg?w=195&h=300",
    price: 1440,
    stock: 10,
    deleted: false,
  },

  {
    title: "Frankenstein o el moderno Prometeo",
    author: "Mary W. Shelley",
    genre: "Novela Gótica",
    description:
      "Mary Shelley (1797-1851) fue hija del pensador radical William Godwin —célebre autor del revolucionario ensayo titulado «Political Justice» y de novelas de tradición gótica como «St Leon» y «Caleb Williams»— y de Mary Wollstonecraft, autora de la más ardiente defensa sobre la educación y derechos de la mujer que se hubiera hecho hasta entonces, expresada en su obra «Vindication of the Rights of Woman». En 1814 conoció al poeta Percy Bysshe Shelley, que sería el amor de su vida, y con quien huyó al continente en 1814. En la noche del 17 de junio de 1816, después de una velada en compañía de Lord Byron, Percy B. Shelley, John W. Polidori, Matthew G. Lewis, entre otros, en la que se discutió sobre el galvanismo, los experimentos del doctor Erasmus Darwiny la posibilidad de descubrir el principio vital y conferirlo a la materia inerte, Mary tuvo una pesadilla en la cual un estudiante obsesionado con la creación de vida artificial despierta y contempla horrorizado a su espantoso engendro. Este sueño fue el primer atisbo de una Criatura que se ha elevado por sí misma al pedestal de los mitos básicos del terror. A partir de esta visión de pesadilla, Mary Shelley construyó «Frankenstein, o el moderno Prometeo», una historia que ha estremecido a generaciones de lectores y cuya actualidad permanente han garantizado las numerosas adaptaciones al cine. Una historia destinada no sólo a despertar el horror, sino a proponer una reflexión moral sobre la naturaleza humana y la génesis del Mal.",
    editorial: "Alianza",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/frankenstein-o-el-moderno-prometeo.jpg",
    price: 1104,
    stock: 10,
    deleted: false,
  },

  {
    title: "La caída de la casa Usher",
    author: "Edgar Allan Poe",
    genre: "Novela Gótica",
    description:
      "La caída de la Casa Usher (título original en inglés: The Fall of the House of Usher), también conocido como El hundimiento de la casa Usher, es un cuento de terror del escritor Edgar Allan Poe, considerado uno de los más importantes de su producción narrativa. Fue publicado por primera vez en la revista Burton’s Gentleman’s Magazine, en 1839. Un joven caballero es invitado al viejo caserón de un amigo de la infancia, Roderick Usher, artista enfermizo y excéntrico que vive completamente recluido en compañía de su hermana, Lady Madeline, también delicada de salud. Usher vive presa de una enfermedad indefinible, lo que hace a todos temer por su vida. La caída de la casa Usher es una de las obras de su autor preferidas por la crítica en términos generales, y la que el propio Poe consideraba de las más logradas que había escrito, solamente por detrás de Ligeia. Relato largo, generoso y matizado, es muy «literario», por su densa materia narrativa, por las numerosas citas que contiene, los títulos de libros, y hasta poemas completos, como «El palacio encantado», el cual había sido publicado separadamente en abril de 1839 en la revista Baltimore Museum.",
    editorial: "Nordica",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_655854-MLA52001963609_102022-O.webp",
    price: 2475,
    stock: 10,
    deleted: false,
  },

  {
    title: "El castillo de los Cárpatos",
    author: "Julio Verne",
    genre: "Novela Gótica",
    description:
      "El castillo de los Cárpatos (Le Château des Carpathes) es una novela de Julio Verne publicada en la «Magazine de ilustración y recreo» (Magasin d’Education et de Récréation), revista periódica para la juventud de la editorial Hetzel, como el resto de sus obras. Se publicó entre enero de 1892 y diciembre del mismo año y como un solo volumen en octubre, con ilustraciones en color de Léon Benett. Se trata de una obra fantástica alejada de la temática «científica» de Verne, y en ella ven algunos autores una de las mejores y más románticas historias «vampíricas» de la literatura. En las profundidades de Transilvania, en una comunidad aislada y supersticiosa, la inesperada aparición de humo en la torre de un castillo abandonado sugiere una presencia diabólica. Un valiente guardabosques y un médico algo cobarde se aventuran a explorar el castillo y son rechazados por fuerzas extrañas y pavorosas. Por su parte, un joven conde valaco que ha perdido a su amada, la célebre cantante Stilla, que murió en el escenario, cree oír su voz en las inmediaciones del recinto. Verne combina en esta curiosísima novela el racionalismo, el humor sardónico y la crítica de la superstición y la leyenda con una paradójica, casi surrealista, exaltación del amour fou.",
    editorial: "Almadia",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_755154-MLA47617339605_092021-O.webp",
    price: 5605,
    stock: 10,
    deleted: false,
  },

  {
    title: "El fantasma de la ópera",
    author: "Gaston Leroux",
    genre: "Novela Gótica",
    description:
      "El fantasma de la ópera (Le Fantôme de l’Opéra) es una novela de Gastón Leroux inspirada en la también novela Trilby de George du Maurier, que había sido publicada por entregas en la Harper’s Magazine en 1894 y después en forma de libro en 1895. La novela de Leroux se publicó en entregas semanales desde el 19 de noviembre de 1909, y ha sido adaptada numerosas veces para películas y actuaciones en teatros. El fantasma de la ópera es una novela que combina romance, terror, misterio y tragedia. La historia trata de un hombre misterioso que aterroriza la Ópera de París para atraer la atención de una joven vocalista a la que ama. Novela que mezcla la literatura gótica con la aventura de carácter policíaco aunque no haya un detective protagonista, sino un misterio que descifrar, El fantasma de la Ópera (1910) es la historia de un tenebroso personaje, quien, a pesar del tormento que le provoca su fealdad, lucha por vivir para satisfacer su pasión por la belleza. En esta popular obra, llevada numerosas veces al cine y al escenario, Gaston Leroux (1868-1927) aprovechó numerosos recursos que le eran familiares por su condición de periodista para dar verosimilitud a un relato en el cual la combinación entre su intrigante protagonista y la ambientación dentro del mundo del teatro y las bambalinas despliega un atractivo juego de posibilidades para la imaginación.",
    editorial: "Alianza",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/el-fantasma-de-la-c3b3pera.jpg",
    price: 1164,
    stock: 10,
    deleted: false,
  },

  {
    title: "La leyenda de Sleepy Hollow",
    author: "Washington Irving",
    genre: "Novela Gótica",
    description:
      "La leyenda de Sleepy Hollow o La Leyenda del Jinete sin Cabeza es un relato corto de terror, escrito por Washington Irving en 1820, en su colección: The Sketch Book of Geoffrey Crayon. Ichabod Crane es el maestro de la comunidad de Tarrytown, en Sleepy Hollow (literalmente «Hondonada del Sueño»), un valle a orillas del Hudson. Su antagonista es Bran Bones, un grandullón grosero, que es también su rival en el amor de Katrina Van Tassel, hija única de un acaudalado terrateniente. Ichabod cree alcanzar la gloria el día en que Van Tassel le invita a una fiesta en su «castillo»… pero lo que no sabe es que lo que ahí le espera es la condenación, pues en los bosques encantados de la «región del sopor» vaga el espectro del Jinete Sin Cabeza. Esta edición de Washington Irving ofrece las ilustraciones originales de Arthur Rackham.",
    editorial: "Alba",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/la-leyenda-de-sleepy-hollow.jpg?w=219&h=300",
    price: 1130,
    stock: 10,
    deleted: false,
  },

  {
    title: "Caleb Williams",
    author: "William Godwin",
    genre: "Novela Gótica",
    description:
      "Caleb Williams es la abreviación común de una obra cuyo nombre completo es Las cosas como son; o Las aventuras de Caleb Williams. Escrita en 1794 por William Godwin, es una novela de tres volúmenes escrita como un llamamiento para poner fin al abuso de poder por lo que Godwin vio como un gobierno tiránico. Esta novela surgió con la intención de popularizar el mensaje de su ensayo político de 1793 Justicia política. Las «aventuras» de Caleb Williams es una oscura y envolvente novela sobre la culpabilidad, la curiosidad malsana, el acoso y la persecución obsesiva. La primera parte describe la decadencia del noble Falkland, cuyo honor y reputación (los dos valores que orientan su vida) quedan en entredicho al cernirse sobre él la sospecha de un crimen infame. Su criado Caleb Williams, guiado por una curiosidad morbosa, cree haber descubierto la culpabilidad indudable de su amo y señor Falkland. Es entonces cuando se desata sobre el criado una persecución y acoso implacables. Las leyes, tal como aparecen en la obra, son esencialmente corruptas e instrumento de opresión de los poderosos sobre los débiles y no son más que el arma de la que se sirve la tiranía humana, al menos en el mundo de las cosas como son.",
    editorial: "Prensa de la Universidad de Oxford, EE. UU.",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_775029-MLA49190528720_022022-O.webp",
    price: 9599,
    stock: 10,
    deleted: false,
  },

  {
    title: "La casa de los siete tejados",
    author: "Nathaniel Hawthorne",
    genre: "Novela Gótica",
    description:
      "La casa de los siete tejados (The House of the Seven Gables) es una novela de Nathaniel Hawthorne, publicada en 1851, y totalmente reconocida como la mejor novela norteamericana de este período. Tiene lugar en la casa homónima de Salem, Massachusetts. Una de las obras fundacionales de la literatura norteamericana. A finales del siglo XVII, en una pequeña localidad de Nueva Inglaterra, el venerable coronel Pyncheon decide construirse una ostentosa mansión en el lugar donde antes se había levantado la cabaña de Mathew Maule, un hombre turbio que había sido condenado por brujería en un juicio presidido por el coronel. De camino al cadalso, Maule había proferido una maldición contra el coronel: «Dios le dará sangre para beber». El día de la inauguración de la casa, el coronel muere repentinamente. Y sus descendientes heredan la casa y el infortunio. Los autores de esta novela son actores de un drama social, que va mostrando la ridiculez de las posturas soberbias que desprecian a las personas humildes, quienes piensan y actúan con total libertad, es decir fuera del orden puritano establecido en la época. Al mismo tiempo, la prosa de Hawthorne, destaca también el encanto de lo espontáneo, de la expresión personal libre del autor, de las buenas obras, e incluso de la seriedad religiosa desarrollada con sincera espiritualidad.",
    editorial: "Debolsillo",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/la-casa-de-los-siete-tejados.jpg",
    price: 3900,
    stock: 10,
    deleted: false,
  },

  {
    title: "La torre de los siete jorobados",
    author: "Emilio Carrere",
    genre: "Novela Gótica",
    description:
      "Emilio Carrere, mujeriego, actor aficionado, frecuentador de cafés nocturnos y casas de mala nota, además de experto en ocultismos varios y necrófilo, formó parte -por propia elecciónde la excéntrica bohemia madrileña de principios de siglo. Las fuentes literarias de las que bebían tanto él como otros compañeros de viaje se encontraban allende los Pirineos y más aún del otro lado del océano. Unas aguas de oleaje profuso, elevado y espumoso, que se hallaban contaminadas por el modernismo rubendariano, el decadentismo finisecular y la poética simbolista de Verlaine, Mallarmé y Rimbaud. La torre de los siete jorobados, que el propio Carrere había enfocado como folletín de aventuras en el que lo policiaco, lo pseudocientífico y lo sobrenatural se unieran para imitar, con un toque peculiar de humor castizo, a los Leroux, Motta, Le Rouge o La Hire, se alimenta -de forma excéntrica al realismo literario españolde luchas en el medio astral entre voluntades opuestas, de bandas de falsificadores jorobados, de aparecidos y de sabios un poco locos, y hasta de… ¡una ciudad perdida bajo los suelos de Madrid! El lector de esta novela revivirá con ella aquellos días -hoy casi perdidosde una cierta inocencia literaria y de un más perdido aún sentido de la maravilla.",
    editorial: "Valdemar",
    front:
      "https://jackmoreno.files.wordpress.com/2013/12/la-torre-de-los-siete-jorobados1.jpg",
    price: 5755,
    stock: 10,
    deleted: false,
  },

  {
    title: "El castillo de Barbazul",
    author: "Javier Cercas",
    genre: "Novela Policiaca",
    description:
      "Si consideras que la novela negra es un género privilegiado a la hora de hablar de los tiempos en los que vivimos, la trilogía de Javier Cercas te va a dar todo lo que necesitas. El escritor de Soldados de Salamina dio un sorprendente giro a la novela policiaca con Terra alta, pero según se han sucedido las nuevas entregas hemos descubierto que no se ha desviado tanto de sus preocupaciones de siempre: la historia reciente de España, la corrupción política o lametaficción. El policía de Melchor Marín es una recreación ficticia del héroe de Cambrils y en un momento de Independencia, el segundo libro de la serie, descubre que un tal Javier Cercas ha escrito una novela sobre él y que encima la quieren convertir en una película. El castillo de Barbazul narra el tercer caso de Marín, varios años después (es decir, en un futuro inmediato), cuando el antiguo policia se ha reinventado como bibliotecario 'tranquilo', (no tanto) que trata de criar a su hija Cosette que, ya adolescente, pregunta acerca de la muerte de su madre. Cuando Cosette y una amiga desaparecen en un viaje a Mallorca, Melchor Marín tiene que volver a enfrentarse a la impunidad del poder, que esta vez oculta una serie de agresiones sexuales vinculadas con las altas esferas. Como todos los libros de Javier Cercas, El castillo de Barbazul se puede leer sin conocer el resto, que la propia novela da las claves para orientarte. Aunque gana nuevas capas leído desde todo el recorrido de Tierra Alta.",
    editorial: "Tusquets",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1646996769-41GePjzLWeL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 3780,
    stock: 10,
    deleted: false,
  },

  {
    title: "Billy Summers",
    author: "Stephen King",
    genre: "Novela Policiaca",
    description:
      "Desde que Stephen King provó suerte con Mr. Mercedes le ha cogido el gusto a la novela policiaca. Esta vez el foco pasa del detective al criminal para presentarnos a Billy Summers, destinado a figurar entre los mejores personajes de Stephen King. Pero, ¿quién es Billy Summers? 'Un basurero provista de arma',, nos dice tajantemente King, es decir, el mejor asesino a sueldo del mundo, con un pasado truculento y excombatiente de Irak. Su código deontológico: sólo se ocupa de sacar la basura. Nada de víctimas inocentes. Nada de abandonar a un compañero pase lo que pase. Un buen tipo.",
    editorial: "Vintage",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658479592-511uVa0M0L._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 6884,
    stock: 10,
    deleted: false,
  },

  {
    title: "pequeñas mujeres rojas",
    author: "Marta Sanz",
    genre: "Novela Policiaca",
    description:
      "Marta Sanz además de muy buena -buenísimaes una escritora versatil que sabe por igual cómo ganar el Premio Herralde con un brillante ejercicio de estilo como Farándula (uno de nuestros mejores libros de política), cómo convertir su diario pandémico en Instagram en una fascinante lectura (Parte de mí) o cómo hacer una estupenda intriga criminal. pequeñas mujeres rojas (así, sin mayúscula inicial) cierra la trilogía del detective homosexual Arturo Zarco que comenzó con Black, Black, Black y siguió en Un detective no se casa jamás. Como tantos cierres, gira sobre la memoria. La memoria de la Guerra Civil que Paula Quiñones quiere reparar localizando una fosa en Azafrán; los nuevos recuerdos que crea de sus amores con David Beato, que fija en su correspondencia con Luz, la madre del detective Zarco; la memoria de un lugar, el hotel 'Azufrón' donde ha ido a parar Paula; y, claro, la memoria de Zarco, el detective ausente. Hay tanta memoria en Azafrán como en Comala, el lugar de ese otro wéstern de Juan Rulfo sobre el peso del pasado. Las voces y los fantasmas de pequeñas mujeres rojas recuperan la violencia que se ha ejercido y se ejerce siempre sobre los mismos cuerpos a los que se intenta callar... como en toda novela criminal.",
    editorial: "Anagrama",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638877924-41-WVGcstkL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 2925,
    stock: 10,
    deleted: false,
  },

  {
    title: "El poder del perro",
    author: "Don Winslow",
    genre: "Novela Policiaca",
    description:
      "No hay que confundir este El poder del perro con la novela de Thomas Savage, uno de los mejores libros del Oeste, aunque también transcurra en la frontera. Aquí estamos de lleno en la novela criminal. El periodista, investigador y escritor Don Winslow es un maestro del género condecorado con el premio Pepe Carvalho 2022, que se documenta ampliamente antes de escribir un libro. El poder del perro se trata de la primera novela de la 'trilogía del Cartel', un fresco de dimensiones épicas sobre el narcotráfico entre Estados Unidos, México y Colombia que en su primera entrega abarca desde 1975 hasta 2004. La gran novela policiaca de la 'guerra contra las drogas', donde nunca hay vencedores. Se trata de una historia trágica de 700 páginas, donde nadie es lo que parece, el ritmo crece vertiginosamente y los diálogos nos golpean tanto como sus impactantes momentos de violencia.",
    editorial: "Harper",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1654163762-51x3JmoHhL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 2655,
    stock: 10,
    deleted: false,
  },

  {
    title: "El misterio de la cripta embrujada",
    author: "Eduardo Mendoza",
    genre: "Novela Policiaca",
    description:
      "Durante cinco novelas somos legión los lectores que nos hemos recreado con los delirantes casos del detective anónimo de Eduardo Mendoza. Todo comenzó con El misterio de la cripta embrujada. Mendoza, que estaba abrumado y exhausto tras el éxito de La verdad sobre el caso Savolta, decidía soltar amarras para navegar en el terreno del humor. Con pocas novelas policiacas te puedes reir tanto como con estas, donde Mendoza convierte cada frase en un juego (no por nada ganó hace unos años el Premio Cervantes). El misterio de la cripta embrujada comienza cuando a este detective amateur y delirante le rescatan del psiquiátrico para hacerle investigar la desaparición de una niña en un internado de monjas y no termina hasta que Mendoza pasa revista completa a la Barcelona de la Transición, donde aún laten los secretos de la dictadura enterrados bajo el cemento y el ladrillo del desarrollismo.",
    editorial: "Seix Barral",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658479386-41bVcZR9fZL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 2001,
    stock: 10,
    deleted: false,
  },

  {
    title: "La forma del agua",
    author: "Andrea Camilleri",
    genre: "Novela Policiaca",
    description:
      "Bienvenido al nacimiento del comisario Montalbo, el icónico policia siciliano con el que Camilleri rindió homenaje a nuevo Vázquez Montalbán y con el que se convirtió en un superventas italiano. Inicialmente, La forma del agua iba a ser un libro independiente y sin continuaciones pero es lo que tiene el éxito. Y cómo no iba a tenerlo. Un político y empresario local ha aparecido muerto semidesnudo en el interior de su coche en una dehesa donde antes pastoreaban las ovejas y ahora reinan la prostitución y la droga. El forense dice que se ha debido a causas naturales; el inspector Montalbo no se lo cree. Intentará concoer la opinión de la policia, de un juez y el obispo local, pero nadie quiere inmiscuirse en el caso.",
    editorial: "Salamandra",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658479284-41vDRsbSuOL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 3999,
    stock: 10,
    deleted: false,
  },

  {
    title: "El signo de los cuatro",
    author: "Arthur Conan Doyle",
    genre: "Novela Policiaca",
    description:
      "No podía faltar en una lista de novela negra y policiaca una de Sherlock Holmes, siempre entre los libros más leídos de todos los tiempos. Lo más frecuente es recomendar sus cuentos, Las aventuras de Sherlock Holmes, donde brilla en pildoras el mecanismo engresado con que Arthur Conan Doyle sembraba y desenrollaba sus intrigas. En sus novelas, en cambio, la lógica deductiva criminalística se abre más a la personalidades opuestas de Sherlock y de su fiel compañero, testigo de su brillantez y cronista el Dr. Watson. De entre sus novelas hay dos que además brillan por su atmósfera, de resonancias góticas: esta y El sabueso de Baskerville. El signo de los cuatro es su segunda novela, el enigmático caso de la desaparición del padre de Mary Morstan, que comienza a recibir perlas valiosas de un admirador desconocido. Dentro de ese misterio, hay un pacto secreto, un gran tesoro, un robo, varios asesinatos, un misterio indio, dardos envenenados y el inolvidable sospechoso de una sola pierna y su cómplice. De todas las historias de Sherlock Holmes ninguna se parece tanto a las aventuras de Tintin como esta.",
    editorial: "Booket",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658479059-41jxFQwoCsL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 1688,
    stock: 10,
    deleted: false,
  },

  {
    title: "La piedra lunar",
    author: "Wilkie Collins",
    genre: "Novela Policiaca",
    description:
      "La piedra lunar (1868) está considerada la primera novela policiaca de la historia y es un tesoro de primeras veces: el primer misterio en una casa de campo inglesa con una lista de sospechosos más larga que los invitados de una boda, los primeros policias torpones que casi destruyen las pruebas, el primer detective brillante, la primera pista insignificante que se convierte en la piedra angular del caso, la primera recreación de un crimen para resolvero, el primer juego de disfraces (a los detectives y criminales de novelas no les gusta nada tanto como disfrazarse)... en fin, todo. Y está cuidadosamente ensamblado manteniendo un misterio dentro de otro: de una maldición india pasamos a un robo en extrañas circunstancias, de él al pasado y futuro incierto de una criada, entonces a un drama de casamientos y de allí a un doctor romántico con los días contados y un pasado trágico. Todo cabe en esta fiesta de la literatura policiaca, todavía hoy la más adictiva de todas.",
    editorial: "Alba",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658478999-51MEaFBl0oL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 6800,
    stock: 10,
    deleted: false,
  },

  {
    title: "Y no quedó ninguno",
    author: "Agatha Christie",
    genre: "Novela Policiaca",
    description:
      "Varias personas aparentemente sin ninguna relación entre sí son reunidas en un lugar misterioso donde comienzan a ser asesinados. Una grabación les acusa de haber participado todos en un crimen en el pasado. No es la trama de 'Bullet Train', donde alguien reune a media docena de sicarios en un tren bala de camino a Kyoto, ni de ninguna de las muchas historias que han tomado la misma promesa como modelo. Hablamos de la novela original, concebida por Agatha Christie al margen de Hércules Poirot y de Miss Marple, aunque en cierto modo esto también podría ser una secuela de Asesinato en el Orient Express. Hablamos de Y no quedó ninguno (habitualmente conocida como Diez negritos), la historia más sanguinaria, como un slasher, de la reina del crimen. Lo único que parece hilar todos los crímenes en ese islote de la costa inglesa es una vieja canción infantil, la de los diez negritos. Y, por cierto, si no hay nadie más en el islote, ¿bajo quién se esconde el asesino?",
    editorial: "Espasa",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658478933-41B7br3zJL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 8669,
    stock: 10,
    deleted: false,
  },

  {
    title: "El largo adiós",
    author: "Raymond Chandler",
    genre: "Novela Policiaca",
    description:
      "Si vas a comenzar con Raymond Chandler quizás sea mejor que empieces por El sueño eterno, la primera novela del eterno detective Marlowe, pero mi favorita es El largo adiós, la última de todas si no contamos aquél guion novelizado que fue Playback y la inacabada historia de Poodle Springs. Chandler fue junto con Hammet uno de los renovadores del género que sacó al lector del sofá para arrastrarle a la calle, pero si el escritor de Cosecha roja (más abajo) se basaba en sus propias experiencias como detective, Chandler se inspiró en la propia literatura. Sobre todo en los libros de aventuras y en la mitología artúrica (uno de sus libros se llama, literalmente, La dama del lago). Lo que le interesaba a Chandler era cómo se podía ser un 'caballero', en un mundo tan negro como el de la novela criminal. La respuesta es ese duro y cínico pero noble detective Marlowe que todos nos representamos con el rostro y el estilo de Humphrey Bogar. En El largo adiós, no obstante, todo se complica para Marlowe cuando se pasa del bourbon al gimlet de su nuevo amigo Tenny Lennox, cuya esposa multimillonaria acaba de ser asesinada y le fuerza a largarse cuanto antes. Esta vez Marlowe pierde su coraza, el caso es personal y es él quien se ve arrastrado por los acontecimientos en lugar de seguir un rastro. Chandler estaba abriendo una puerta al detective pasivo que a la larga, y con la película de Elliott Gould mediante, acabaría dando lugar a El gran Lebowski y a Puro vicio.",
    editorial: "Debolsillo",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658478763-51iJKMAQQL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 1150,
    stock: 10,
    deleted: false,
  },

  {
    title: "Cosecha roja",
    author: "Dashiell Hammet",
    genre: "Novela Policiaca",
    description:
      "Es la primera obra del genial Hammet, publicada en 1929 y que marcó una clara diferencia en el mundo de la novela policiaca, inspirándose probablemente en 'Los asesinos', aquél cuento de Hemingway que inspiraría Pulp Fiction. Rompió con el investigador tradicional, refinado y deductivo, e introdujo la figura del tipo duro, desaliñado, que resuelve los casos peinando los bajos fondos, con métodos no muy heterodoxos, hasta violentos. En Cosecha roja, ni siquiera sabemos su nombre, solo es 'el agente de la Continental', un individuo que trabaja como detective privado para la Agencia Continental de Investigaciones de San Francisco y que volverá a aparecer en otras obras del autor. Tiene un lenguaje incisivo, una dudosa moral y una forma de trabajar más que cuestionable. Su contrapunto es Dinah Brand, 'mujer fatal' con un largo historial de amantes y una ansia insaciable de dinero. Con estos elementos nace la primera novela negra: personajes en los que la división entre buenos y malos es poco clara, individuos derrotados y resabiados en busca de algún atisbo de verdad. La consagración le llegó a Hammet un año después, en 1930, con El halcón maltés, donde aparece por primera vez el que fue su personaje más famoso, Sam Spade, muy parecido al agente de la Continental, pero que nos imaginamos, gracias a la película de John Houston, con el rostro, la voz y el estilo de Humphrey Bogart.",
    editorial: "Alianza",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1645113440-413VWe1LcjL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 4489,
    stock: 10,
    deleted: false,
  },

  {
    title: "El cuchillo",
    author: "Patricia Highsmith",
    genre: "Novela Policiaca",
    description:
      "Si te gustó Extraños en un tren esta novela no te decepcionará. La gran dama de la novela negra siempre ahonda en la angustia del ser humano antes que en el horror. La intriga en Highsmith procede casi siempre de un hecho cotidiano del que somos testigos. La novela empieza con un asesinato, crudamente relatado, un hecho que parece no tener nada que ver con Walter Stackhouse, un joven abogado que lo tiene todo: una mujer a la que ama, una brillante carrera, una bonita casa en un buen barrio. Pero Walter se obsesiona con el asesinato del inicio, y no puede evitar relacionarlo con su situación personal. Se deja llevar por sus deseos ocultos, y su vida se descarrila con consecuencias terribles. Como siempre, la perturbadora Highsmith juega con nosotros como un gato con un ratón, nos tiene totalmente atrapados en sus garras, desde la primera página.",
    editorial: "Anagrama",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658475912-41Co3wUxWVL._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 3575,
    stock: 10,
    deleted: false,
  },

  {
    title: "Más trabajo para el enterrador",
    author: "Margery Allingham",
    genre: "Novela Policiaca",
    description:
      "Una extraña muerte tiene lugar en una antigua mansión londinense, en el seno de una familia tan brillante como excéntrica, en una época en la que aún quedaban coches de caballos y en el banco te agasajaban con una copita de jerez. El investigador Albert Campion entra en acción para resolver el caso, junto a los miembros de la policía local. Es un clásico criminal con todos los elementos del género policiaco, cadáveres, sepultureros, mayordomos… pero que además bebe de los libros de humor del mejor P. G. Wodehouse o Gerald Durrell. Una trama llena de Intriga, una prosa desternillante y, en definitiva, un libro deliciosamente británico. El trasiego de personajes a veces te dejará un poco perdido, pero enseguida retomas las riendas de una novela que acaba con un final sorprendente e inesperado.",
    editorial: "Impedimenta",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658476033-51MDQCWeg8L._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 4050,
    stock: 10,
    deleted: false,
  },

  {
    title: "La dalia negra",
    author: "James Ellroy",
    genre: "Novela Policiaca",
    description:
      "Esta novela te envuelve y te atrapa porque el autor pone mucho de sí mismo, y te arrastra en ese viaje diabólico para hallar una respuesta que no hay. La madre de James Ellroy fue brutalmente violada y asesinada cuando el escritor tenía 10 años, lo que le marcó desde muy joven. Nunca se encontró al asesino. La dalia negra narra un asesinato muy similar que tuvo lugar en Hollywood poco antes de que Ellroy naciera y que tampoco se resolvió, el de Elizabeth Short, una veinteañera cuyo cadáver apareció, seccionado en dos partes, en un solar. Ellroy reconstruye el suceso a través de la figura de dos policías de Los Ángeles, ambos exboxeadores, decididos a averiguarlo todo sobre la vida de la víctima y su brutal asesinato. La investigación se convierte en un viaje infernal a la otra cara del Hollywood de la posguerra, el submundo de las redes de pornografía y corrupción de menores. Es la primera novela del «Cuarteto de Los Ángeles», tetralogía que sigue con El gran desierto, Los Ángeles al desnudo y Jazz Blanco. El estilo de Ellroy, sin concesiones, incisivo, brutal a veces, es muy adecuado para describir lo más negro del alma humana. La obra más intimista de Ellroy, en la que investiga el asesinato de su madre y lo que para él supuso esa tragedia, es Mis rincones oscuros, también muy recomendable.",
    editorial: "Literatura Random House",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658476131-41qblf6up0L._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 5500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los mares del Sur",
    author: "Manuel Vázquez Montalbán",
    genre: "Novela Policiaca",
    description:
      "Probablemente sea la novela más leída y traducida del genial Montalbán –a quien rinde hornor otro gran escritor del género, Andrea Camilleri con su singular Montalbano. Fue Premio Planeta en 1979. No solo es una novela policiaca, sino una acerada crítica a la perdida y desilusionada sociedad española de la Transición. El detective Pepe Carvalho, culto, cínico, íntegro y gran gourmet realiza sus pesquisas en una Barcelona muy diferente a la de hoy en día, moviéndose entre las altas esferas de los más privilegiados y los bajos fondos de la marginación social. Un libro que no solo no pierde con una segunda lectura, sino que gana en matices, captaremos los guiños que se nos escaparon en su día y que abundan en la novela y la entenderemos como una obra más compleja. En mi opinión, y sin desmerecer otras, esta es la mejor novela del autor. Ahora le toca recoger el testigo y seguir con el personaje de Carvalho, por voluntad de la familia Montalbán y de la editorial, a otro gran escritor noir, Carlos Zanón. Carvalho: problemas de identidad ha sido la primera nueva aventura de este lúcido investigador privado, que a pesar de su extensa cultura profesa una profunda adversidad hacia los intelectuales y que, en en un ejercicio de crítica literaria, alimenta su incombustible chimenea con los libros de su biblioteca.",
    editorial: "Austral",
    front:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658476494-51BwBZEIy0L._SL500_.jpg?crop=1xw:1xh;center,top&resize=640%3A%2a",
    price: 2830,
    stock: 10,
    deleted: false,
  },

  {
    title: "Un amante de ensueño",
    author: "Sherrilyn Kenyon",
    genre: "Romance Paranormal",
    description:
      "La extraña maldición que pesa sobre Julian de Macedonia desde hace 2.000 años le ha condenado a pasar la eternidad atrapado en un libro hasta que una mujer le invoque para satisfacer sus deseos. Julian ha tenido mucho tiempo para perfeccionar sus habilidades y es capaz de hacer realidad las fantasias más secretas de cualquier mujer para proporcionarle un placer inimaginable. Pero cuando Julian es convocado para ser amante de Grace Alexander durante un mes, descubre en ella a la mujer capaz de hacer realidad un sueño oculto: un amor que llene el vacío de su corazón y, quizá, sea capaz de poner fin a la maldición. ¿Puede un esclavo sexual encontrar el amor verdadero? Lirismo, mitología clásica y terror. Estos ingredientes se dan cita en esta autora, de la que en breve se publicará su serie 'Cazador Oscuro',. En esta novela de alto voltaje erótico se tratan las vicisitudes de un joven condenado a ejercer como esclavo sexual. Sin embargo, luego de haber complacido a millares de mujeres, todavía puede encontrar el verdadero amor.",
    editorial: "Debolsillo",
    front: "https://editorial.tirant.com/high/9788499081199.jpg",
    price: 2880,
    stock: 10,
    deleted: false,
  },

  {
    title: "El beso del highlander",
    author: "Karen Marie Moning",
    genre: "Romance Paranormal",
    description:
      "UN HIGHLANDER ATRAPADO ENTRE LOS SIGLOS. Encantado por un poderoso hechizo, Drustan MacKeltar durmió durante casi cinco siglos oculto en las profundidades de una cueva, hasta que una improbable salvadora lo despertó. La atractiva joven que se vestía y hablaba como ninguna mujer que él hubiera conocido jamás venía del lejano futuro, donde todo lo que quedaba de su mundo en las Highlands -las Tierras Altas escocesasera un montón de ruinas. Drustan sabía que si iba a salvar a su gente de un destino terrible tenía que regresar a su propio siglo. Y para ello necesitaba a esa extraña mujer que tenía junto a él. UNA MUJER QUE CAMBIARÍA PARA SIEMPRE. Gwen Cassidy había ido a Escocia para introducir un poco de animación en su aburrida existencia. Un accidente la llevará al interior de una caverna subterránea, directamente a los brazos del hombre más devastadoramente seductor que hubiera visto jamás... Atada a Drustan por una pasión más fuerte que el tiempo, Gwen se ve transportada a la Escocia del siglo xvi, donde acecha una terrible enemiga y donde un guerrero que tiene el poder de cambiar la historia desafiará a la eternidad por la mujer a la que ama.",
    editorial: "B de Books",
    front: "https://m.media-amazon.com/images/I/5168b-+StuL.jpg",
    price: 3000,
    stock: 10,
    deleted: false,
  },

  {
    title: "Amante Oscuro",
    author: "J.R. Ward",
    genre: "Romance Paranormal",
    description:
      "En las sombras de la noche, en Caldwell (Nueva York), se desarrolla una sorda y cruel guerra entre los vampiros y sus verdugos. Y existe una hermandad secreta de seis vampiros guerreros, los defensores de toda su raza. Ninguno de ellos desea aniquilar a sus enemigos con tanta ansia como Wrath, el campeón de la Hermandad de la Daga Negra. Wrath, el vampiro de raza más pura de los que aún pueblan la tierra, tiene una deuda pendiente con los que, hace siglos, mataron a sus padres. Cuando cae muerto uno de sus más fieles guerreros, dejando huérfana a una muchacha mestiza, ignorante de su herencia y su destino, no le queda más remedio que arrastrar a la bella joven al mundo de los no-muertos. Traicionada por la debilidad de su cuerpo, Beth Randall se ve impotente para resistir los avances de ese desconocido, increiblemente atractivo, que la visita cada noche, envuelto en las sombras. Sus historias sobre la Hermandad la aterran y la fascinan... y su simple roce hace que salte la chispa de un fuego que puede acabar consumiéndoles a los dos.",
    editorial: "Debolsillo",
    front:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/fe/d4/fed48cfa4cc28dcd73b88b337d830fe6.jpg",
    price: 2800,
    stock: 10,
    deleted: false,
  },

  {
    title: "Noche de Mardi Gras",
    author: "Erika Gael",
    genre: "Romance Paranormal",
    description:
      "A las puertas de un nuevo Apocalipsis, el demonio Astaroth, Archiduque del Infierno de Occidente, se encapricha con un viaje de placer a la Tierra, una visita que pondrá fin a casi seis mil años de condena. Sin embargo, las órdenes de Lucifer son claras; tiene dos meses para resarcirse y después deberá volver al hogar. Dispuesto a no dejar pasar la ocasión, Astaroth hace las maletas y se planta en Nueva Orleans con una nueva identidad y un deseo irrefrenable de hacer de las suyas. Cincuenta días después, en la misma ciudad aterrizan por error seis universitarios españoles en su viaje de fin de carrera. Entre ellos se encuentra Carlota, una joven escéptica e independiente que aprenderá a ver el carnaval más salvaje y alocado del mundo con otros ojos cuando el hombre de sus sueños se cruza en su camino. Es difícil resistirse a la tentación, sobre todo si ésta cobra la forma del hombre perfecto y parece estar dispuesta a hacer realidad cada uno de sus secretos anhelos. Sin poder remediarlo, algo en el halo de misterio que desprende el encantador David White atrae a Carlota como un imán, pero lo que no sabe es que su propia frescura es la trampa que se cierne sobre el oscuro corazón de Astaroth. Pero, igual que a todo carnaval le sigue una cuaresma y a todo sueño una vigilia, cuando unos sentimientos desconocidos e impensables para ambos exploten, una muchacha de provincias y un cínico demonio deberán enfrentarse juntos a la lucha por su felicidad, especialmente la de un alma que ya tiene dueño. El Mal.",
    editorial: "Createspace Independent Publishing Platform",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_728692-MLA29768089759_032019-O.jpg",
    price: 13949,
    stock: 10,
    deleted: false,
  },

  {
    title: "El demonio de la oscuridad",
    author: "Kresley Cole",
    genre: "Romance Paranormal",
    description:
      "Malkom Slaine, atormentado por su sórdido pasado y por el hambre de los vampiros, es empujado al abismo por una belleza de ojos verdes a la que tiene que proteger. Para poder sobrevivir, Malkom debe liberar al demonio y al vampiro que tiene dentro. Cuando sobrevenga la pesadilla que su propia gente teme, ¿perderá a la mujer que ansía tanto su cuerpo como su alma?",
    editorial: "Esencia",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_863332-MLA42410273571_062020-O.webp",
    price: 6529,
    stock: 10,
    deleted: false,
  },

  {
    title: "El príncipe oscuro",
    author: "Christine Feehan",
    genre: "Romance Paranormal",
    description:
      "Mihail, príncipe de los Carpatianos, ha encontrado por fin la luz después de siglos de tinieblas, y donde menos podía sospecharlo. Porque ha sido una mujer humana, Raven, la que ha contactado con él y le ha demostrado que es la elegida para ser su compañera eterna. Ella le encuentra fascinante y atractivo, pero no es fácil para una mujer moderna aceptar las costumbres y extraños poderes de los Carpatianos. Más difícil será aún, teme Mihail, que acepte la realidad sobre esta raza que tanto tiene en común con los vampiros de las leyendas. Pero mientras tanto, un peligro más real se cierne sobre ellos, en forma de un grupo de fanáticos dispuestos a borrar a esta prodigiosa raza de la faz de la tierra. Una nueva novela de la serie de los Carpatianos, seres cuyos poderes sobrehumanos sólo rivalizan con la pasión desbordante con la que buscan a las mujeres con las que compartir la vida y alejar el peligro de las tinieblas.",
    editorial: "books4pocket",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/4196CbOyHmL._SX195_.jpg",
    price: 2400,
    stock: 10,
    deleted: false,
  },

  {
    title: "Lo que dure la eternidad",
    author: "Nieves Hidalgo",
    genre: "Romance Paranormal",
    description:
      "En el castillo de Killmarnock se avecina una horrible tragedia. Augustus, el señor del castillo, debe proteger su gran secreto frente al enemigo, como sus antepasados han hecho a lo largo de la historia. Una importante reliquia sagrada está en poder de su familia desde los tiempos de Jesucristo, y su deber es ocultarla para que no caiga en malas manos. La fatalidad hace que Killmarnock sea atacado cuando su hijo, junto con sus mejores hombres, se encuentran ausentes. Él no puede hacer más que esconder la reliquia en un lugar seguro y tratar de sobrevivir a la batalla luchando con todas sus fuerzas. Cuando Dargo, el hijo mayor de Augustus, llega a sus tierras, encuentra a su padre moribundo y le culpa de lo ocurrido por no haber estado allí para defenderlos. Con el alma rota, Augustus maldice a su hijo a vagar eternamente por los muros del castillo hasta que consiga encontrar la reliquia en el lugar donde él la ha escondido, y su alma consiga descansar en paz. Han pasado 400 años, Cristina es una tasadora de arte que es llamada por el dueño del castillo de Killmarnock para tasar algunas de sus más preciadas posesiones. No se lo piensa dos veces y emprende el viaje hacia tierras lejanas, y así escapa de la rutina de su aburrida vida. Cristina queda fascinada desde el primer momento por el castillo de Killmarnock y por su gente. Ella es una mujer práctica e independiente que no cree en tonterías sobre fantasmas... y se ríe ante las 'leyendas', absurdas que cuentan que en el castillo hay un fantasma. Pero a medida que su estancia en el castillo se alarga, va descubriendo que la leyenda es... real. Y más cuando se encuentra de cara con el fantasma de Dargo... Pasión, aventura, leyendas y fantasmas... todo mezclado con una increible maestría por esta gran escritora.",
    editorial: "Zeta",
    front:
      "https://1.bp.blogspot.com/-2MMp80_QxhQ/VOjBT2q8ugI/AAAAAAAAB-k/OMh6LEm9JvA/s1600/lo-que-dure-la-eternidad.jpg",
    price: 1100,
    stock: 10,
    deleted: false,
  },

  {
    title: "Placeres de la noche",
    author: "Sherrilyn Kenyon",
    genre: "Romance Paranormal",
    description:
      "Querido lector: ¿Alguna vez te has preguntado qué se siente al ser inmortal? ¿Al vivir noche tras noche persiguiendo a demonios que asesinan a los humanos? ¿Al tener riquezas infinitas y un poder ilimitado? Esa es mi existencia, y es oscura y peligrosa. Soy un héroe para miles de personas, pero nadie me conoce. Y me encanta vivir así. O eso pensaba hasta la noche en que me desperté encadenado a mi peor pesadilla: una joven de aspecto conservador, vestida con una camisa... que en el caso de Amanda estaba abotonada hasta el cuello. Una mujer inteligente, fascinante, ingeniosa y que no quiere tener nada que ver con el mundo paranormal; es decir, conmigo. La atracción que Amanda Devereaux despierta en mí va en contra de todas mis creencias. Por no mencionar que la última vez que me enamoré, no solo me costó la vida, sino también el alma. Y ahora, cada vez que la miro, descubro que quiero intentarlo de nuevo. Me empeño en volver a creer que el amor y la lealtad existen de verdad. Y lo más desconcertante es que a cada momento me descubro preguntándome si existirá una mujer capaz de amar a un hombre con unas cicatrices tan profundas. Con un corazón que quedó destrozado a causa de una brutal traición que ni siquiera sabe muy bien si podrá latir otra vez",
    editorial: "Debolsillo",
    front:
      "https://1.bp.blogspot.com/-6xVGZ0EE46Y/WarisH9p6PI/AAAAAAAAMaw/b-XcLyMJkEYh9gn37Lt_vxAU1r-jZ8KDwCLcBGAs/s400/Placeres-de-la-noche-BOLSILLO_libro_image_big.png",
    price: 2500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los tres nombres del lobo",
    author: "Lola P. Nieva",
    genre: "Romance Paranormal",
    description:
      "Una novela que narra un viaje interior: una mujer que busca conocerse a sí misma. Desde la refinada sensibilidad árabe al ímpetu vikingo, en una travesía personal, intima, en la que se abrirán nuevos paisajes, conocerá otras lenguas, costumbres, el placer de una gastronomía diferente, bailes, vestimentas, el despertar de los sentidos. Una novela que narra la educación de los sentimientos, el aprendizaje de la sensualidad, el descubrir del erotismo, la invención del apasionado desenfreno. Un viaje para trazar un camino único, el recorrido del propio destino. 'A veces yo también deseo devorarte para que formes parte de mí, para tenerte en mi interior y protegerte de todo, para sentirte más cerca, para que seamos uno. Sé que lo que sentimos no es corriente; es algo diferente, más fuerte, más caótico, más intenso; casi sobrenatural.'",
    editorial: "Vestales",
    front: "https://m.media-amazon.com/images/I/41ZIZiVRxCL._AC_SY780_.jpg",
    price: 3169,
    stock: 10,
    deleted: false,
  },

  {
    title: "El libro de la sacerdotisa",
    author: "Lena Valenti",
    genre: "Romance Paranormal",
    description:
      "Cuando Ruth llegó a Londres para visitar a su mejor amiga, Aileen, nunca imaginó que se vería envuelta en una guerra entre seres ancestrales creados por los dioses. Sin comerlo ni beberlo, Ruth ha aterrizado en un mundo de seres peligrosos, ancestrales y terriblemente atractivos. Llegó a Londres de visita y ahora se ha visto envuelta en una feroz guerra que parece haber despertado las terribles voces que la atormentaron en el pasado. Sin embargo, el destino le brinda la oportunidad de encontrarse a sí misma y no piensa desaprovecharla. Hacía un mes y medio que Adam no dormía. Sus sueños estaban plagados de sangre, muerte y oscuridad y la protagonista de todas sus pesadillas era una mujer de pelo rojo y ojos dorados. Una humana que no era quien decía ser: Ruth, la amiga mortal de Aileen. Ahora ella lo ha desafiado y él no dudará en darle caza y detenerla, aunque eso lo obligue a mantener a raya sus instintos más salvajes. Vienen tiempos de caza en el Midgard. ¿Quién saldrá vencedor? ¿El lobo o la cazadora?",
    editorial: "Vanir",
    front:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/d3/f3/d3f32c51eb50adf8e5035e5b2e85315f.jpg",
    price: 2803,
    stock: 10,
    deleted: false,
  },

  {
    title: "Los amantes del cielo",
    author: "M.C. Sark",
    genre: "Romance Paranormal",
    description:
      "Anabel Lund se crio en Edimburgo en el seno de una familia atípica: su padre, un profesor de universidad erudito y despistado, abrumado al tener que hacerse cargo de una niña de seis años, y una misteriosa y extravagante vecina que de noche se colaba por su ventana para leerle cuentos fantásticos de bellas princesas y temibles monstruos. Anabel ya ha cumplido los veintiséis, vive independizada en Londres y adora a su padre, pero una serie de acontecimientos le revelarán que no es oro todo lo que reluce: Jens no es un simple profesor, la señorita De la Gravière tampoco una vecina corriente y la fantasía de los cuentos —aquellos que le leyeron de niña— es más cercana a la realidad de lo que jamás habría imaginado. Sin buscarlo, la joven se verá envuelta en una insólita partida de caza donde el depredador será convertido en presa. Una extraña aventura en la que, además, comprometerá su corazón. Dos razas, humanos y vampiros, separadas por un río de estrellas que surca el firmamento, inevitablemente abocados a encontrarse, temerse, odiarse y amarse.",
    editorial: "Terciopelo",
    front:
      "https://paolacalvarez.com/wp-content/uploads/losamantesdelcielo_mcsarl.jpg",
    price: 2500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Destino",
    author: "María Martínez",
    genre: "Romance Paranormal",
    description:
      "Desde hace siglos, vampiros y licántropos mantienen un pacto que protege a los humanos de un mundo de peligro y oscuridad. William es uno de ellos, un vampiro temible y letal. El único de su especie inmune al sol. Ese don lo convierte en un ser especial. En la esperanza que su raza necesita. En la llave que los renegados persiguen para liberarse de su maldición. Un pacto. Un secreto. Una venganza. No es fácil librarse de las tinieblas cuando forman parte de tu alma.",
    editorial: "Titania",
    front:
      "https://paolacalvarez.com/wp-content/uploads/Almas-oscuras-i-maria-martinez.jpg",
    price: 3465,
    stock: 10,
    deleted: false,
  },

  {
    title: "Scherzo",
    author: "Estefanía Jiménez",
    genre: "Romance Paranormal",
    description:
      "Para una mujer como Aileen, planear su futuro es algo fundamental y necesario. Recién llegada a Praga; en una época convulsionada por los cambios sociales, con escasos recursos; debe encontrar un esposo rico y sumiso cuanto antes. Sus objetivos están fijados y sus ideas claras. Sin embargo el destino le tiene preparada una sorpresa. Cuando se cruza en el camino del famoso violinista Václav Novotný, el mejor músico de Bohemia y también el más enigmático, seductor y libertino de los hombres; solo le basta una mirada para sentir una atracción irresistible y antinatural hacia él. Ese hombre es peligro y deseo en estado puro y, tras sus ojos violetas, se ocultan un millar de secretos que la instan a alejarse.",
    editorial: "Romántica",
    front:
      "https://paolacalvarez.com/wp-content/uploads/squerzo-estefania-jimenez.jpg",
    price: 3458,
    stock: 10,
    deleted: false,
  },

  {
    title: "Alados",
    author: "Alissa Brontë",
    genre: "Romance Paranormal",
    description:
      "Nada es lo que parece y la fantasía se mezcla con la realidad y el amor. El Apocalipsis ha comenzado. Alma está a punto de cumplir dieciséis años y es una Frágil que sobrevive en una colonia de humanos oculta de los Alados, los seres que están exterminando el mundo que conocemos. Un desengaño amoroso y el deseo de encontrar a su madre desaparecida harán que se arriesgue a internarse en un mundo desconocido para ella, donde deberá tomar una decisión que hará tambalearse a toda la humanidad.",
    editorial: "HQN",
    front:
      "https://paolacalvarez.com/wp-content/uploads/alados-alissa-bronte.jpg",
    price: 2489,
    stock: 10,
    deleted: false,
  },

  {
    title: "La portadora",
    author: "Lorraine Cocó",
    genre: "Romance Paranormal",
    description:
      "Allison es una exitosa escritora de literatura romántica paranormal. Su vida parece el cumplimiento del sueño americano, hasta que su marido James, muere en un accidente de avión. A raíz de su muerte, descubre que el mundo que la rodea y el mundo que habita en su imaginación, no son tan distintos. Cuando advierte que está embarazada de su difunto marido, y que su bebé es codiciado y perseguido, adaptarse a ese peligroso mundo, con el que tendrá mucho más que ver de lo que imagina, se convertirá en la única tabla de salvación para ella y su bebé. ¿Pero en quién confiar cuando todo el mundo ansía lo que lleva dentro?",
    editorial: "Semillas Negras",
    front:
      "https://paolacalvarez.com/wp-content/uploads/la-portadora-lorraine-coco.jpg",
    price: 1684,
    stock: 10,
    deleted: false,
  },

  {
    title: "El año del diluvio",
    author: "Margaret Atwood",
    genre: "Novela Distópica",
    description:
      "En la segunda entrega de la ‘Trilogía de MaddAddam’ Atwood describe el horror de un mundo en el que la humanidad, las industrias y los poderes políticos y económicos continúan destruyendo el medioambiente con sus prácticas abusivas. Aunque algunos de los personajes de la primera parte, ‘Oryx y Crake’, reaparecen en la obra, en esta ocasión está narrada desde el punto de vista de dos mujeres: Ren y Toby. Se trata de las supervivientes del Diluvio Seco que ha asolado el planeta y parece haber acabado con toda vida humana. Ambas intentan emprender una nueva vida mientras en el mundo exterior campan a sus anchas los gobernantes corruptos y proliferan nuevas especies transgénicas que amenazan con destruirlo todo.",
    editorial: "Salamandra",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2022/09/El-ano-del-diluvio-638x1024.jpg.webp",
    price: 2648,
    stock: 10,
    deleted: false,
  },

  {
    title: "El Libro Azul de Nebo",
    author: "Manon Steffan Ros",
    genre: "Novela Distópica",
    description:
      "Después del Fin, una catástrofe que tuvo consecuencias terribles para los habitantes del pequeño pueblo de Nebo (incluso más allá de esta región del norte de Gales), Rowenna y su hijo Siôn deben sobrevivir solos a la hecatombe. Sin comida, calefacción ni ningún tipo de tecnología, aprenden a vivir en la naturaleza y a obtener todo lo que necesitan de la tierra. Ambos van recogiendo sus pensamientos y su historia en un cuaderno azul a la vez que tratan de continuar con su vida. En el proceso, el chico tiene que crecer muy rápido, asumiendo responsabilidades adultas. El libro también refleja cómo evoluciona la relación entre madre e hijo: ambos esconden sus propios secretos, que surgen mientras van anotando sus pensamientos y recuerdos en un cuaderno.",
    editorial: "Seix Barral",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2022/09/El-libro-azul-de-Nebo-586x1024.jpg.webp",
    price: 1684,
    stock: 10,
    deleted: false,
  },

  {
    title: "Klara y el sol",
    author: "Kazuo Ishiguro",
    genre: "Novela Distópica",
    description:
      "Ciencia ficción y distopía se conjugan en la primera novela de Kazuo Ishiguro tras ser galardonado con el Premio Nobel en 2017. La historia está narrada por la curiosa e inquisitiva Klara, una AA (Amiga Artificial) especializada en el cuidado de niños que espera tras el escaparate de la tienda en la que se encuentra a que alguien se la lleve a casa. La protagonista ve, oye y relaciona todo lo que percibe a su alrededor; goza de un entendimiento sofisticado mucho mayor que de sus otros compañeros robots. En la novela, el lector descubrirá las aventuras que le esperan a Klara en el mundo exterior y la manera en la que se adaptará a los comportamientos y los sentimientos humanos. ",
    editorial: "Anagrama",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2022/09/Klara-y-el-sol-653x1024.jpg.webp",
    price: 1478,
    stock: 10,
    deleted: false,
  },

  {
    title: "La discoteca de Gógol",
    author: "Paavo Matsin",
    genre: "Novela Distópica",
    description:
      "Ganadora del Premio de Literatura de la Unión Europea 2022, mezcla historia y distopía para ofrecer una reflexión sobre el encaje de las nacionalidades, los idiomas, las identidades y el pasado del continente europeo. Para ello, plantea una trama que sucede en Estonia, donde se ha prohibido el idioma nativo y la población ha sido deportada tras la invasión del zar ruso. Es entonces cuando el escritor ucraniano Nikolái Gógol resucita como mesías sacralizado y santificado y desata el caos en el pueblo de Viljandi, situado al sur del país. A pesar de los intentos de la policía secreta de detenerlos, un grupo de bohemios, libreros y seguidores del mesías intentará escribir unos nuevos evangelios que guíen al pueblo.",
    editorial: "Ático de los Libros",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2022/09/La-discoteca-de-Gogol-677x1024.jpg.webp",
    price: 1577,
    stock: 10,
    deleted: false,
  },

  {
    title: "Radicalizado",
    author: "Cory Doctorow",
    genre: "Novela Distópica",
    description:
      "Ambientado en Estados Unidos, está compuesto por cuatro novelas distópicas cortas de ciencia ficción en las que se entrelazan temas de tecnología, política y cultura. Todas se caracterizan por retratar las preocupaciones de las sociedades occidentales en un mundo que tiene una relación incómoda pero dependiente con la tecnología. La primera, ‘Pan autorizado’, se centra en el colectivo de inmigrantes que luchan por sobrevivir y prosperar a pesar de tener todo en contra. ‘Minoría modelo’, por su parte, está protagonizada por una especie de superhéroe que intenta corregir la corrupción de las fuerzas policiales, aunque sus esfuerzos acaban afectando negativamente a las víctimas.En el siguiente relato, ‘Radicalizado’, un hombre desesperado por conseguir financiación para un medicamento experimental que podría curar el cáncer de su esposa narra un un levantamiento violento en la dark web contra las compañías de seguros. Por último, ‘La máscara de la muerte roja’ se remonta al libro ‘Walkaway’ del mismo autor y aborda cuestiones de supervivencia frente a la comunidad.",
    editorial: "Capitan Swing",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2022/09/Radicalizado-656x1024.jpg.webp",
    price: 2348,
    stock: 10,
    deleted: false,
  },

  {
    title: "Oryx y Crake",
    author: "Margaret Atwood",
    genre: "Novela Distópica",
    description:
      "Escrita al borde de un horizonte postapocalíptico, Margaret Atwood arranca con esta novela la primera parte de su ‘Trilogía de MaddAddam’. Conocido como Jimmy antes de que el planeta se viese asolado por una serie de desastres naturales, ‘Hombre de las Nieves’ llora la pérdida de Crake, su mejor amigo, y de la bella y esquiva Oryx, de quien ambos estaban enamorados, mientras lucha por sobrevivir en la Tierra. Con la compañía de sus recuerdos, Atwood dibuja una historia de amor marcada por la ambición de la ciencia, la manipulación del código genético, la clonación de especies y demás prácticas que comenzaron siendo avances para la economía mundial y que son la excusa para cuestionar la moralidad de esos actos y sus consecuencias.",
    editorial: "Salamandra",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2021/06/Oryx-y-Crake.jpg.webp",
    price: 950,
    stock: 10,
    deleted: false,
  },

  {
    title: "El año de gracia",
    author: "Kim Liggett",
    genre: "Novela Distópica",
    description:
      "Amor, ternura, misterio y un peligro inquietante son los ingredientes que emplea Kim Liggett en esta distopía y que hacen del condado de Garner un lugar cargado de opresión para las mujeres, donde el coraje es la única opción para sobrevivir. Allí las niñas crecen convencidas de que al alcanzar la adolescencia su piel exhala una potente esencia de juventud que seduce a los hombres y mata de celos a las mujeres. A fin de purificar esa ‘magia’ sin dañar a nadie y regresar a casa listas para el matrimonio, las adolescentes esperan su ‘año de gracia’, en el que son expulsadas y confinadas en plena naturaleza. Sin embargo, no todas vuelven.",
    editorial: "Salamandra",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2021/06/El-ano-de-gracia.jpg.webp",
    price: 1649,
    stock: 10,
    deleted: false,
  },

  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Novela Distópica",
    description:
      "La discordia y el sufrimiento de la humanidad radica en los libros. Por eso, en el siglo XXIV cualquier ejemplar está prohibido y cuando descubren a alguien con una lectura entre sus manos los bomberos queman su casa hasta los cimientos a 451 grados Fahrenheit: la temperatura a la que arde el papel. Bajo este escenario Ray Bradbury cuenta la historia de Guy Montag, un bombero que disfruta quemando libros y cuya vida cambia cuando conoce a Clarisse, una mujer extraña que camina por la calle junto a él. Las conversaciones que entablan sobre el mundo no solo ruborizarán al protagonista, sino que le harán cuestionarse la sociedad en la que vive y de la que trata de escapar.",
    editorial: "Debolsillo",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2021/06/Fahrenheit-451.jpg.webp",
    price: 970,
    stock: 10,
    deleted: false,
  },

  {
    title: "La parábola del sembrador",
    author: "Octavia E. Butler",
    genre: "Novela Distópica",
    description:
      "Escrita hace casi tres décadas, esta distopía retrata un mundo ambientado en 2020, arrasado por el cambio climático y por las guerras provocadas por la falta de recursos. Lauren Olamina, una joven adolescente de quince años, vive dentro de una comunidad cerrada con su familia y sus vecinos, relativamente protegida de la anarquía circundante. En un mundo donde cualquier vulnerabilidad es un riesgo, ella sufre de hiperempatía, una sensibilidad debilitante hacia las emociones de los demás. Octavia E. Butler publica esta ficción distópica que se lee al ritmo del caos que provocan las catástrofes sociales, económicas y medioambientales y que invita a reflexionar sobre una realidad vaticinada y que no difiere mucho de la actual.",
    editorial: "Capitán Swing",
    front:
      "https://educacion30.b-cdn.net/wp-content/uploads/2021/06/La-parabola-del-sembrador.jpg.webp",
    price: 1547,
    stock: 10,
    deleted: false,
  },

  {
    title: "Nosotros",
    author: "Yevgueni Zamiatin",
    genre: "Novela Distópica",
    description:
      "Las novelas de Orwell, Huxley y Bradbury se consideran hoy como la gran trilogía distópica, pero no fueron las primeras. De hecho, antes del rotundo éxito de Bradbury, esa trilogía la componían 1984, Un mundo feliz y… Nosotros, del ruso Yevgueni Zamiatin. Y es que Nosotros, en realidad, fue la primera, y fue una obra que influyó enormemente en las otras dos. Orwell y Huxley se declararon admiradores de Zamiatin, que murió como Van Gogh, en la extrema pobreza, olvidado e ignorante de haber arrancado el fértil género de la novela distópica. El tema de Nosotros no es difícil de imaginar. Situada cerca del año 3000, la humanidad se ha convertido en una gigantesca cárcel presidida por un estado onmipresente y bienhechor. Todo, como en la posterior novela de Orwell, va vestido de gris y sabe a cemento. Todo, como en la posterior novela de Huxley, parece ordenado, estable, bien dispuesto y… feliz.",
    editorial: "Hermida Editores",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51zTU7OILfL._SY344_BO1,204,203,200_.jpg",
    price: 999,
    stock: 10,
    deleted: false,
  },

  {
    title: "El proceso",
    author: "Franz Kafka",
    genre: "Novela Distópica",
    description:
      "Un individuo llamado Josef K. es sorprendido una mañana por unos hombres desconocidos. Estos le informan de que se ha iniciado un proceso contra él. No le dicen por qué, no le informan de qué se le acusa. Lo tranquilizan: podrá seguir haciendo su vida normal, mientras se desarrolla el proceso en las esferas judiciales. Está arrestado, pero no detenido. A partir de ahí, con el inmenso peso de la culpa sobre sus hombros, Josef K. intentará, por todos los medios, obtener más información. De qué se le acusa, qué ha hecho, cómo puede defenderse, en qué estado se encuentra exactamente el proceso abierto contra él. Nada. Paradójicamente, cuando más trata de acercarse a la fuente del proceso, más lejos está de obtener respuestas. La burocracia judicial, en principio transparente, se va haciendo no sólo inaccesible, sino aparentemente infinita. Josef K. es incapaz de saber nada y, poco a poco, va perdiendo la cordura. El gran Kafka dibuja aquí, como en La metaformosis, una situación que el lector nunca sabe si calificar como comedia o como pesadilla. Por suerte hoy tenemos un calificativo perfecto para ella: kafkiana.",
    editorial: "Alianza",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51Rm9IBu5TL._SX331_BO1,204,203,200_.jpg",
    price: 2289,
    stock: 10,
    deleted: false,
  },

  {
    title: "La invención de Morel",
    author: "Adolfo Bioy Casares",
    genre: "Novela Distópica",
    description:
      "Resulta difícil explicar la necesidad de leer La invención de Morel sin desvelar nada de su argumento, pues esta es una de esas novelas cuya primera lectura es una experiencia inolvidable, de las que hacen al lector dar un respingo, mezcla de sorpresa y de incomodidad, cuando comprende lo que está pasando. Un hombre que huye de la justicia llega a una isla alejada del mundo, donde los barcos, al parecer, no se acercan. Años atrás la compró un millonario excéntrico que edificó lujosos edificios y realizó extraños experimentos, dejándola luego abandonada. Desde entonces se dice que la isla está sujeta a una extraña maldición, pero cuya naturaleza no se precisa. Desde el primer día, el fugitivo va notando ciertas extrañezas. La isla no está deshabitada, sino que la ocupan unos veraneantes de comportamiento inexplicable: bailan en medio de la lluvia, tienen cada día las mismas conversaciones y, sobre todo, no parecen reparar en él. Cuanto más investiga, más extraño parece todo. Roberto Bolaño equiparó La invención de Morel con Sobre héroes y tumbas, de Ernesto Sabato, y dijo que ya nunca sería posible volver a escribir una novela así. Borges dice en el prólogo de la obra que «no es una exageración ni una hipérbole calificarla de perfecta». No decimos más para no arruinar la experiencia.",
    editorial: "Austral",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51-qwHLXb%2BL._SY344_BO1,204,203,200_.jpg",
    price: 930,
    stock: 10,
    deleted: false,
  },

  {
    title: "Ensayo sobre la ceguera",
    author: "José Saramago",
    genre: "Novela Distópica",
    description:
      "El escritor portugués José Saramago, Premio Nobel de Literatura en 2002, es conocido por introducir en sus novelas elementos fantásticos que se desarrollan luego en un entorno perfectamente realista. Pero lo que hace en su Ensayo sobre la ceguera es ir un poco más lejos. Al afectar lo fantástico (a saber: una epidemia de ceguera que termina afectando a toda la población) a todo el entorno social, termina diseñando una situación distópica. Lejos de alertar sobre los peligros de un futuro estado totalitario, escenario que ya exploraron las distopías clásicas, Saramago pone su mirada en los individuos. El Ensayo sobre la ceguera es un relato que funciona a modo de alegoría, que nos alerta, como él mismo dijo, de «la importancia de tener ojos cuando los demás los han perdido». Un mensaje que no caducará nunca.",
    editorial: "Debolsillo",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/41Xnnazs4EL._SY344_BO1,204,203,200_.jpg",
    price: 2350,
    stock: 10,
    deleted: false,
  },

  {
    title: "Nunca me abandones",
    author: "Kashuo Ishiguro",
    genre: "Novela Distópica",
    description:
      "El Premio Nobel de Literatura de 2017, autor de otras excelentes novelas como Lo que queda del día, recuperó en el año 2005 el sabor de la vieja distopía clásica, un género que cada vez se abordaba menos desde la literatura o que, al menos, cada vez que se abordaba menos desde la literatura de calidad. Que un autor de esta talla construyera un relato como Nunca me abandones fue sin duda un soplo de aire fresco para el género, porque, además, se trata de una novela excelente que dibuja un escenario nuevo y adaptado a nuestro tiempo. La protagonista de la novela, Kathy, narra en primera persona sus recuerdos de Hailsham, una escuela que educa y prepara a jóvenes clones cuya función será ejercer como donantes de órganos. La naturaleza biológica, pero sobre todo moral, de estos clones es la aguja que nos aprieta y nos incomoda durante toda la novela.",
    editorial: "Anagrama",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/41i9tvljDWL._SY344_BO1,204,203,200_.jpg",
    price: 1670,
    stock: 10,
    deleted: false,
  },

  {
    title: "Guerra Mundial Z",
    author: "Max Brooks",
    genre: "Novela Distópica",
    description:
      "¿Puede una novela de zombies no solo ser seria sino convertirse en un espejo en el que mirarnos? Max Brooks, autor de la mucho más irreverente Guía de supervivencia zombie, se lo propuso para su segunda novela y lo consiguió. La adaptación de cinematográfica producida por Brad Pitt puede llevar a engaño, pues la novela de Brooks no es un relato de terror ni de acción, sino el compendio de los efectos de una guerra zombie a escala global. El subtítulo de la novela, Historia oral de la guerra zombie, es mucho más preciso, y de hecho Brooks se inspiró en la obra de Richard Holmes, la Historia oral de la Segunda Guerra Mundial. Articulada en torno a breves narraciones de personajes diferentes, con voces que no se repiten y que dan cuenta tanto de la reacción individual como de las propuestas políticas para la supervivencia, Brooks construye un mosaico que resulta no solo entretenido sino sumamente verosímil. Como en todo libro de este tipo, se producen altibajos, pero si los capítulos menos brillantes son simplemente aceptables, en los mejores alcanza Brooks unos niveles de inspiración merecedores de aplauso.",
    editorial: "Debolsillo",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51GdTHk0nTL._SY344_BO1,204,203,200_.jpg",
    price: 2500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Canción de hielo y fuego",
    author: "George R.R. Martin",
    genre: "Novela Fantástica",
    description:
      "Juego de Tronos, la serie de HBO, acabó difiriendo tanto del material original que son dos experiencias diferentes. La de Martin, mucho más enriquecedora.",
    editorial: "Gigamesh",
    front:
      "https://media.revistagq.com/photos/604a52cd267aa4eef01d2c0e/master/w_800%2Cc_limit/tronos.jpg",
    price: 2123,
    stock: 10,
    deleted: false,
  },

  {
    title: "Alicia en el País de las Maravillas",
    author: "Lewis Carrol",
    genre: "Novela Fantástica",
    description:
      "Todo el mundo está un poco loco en este prodigioso elogio del disparate, los juegos de palabras y el humor surreal, pero lo preferimos así. Que nos corten la cabeza si mentimos.",
    editorial: "Edelvives",
    front:
      "https://media.revistagq.com/photos/604a52a5d1187a598fb4984d/master/w_800%2Cc_limit/alicia.jpg",
    price: 1645,
    stock: 10,
    deleted: false,
  },

  {
    title: "Neverwhere",
    author: "Neil Gaiman",
    genre: "Novela Fantástica",
    description:
      "Si te gusta Sandman, no te puedes perder al Gaiman novelista, tan talentoso siempre para encontrar metáforas especialmente impactantes para los jóvenes lectores.",
    editorial: "Rocabolsillo",
    front:
      "https://media.revistagq.com/photos/604a52cad1187a598fb4984f/master/w_800%2Cc_limit/Neverwhere.jpg",
    price: 1160,
    stock: 10,
    deleted: false,
  },

  {
    title: "Una arruga en el tiempo",
    author: "Madeleine L'Engle",
    genre: "Novela Fantástica",
    description:
      "Su reciente adaptación al cine, dirigida por Ava DuVernay, no pudo hacer justicia a la sencilla, pero potentísima, prosa de L'Engle. Su historia de amor entre padre e hija es increíble.",
    editorial: "Gran Travesía",
    front:
      "https://media.revistagq.com/photos/604a52a6a660e7c9bd503b5b/master/w_800%2Cc_limit/arruga.jpg",
    price: 980,
    stock: 10,
    deleted: false,
  },

  {
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    genre: "Novela Fantástica",
    description: "Qué te podemos decir que no sepas ya de este tesoro…",
    editorial: "Planeta",
    front:
      "https://media.revistagq.com/photos/604a52a6267aa4eef01d2c06/master/w_800%2Cc_limit/anillos.jpg",
    price: 3690,
    stock: 10,
    deleted: false,
  },

  {
    title: "Historias de Terramar",
    author: "Ursula K. Le Guin",
    genre: "Novela Fantástica",
    description:
      "El Ciclo de Terramar no es simple fantasía: es Alta Fantasía, o un archipiélago donde todo lo que seas capaz de imaginar es posible.",
    editorial: "Minotauro",
    front:
      "https://media.revistagq.com/photos/604a52cd267aa4eef01d2c0c/master/w_800%2Cc_limit/terramar.jpg",
    price: 2312,
    stock: 10,
    deleted: false,
  },

  {
    title: "El descubrimiento de las brujas",
    author: "Deborah Harkness",
    genre: "Novela Fantástica",
    description:
      "Todo empieza con un manuscrito alquímico embrujado en la Biblioteca Bodleiana de Oxford. Y de ahí no para de crecer y crecer en interés, pues esta es una lectura adictiva como pocas.",
    editorial: "Suma de Letras",
    front:
      "https://media.revistagq.com/photos/604a52a6a660e7c9bd503b5a/master/w_800%2Cc_limit/brujas.jpg",
    price: 2100,
    stock: 10,
    deleted: false,
  },

  {
    title: "James y el melocotón gigante",
    author: "Roald Dahl",
    genre: "Novela Fantástica",
    description:
      "La imaginación del autor británico tocó el cielo con este sencillísimo relato sobre chico-conoce-fruta-descomunal.",
    editorial: "Loqueleo",
    front:
      "https://media.revistagq.com/photos/604a52a7a660e7c9bd503b5f/master/w_800%2Cc_limit/james.jpg",
    price: 850,
    stock: 10,
    deleted: false,
  },

  {
    title: "La brújula dorada",
    author: "Philip Pullman",
    genre: "Novela Fantástica",
    description:
      "Hay película y también serie de HBO, pero los completistas saben que nada tan detallado y fascinante como las novelas de Pullman.",
    editorial: "Roca",
    front:
      "https://media.revistagq.com/photos/604a52a69fc97c95e82c1bbb/master/w_800%2Cc_limit/brujula.jpg",
    price: 4200,
    stock: 10,
    deleted: false,
  },

  {
    title: "La historia interminable",
    author: "Michael Ende",
    genre: "Novela Fantástica",
    description:
      "Ahora ya no te vas a poder quitar esa canción de la cabeza, y por ello pedimos disculpas.",
    editorial: "Santillana Educación",
    front:
      "https://media.revistagq.com/photos/604a52a79fc97c95e82c1bbf/master/w_800%2Cc_limit/ende.jpg",
    price: 1500,
    stock: 10,
    deleted: false,
  },

  {
    title: "Brujas de viaje",
    author: "Terry Pratchett",
    genre: "Novela Fantástica",
    description:
      "Una parodia de la literatura fantástica hecha con tanto cariño, brillantez y conocimiento de causa que al final ha quedado como catedral posmoderna del género.",
    editorial: "Debolsillo",
    front:
      "https://media.revistagq.com/photos/604a52caa660e7c9bd503b61/master/w_800%2Cc_limit/mundodisco.jpg",
    price: 900,
    stock: 10,
    deleted: false,
  },

  {
    title: "1Q84",
    author: "Haruki Murakami",
    genre: "Novela Fantástica",
    description:
      "¿Quién dijo que la fantasía no podía asumir apariencia de realismo? En este caso, realismo mágico y retorcido, con universos paralelos que, quizá, sólo sean un reflejo de este.",
    editorial: "Tusquets",
    front:
      "https://media.revistagq.com/photos/604a52a59fc97c95e82c1bb9/master/w_800%2Cc_limit/1Q84.jpg",
    price: 2630,
    stock: 10,
    deleted: false,
  },

  {
    title: "Circe",
    author: "Medelin Miller",
    genre: "Novela Fantástica",
    description:
      "En el palacio de Helios, dios del sol y el más poderoso de los titanes, nace una niña. Pero Circe es una niña rara: carece de los poderes de su padre y de la agresiva capacidad de seducción de su madre. Cuando acude al mundo de los mortales en busca de compañía, descubre que sí posee un poder, el poder de la brujería, con el que puede transformar a sus rivales en monstruos y amenazar a los mismísimos dioses. Temeroso, Zeus la destierra a una isla desierta, donde Circe perfecciona sus oscuras artes, doma bestias salvajes y se va topando con numerosas figuras célebres de la mitología griega: desde el Minotauro a Dédalo y su desventurado hijo Ícaro, la asesina Medea y, por supuesto, el astuto Odiseo. Pero también la acecha el peligro, y Circe concita, sin saberlo, la ira tanto de los humanos como de los dioses, por lo que acaba teniendo que enfrentarse con uno de los olímpicos más imponentes y vengativos. Para proteger aquello que ama, Circe deberá hacer acopio de todas sus fuerzas y decidir, de una vez por todas, si pertenece al mundo en el que ha nacido o al mundo mortal que ha llegado a amar. Repleta de personajes de una intensidad inolvidable, con un estilo cautivador y un suspense apasionante, 'Circe' es todo un logro narrativo, una embriagadora épica de las rivalidades familiares, las intrigas palaciegas, el amor y la pérdida, así como una celebración de una fuerza femenina indómita en un mundo de hombres.",
    editorial: "Alianza",
    front:
      "https://media.revistagq.com/photos/604a52a6a660e7c9bd503b5d/master/w_800%2Cc_limit/circe.jpg",
    price: 1800,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las Crónicas de Narnia. El león,la bruja y el ropero",
    author: "C.S. Lewis",
    genre: "Novela Fantástica",
    description:
      "Narnia…, un mundo congelado…, una tierra que aguarda su liberación. Cuatro niños descubren un armario que les sirve de puerta de acceso a Narnia, un país congelado en un invierno eterno y sin Navidad. Entonces, cumpliendo con las viejas profecías, los niños ―junto con el león Aslan―serán los encargados de liberar al reino de la tiranía de la Bruja Blanca y recuperar el verano, la luz y la alegría para todos los habitantes de Narnia. Lewis era muy, muy cristiano, de modo que todo lo que ocurre en su épico catálogo de maravillas se puede interpretar como una metáfora… o no, porque también sabía divertir a sus lectores",
    editorial: "Destino",
    front:
      "https://media.revistagq.com/photos/604a52cba660e7c9bd503b63/master/w_800%2Cc_limit/narnia.jpg",
    price: 2700,
    stock: 10,
    deleted: false,
  },

  {
    title: "El vuelo del dragón",
    author: "Anne McCaffrey",
    genre: "Novela Fantástica",
    description:
      "La joven costurera Creel se encuentra elaborando estrategias con el rey dragón Shardas una vez más cuando un dragón renegado en un país lejano lanza una guerra contra su país, trayendo a todo un ejército de dragones.",
    editorial: "Rocabolsillo",
    front:
      "https://media.revistagq.com/photos/604a52a79fc97c95e82c1bbd/master/w_800%2Cc_limit/dragon.jpg",
    price: 2000,
    stock: 10,
    deleted: false,
  },

  {
    title: "La Divina Comedia",
    author: "Dante Alighieri",
    genre: "Poesía",
    description:
      "Hay obras maestras, como el Quijote, que los autores empiezan sin plan preciso ni determinado: van haciendo de la necesidad virtud, rizando el rizo de la invención. Pero la Comedia pertenece a otra categoría: es el resultado de la deliberación y la perseverancia de Dante. Exiliado de Florencia y condenado a la hoguera, fue incluso contumaz, pues insistió en el imperdonable «error» de crear algo profundamente nuevo y personal. Dramática y tenebrosa en el Infierno, pictórica y melancólica en el Purgatorio y luminosa y musical en el Paraíso, la Comedia es a la Edad Moderna lo que la Odisea a la Antigüedad. Esta nueva traducción de José María Micó, melódica e inspirada, invita al lector de habla hispana a adentrarse en el singular universo dantesco y acompañar al poeta en su viaje por los tres reinos ultramundanos.",
    editorial: "Acantilado",
    front: "https://es.babelio.com/couv/CVT_Comedia_6622.jpg",
    price: 4900,
    stock: 10,
    deleted: false,
  },

  {
    title: "Hojas de Hierba",
    author: "Walt Whitman",
    genre: "Poesía",
    description:
      "Considerado de forma unánime el máximo poeta de Estados Unidos, Walt Whitman (1819-1892) es el supremo cantor del Yo y de la naturaleza, del cuerpo y del alma, de la igualdad del hombre y la mujer, de las delicias del sexo, de la fraternidad y la democracia. Profundamente renovadora en cuanto a forma y contenido, su obra suscitó una oleada de entusiasmo y controversias. Aparecida en 1855, 'Hojas de hierba', vio nueve ediciones corregidas y aumentadas en vida del poeta. La presente antología bilingüe, traducida, prologada y anotada por Manuel Villar Raso, ofrece los poemas de Whitman en sus primeras versiones, en las cuales el impulso que les dio origen se manifiesta con mayor fidelidad que en las últimas, expurgadas por el propio poeta.",
    editorial: "Alianza",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/41mUoaHQdYL._SX210_.jpg",
    price: 2240,
    stock: 10,
    deleted: false,
  },

  {
    title: "El Paraíso perdido",
    author: "John Milton",
    genre: "Poesía",
    description:
      "Los principales personajes de la mayor obra de John Milton son Satán, Dios, Adán y Eva, y sus  actitudes terminan revelando el mensaje esperanzador que se esconde tras la pérdida del Paraíso original. Estamos ante una de las cimas de la literatura universal, imprescindible para conocer el desarrollo del pensamiento y la cultura occidentales, que sigue despertando la admiración del público contemporáneo.",
    editorial: "Austral",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/61ld4MfuddL._SX195_.jpg",
    price: 1900,
    stock: 10,
    deleted: false,
  },

  {
    title: "Cantares completos: Tomo I:1",
    author: "Ezra Pound",
    genre: "Poesía",
    description:
      "La aparición de estos rostros en la multitud; pétalos en una rama oscura y húmeda.",
    editorial: "Ediciones Cátedra",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/51zGBeLTJbL._SX195_.jpg",
    price: 1200,
    stock: 10,
    deleted: false,
  },

  {
    title: "El divino narciso",
    author: "Sor Juana Inés de la Cruz",
    genre: "Poesía",
    description:
      "En esta obra se narra la leyenda de Narciso y cómo murió por haberse enamorado de sí mismo al ver su reflejo, sin embargo la obra contiene muchos y muy interesantes matices más allá de ser simplemente una adaptación de la leyenda. Lo más resaltante parece ser la inmensa carga religiosa de la obra y la genialidad y talento con que ésta autora mezcló la mitología y la religión, no sólo por la inclusión de los personajes bíblicos, que además representan una pequeña parte de la obra, sino por la manera en que logra que sintamos a Narciso como si de cierta manera se tratara del Hijo de Dios (Jesús Cristo).",
    editorial: "Createspace Independent Publishing Platform",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/31mDv0AquWL._SX210_.jpg",
    price: 1860,
    stock: 10,
    deleted: false,
  },

  {
    title: "El matrimonio del cielo y el infierno",
    author: "William Blake",
    genre: "Poesía",
    description:
      "'El matrimonio del cielo y el infierno', ocupa un lugar privilegiado en la evolución poética y artística del William Blake (1757-1827). Educado en la tradición disidente o inconformista, es decir, en la religión de aquellos que aceptaron la ruptura con Roma pero no el sometimiento a la nueva Iglesia de Inglaterra fundada desde la monarquía, Blake planeó una obra que le brindara la posibilidad de denunciar la moral instituida, exponer su visión antinómica del mundo, expresar sus ideas sobre el origen de las religiones e incluir un canto revolucionario, la 'Canción de la libertad', muestra de la energía revolucionaria que se desató a finales del siglo XVIII. Uno de los rasgos más desconcertantes de 'El matrimonio del cielo y el infierno' es la variedad de elementos que la componen: ilustraciones y poemas, diálogos y parodias, una teoría de la percepción, proverbios, una teogonía, un canto político, manifiestos religiosos y varios descensos a los infiernos. Esta edición ofrece el texto en edición bilingüe y reproduce el facsímil de las 25 planchas originales.",
    editorial: "Cátedra",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51NbmnQdDDL._SX210_.jpg",
    price: 1600,
    stock: 10,
    deleted: false,
  },

  {
    title: "El libro de las imágenes",
    author: "Rainer Maria Rilke",
    genre: "Poesía",
    description:
      "Haz que algo nos ocurra. Mira cómo hacia la vida temblamos. Y queremos alzarnos como un resplandor y una canción.",
    editorial: "Hiperión",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/51sSNicJHcL._SX195_.jpg",
    price: 1230,
    stock: 10,
    deleted: false,
  },

  {
    title: "Iluminaciones. Cartas del vidente",
    author: "Arthur Rimbaud",
    genre: "Poesía",
    description:
      "El primer objeto de estudio del hombre que quiere ser poeta es su propio conocimiento.",
    editorial: "Hiperión",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/41qV8O9fbDL._SX195_.jpg",
    price: 2000,
    stock: 10,
    deleted: false,
  },

  {
    title: "La destrucción o el amor",
    author: "Vicente Aleixandre",
    genre: "Poesía",
    description:
      "Literatura, reconocimiento internacional que rubrica toda su actividad creadora. En el Discurso de recepción define su sentido de la poesía del siguiente modo: 'El poeta está lleno de sabiduría, pero no puede envanecerse, porque quizá no es suya: una fuerza incognoscible, un espíritu habla por su boca: el de su raza, el de su peculiar tradición. Con los dos pies hincados en la tierra, una corriente prodigiosa se condensa, se agolpa bajo sus plantas para correr por su cuerpo y alzarse por su lengua. Es entonces la tierra misma, la tierra profunda, la que llamea por ese cuerpo arrebatado'. Tengamos presentes estas palabras en la lectura de sus obras surrealistas, Pasión de la tierra, Espadas como labios y La destrucción o el amor.",
    editorial: "Diario El País",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/41p3x2zsTEL._SX195_.jpg",
    price: 960,
    stock: 10,
    deleted: false,
  },

  {
    title: "Ítaca",
    author: "Constandinos P. Cavafis",
    genre: "Poesía",
    description:
      "Publicado en 1911 y aparentemente inspirado en el viaje de regreso a casa de Ulises, «Ítaca» es una invitación al viaje, una metáfora de la vida. Como señala el traductor de esta edición, Vicente Fernández González: «El viaje de 'Ítaca', no es el viaje del regreso, no es un viaje de vuelta; es un viaje de ida, el primer viaje, el viaje. […] La lectura de 'Ítaca', invita a la reflexión, a la consideración de que no se trata de cualquier viaje. ¿El viaje a la libertad? ¿A la utopía? ¿La Ítaca del deseo?». Es este uno de los poemas más bellos que se han escrito jamás. Refleja una profunda sabiduría, la sabiduría del poeta que, sin necesidad de abandonar su ciudad natal, ha sido capaz de realizar todos los viajes. Las ilustraciones de Federico Delicado han captado la esencia de esta travesía vital.",
    editorial: "Nórdica Libros",
    front: "https://es.babelio.com/couv/CVT_Itaca_89.jpg",
    price: 1540,
    stock: 10,
    deleted: false,
  },

  {
    title: "La tierra baldía",
    author: "T.S. Eliot",
    genre: "Poesía",
    description:
      "Thomas Stearns Eliot era hijo de una familia de Nueva Inglaterra, cuyos orígenes de emigrantes ingleses se remontan a aquellos puritanos que en el siglo XVII colonizaron esa región de Norteamérica. Sus lazos familiares le emparentan con presidentes americanos, rectores de Harvard y eruditos e intelectuales americanos. Su posterior adopción de la ciudadanía británica, su conversión al catolicismo, su declaración de 'clasicista en literatura, monárquico en política y anglo-católico en religión' , cuestionaban la esencia misma de la identidad norteamericana, que se definía como republicana, protestante y opuesta al Viejo Mundo. La publicación en 1922 de 'La tierra baldía' marcó un hito en la tradición poética anglonorteamericana. El poema se reveló como el documento revolucionario del experimentalismo de las vanguardias. Texto extraño y enigmático, colección de fragmentos de diversa índole, escritos en siete lenguas, que se extiende a lo largo de distintas épocas y culturas, cuyas imágenes recurrentes articularon un nuevo lenguaje poético. El ensamblaje en distintos estilos —lírico, romance, elegía y épica, novela policíaca y gótica—, de distintos metros y rimas, sus discontinuidades y yuxtaposiciones rompían los moldes y las formas tradicionales. El poema de Eliot traza el viaje del alma a través del desierto de la ignorancia, del sufrimiento y de la sed de aspiraciones terrenales.",
    editorial: "Cátedra",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51zqLy9rH6L._SX210_.jpg",
    price: 2310,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las flores del mal",
    author: "Charles Baudelaire",
    genre: "Poesía",
    description:
      "No sé si Charles Baudelaire es el más conocido de los poetas modernos pero estoy convencido de que Las flores del mal sí es el más difundido de los libros de poemas, cuando menos en Occidente. Aunque poco celebrado en el momento de su publicación, en 1857, desde la muerte de su autor su impacto fue creciendo, dominando a través de los simbolistas el fin de siglo pasado y erigiéndose luego, con el surrealismo, en una piedra angular del edificio moderno. La modernidad para Baudelaire implica poner de relieve las contradicciones, a menudo violentas, de la vida moderna. En esta perspectiva, Las flores del mal representa un arco de imágenes maravillosamente tenso. Y la flecha, una vez disparada, vuela directamente al corazón de la conciencia moderna haciendo estallar sus múltiples hipocresías.",
    editorial: "Austral",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/31Ckq3WDmiL._SX210_.jpg",
    price: 1845,
    stock: 10,
    deleted: false,
  },

  {
    title: "Amapola y memoria",
    author: "Paul Celan",
    genre: "Poesía",
    description:
      "Alguien que es portador de mis cabellos. Los lleva como se lleva a los muertos en las manos.",
    editorial: "Hiperión",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/41X1ji-HpkL._SX195_.jpg",
    price: 1476,
    stock: 10,
    deleted: false,
  },

  {
    title: "Poeta en Nueva York | Sonetos",
    author: "Federico García Lorca",
    genre: "Poesía",
    description:
      "Poeta en Nueva York | Sonetos es el tercer volumen de la Biblioteca Federico García Lorca y el tercero de los que compilan su «Poesía completa». En este libro, amén del impresionante poemario Poeta en Nueva York, se presentan las obras Tierra y luna, los Poemas sueltos II y III, Poemas en prosa, Diván de Tamarit, Sonetos, Seis poemas galegos y el Llanto por Ignacio Sánchez Mejías. Asimismo, se ofrecen las conferencias de Un poeta en Nueva York, Cómo canta una ciudad de noviembre a noviembre y el Ensayo o poema sobre el toro en España. La edición y los prólogos a cargo de Miguel García-Posada, permiten al lector acercarse a la complejidad de su obra y disfrutar, a lo largo de los siete volúmenes que componen esta Biblioteca Federico García Lorca, de uno de los autores españoles más relevantes del siglo XX. ",
    editorial: "Debolsillo",
    front:
      "https://images-eu.ssl-images-amazon.com/images/I/51HwxekmvkL._SX195_.jpg",
    price: 1939,
    stock: 10,
    deleted: false,
  },

  {
    title: "Marinero en tierra",
    author: "Rafael Alberti",
    genre: "Poesía",
    description:
      "Premio Nacional de literatura en 1925, 'Marinero en tierra', es uno de los hitos fundamentales de la obra de Rafael Alberti (1902-1999). Esta primera poesía del maestro gaditano es leve, grácil, llena de luz y musicalidad, de imágenes y criaturas imaginadas, expresión de la creciente melancolía del muchacho de mar anclado en tierra, y en ella resuenan desde los ecos del Romancero, de Gil Vicente y de Garcilaso, hasta los de Rimbaud, Verlaine y el vanguardismo.",
    editorial: "Alianza",
    front:
      "https://images-na.ssl-images-amazon.com/images/I/51TDN01DSvL._SX210_.jpg",
    price: 1580,
    stock: 10,
    deleted: false,
  },

  {
    title: "Romeo y Julieta",
    author: "William Shakespeare",
    genre: "Obra de Teatro",
    description:
      "La dramática historia del amor prohibido entre jóvenes de familias rivales, Romeo Montesco y Julieta Capuleto. Frente a las miles de adversidades que su amor les presenta, los jóvenes enfrentan las presiones de la rivalidad para finalmente ser derrotados por la desdicha.",
    editorial: "Createspace Independent Publishing Platform",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_797767-MLA27008267554_032018-O.webp",
    price: 4879,
    stock: 10,
    deleted: false,
  },

  {
    title: "Hamlet",
    author: "William Shakespeare",
    genre: "Obra de Teatro",
    description:
      "Otra brillante obra del dramaturgo inglés y una de las más leídas, Hamlet retrata la locura que deviene de la venganza, con una pizca de dolor, ira, traición, incesto y corrupción moral. Una de las obras que más críticas ha generado desde que fue compuesta (1599-1601) con un final trágico y lúgubre.",
    editorial: "Colihue",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_778166-MLA43715861681_102020-O.webp",
    price: 1575,
    stock: 10,
    deleted: false,
  },

  {
    title: "Sueño de una noche de verano",
    author: "William Shakespeare",
    genre: "Obra de Teatro",
    description:
      "Continuando con su dominio de las primeras posiciones de este ranking, Shakespeare compuso esta comedia romántica, que se transformó en un clásico de la literatura teatral mundial. Narra la historia de 2 parejas de amantes sumidos en un mundo de fantasía, magia, sueños y comicidad.",
    editorial: "Cántaro",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_919295-MLA31882306041_082019-O.webp",
    price: 1399,
    stock: 10,
    deleted: false,
  },

  {
    title: "Don Juan Tenorio",
    author: "José de Zorrilla",
    genre: "Obra de Teatro",
    description:
      "Un drama romántico de 1844 donde el protagonista logra el perdón divino y se salva del infierno gracias al amor que profesa por Doña Inés, algo que en versiones anteriores no ocurría. Es una obra que suele representarse a nivel popular en la primera noche del mes de noviembre.",
    editorial: "Gradifco",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_639740-MLA26376358509_112017-O.webp",
    price: 750,
    stock: 10,
    deleted: false,
  },

  {
    title: "La vida es sueño",
    author: "Pedro Calderón de la Barca",
    genre: "Obra de Teatro",
    description:
      "La obra gira en torno a la libertad y las decisiones humanas. Incorpora conceptos religiosos de diferentes credos y la influencia de la legendaria Alegoría de la Caverna de Platón es amplia y explícita. El protagonista, Segismundo, vive en completa oscuridad en la cárcel de su mente y alcanza la iluminación solo al descubrirse a sí mismo.",
    editorial: "Longseller",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_660811-MLA41970625329_052020-O.webp",
    price: 1140,
    stock: 10,
    deleted: false,
  },

  {
    title: "La casa de Bernarda Alba",
    author: "Federico García Lorca",
    genre: "Obra de Teatro",
    description:
      "Esta tragedia retrata la vida de luto de la viuda sexagenaria Bernarda Alba y los lazos con sus 5 hijas, a la cuales arrastra en su locura. En la obra se muestra un profundo fanatismo religioso, conservadurismo y temor a la intimidad donde subyace el odio, la envidia, la ambición y el poder jerárquico.",
    editorial: "Del Fondo",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_770394-MLA41971004733_052020-O.webp",
    price: 1080,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las troyanas",
    author: "Eurípides",
    genre: "Obra de Teatro",
    description:
      "Tras el saqueo de Troya, la flota de los griegos está pronta a partir y las troyanas están siendo sorteadas. Poseidón se lamenta de Troya, la ciudad cuyos muros edificó, debido a su destrucción a manos de los griegos. Ante él se presenta la diosa Atenea, indignada porque han sacado a Casandra del templo donde le rendía culto; por eso no favorecerá a los griegos en su regreso, a pesar de que los apoyaba en la guerra.",
    editorial: "Createspace Independent Publishing Platform",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_840139-MLA49560802141_042022-O.webp",
    price: 6656,
    stock: 10,
    deleted: false,
  },

  {
    title: "Las aves",
    author: "Aristófanes",
    genre: "Obra de Teatro",
    description:
      "Comedia griega de Aristófanes que ganó el segundo premio en las Grandes Dionisias del año 414 a. C. En el 415 la flota ateniense había partido para la expedición a Sicilia y su éxito estaba todavía por dilucidar. Ha sido celebrada por críticos modernos que la consideran una fantasía llevada a cabo a la perfección​ destacable por la representación de los pájaros y la alegría de las canciones.​ A diferencia de las obras tempranas del autor no se incluye mención directa a las guerras del Peloponeso y hay pocas referencias a la política ateniense, a pesar de haberse escenificado poco después del inicio de la expedición a Sicilia, una ambiciosa campaña militar que en gran medida incrementó el compromiso ateniense con el esfuerzo de guerra. A pesar de ello, la obra tiene muchas referencias indirectas a la política y la vida social de Atenas. De las obras de Aristófanes que han llegado a nuestro tiempo, Las aves es la de mayor extensión y aun así, es un ejemplo bastante convencional de la comedia antigua.",
    editorial: "Losada",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_708022-MLA51605354379_092022-O.webp",
    price: 2160,
    stock: 10,
    deleted: false,
  },

  {
    title: "Medea",
    author: "Eurípides",
    genre: "Obra de Teatro",
    description:
      "La tragedia Medea trata de la conocida historia de Jasón tras las aventuras que lo llevaron a conquistar el vellocino de oro, trabajo impuesto por su tío Pelias. Jasón, tras el trabajo, se casó con Medea, y en Yolcos tuvieron un hijo: Mérmero. Para hacerse con el poder en Yolcos, Pelias había matado a Esón, padre de Jasón. Medea engañó a las hijas de Pelias para que lo mataran. Jasón y Medea huyeron de Yolcos., y han arribado a Corinto, donde reina Creonte, y ahí transcurre la historia contada en la tragedia.",
    editorial: "Salim",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_796456-MLA47383378414_092021-O.webp",
    price: 990,
    stock: 10,
    deleted: false,
  },

  {
    title: "Pygmalion",
    author: "Bernard Shaw",
    genre: "Obra de Teatro",
    description:
      "Shaw escribió esta obra en una época en que la fonética era un tema en auge; decía que el español y el alemán eran idiomas clarísimos que los extranjeros de dichas lenguas podían comprender, pero que el inglés era tan mal hablado por ellos que ni ellos mismos se entendían. La obra resulta didáctica, pero sin ser aburrida. En el mito de Pigmalión, de origen griego, Pigmalión se enamora de una estatua que él mismo ha creado. Gracias a fuerzas divinas, la estatua toma forma humana y consiguen así estar juntos.",
    editorial: "Penguin",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_796756-MLA51933397982_102022-O.webp",
    price: 2813,
    stock: 10,
    deleted: false,
  },

  {
    title: "Guillermo Tell",
    author: "Frederich Schiller",
    genre: "Obra de Teatro",
    description:
      "Con el transcurso de los siglos, la figura de Guillermo Tell encarnó los ideales de lucha por la libertad e independencia de Suiza primero, y más tarde los de amor paterno y la lucha por la justicia. Numerosos autores, especialmente durante el Romanticismo, encontraron en Guillermo Tell su fuente de inspiración. Friedrich Schiller se basó en la leyenda de Guillermo Tell para escribir un drama en cinco actos y en verso, perteneciente a la época clásica de la literatura alemana: Guillermo Tell (en alemán: Wilhelm Tell), en 1804.",
    editorial: "Pictus",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_930565-MLA32710968621_102019-O.webp",
    price: 1710,
    stock: 10,
    deleted: false,
  },

  {
    title: "Seis personajes en busca de un autor",
    author: "Luigi Pirandello",
    genre: "Obra de Teatro",
    description:
      "Seis personajes en busca de autor (en italiano Sei personaggi in cerca d'autore) es la más famosa obra del escritor Luigi Pirandello, estrenada en Italia en 1921; la primera publicación del texto fue en 1925. En conjunto con el resto de su producción dramática de la época, propone innovadores procedimientos que serán posteriormente influyentes fundamentos del teatro moderno, especialmente en el llamado Teatro del absurdo. Es considerada por algunos como su obra maestra. Se considera también como la primera de una trilogía de piezas de teatro dedicado al teatro: las otras dos son Cada cual a su manera (Ciascuno a suo modo, 1924) y Esta noche se improvisa la comedia (Questa sera si recita a soggetto, 1928-29).",
    editorial: "Cántaro",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_609887-MLA31057447998_062019-O.webp",
    price: 1400,
    stock: 10,
    deleted: false,
  },

  {
    title: "La Celestina",
    author: "Fernando de Rojas",
    genre: "Obra de Teatro",
    description:
      "Por su argumento amoroso, su finalidad didáctica, la abundancia de citas de autoridad, la elección de sus personajes, su forma dialogada y su más que probable vinculación a un entorno universitario, se ha considerado a La Celestina un ejemplo sui generis de comedia humanística, aunque hay quien prefiere considerarla como un híbrido entre novela y drama. Su influencia en ambos géneros es muy notable, hasta el punto de que es posible hablar del género celestinesco en el que se incluyen tanto obras desarrolladas directamente a partir de su trama, sus personajes o sus temas, como ambientes o personajes celestinescos en comedias y novelas que, en principio, nada tienen que ver con La Celestina.",
    editorial: "Penguin",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_947270-MLA32341967589_092019-O.webp",
    price: 2204,
    stock: 10,
    deleted: false,
  },

  {
    title: "Fuente Ovejuna",
    author: "Lope de Vega",
    genre: "Obra de Teatro",
    description:
      "Fuenteovejuna es una obra teatral del Siglo de Oro español del dramaturgo Lope de Vega. Está considerada, con Peribáñez y el Comendador de Ocaña y El mejor alcalde, el rey, uno de los tres dramas 'municipales', que constituyen lo mejor de su vasta obra dramática.",
    editorial: "Castalia",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_829539-MLA51788757882_102022-O.webp",
    price: 1935,
    stock: 10,
    deleted: false,
  },

  {
    title: "Antígona",
    author: "Sófocles",
    genre: "Obra de Teatro",
    description:
      "La persistencia del tema de Antígona en la cultura de Occidente en todas sus épocas, a través de innumerables reelaboraciones en todos los géneros, ha sido señalada por George Steiner como el caso más extremo y extraordinario de permanencia y reiteración de un tema dramático. Steiner lo explica atribuyéndolo a que en él se condensan los cinco conflictos fundamentales que a su juicio dan origen a todas las situaciones dramáticas. El enfrentamiento entre Antígona y Creonte sobre el destino de los restos de Polinices plantea a la vez los conflictos entre hombres y mujeres, entre la vejez y la juventud, entre la sociedad y el individuo, entre los seres humanos y la divinidad (las leyes de los hombres y las de los dioses) y entre el mundo de los vivos y el de los muertos Ambientada inmediatamente después de la batalla de Tebas, uno de los tópicos centrales de la tragedia 'Antígona', es la tensión entre los intereses del Estado y el imprescindible proceso de duelo que atraviesan quienes pierden a un ser querido. Desde su estreno en el siglo V a. de C. hasta la actualidad, la tragedia ha sido considerada un referente de los principios éticos que guían a las sociedades; instalando disputas de sentido en el derecho a la sepultura y al duelo, que ratifican el valor universal de una tragedia que trasciende los tiempos y cuyo tratamiento sigue siendo imprescindible.",
    editorial: "Ediciones Libertador",
    front:
      "https://http2.mlstatic.com/D_NQ_NP_850208-MLA43534782156_092020-O.webp",
    price: 550,
    stock: 10,
    deleted: false,
  },
];

async function createBooks() {
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    await bookService.create(book);
  }
  console.log("BOOKS todo bien");
}

module.exports = createBooks;
