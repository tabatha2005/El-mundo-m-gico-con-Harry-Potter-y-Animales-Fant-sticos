// Wizarding World Data: Películas, Trivia, Hechizos, Pociones y Patronus
const WIZARDING_DATA = {
  movies: [
    {
      id: "fb-1",
      title: "Animales Fantásticos y Dónde Encontrarlos",
      originalTitle: "Fantastic Beasts and Where to Find Them",
      saga: "fantastic-beasts",
      timelineYear: "1926",
      releaseYear: 2016,
      duration: "133 min",
      director: "David Yates",
      screenplay: "J.K. Rowling",
      posterBg: "linear-gradient(135deg, #1b3838 0%, #0d1e24 100%)",
      badgeColor: "#48bca6",
      tagline: "Descubre una nueva era del mundo mágico.",
      synopsis: "En 1926, el magizoólogo británico Newt Scamander llega a Nueva York con una maleta repleta de criaturas mágicas extraordinarias. Cuando algunas escapan accidentalmente en una ciudad ya tensa por la presencia de fanáticos anti-magia ('Los Segundos Salemerianos') y un misterioso destructor oscuro, Newt debe aliarse con la exauror Tina Goldstein, su hermana legilimante Queenie y el simpático no-mago Jacob Kowalski para evitar una catástrofe que exponga a la comunidad mágica.",
      mainCast: [
        { actor: "Eddie Redmayne", role: "Newt Scamander" },
        { actor: "Katherine Waterston", role: "Tina Goldstein" },
        { actor: "Dan Fogler", role: "Jacob Kowalski" },
        { actor: "Alison Sudol", role: "Queenie Goldstein" },
        { actor: "Colin Farrell", role: "Percival Graves" },
        { actor: "Ezra Miller", role: "Credence Barebone" }
      ],
      creatures: ["Escarbato (Niffler)", "Bowtruckle (Pickett)", "Demiguise (Dougal)", "Occamy", "Ave del Trueno (Frank)", "Erumpent"],
      iconicQuote: "Mi filosofía es que preocuparse es sufrir dos veces.",
      facts: [
        "Eddie Redmayne entrenó semanas con cuidadores reales del zoológico para aprender el cortejo de apareamiento que realiza con el Erumpent en Central Park.",
        "Fue la primera película del Mundo Mágico que no se basó directamente en una novela narrativa, sino que J.K. Rowling escribió el guion original inspirada en el libro de texto escolar benéfico publicado en 2001.",
        "Ganó el Premio Óscar al Mejor Diseño de Vestuario en 2017 (Colleen Atwood), convirtiéndose en la primera película del universo de Harry Potter en ganar un Oscar.",
        "El maletín mágico de Newt Scamander cuenta con un interruptor 'apto para Muggles' que oculta su zoológico de bolsillo."
      ],
      curiositiesCount: 4,
      boxOffice: "$814 millones de dólares",
      soundtrackTheme: "Hedwig's Theme revisitado & Newt's Theme"
    },
    {
      id: "fb-2",
      title: "Animales Fantásticos: Los Crímenes de Grindelwald",
      originalTitle: "Fantastic Beasts: The Crimes of Grindelwald",
      saga: "fantastic-beasts",
      timelineYear: "1927",
      releaseYear: 2018,
      duration: "134 min",
      director: "David Yates",
      screenplay: "J.K. Rowling",
      posterBg: "linear-gradient(135deg, #1f1b2b 0%, #0d0a17 100%)",
      badgeColor: "#9370db",
      tagline: "El destino de uno cambiará el futuro de todos.",
      synopsis: "Gellert Grindelwald escapa de forma espectacular durante su traslado carcelario en Nueva York y comienza a reunir seguidores leales en París para alzarse sobre el mundo no-mágico. Albus Dumbledore, imposibilitado por un juramento inquebrantable de combatir a Grindelwald directamente, recurre a su antiguo alumno Newt Scamander. La búsqueda de la verdadera identidad de Credence Barebone lleva a todos los personajes al cementerio del Père-Lachaise en un choque crucial de lealtades.",
      mainCast: [
        { actor: "Eddie Redmayne", role: "Newt Scamander" },
        { actor: "Johnny Depp", role: "Gellert Grindelwald" },
        { actor: "Jude Law", role: "Albus Dumbledore" },
        { actor: "Zoë Kravitz", role: "Leta Lestrange" },
        { actor: "Claudia Kim", role: "Nagini" },
        { actor: "Ezra Miller", role: "Credence Barebone" }
      ],
      creatures: ["Zouwu (gran felino chino)", "Matagot (gatos guardianes del Ministerio francés)", "Kelpie", "Chupacabra"],
      iconicQuote: "La magia solo florece en almas raras. Aun así, debemos escondernos en las sombras.",
      facts: [
        "Vemos por primera vez la versión joven de Albus Dumbledore enseñando Defensa Contra las Artes Oscuras en Hogwarts (en lugar de Transformaciones como en los libros).",
        "Se revela que Nagini, la fiel serpiente y horrocrux de Voldemort, era originalmente una mujer humana afectada por un Maledictus (una maldición de sangre que la transforma irremediablemente en bestia).",
        "La filmación de París requirió la construcción en Leavesden Studios de un monumental set que combinaba arquitectura parisina del siglo XIX con entradas mágicas secretas.",
        "Al final de la cinta, Grindelwald le entrega a Credence una varita mágica y le revela lo que él afirma ser su verdadero nombre: Aurelius Dumbledore."
      ],
      curiositiesCount: 4,
      boxOffice: "$655 millones de dólares",
      soundtrackTheme: "Salamander Eyes & Dumbledore's Theme"
    },
    {
      id: "fb-3",
      title: "Animales Fantásticos: Los Secretos de Dumbledore",
      originalTitle: "Fantastic Beasts: The Secrets of Dumbledore",
      saga: "fantastic-beasts",
      timelineYear: "1932",
      releaseYear: 2022,
      duration: "142 min",
      director: "David Yates",
      screenplay: "J.K. Rowling y Steve Kloves",
      posterBg: "linear-gradient(135deg, #302416 0%, #151007 100%)",
      badgeColor: "#d4af37",
      tagline: "El mundo mágico que conoces encierra secretos que cambiarán la historia.",
      synopsis: "El profesor Albus Dumbledore sabe que Gellert Grindelwald busca apoderarse del liderazgo supremo de la Confederación Internacional de Magos en Bután manipulando la sagrada criatura Qilin, capaz de ver la pureza en el alma de los líderes. Con un pacto de sangre aún activo, Dumbledore confía a Newt Scamander el mando de un intrépido e insólito grupo de hechiceros, brujas y el valiente panadero Muggle Jacob Kowalski, llevando a cabo planes descentralizados para confundir la visión precognitiva de Grindelwald.",
      mainCast: [
        { actor: "Eddie Redmayne", role: "Newt Scamander" },
        { actor: "Mads Mikkelsen", role: "Gellert Grindelwald" },
        { actor: "Jude Law", role: "Albus Dumbledore" },
        { actor: "Jessica Williams", role: "Eulalie 'Lally' Hicks" },
        { actor: "Dan Fogler", role: "Jacob Kowalski" },
        { actor: "Callum Turner", role: "Theseus Scamander" }
      ],
      creatures: ["Qilin (Quilin)", "Mantícoras jóvenes y reina", "Fénix", "Escarbato y Bowtruckle"],
      iconicQuote: "Las cosas no siempre son lo que parecen... pero incluso si cometemos errores, podemos intentar corregirlos.",
      facts: [
        "Mads Mikkelsen asumió el papel de Grindelwald aportando una interpretación calculada, fría e ideológica al mago oscuro.",
        "Se explica en profundidad el pacto de sangre sellado entre Albus y Gellert en su juventud, y cómo el dolor y la memoria rompieron finalmente dicho juramento cuando sus hechizos chocaron.",
        "Steve Kloves, quien adaptó siete de las ocho películas originales de Harry Potter al cine, regresó para coescribir el guion junto a Rowling.",
        "Jacob Kowalski recibe de parte de Dumbledore una varita de madera de snakewood sin núcleo mágico para poder infiltrarse en el banquete diplomático en Berlín."
      ],
      curiositiesCount: 4,
      boxOffice: "$407 millones de dólares",
      soundtrackTheme: "The Secrets of Dumbledore Suite"
    },
    {
      id: "hp-1",
      title: "Harry Potter y la Piedra Filosofal",
      originalTitle: "Harry Potter and the Philosopher's Stone",
      saga: "harry-potter",
      timelineYear: "1991 - 1992",
      releaseYear: 2001,
      duration: "152 min",
      director: "Chris Columbus",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #3d1b1b 0%, #150909 100%)",
      badgeColor: "#ae0001",
      tagline: "Deja que la magia comience.",
      synopsis: "En su undécimo cumpleaños, Harry Potter, un huérfano maltratado por sus tíos Dursley, descubre que es un mago con una herencia extraordinaria: sobrevivió al ataque del temible Lord Voldemort siendo un bebé. Harry viaja a la Escuela Hogwarts de Magia y Hechicería, donde forja una amistad inmortal con Ron Weasley y Hermione Granger, aprende Quidditch y descubre que la milagrosa Piedra Filosofal, resguardada por el perro de tres cabezas Fluffy, está en peligro.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Rupert Grint", role: "Ron Weasley" },
        { actor: "Emma Watson", role: "Hermione Granger" },
        { actor: "Robbie Coltrane", role: "Rubeus Hagrid" },
        { actor: "Richard Harris", role: "Albus Dumbledore" },
        { actor: "Alan Rickman", role: "Severus Snape" }
      ],
      creatures: ["Fluffy (can cerbero)", "Troll de las cavernas", "Dragón Ridgeback Noruego (Norberto)", "Centauros del Bosque Prohibido"],
      iconicQuote: "No es bueno dejarse arrastrar por los sueños y olvidarse de vivir, recuérdalo.",
      facts: [
        "J.K. Rowling insistió categóricamente en que todo el elenco de actores infantiles y principales fuera de origen británico o irlandés.",
        "Alan Rickman fue elegido personalmente por J.K. Rowling para encarnar a Snape y ella le susurró secretos vitales sobre el pasado del personaje y su amor eterno por Lily Potter años antes de que salieran los últimos libros.",
        "Las velas flotantes del Gran Comedor en las primeras tomas eran velas reales suspendidas con cables transparentes motorizados. Tras caerse varias por el calor que quemó los hilos, se sustituyeron por efectos visuales CGI por seguridad.",
        "Emma Watson inicialmente usó dientes postizos para imitar los dientes delanteros grandes de Hermione descritos en el libro, pero no podía pronunciar bien los diálogos y se descartaron."
      ],
      curiositiesCount: 4,
      boxOffice: "$1.024 millones de dólares",
      soundtrackTheme: "Hedwig's Theme (John Williams)"
    },
    {
      id: "hp-2",
      title: "Harry Potter y la Cámara Secreta",
      originalTitle: "Harry Potter and the Chamber of Secrets",
      saga: "harry-potter",
      timelineYear: "1992 - 1993",
      releaseYear: 2002,
      duration: "161 min",
      director: "Chris Columbus",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #123424 0%, #06150e 100%)",
      badgeColor: "#2a623d",
      tagline: "La cámara ha sido abierta. Enemigos del heredero, temed.",
      synopsis: "Ignorando las dramáticas advertencias del elfo doméstico Dobby, Harry regresa a su segundo año en Hogwarts. Susurros siniestros que solo Harry puede escuchar resuenan dentro de los muros de piedra, seguidos por ataques que dejan a estudiantes y al gato del conserje petrificados. Las sospechas apuntan al legendario heredero de Salazar Slytherin y a un monstruo oculto durante cincuenta años en las entrañas del castillo.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Rupert Grint", role: "Ron Weasley" },
        { actor: "Emma Watson", role: "Hermione Granger" },
        { actor: "Kenneth Branagh", role: "Gilderoy Lockhart" },
        { actor: "Jason Isaacs", role: "Lucius Malfoy" },
        { actor: "Christian Coulson", role: "Tom Riddle (joven)" }
      ],
      creatures: ["Basilisco", "Aragog y acromántulas", "Dobby el Elfo Doméstico", "Fawkes el Fénix", "Cornish Pixies (Duendecillos de Cornualles)"],
      iconicQuote: "Son nuestras elecciones, Harry, las que muestran lo que verdaderamente somos, mucho más que nuestras habilidades.",
      facts: [
        "Es la película más larga de toda la saga cinematográfica de Harry Potter, con una duración de 161 minutos (2 horas y 41 minutos).",
        "Fue la última película en la que el venerable Richard Harris interpretó al director Albus Dumbledore antes de su triste fallecimiento.",
        "El Ford Anglia volador azul celeste requirió 14 autos destruidos durante el rodaje de la secuencia contra el Sauce Boxeador.",
        "El gemido del Basilisco fue creado mezclando chillidos de tigres, elefantes y raspaduras metálicas sobre cuerdas de piano."
      ],
      curiositiesCount: 4,
      boxOffice: "$879 millones de dólares",
      soundtrackTheme: "Fawkes the Phoenix (John Williams)"
    },
    {
      id: "hp-3",
      title: "Harry Potter y el Prisionero de Azkaban",
      originalTitle: "Harry Potter and the Prisoner of Azkaban",
      saga: "harry-potter",
      timelineYear: "1993 - 1994",
      releaseYear: 2004,
      duration: "142 min",
      director: "Alfonso Cuarón",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #1b263b 0%, #0d131d 100%)",
      badgeColor: "#415a77",
      tagline: "El misterio y el peligro acechan en cada rincón.",
      synopsis: "Sirius Black, el peligroso partidario de Voldemort condenado por traición y asesinato masivo, se convierte en el primer prisionero en fugarse de la impenetrable fortaleza de Azkaban. Los espeluznantes Dementores custodian Hogwarts absorbiendo toda la alegría a su paso. Con la ayuda del comprensivo nuevo profesor Remus Lupin y un mapa misterioso, Harry descubrirá secretos desgarradores sobre la noche en que murieron sus padres.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Rupert Grint", role: "Ron Weasley" },
        { actor: "Emma Watson", role: "Hermione Granger" },
        { actor: "Gary Oldman", role: "Sirius Black" },
        { actor: "David Thewlis", role: "Profesor Remus Lupin" },
        { actor: "Michael Gambon", role: "Albus Dumbledore" }
      ],
      creatures: ["Dementores", "Hipogrifo (Buckbeak)", "Hombre lobo (Lupin)", "El Boggart"],
      iconicQuote: "La felicidad se puede hallar hasta en los momentos más oscuros, si somos capaces de usar bien la luz.",
      facts: [
        "El director mexicano Alfonso Cuarón pidió a Daniel, Rupert y Emma que escribieran un ensayo sobre sus respectivos personajes. Emma escribió 16 páginas, Daniel una página reflexiva y Rupert Grint no entregó nada argumentando que 'Ron nunca lo habría hecho'. Cuarón admitió que fue la respuesta perfecta.",
        "Marcó el debut de Michael Gambon como Dumbledore, aportando una energía más enérgica e impredecible tras el fallecimiento de Richard Harris.",
        "Cuarón permitió que los alumnos usaran ropa casual de la época (jeans, sudaderas) para darle a Hogwarts un realismo adolescente y auténtico.",
        "El ilusionista Paul Kieve fue contratado como consultor de magia real en el set para realizar trucos con manos e ilusiones prácticas frente a la cámara."
      ],
      curiositiesCount: 4,
      boxOffice: "$797 millones de dólares",
      soundtrackTheme: "Double Trouble & A Window to the Past"
    },
    {
      id: "hp-4",
      title: "Harry Potter y el Cáliz de Fuego",
      originalTitle: "Harry Potter and the Goblet of Fire",
      saga: "harry-potter",
      timelineYear: "1994 - 1995",
      releaseYear: 2005,
      duration: "157 min",
      director: "Mike Newell",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #441d08 0%, #170701 100%)",
      badgeColor: "#e65100",
      tagline: "Tiempos oscuros y difíciles se avecinan.",
      synopsis: "Hogwarts alberga el legendario Torneo de los Tres Magos reuniendo a las academias Beauxbatons y Durmstrang. Pese a no tener la edad requerida ni haber puesto su nombre, el Cáliz escupe misteriosamente a Harry Potter como un cuarto campeón no deseado. Harry debe superar tres mortales pruebas (un dragón, un lago infestado de sirenas y un laberinto maldito), sin saber que el torneo es una trampa orquestada para el renacimiento de Voldemort.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Robert Pattinson", role: "Cedric Diggory" },
        { actor: "Ralph Fiennes", role: "Lord Voldemort" },
        { actor: "Brendan Gleeson", role: "Alastor 'Ojo Loco' Moody" },
        { actor: "Stanislav Ianevski", role: "Viktor Krum" },
        { actor: "Clémence Poésy", role: "Fleur Delacour" }
      ],
      creatures: ["Dragón Colacuerno Húngaro", "Gente del Agua (Sirenas y Tritones)", "Grindylows", "Escarbatos explosivos"],
      iconicQuote: "Recuerden a Cedric Diggory. Recuerden a un chico bueno, leal y valiente.",
      facts: [
        "Fue la primera película en presentar a Ralph Fiennes como el rostro físico renacido de Lord Voldemort, con prótesis ultrafinas y su nariz eliminada digitalmente cuadro por cuadro.",
        "Robert Pattinson obtuvo el papel de Cedric Diggory antes de saltar a la fama mundial con 'Crepúsculo'.",
        "Daniel Radcliffe pasó más de 41 horas sumergido bajo el agua durante las semanas de rodaje de la Segunda Prueba en el tanque acuático de Leavesden, sufriendo incluso dos infecciones de oído.",
        "La famosa banda de rock del Baile de Navidad ('Las Brujas de Macbeth') estuvo compuesta por Jarvis Cocker (Pulp) y Jonny Greenwood y Phil Selway (Radiohead)."
      ],
      curiositiesCount: 4,
      boxOffice: "$896 millones de dólares",
      soundtrackTheme: "Harry in Winter & The Dark Lord Ascending"
    },
    {
      id: "hp-5",
      title: "Harry Potter y la Orden del Fénix",
      originalTitle: "Harry Potter and the Order of the Phoenix",
      saga: "harry-potter",
      timelineYear: "1995 - 1996",
      releaseYear: 2007,
      duration: "138 min",
      director: "David Yates",
      screenplay: "Michael Goldenberg",
      posterBg: "linear-gradient(135deg, #2b112c 0%, #110512 100%)",
      badgeColor: "#c2185b",
      tagline: "La rebelión comienza.",
      synopsis: "El Ministerio de Magia niega tercamente el regreso de Voldemort e inicia una feroz campaña de desprestigio contra Harry y Dumbledore. La tiránica burócrata Dolores Umbridge es nombrada Suma Inquisidora de Hogwarts, prohibiendo la enseñanza práctica de magia defensiva. En respuesta, Harry entrena clandestinamente a un grupo de estudiantes valientes llamado 'El Ejército de Dumbledore', culminando en una épica batalla en el Departamento de Misterios.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Imelda Staunton", role: "Dolores Umbridge" },
        { actor: "Helena Bonham Carter", role: "Bellatrix Lestrange" },
        { actor: "Gary Oldman", role: "Sirius Black" },
        { actor: "Evanna Lynch", role: "Luna Lovegood" },
        { actor: "Ralph Fiennes", role: "Lord Voldemort" }
      ],
      creatures: ["Thestrals (Testrals)", "Grawp (el gigante)", "Centauros rebeldes"],
      iconicQuote: "Tú eres el débil. Nunca conocerás el amor o la amistad, y siento lástima por ti.",
      facts: [
        "El libro es el más extenso de toda la saga literaria (casi 900 páginas), pero la película es la segunda más corta de todas las de Harry Potter con solo 138 minutos.",
        "Evanna Lynch fue elegida entre más de 15,000 aspirantes para interpretar a Luna Lovegood; ella misma diseñó y fabricó los aretes de rábano que usa su personaje.",
        "El duelo final de brujos entre Albus Dumbledore y Voldemort en el atrio del Ministerio requirió miles de fragmentos de baldosas de vidrio simuladas digitalmente.",
        "Imelda Staunton realizó una interpretación de Dolores Umbridge tan deliciosamente odiosa que Stephen King la calificó como 'la villana más convincente desde Hannibal Lecter'."
      ],
      curiositiesCount: 4,
      boxOffice: "$942 millones de dólares",
      soundtrackTheme: "Professor Umbridge Theme & Flight of the Order"
    },
    {
      id: "hp-6",
      title: "Harry Potter y el Misterio del Príncipe",
      originalTitle: "Harry Potter and the Half-Blood Prince",
      saga: "harry-potter",
      timelineYear: "1996 - 1997",
      releaseYear: 2009,
      duration: "153 min",
      director: "David Yates",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #1b3228 0%, #081510 100%)",
      badgeColor: "#52b788",
      tagline: "Para comprender el futuro, debes viajar al pasado.",
      synopsis: "Voldemort estrecha su control sobre el mundo mágico y muggle mientras Draco Malfoy recibe una misión letal. En Hogwarts, Harry encuentra un misterioso libro de Pociones anotado por el enigmático 'Príncipe Mestizo', que le otorga un éxito brillante y hechizos peligrosos. A través del Pensadero, Dumbledore prepara a Harry revelándole los recuerdos más oscuros de la infancia de Tom Riddle y la temible existencia de los Horrocruxes.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Jim Broadbent", role: "Horace Slughorn" },
        { actor: "Alan Rickman", role: "Severus Snape" },
        { actor: "Tom Felton", role: "Draco Malfoy" },
        { actor: "Michael Gambon", role: "Albus Dumbledore" },
        { actor: "Hero Fiennes Tiffin", role: "Tom Riddle (11 años)" }
      ],
      creatures: ["Inferi (cadáveres reanimados del lago)", "Fénix"],
      iconicQuote: "¿Cómo te atreves a usar mis propios hechizos contra mí, Potter? ¡Sí, yo soy el Príncipe Mestizo!",
      facts: [
        "El niño de 11 años que interpreta al joven Tom Riddle en el orfanato es Hero Fiennes Tiffin, sobrino biológico de Ralph Fiennes (Voldemort).",
        "El director de fotografía Bruno Delbonnel fue nominado al Premio Óscar a Mejor Fotografía por la estética sombría, sepia y pictórica de la película.",
        "Se filmó la devastación inicial del Puente del Milenio de Londres derribado por Mortífagos, aunque anacrónicamente el puente se inauguró en el año 2000 y la historia transcurre en 1996.",
        "Durante la filmación de los efectos de la poción Amortentia y Felix Felicis, se utilizó una iluminación suave y desenfoques ópticos para reflejar la embriaguez de la buena fortuna."
      ],
      curiositiesCount: 4,
      boxOffice: "$934 millones de dólares",
      soundtrackTheme: "Dumbledore's Farewell (Nicholas Hooper)"
    },
    {
      id: "hp-7",
      title: "Harry Potter y las Reliquias de la Muerte - Parte 1",
      originalTitle: "Harry Potter and the Deathly Hallows: Part 1",
      saga: "harry-potter",
      timelineYear: "1997 - 1998",
      releaseYear: 2010,
      duration: "146 min",
      director: "David Yates",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #24292e 0%, #0d1117 100%)",
      badgeColor: "#6c757d",
      tagline: "El fin comienza.",
      synopsis: "Sin la protección de Dumbledore y con el Ministerio tomado por Mortífagos, Harry, Ron y Hermione renuncian a su último año en Hogwarts para emprender una peligrosa cacería itinerante de los Horrocruxes restantes. Aislados, perseguidos y con su amistad puesta a prueba por la influencia corruptora del Guardapelo de Slytherin, descubren la milenaria leyenda de las tres Reliquias de la Muerte: la Varita de Saúco, la Piedra de la Resurrección y la Capa de Invisibilidad.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Rupert Grint", role: "Ron Weasley" },
        { actor: "Emma Watson", role: "Hermione Granger" },
        { actor: "Helena Bonham Carter", role: "Bellatrix Lestrange" },
        { actor: "Rhys Ifans", role: "Xenophilius Lovegood" },
        { actor: "Bill Nighy", role: "Rufus Scrimgeour" }
      ],
      creatures: ["Dobby", "Kreacher", "Nagini"],
      iconicQuote: "Qué hermoso lugar para estar con amigos... Dobby está feliz de estar con su amigo, Harry Potter.",
      facts: [
        "El doble de acción de Daniel Radcliffe, David Holmes, sufrió un trágico accidente durante un ensayo de explosión en Leavesden que lo dejó paralizado del pecho hacia abajo. Radcliffe y el equipo lo han apoyado incondicionalmente desde entonces.",
        "La secuencia animada que narra 'La fábula de los tres hermanos' fue diseñada por Ben Hibon e inspirada en el teatro de sombras asiático y el expresionismo, aclamada unánimemente por la crítica.",
        "La conmovedora escena improvisada del baile entre Harry y Hermione en la tienda de campaña con la canción 'O Children' de Nick Cave no existía en los libros, fue creada para retratar su profunda intimidad platónica.",
        "La muerte de Dobby en la playa de Freshwater West en Gales se convirtió en un lugar de peregrinación real para miles de fanáticos."
      ],
      curiositiesCount: 4,
      boxOffice: "$977 millones de dólares",
      soundtrackTheme: "The Tale of the Three Brothers & Obliviate"
    },
    {
      id: "hp-8",
      title: "Harry Potter y las Reliquias de la Muerte - Parte 2",
      originalTitle: "Harry Potter and the Deathly Hallows: Part 2",
      saga: "harry-potter",
      timelineYear: "1998 (Batalla de Hogwarts)",
      releaseYear: 2011,
      duration: "130 min",
      director: "David Yates",
      screenplay: "Steve Kloves",
      posterBg: "linear-gradient(135deg, #400d12 0%, #150204 100%)",
      badgeColor: "#ff4d6d",
      tagline: "Todo termina aquí.",
      synopsis: "Tras irrumpir en el banco Gringotts y escapar sobre un dragón ciego, Harry, Ron y Hermione regresan a Hogwarts para destruir los últimos Horrocruxes. Mientras el ejército tenebroso de Voldemort asedia el castillo en una colosal batalla mágica, se revelan los secretos más desgarradores sobre el sacrificio y lealtad eterna del Profesor Severus Snape, obligando a Harry a aceptar su destino final en el Bosque Prohibido.",
      mainCast: [
        { actor: "Daniel Radcliffe", role: "Harry Potter" },
        { actor: "Rupert Grint", role: "Ron Weasley" },
        { actor: "Emma Watson", role: "Hermione Granger" },
        { actor: "Ralph Fiennes", role: "Lord Voldemort" },
        { actor: "Alan Rickman", role: "Severus Snape" },
        { actor: "Maggie Smith", role: "Minerva McGonagall" }
      ],
      creatures: ["Dragón Ironbelly Ucraniano", "Gigantes", "Nagini", "Arañas acromántulas"],
      iconicQuote: "—¿Después de todo este tiempo? —Siempre.",
      facts: [
        "Es la película más taquillera de toda la franquicia y una de las más taquilleras de la historia del cine mundial, superando los $1.342 millones de dólares.",
        "La destrucción de Hogwarts necesitó una maqueta a escala 1:24 meticulosamente construida y combinada con simulaciones físicas de destrucción digital para miles de ladrillos y torres.",
        "Durante el rodaje de las 8 películas, Daniel Radcliffe utilizó aproximadamente 160 pares de gafas y rompió más de 80 varitas mágicas porque solía tocarlas como baquetas de batería.",
        "El epílogo '19 años después' en el andén 9¾ tuvo que ser filmado dos veces, ya que el maquillaje inicial para envejecer a los actores jóvenes parecía excesivo y poco natural."
      ],
      curiositiesCount: 4,
      boxOffice: "$1.342 millones de dólares",
      soundtrackTheme: "Lily's Theme & Statues (Alexandre Desplat)"
    }
  ],

  // Datos interesantes generales / trivia profunda
  generalTrivia: [
    {
      category: "Secretos de Rodaje",
      icon: "🎬",
      title: "La carta que nunca se abrió",
      fact: "Daniel Radcliffe rompió más de 80 varitas mágicas durante los 10 años de filmación porque las usaba como baquetas de batería entre tomas cuando estaba aburrido."
    },
    {
      category: "Diferencias con los Libros",
      icon: "📖",
      title: "La calma de Dumbledore",
      fact: "En el libro de 'El Cáliz de Fuego', Dumbledore le pregunta a Harry 'con voz tranquila y calmada' si puso su nombre en el Cáliz. En la película, Michael Gambon se abalanza furioso sobre Harry gritando y empujándolo contra los trofeos, creando uno de los memes más icónicos de internet ('Dumbledore asked calmly')."
    },
    {
      category: "Secretos de Rodaje",
      icon: "🐍",
      title: "El secreto que solo Alan Rickman sabía",
      fact: "J.K. Rowling le reveló a Alan Rickman el significado detrás de la palabra 'Always' y su amor secreto por Lily Potter mucho antes de escribir el libro 7. Cuando los directores le pedían que actuara de cierta manera, Rickman respondía: 'No puedo hacer eso, yo sé algo que ustedes no'."
    },
    {
      category: "Curiosidades Mágicas",
      icon: "✨",
      title: "El verdadero origen de los Dementores",
      fact: "J.K. Rowling creó a los Dementores como una metáfora física de la severa depresión clínica que sufrió tras la muerte de su madre y encontrarse como madre soltera en bancarrota."
    },
    {
      category: "Diferencias con los Libros",
      icon: "⚡",
      title: "Los ojos de Harry y Lily",
      fact: "En las novelas se enfatiza cientos de veces que Harry tiene 'los ojos verdes de su madre'. En el cine, Daniel Radcliffe era alérgico a los lentes de contacto verdes (le provocaban hinchazón), por lo que mantuvieron sus ojos azules naturales."
    },
    {
      category: "Secretos de Rodaje",
      icon: "🏰",
      title: "El banquete real del Gran Comedor",
      fact: "En la primera película, la comida colocada en las mesas del Gran Comedor era 100% real. Sin embargo, bajo el intenso calor de los focos de filmación, la carne y los postres se descomponían rápidamente produciendo un olor insoportable tras varios días, por lo que a partir de la segunda película se usaron moldes de resina y resinas pintadas."
    },
    {
      category: "Animales Fantásticos",
      icon: "🧳",
      title: "El origen de Newt Scamander en Harry Potter",
      fact: "El nombre de Newt Scamander aparece en el Mapa del Merodeador en la película 'Harry Potter y el Prisionero de Azkaban' caminando por uno de los pasillos de Hogwarts, confirmando que seguía vivo y visitando el colegio en 1993."
    },
    {
      category: "Curiosidades Mágicas",
      icon: "🦉",
      title: "El ejército de lechuzas reales",
      fact: "Hedwig y las lechuzas mensajeras de Hogwarts fueron interpretadas por lechuzas reales vivas entrenadas durante meses para cargar cartas con el pico y aterrizar en los hombros de los niños."
    }
  ],

  // Preguntas para el Sombrero Seleccionador
  sortingQuestions: [
    {
      question: "Frente a un desafío inesperado en el Bosque Prohibido, ¿cuál es tu primer instinto?",
      answers: [
        { text: "Dar un paso al frente con mi varita lista para proteger a mis compañeros sin vacilar.", house: "Gryffindor", points: 3 },
        { text: "Analizar el entorno, identificar a la criatura y diseñar una estrategia lógica de retirada.", house: "Ravenclaw", points: 3 },
        { text: "Calcular cómo convertir este peligro en una ventaja o poder personal para el futuro.", house: "Slytherin", points: 3 },
        { text: "Asegurarme de que nadie del grupo quede rezagado y buscar una solución pacífica.", house: "Hufflepuff", points: 3 }
      ]
    },
    {
      question: "¿Qué cualidad valoras por encima de todo en ti mismo y en los demás?",
      answers: [
        { text: "El coraje inquebrantable y la nobleza de espíritu.", house: "Gryffindor", points: 3 },
        { text: "La inteligencia, la curiosidad insaciable y la sabiduría.", house: "Ravenclaw", points: 3 },
        { text: "La ambición, la astucia y la determinación inagotable.", house: "Slytherin", points: 3 },
        { text: "La lealtad, la honestidad, el trabajo duro y la justicia.", house: "Hufflepuff", points: 3 }
      ]
    },
    {
      question: "Si pudieras inventar una poción milagrosa, ¿qué efecto tendría?",
      answers: [
        { text: "Una que otorgue valentía instantánea para vencer cualquier miedo terrenal.", house: "Gryffindor", points: 3 },
        { text: "Una que amplifique la comprensión de los misterios más profundos del universo.", house: "Ravenclaw", points: 3 },
        { text: "Una que garantice influencia, poder y respeto sobre los que te rodean.", house: "Slytherin", points: 3 },
        { text: "Una que cure cualquier dolor y traiga paz duradera a las personas que amas.", house: "Hufflepuff", points: 3 }
      ]
    },
    {
      question: "Elige un instrumento mágico legendario para llevar a una misión crucial:",
      answers: [
        { text: "La legendaria Espada de Godric Gryffindor forjada por duendes.", house: "Gryffindor", points: 3 },
        { text: "La Diadema de Rowena Ravenclaw que otorga ingenio sin límites.", house: "Ravenclaw", points: 3 },
        { text: "La Varita de Saúco, la varita más poderosa jamás fabricada.", house: "Slytherin", points: 3 },
        { text: "La Copa de Helga Hufflepuff, que nunca se vacía y reconforta a los cansados.", house: "Hufflepuff", points: 3 }
      ]
    },
    {
      question: "¿Cómo te gustaría ser recordado por las futuras generaciones en la historia mágica?",
      answers: [
        { text: "Como un héroe audaz que luchó por lo correcto sin importar las consecuencias.", house: "Gryffindor", points: 3 },
        { text: "Como un sabio brillante cuyas ideas y descubrimientos cambiaron la magia.", house: "Ravenclaw", points: 3 },
        { text: "Como un líder formidable que forjó su propio imperio y destino de grandeza.", house: "Slytherin", points: 3 },
        { text: "Como un amigo fiel y desinteresado en quien todos siempre pudieron confiar.", house: "Hufflepuff", points: 3 }
      ]
    }
  ],

  // Resultados de casas de Hogwarts
  housesInfo: {
    Gryffindor: {
      name: "Gryffindor",
      animal: "León",
      colors: "Escarlata y Dorado",
      element: "Fuego",
      founder: "Godric Gryffindor",
      ghost: "Nick Casi Decapitado",
      traits: "Coraje, valentía, audacia y caballerosidad",
      description: "¡Perteneces a la casa donde habitan los valientes de corazón! Su osadía, temple y nobleza ponen a Gryffindor por encima del resto.",
      commonRoom: "Torre de Gryffindor, tras el retrato de la Dama Gorda.",
      bgGradient: "linear-gradient(135deg, #740001, #ae0001, #eeba30)",
      accentColor: "#d3a625"
    },
    Slytherin: {
      name: "Slytherin",
      animal: "Serpiente",
      colors: "Verde Esmeralda y Plata",
      element: "Agua",
      founder: "Salazar Slytherin",
      ghost: "El Barón Sanguinario",
      traits: "Ambición, astucia, determinación y liderazgo",
      description: "¡Perteneces a Slytherin, la cuna de líderes extraordinarios! Aquí harás verdaderos amigos que usarán cualquier medio para alcanzar sus grandes fines.",
      commonRoom: "Mazmorras del castillo, bajo las aguas del Gran Lago.",
      bgGradient: "linear-gradient(135deg, #1a472a, #2a623d, #aaaaaa)",
      accentColor: "#5dd39e"
    },
    Ravenclaw: {
      name: "Ravenclaw",
      animal: "Águila",
      colors: "Azul y Bronce",
      element: "Aire",
      founder: "Rowena Ravenclaw",
      ghost: "La Dama Gris (Helena Ravenclaw)",
      traits: "Inteligencia, sabiduría, ingenio y originalidad",
      description: "¡Perteneces a Ravenclaw! Si tienes una mente dispuesta, donde los de ingenio y erudición siempre encontrarán a sus semejantes.",
      commonRoom: "Torre oeste de Ravenclaw, con una aldaba de bronce que plantea acertijos.",
      bgGradient: "linear-gradient(135deg, #0e1a40, #222f5b, #946b2d)",
      accentColor: "#4cc9f0"
    },
    Hufflepuff: {
      name: "Hufflepuff",
      animal: "Tejón",
      colors: "Amarillo Canario y Negro",
      element: "Tierra",
      founder: "Helga Hufflepuff",
      ghost: "El Fraile Gordo",
      traits: "Lealtad, honestidad, paciencia y laboriosidad",
      description: "¡Perteneces a Hufflepuff! La casa más noble, justa y leal de Hogwarts, donde el trabajo perseverante y la amistad sincera son las mayores virtudes.",
      commonRoom: "Sótano junto a las cocinas de Hogwarts, rodeado de plantas y luz cálida.",
      bgGradient: "linear-gradient(135deg, #ecb939, #f0c75e, #372e29)",
      accentColor: "#ffd166"
    }
  },

  // Trivia / Duelo Mágico de Hechizos
  duelSpells: [
    {
      spell: "Expelliarmus",
      category: "Duelo",
      question: "¿Cuál es el efecto principal del encantamiento 'Expelliarmus'?",
      options: ["Desarmar al oponente volando su varita", "Crear una explosión de fuego", "Congelar al enemigo", "Hacer desaparecer los recuerdos"],
      correct: 0,
      lore: "Es el hechizo característico de Harry Potter, utilizado tanto para vencer a duelos menores como para sellar el destino final de Voldemort."
    },
    {
      spell: "Expecto Patronum",
      category: "Defensa",
      question: "¿Qué se requiere indispensablemente para conjurar un Patronus corpóreo?",
      options: ["Pronunciar palabras en pársel", "Concentrarse en un recuerdo intensamente feliz y poderoso", "Haber visto morir a alguien", "Tener una varita de sauce"],
      correct: 1,
      lore: "La palabra en latín traduce aproximadamente 'Yo espero un guardián'. Repele Dementores y Lethifolds."
    },
    {
      spell: "Avada Kedavra",
      category: "Maldición Imperdonable",
      question: "¿Cuál es el color del destello de luz que produce la maldición asesina Avada Kedavra?",
      options: ["Rojo carmesí", "Azul eléctrico", "Verde brillante y cegador", "Dorado incandescente"],
      correct: 2,
      lore: "Produce una muerte instantánea sin dejar marca biológica en el cuerpo de la víctima."
    },
    {
      spell: "Alohomora",
      category: "Encantamiento",
      question: "¿Para qué sirve el encantamiento 'Alohomora'?",
      options: ["Desbloquear y abrir puertas y cerraduras cerradas", "Generar luz en la punta de la varita", "Levitar objetos pesados", "Hacer crecer plantas mágicas"],
      correct: 0,
      lore: "Hermione lo utiliza en primer año para acceder al pasillo prohibido del tercer piso donde aguardaba Fluffy."
    },
    {
      spell: "Sectumsempra",
      category: "Magia Oscura",
      question: "¿Quién creó originalmente la maldición cortante 'Sectumsempra' para sus enemigos?",
      options: ["Salazar Slytherin", "Severus Snape (El Príncipe Mestizo)", "Lord Voldemort", "Gellert Grindelwald"],
      correct: 1,
      lore: "Snape anotó 'Para enemigos' en su libro de Pociones de sexto curso cuando era estudiante en Hogwarts."
    },
    {
      spell: "Riddikulus",
      category: "Defensa",
      question: "¿Cómo se derrota a un Boggart con el encantamiento 'Riddikulus'?",
      options: ["Golpeándolo con una explosión mágica", "Obligándolo a tomar una forma cómica que cause risa", "Encerrándolo en una botella de vidrio", "Pronunciando su verdadero nombre"],
      correct: 1,
      lore: "La risa genuina es la fuerza mágica que destruye la naturaleza amenazante de un Boggart."
    },
    {
      spell: "Obliviate",
      category: "Encantamiento Mental",
      question: "¿Qué efecto produce el hechizo 'Obliviate'?",
      options: ["Borrar o alterar recuerdos específicos en la mente de una persona", "Leer los pensamientos del oponente", "Provocar pesadillas nocturnas", "Obligar a decir la verdad"],
      correct: 0,
      lore: "Utilizado por el Ministerio con los Muggles que presencian magia, y por Hermione para proteger a sus padres."
    },
    {
      spell: "Wingardium Leviosa",
      category: "Encantamiento Básico",
      question: "Según Hermione Granger, ¿cuál es el movimiento de varita correcto para 'Wingardium Leviosa'?",
      options: ["Un golpe seco hacia abajo", "Girar y agitar (Swish and flick)", "Trazar un círculo completo", "Apuntar al pecho"],
      correct: 1,
      lore: "¡Es Leviooosa, no Leviosáaa!"
    }
  ],

  // Descubre tu Patronus
  patronusOptions: [
    {
      name: "Ciervo Plateado (Stag)",
      meaning: "Nobleza, liderazgo protector y amor incondicional",
      description: "Igual que el de Harry y su padre James. Representa a alguien dispuesto a sacrificarse por el bienestar de los inocentes.",
      element: "Protector Celestial",
      symbol: "🦌"
    },
    {
      name: "Nutria Astuta (Otter)",
      meaning: "Curiosidad, brillo intelectual y espíritu libre",
      description: "El mismo Patronus de Hermione Granger. Criatura juguetona pero extraordinariamente inteligente y adaptable ante las dificultades.",
      element: "Agua Serena",
      symbol: "🦦"
    },
    {
      name: "Fénix Radiante (Phoenix)",
      meaning: "Renacimiento, sabiduría eterna e indomable pureza",
      description: "El Patronus de Albus Dumbledore. Un patrón sumamente raro que surge de almas capaces de renacer de las cenizas más oscuras.",
      element: "Fuego Sagrado",
      symbol: "🦅"
    },
    {
      name: "Lobo Solitario (Wolf)",
      meaning: "Fidelidad feroz, resiliencia y alma protectora",
      description: "Como el de Remus Lupin y Nymphadora Tonks. Simboliza una lealtad inquebrantable a su manada y fuerza en la soledad.",
      element: "Luna y Bosque",
      symbol: "🐺"
    },
    {
      name: "Liebre Veloz (Hare)",
      meaning: "Intuición profunda, ligereza y corazón inocente",
      description: "El Patronus de Luna Lovegood. Esquiva la oscuridad con alegría, autenticidad y una fe inquebrantable en lo extraordinario.",
      element: "Viento Mágico",
      symbol: "🐇"
    },
    {
      name: "Dragón Ancestral (Dragon)",
      meaning: "Poder volcánico, ferocidad y temperamento noble",
      description: "Uno de los Patronus más imponentes y respetados. Su portador es apasionado, imparable y de convicciones de hierro.",
      element: "Tormenta de Dragón",
      symbol: "🐉"
    }
  ],

  // Laboratorio de Pociones
  potionsRecipes: [
    {
      id: "felix-felicis",
      name: "Felix Felicis (Suerte Líquida)",
      color: "#ffd700",
      description: "Hace que quien la bebe tenga éxito absoluto en todo lo que intente durante un tiempo.",
      difficulty: "Avanzado (N.E.W.T.)",
      steps: [
        { instruction: "Añadir gotas de rocío de Luna al caldero tibio", ingredient: "rocio-luna" },
        { instruction: "Remover 3 veces en sentido horario a fuego medio", action: "remover-horario" },
        { instruction: "Incorporar un huevo de Ashwinder congelado", ingredient: "huevo-ashwinder" },
        { instruction: "Remover 1 vez en sentido antihorario vigorosamente", action: "remover-antihorario" }
      ]
    },
    {
      id: "polijugos",
      name: "Poción Multijugos (Polyjuice Potion)",
      color: "#4d7c0f",
      description: "Permite al bebedor transformarse físicamente en la apariencia exacta de otra persona.",
      difficulty: "Complejo (1 mes de preparación)",
      steps: [
        { instruction: "Triturar crisopos que hayan fermentado 21 días", ingredient: "crisopos" },
        { instruction: "Añadir piel rallada de serpiente Boomslang", ingredient: "piel-serpiente" },
        { instruction: "Remover enérgicamente a fuego lento", action: "remover-horario" },
        { instruction: "Añadir la muestra física de la persona objetivo (un cabello)", ingredient: "cabello" }
      ]
    },
    {
      id: "amortentia",
      name: "Amortentia (El Filtro de Amor más poderoso)",
      color: "#f43f5e",
      description: "Causa una obsesión poderosa y huele diferente para cada quien según lo que le atrae.",
      difficulty: "Peligroso y Prohibido",
      steps: [
        { instruction: "Hervir pétalos de rosa nocturna hasta evaporar el vapor rosado", ingredient: "petalos-rosa" },
        { instruction: "Añadir esencia de perla pulverizada", ingredient: "polvo-perla" },
        { instruction: "Remover formando una espiral constante", action: "remover-horario" },
        { instruction: "Dejar reposar hasta que emita un brillo nacarado", action: "reposar" }
      ]
    }
  ]
};
