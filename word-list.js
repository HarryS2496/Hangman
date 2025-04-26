const words = [
  {
    word: "aesthete",
    hint: "A person who appreciates beauty in art or nature.",
  },
  {
    word: "alpenglow",
    hint: "The reddish glow seen on mountains just before sunrise or after sunset.",
  },
  {
    word: "apogee",
    hint: "The farthest or highest point in something's development.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "bastion",
    hint: "A stronghold or fortification; a place of protection.",
  },
  {
    word: "bibliophile",
    hint: "A person who loves or collects books.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "cacophony",
    hint: "A harsh, discordant mixture of sounds.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "calligraphy",
    hint: "Decorative handwriting or handwritten lettering.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "crepuscular",
    hint: "Relating to twilight.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "diaphanous",
    hint: "Light, delicate, and translucent.",
  },
  {
    word: "ebullient",
    hint: "Cheerful and full of energy.",
  },
  {
    word: "effervescent",
    hint: "Bubbling with enthusiasm or liveliness.",
  },
  {
    word: "efflorescence",
    hint: "The process of flowering or blooming.",
  },
  {
    word: "elixir",
    hint: "A magical or medicinal potion believed to cure all ailments.",
  },
  {
    word: "ephemeral",
    hint: "Lasting for a very short time.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "gossamer",
    hint: "Light, delicate, and airy.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "halcyon",
    hint: "Calm, peaceful, and happy.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "hiraeth",
    hint: "A deep yearning for a home you can’t return to or that never was.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "ineffable",
    hint: "Too great or beautiful to be expressed in words.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "lagniappe",
    hint: "A little bonus or extra gift given by a seller to a customer.",
  },
  {
    word: "limerence",
    hint: "The state of being infatuated or obsessed with another person.",
  },
  {
    word: "luminous",
    hint: "Emitting or reflecting light, especially in the dark.",
  },
  {
    word: "labyrinth",
    hint: "A complex and confusing network of paths or passages.",
  },
  {
    word: "meraki",
    hint: "Doing something with soul, creativity, or love.",
  },
  {
    word: "mellifluous",
    hint: "Pleasant to hear; sweet-sounding.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "nymph",
    hint: "A mythological spirit of nature imagined as a beautiful maiden.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "panache",
    hint: "Flamboyant confidence of style or manner.",
  },
  {
    word: "panacea",
    hint: "A solution or remedy for all difficulties or diseases.",
  },
  {
    word: "palimpsest",
    hint: "Something reused or altered but still bearing visible traces of its earlier form.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "petrichor",
    hint: "The pleasant smell that accompanies the first rain after a dry spell.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "pique",
    hint: "A feeling of irritation or resentment from a slight.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "quadrisulcate",
    hint: "Having 4 hooves.",
  },
  {
    word: "quantum",
    hint: "A discrete quantity of energy proportional in magnitude to the frequency of the radiation it represents.",
  },
  {
    word: "quintessential",
    hint: "Representing the most perfect example of something.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "rhapsody",
    hint: "An enthusiastic or ecstatic expression of feeling.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "serendipity",
    hint: "The occurrence of events by chance in a happy way.",
  },
  {
    word: "sonder",
    hint: "The realization that each passerby has a life as vivid and complex as your own.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "susurrus",
    hint: "A whispering or rustling sound.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "tintinnabulation",
    hint: "The ringing or tinkling of bells.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "vector",
    hint: "A quantity having direction as well as magnitude, especially as determining the position of one point in space relative to another.",
  },
  {
    word: "vellichor",
    hint: "The strange wistfulness of used bookstores.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "wanderlust",
    hint: "A strong desire to travel and explore the world.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "word",
    hint: "A unit of language that has meaning and can be spoken or written.",
  },
  {
    word: "zephyr",
    hint: "A soft, gentle breeze.",
  },
  {
    word: "zenith",
    hint: "The highest point or peak.",
  }
];
