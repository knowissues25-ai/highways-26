export interface POC {
  name: string;
  phone: string;
}

export interface EventDetail {
  id: number;
  title: string;
  category: string;
  day: number;
  date: string;
  time: string;
  location: string;
  color: string;
  image: string;
  description: string;
  rules: string[];
  prizePool: string;
  regType: 'Free' | 'Standard' | 'Premium';
  regFee?: string;
  teamSize: string;
  pocs: POC[];
  regLink?: string;
  slug: string;
}

export const allEvents: EventDetail[] = [
  {
    "id": 1,
    "title": "Pairfect",
    "slug": "pairfect",
    "category": "Music and Dance",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:00 PM",
    "location": "MPH",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/pairfect1.png",
    "description": "Pairfect is a dance competition performed by a team of two participants. This event focuses on coordination, chemistry, synchronization, and creative expression between partners.\nParticipants may perform in any dance style including Classical, Contemporary, Hip-Hop, Folk, Western, or Fusion. The performance should reflect strong connection, timing, and stage presence as a pair.\nJudging will be based on synchronization, choreography, expressions, creativity, costume, and overall impact.",
    "rules": [
      "Time Limit:\n   Minimum – 2 mins\n   Maximum – 4 mins",
      "Team Requirement:\n   Each team must consist of exactly two participants.",
      "Dance Style:\n   All dance styles are allowed, including classical, contemporary, hip-hop, freestyle, folk, etc.",
      "No Vulgarity:\n   Vulgar movements, gestures, expressions, or inappropriate music are strictly prohibited.\n 5. Costume Guidelines:\n   Costumes must be decent and non-vulgar.\n   Any inappropriate attire will lead to disqualification.",
      "Music Submission:\n   Participants must submit their audio track in advance (in MP3 format).\n   Participants are advised to carry a backup copy.",
      "The judges’ decision will be final."
    ],
    "prizePool": "Rs. 6,000/-",
    "regType": "Premium",
    "regFee": "Rs. 400/-",
    "teamSize": "2 MEMBERS",
    "pocs": [
      {
        "name": "Mridula",
        "phone": "+91  86678 63040"
      },
      {
        "name": "Nivethetha",
        "phone": "+91 88076 60926"
      }
    ],
    "regLink": "https://forms.gle/QwtQB3D19qNgnoDB8"
  },
  {
    "id": 3,
    "title": "Solography",
    "slug": "solography",
    "category": "Music and Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "MPH",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/solography1.png",
    "description": "Solography is an individual dance competition where participants take complete ownership of the stage and showcase their talent through a self-performed routine. This event highlights creativity, technique, expression, musicality, and stage presence.\nParticipants are free to perform in any dance style, including Classical, Contemporary, Hip-Hop, Folk, Western, Fusion, or Freestyle.\nEach performance must be within the specified time limit, and contestants will be judged based on choreography, synchronization with music, expressions, originality, costume, and overall impact.",
    "rules": [
      "Time Limit:\n   Minimum – 1 minute 30 seconds (90 seconds)\n   Maximum – 2 minutes 30 seconds",
      "Dance Style:\n   All dance styles are allowed, including classical, hip-hop, contemporary, freestyle, folk, etc.",
      "No Vulgarity:\n   Movements, gestures, expressions, or music containing vulgar or inappropriate content are strictly prohibited.",
      "Costume Guidelines:\n   Costumes must be decent and non-vulgar.\n   Any inappropriate attire may lead to disqualification.",
      "Music Submission:\n   Participants must submit their audio track in advance (in MP3 format).\n   Participants are advised to carry a backup copy.",
      "The judges’ decision will be final."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Srinithi",
        "phone": "+91 98405 87220"
      },
      {
        "name": "Snigdha",
        "phone": "+91 93840 67567"
      }
    ],
    "regLink": "https://forms.gle/C5s6Hdd9PMi4zABV6"
  },
  {
    "id": 4,
    "title": "Groove Chemistry",
    "slug": "groove-chemistry",
    "category": "Music and Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "MPH",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/groove-chemistry1.png",
    "description": "Groove Chemistry is a two-round dance challenge that tests both recognition of iconic moves and the ability to adapt instantly to changing music.\n\nRound 1 – Hookstep Challenge:-\nPopular songs will be played and participants must quickly perform the correct signature hooksteps. Based on accuracy, timing, and stage presence, the top dancers will advance to the next round.\n\nRound 2 – Adaptune:-\nThe finalists enter an adaptive dance round where the DJ switches songs at short intervals, shifting across genres and moods. Dancers must instantly adjust their style, expressions, and energy to match the new beat.\n\nround 2. \n   Round-2: Participants will be given random songs on the spot. The song played will change every few seconds.   \n3. Participation:\n   Solo participation only.\n\n4. Dance Style:\n   All dance styles are allowed, including classical, hip-hop, contemporary, freestyle, folk, etc.\n5. Judging Criteria:\n   Participants will be judged based on adaptability to the given music and technical execution.\n6. No Vulgarity:\n   Vulgar movements, gestures, expressions, or inappropriate content are strictly prohibited.\n7. Costume Guidelines:\n   Costumes must be decent and non-vulgar.\n   Any inappropriate attire may lead to disqualification.\n\n8.Participants will be judged based on synchronization with music, expressions, originality, costume, and overall stage impact.\n9. The judges’ decision will be final.",
    "rules": [
      "Time Limit:\n   Minimum – 1 minute 30 seconds (90 seconds)\n   Maximum – 3 minutes",
      "Round Format:\n   Round-1: This is a fun-based round where the participants are required to perform the *hookstep* for the songs being played. Only the selected participants will be qualified for round 2. \n   Round-2: Participants will be given random songs on the spot. The song played will change every few seconds.",
      "Participation:\n   Solo participation only.",
      "Dance Style:\n   All dance styles are allowed, including classical, hip-hop, contemporary, freestyle, folk, etc.",
      "Judging Criteria:\n   Participants will be judged based on adaptability to the given music and technical execution.",
      "No Vulgarity:\n   Vulgar movements, gestures, expressions, or inappropriate content are strictly prohibited.",
      "Costume Guidelines:\n   Costumes must be decent and non-vulgar.\n   Any inappropriate attire may lead to disqualification.",
      "Participants will be judged based on synchronization with music, expressions, originality, costume, and overall stage impact.",
      "The judges’ decision will be final."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Kheerthi",
        "phone": "+91 99403 18111"
      },
      {
        "name": "Akshara",
        "phone": "+ 91 91508 03126"
      }
    ],
    "regLink": "https://forms.gle/WWYitmLQ6jTJ6VQR7"
  },
  {
    "id": 5,
    "title": "Overdrive (Battle of Bands)",
    "slug": "overdrive",
    "category": "Music and Dance",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:30 AM",
    "location": "MPH",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/overdrive.jpeg",
    "description": "The stage is set, the amps are cranked, and the spotlight is waiting. This is more than a performance; it's a high-voltage war of melodies and metaphors. We're looking for the tightest rhythm sections, the most blistering solos, and the kind of stage presence that turns a crowd into a movement. Bring your best originals or redefine the classics. Only one band will claim the throne.",
    "rules": [
      "Participants must present a valid college ID card for eligibility.",
      "This is a single-round event; winners will be determined based on this performance.",
      "Each band must consist of 4 to 8 members.",
      "Total stage time is 15 minutes, including setup and sound check.",
      "Bands must provide their own instruments, with the exception of the drum kit.",
      "Performances may feature any genre, language, original compositions, or covers.",
      "Obscene language and inappropriate stage conduct are strictly forbidden.",
      "All decisions rendered by the judges and organizers are final and binding."
    ],
    "prizePool": "Rs. 12,000/-",
    "regType": "Premium",
    "regFee": "Rs. 800/-",
    "teamSize": "4–8 MEMBERS",
    "pocs": [
      {
        "name": "Parkavi V",
        "phone": "+919445717013"
      },
      {
        "name": "Dhanesh",
        "phone": "+91 63694 54641"
      }
    ],
    "regLink": "https://forms.gle/NWPuUMKw7RWEuPZLA"
  },
  {
    "id": 6,
    "title": "Crescendo (Solo Singing)",
    "slug": "crescendo",
    "category": "Music and Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:30 PM",
    "location": "Library Seminar Hall",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/crescendo.jpeg",
    "description": "Stripped back and unplugged, this is where pure talent meets raw emotion. Whether you're a powerhouse of classical Indian ragas or a master of contemporary pop, this event is your canvas. No backup dancers, no distractions—just one voice, one microphone, and the chance to leave the audience breathless.",
    "rules": [
      "\tParticipants must present a valid college ID card for eligibility.",
      "\tThis is a single-round event; winners will be determined based on this solo performance.",
      "\tThe total stage time is limited to 5 minutes, including setup and sound check.",
      "\tThe use of instruments and metronomes is strictly prohibited.",
      "\tKaraoke, backing tracks or tanpura are permitted for accompaniment.",
      "\tPerformances may feature any genre or language, with a preference for original compositions.",
      "\tObscene language and inappropriate stage conduct are strictly forbidden.",
      "\tAll decisions rendered by the judges and organizers are final and binding."
    ],
    "prizePool": "Rs. 6,000/-",
    "regType": "Premium",
    "regFee": "Rs. 200/-",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Kaustubh",
        "phone": "+919380001223"
      },
      {
        "name": "Sakthi Rasagnya",
        "phone": "+91 90006 96900"
      }
    ],
    "regLink": "https://forms.gle/FL76G7981aG2K6rx6"
  },
  {
    "id": 7,
    "title": "Mystic Melodies",
    "slug": "mystic-melodies",
    "category": "Music and Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB314",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/7.jpg",
    "description": "Get ready for a fun-filled event that blends music, movies, and quick thinking! This event is designed to test your listening skills, memory, and ability to identify songs under pressure. From iconic BGMs to tricky mashups, bring your A-game and enjoy the ultimate entertainment challenge!\n\nRound 1: BGM Blast (Guess the Tune) \nParticipants will listen to short background music (BGM) clips from songs or movies. They must quickly identify the correct song name. Speed and accuracy will play a key role in scoring.\n\nRound 2: Movie Mania (Guess the Song from Scene) \nAn image (still) from a song scene in a movie will be displayed. Participants must identify the correct song based on the visual clue.\n\nRound 3: Mix & Match (Audio Mixing Challenge) \nA single audio clip containing a mix of three different songs will be played. Participants must correctly identify all three songs. Partial answers may earn partial points based on rules.",
    "rules": [
      "Participants must present a valid college ID card for eligibility.",
      "This is a multi-round event; winners will be determined based on overall performance.",
      "The event is free of cost for all participants.",
      "Each round will have a specific time limit.",
      "No use of mobile phones or external help is allowed during the event.",
      "Answers must be given within the allotted time.",
      "Certificates of participation will be provided to all participants.",
      "Judges’ and organizers’ decisions are final and binding"
    ],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "2-3 Members",
    "pocs": [
      {
        "name": "Tejaswi S",
        "phone": "+91 6385042111"
      },
      {
        "name": "Vardhini B",
        "phone": "+91 8220139142"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLScuv45JM9mMdJbC48IkFwbBDFRIqede3gdo6j69udNMBff1mA/viewform?usp=dialog"
  },
  {
    "id": 8,
    "title": "Short Film Contest",
    "slug": "short-film-contest",
    "category": "Cinematic and Visual Arts",
    "day": 3,
    "date": "April 11, 2026",
    "time": "1:00 PM",
    "location": "Library Seminar Hall",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/shortfilm-contest.jpg",
    "description": "Lights, camera, action!\n Showcase your creativity and storytelling skills by creating a short film on an innovative theme. Let your ideas come alive on screen and impress the audience with your unique vision.",
    "rules": [],
    "prizePool": "Rs. 10,000/-",
    "regType": "Standard",
    "regFee": "Rs. 150/-",
    "teamSize": "—",
    "pocs": [
      {
        "name": "Sai Krishna",
        "phone": "7397365289"
      }
    ],
    "regLink": "https://forms.gle/pfp8G3CLb1jPLn6Y8"
  },
  {
    "id": 9,
    "title": "CineQuest",
    "slug": "cinequest",
    "category": "Cinematic and Visual Arts",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB521",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/cinequest.jpg",
    "description": "CineQuest is a fast-paced cinematic challenge designed for movie buffs and pop-culture enthusiasts. Participants must decode visual puzzles, identify soundtracks, and guess famous scenes from minimal clues.\nIt tests memory, observation skills, and film knowledge across various genres and regional languages. With a mix of puzzles, music, and acting, CineQuest promises a fun and engaging experience for all participants.\n\nRound 1 – Puzzle Quiz\n Teams will be given a mixed visual puzzle containing clues related to movies. Participants must analyze the puzzle and correctly identify the movie name.\n\nRound 2 – BGM / Dialogue Guess\n A background music track or a famous movie dialogue will be played through the speakers. Teams must quickly recognize and guess the correct movie.\n\nRound 3 – Konjam Nadinga Boss\n A short movie scene will be played on the screen. One participant from each team must recreate the scene by acting it out as accurately as possible.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "—",
    "pocs": [
      {
        "name": "Vijayasarathy B",
        "phone": "8925310269"
      },
      {
        "name": "Sanchitha",
        "phone": "9787876126"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/1D8pX9R6HbiV7SPpamy6VZvvC5aTYkQBF_kOJXntMhAY/edit?usp=sharing_eil_se_dm&ts=69b56e43"
  },
  {
    "id": 10,
    "title": "Movie Screening",
    "slug": "movie-screening",
    "category": "Cinematic and Visual Arts",
    "day": 1,
    "date": "April 09, 10, 11, 2026",
    "time": "9:00 AM",
    "location": "Library Seminar Hall",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/silver-screen1.png",
    "description": "Lights, camera, enjoy! Experience the magic of cinema on the big screen as we bring together a collection of captivating short films. Sit back, relax, and immerse yourself in powerful storytelling, creative visuals, and inspiring narratives crafted by talented filmmakers.\nJoin us for an unforgettable screening session where stories come alive, emotions unfold, and every frame sparks imagination.\nNote: Entry ticket is applicable.",
    "rules": [],
    "prizePool": "",
    "regType": "Standard",
    "regFee": "Rs. 40/-",
    "teamSize": "",
    "pocs": [
      {
        "name": "Jayasuriya",
        "phone": "8778994503"
      },
      {
        "name": "Sanjay Joshua",
        "phone": "7305764336"
      },
      {
        "name": "Shamritha",
        "phone": "98840 36973"
      }
    ],
    "regLink": ""
  },
  {
    "id": 11,
    "title": "Meme Wars",
    "slug": "meme-wars",
    "category": "Cinematic and Visual Arts",
    "day": 3,
    "date": "April 11, 2026",
    "time": "1:00 PM",
    "location": "Library Seminar Hall",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/meme-wars.jpg",
    "description": "Cinema isn’t just watched—it’s felt, quoted, and now… memed. Step into the world where iconic scenes meet sharp wit and creativity. We bring you a Movie-Centric Meme Contest, where your love for films transforms into humor that hits harder than a plot twist. From timeless classics to trending blockbusters, every frame is your playground. Whether it’s a dramatic dialogue turned sarcastic, a villain made relatable, or a scene reimagined for everyday college chaos—this is your stage to make people laugh, think, and say, “That’s so true!”",
    "rules": [
      "Strictly no plagiarism — your meme must be original No vulgar, offensive, or inappropriate content",
      "No AI-generated memes allowed",
      "Stick to the movie-centric theme",
      "Avoid content that targets or insults individuals, communities, or sensitive topics • Use clear, readable text in your memes",
      "Submission must be in image format (JPEG/PNG)",
      "Judges decision will be final"
    ],
    "prizePool": "Access to one design application",
    "regType": "Free",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Reshma S",
        "phone": "9894674069"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLSfJdcNTbKMZgUcJG8oGEb2h1ekYFYdfQ_b_JfON9t4s9iwZ9A/viewform?usp=sharing&ouid=107483987186239613638"
  },
  {
    "id": 12,
    "title": "Who’s THE SUS!!!",
    "slug": "whos-the-sus",
    "category": "Quizzes and Entertainment",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB515 & CB516",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/whos-the-sus.webp",
    "description": "A crime has happened. Clues are scattered. Witnesses tell different stories. Now the real question is... Will your team uncover the truth... or will the mystery remain unsolved?\nStep into this interactive crime investigation challenge, analyze the clues, question the evidence, and connect the dots before time runs out. Think you can crack the case? Step in and prove it.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "5 MEMBERS",
    "pocs": [
      {
        "name": "Sriram A",
        "phone": "+91 89409 63521"
      }
    ],
    "regLink": "https://forms.gle/gcC8n8Zz3DT5RdJYA"
  },
  {
    "id": 13,
    "title": "Money Moves: Life In Your Hand",
    "slug": "money-moves-life-in-your-hand",
    "category": "Quizzes and Entertainment",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "CB515 & CB516",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/money-moves.jpg",
    "description": "You get a salary. You face rent, EMIs, and daily expenses. Now the question is… Can you survive the month without going broke?\nJoin our interactive financial simulation and experience the real world of money management.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "5 MEMBERS",
    "pocs": [
      {
        "name": "Rasiga P",
        "phone": "95002 40988"
      }
    ],
    "regLink": "https://forms.gle/VALhDMjansm9eaVy8"
  },
  {
    "id": 14,
    "title": "No Mercy: FF Arena (Free Fire)",
    "slug": "no-mercy-ff-arena",
    "category": "Innovation, Tech and Gaming",
    "day": 2,
    "date": "April 10, 2026",
    "time": "12:00 PM",
    "location": "CB527 & CB528",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/No-Mercy-FF-Arena.jpg",
    "description": "Dive into the action at No Mercy: FF Arena, an intense Free Fire esports clash packed with thrill, strategy, and big cash rewards!",
    "rules": [],
    "prizePool": "Rs. 4,500/-",
    "regType": "Premium",
    "regFee": "Rs. 200/-",
    "teamSize": "4MEMBERS",
    "pocs": [
      {
        "name": "Thamizh",
        "phone": "93425 97576"
      }
    ],
    "regLink": "https://forms.gle/ZrVxwZ2zz2GghE67A"
  },
  {
    "id": 15,
    "title": "Scavenger Hunt",
    "slug": "scavenger-hunt",
    "category": "Quizzes and Entertainment",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "CB501, CB507 & CB508",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/scavenger-hunt.png",
    "description": "The Scavenger Hunt is a three-round competitive event designed to test participants' knowledge, teamwork, speed, observation skills, and logical thinking in a fun and engaging way. The event progresses from entertainment-based challenges to an intense mystery-solving finale, ensuring excitement at every stage.\n\nRound 1 – Fun Quiz Round\n An interactive quiz including movie/song guessing (dialogue, blurred poster, character description), emoji-based questions, RRC awareness questions, fun trivia, and rapid-fire rounds. Top-performing teams qualify for\n\nRound 2.\n\nRound 2 – Color Chit Movie Hunt (Classroom Round)\n 40 chits in 4 colors (Red, Blue, Green, Yellow – 10 each) are hidden in the classroom. 1 chit per color holds the real movie clue; the remaining 9 have fun tasks. Teams must find all 4 real clues and connect them. Special rule: participants must move only by walking on benches. Touching the floor = disqualification.\n\nRound 3 – Crime Scene Connection (Indoor Final Round)\n Organizers narrate a fictional crime scene scenario. Teams must listen carefully, observe the setup, and connect clues to identify the hidden object related to the crime. The team that connects correctly in the shortest time wins.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "2 MEMBERS",
    "pocs": [
      {
        "name": "Niranjan V",
        "phone": "+91 73050 14107"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/1MXi6ohKy7he-UVcTo8kWaUpjyw22kFO7gnMmhKA5ico/viewform"
  },
  {
    "id": 16,
    "title": "GEN-Z JUNK",
    "slug": "gen-z-junk",
    "category": "Quizzes and Entertainment",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:00 PM",
    "location": "CB524 & CB525",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/mystery-box-challenge.jpg",
    "description": "Most people see a pile of trash; we see a 1000-aura masterpiece waiting to happen. We’re handing you a box of 'emotional support junk' and 45 minutes to prove you've got the vision. From logic paradoxes to the ultimate scrap-build, it’s time to turn 'delulu' into 'realulu.' No instructions, no gatekeeping—just pure ingenuity. Do you have the creative rizz to take home the prize?\n\nRound 1: The Unsolved Frame\n The Specifics: 15 Minutes.\n The Task: Teams are presented with 5 \"Logic Paradox\" questions and 3 Movie Props.\n The Goal: Teams must guess the prop and solve the riddles.\n Scoring: 10 points per riddle.\n Teams with maximum points moves to\n\nround 2.\n\nRound 2: The Prop Hunter (The Utility Sprint)\n The Specifics: 10 Minutes total (60 seconds per item).\n The Task: Use the \"Random Utility List\" (Whisks, rubber gloves, old CDs). Every 60 seconds, a new random item will be given and the team must list the applications.\n The Goal: Teams must list as many applications as possible on a sheet of paper.\n Standard Use (e.g., using a hanger for clothes): 2 Points.\n Creative Use (e.g., using a hanger as a TV antenna): 5 Points.\n The Cut: Only the Final 5 Teams with the highest \"Utility Score\" enter the finale.\n\nRound 3: The Ultimate Mystery Build\n The Specifics: 45 Minutes Build + 5 minutes Pitch.\n The Task: Each team receives the Master Mystery Box (Bottles, cardboard, tape, etc.).\n Teams must use them and build the most useful or funnier invention.\n The Win: The Best Invention Takes the Box. (Judged on: 45% Stability, 45% Creativity/Humor, 10% Presentation).",
    "rules": [],
    "prizePool": "Rs. 3.000/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "3 MEMBERS",
    "pocs": [
      {
        "name": "Oviya",
        "phone": "6383672435"
      }
    ],
    "regLink": "https://forms.gle/audLmuoiSnVXCoYN6"
  },
  {
    "id": 17,
    "title": "Human Knot",
    "slug": "human-knot",
    "category": "Quizzes and Entertainment",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB501 & CB502",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/HUMAN-KNOT.jpg",
    "description": "Human Knot Challenge is a time-based team event designed to test precision, coordination, communication, and teamwork. The event consists of two rounds.\nIn\n\nRound 1, one member of the team will have their hands and legs safely tied while the remaining members complete three tasks to earn their teammate’s release. The tasks include bouncing a ping pong ball into a paper cup, sliding a coin into a marked box from behind a line, and a Noise Cancel Challenge where the tied member guesses a word while wearing headphones playing loud music. Teams that complete the tasks in the least time qualify for\n\nRound 2.\nIn\n\nRound 2, the focus shifts to coordination and trust. One member will be blindfolded and must build a 3-tier pyramid using six cups. Another teammate can guide them only through specific taps without speaking. The pyramid must stand independently for at least three seconds. The team that completes the structure in the least time will be declared the winner.",
    "rules": [],
    "prizePool": "Rs. 3,500/-",
    "regType": "Premium",
    "regFee": "Rs. 200/-",
    "teamSize": "4 MEMBERS",
    "pocs": [
      {
        "name": "Sakthi Purushuthaman",
        "phone": "7305940418"
      }
    ],
    "regLink": "https://forms.gle/7RyeEo8AHCwtq14V6"
  },
  {
    "id": 18,
    "title": "Maathi Yosi",
    "slug": "maathi-yosi",
    "category": "Quizzing, Debate and Literary",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "CB505",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/maathi-yosi1.png",
    "description": "Mathi Yoshi is a fun and interactive event designed to test participants' quick thinking and creativity. Each team consists of two participants, and the event will be conducted in two rounds.\n\nRound 1 – Irrelevant Answer Challenge\n Each team is given 1 minute. Both members are assigned different names. The questioner calls out a name and asks a question. The participant must immediately give an irrelevant or unrelated answer. Teams that succeed advance to\n\nRound 2.\n\nRound 2 – Support and Oppose Round\n Each team is given a topic. Total time: 3 minutes. One participant supports the topic while the other opposes it. When the host announces “Mathi Yoshi”, both participants must immediately switch their roles.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Free",
    "regFee": "",
    "teamSize": "2 MEMBERS",
    "pocs": [
      {
        "name": "Dharsan P",
        "phone": "7358656668"
      }
    ],
    "regLink": "https://forms.gle/umcDg9AAGNAmNbLT6"
  },
  {
    "id": 19,
    "title": "Thirai Suzhal",
    "slug": "thirai-suzhal",
    "category": "Performance Arts",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB511",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/thiraisuzal.jpg",
    "description": "'Thirai Suzhal' is an entertaining event based on Tamil cinema and literature, designed to test participants' acting skills, creativity, teamwork, and quick thinking. The event consists of two rounds.\n\nRound 1 – Dumb Charades\n Each team of four participants acts out words or titles related to Tamil literature or Tamil movies without speaking. The other three members must guess correctly. Top-scoring teams qualify for\n\nRound 2.\n\nRound 2 – Scene Recreation with Emotion Twist\n All four members participate in television-style segments. The host acts as a remote control and announces 'Change Channel', upon which the team must immediately switch to a new scene, emotion, or performance style, which may include movie moments, comedy, or dramatic situations.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "4 MEMBERS",
    "pocs": [
      {
        "name": "Subash Chandra Bose",
        "phone": "8940454275"
      }
    ],
    "regLink": "https://forms.gle/LnJUZNC74GeE8dt16"
  },
  {
    "id": 20,
    "title": "Olunga paadu illana spray adichiruven",
    "slug": "olunga-paadu-illana-spray-adichiruven",
    "category": "Music and Dance",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB505",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/spray-adichuduven.jpg",
    "description": "'Olunga Paattu Illana Spray Aatichutuven' is an entertaining music-based event that challenges participants' knowledge of Tamil cinema songs and quick recall ability.\nEach team consists of three members, and the event is conducted in three rounds. A special rule: each round must be played by a different member of the team. If a participant fails to answer correctly, they will receive the spray penalty.\n\nRound 1\n A line from a Tamil movie song with one missing word is displayed. The participant must identify the correct missing word.\n\nRound 2\n A different participant from the same team takes part. A song line with two missing words is given. The participant must identify both missing words correctly.\n\nRound 3\n The participant will be given a song where an entire line is missing. The participant must sing the missing line correctly.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "3 MEMBERS",
    "pocs": [
      {
        "name": "Ramkishore",
        "phone": "9566952026"
      }
    ],
    "regLink": "https://forms.gle/sKs36cKcugdA5SkE9"
  },
  {
    "id": 21,
    "title": "EPL - Entrepreneurship Pitching League",
    "slug": "epl---entrepreneurship-pitching-league",
    "category": "Innovation, Tech and Gaming",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "Biotech Hall",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/epl.jpg",
    "description": "Welcome to the Entrepreneurship Pitching League (EPL) — where innovation and competition come together in an exciting business challenge! This event is designed to test your knowledge of the startup ecosystem, quick thinking, and pitching abilities.\nWhether you're an aspiring entrepreneur or a business enthusiast, EPL will challenge you to present bold, game-changing ideas with confidence and creativity.\nThe competition consists of three engaging rounds, each aimed at evaluating your entrepreneurial skills and persuasive power. From developing compelling business concepts to delivering effective pitches, each round will push you to think strategically and present your ideas with impact.",
    "rules": [],
    "prizePool": "Rs. 4,500/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "1-4 Members",
    "pocs": [
      {
        "name": "Dimple",
        "phone": "99516 61000"
      }
    ],
    "regLink": "https://forms.gle/JDqVZ7MfYZgrjt349"
  },
  {
    "id": 22,
    "title": "Disasterpreneur",
    "slug": "disasterpreneur",
    "category": "Innovation, Tech and Gaming",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "CB302",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/disasterpeneur.jpg",
    "description": "Participants must transform an ordinary or useless object into a viral, high-demand brand. This event challenges participants to think creatively and market even the most unexpected products with confidence. It tests marketing intelligence, creativity, branding skills, storytelling ability, and stage presence while pushing teams to persuade the audience and judges through innovative ideas and engaging pitches.\n\nRound 1 – Sell the Unsellable\n Participants are given a random useless object and must sell it as a ₹1 crore product within 60 seconds. Judging criteria: Confidence, Creativity, Humor, and Persuasion.\n\nRound 2 – Brand Creation\n Teams have 10 minutes to prepare and 3 minutes to pitch a complete brand concept. The pitch must include: product name, tagline, brand story, target audience, Instagram ad pitch, logo concept, and marketing channel.\n\nRound 3 – Go Viral\n Teams create and perform a 30-second reel script live. The winner is decided based on the highest engagement score through audience voting via a QR poll.",
    "rules": [],
    "prizePool": "Rs. 1000/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "1–3 MEMBERS",
    "pocs": [
      {
        "name": "Sudish M",
        "phone": "9150195835"
      }
    ],
    "regLink": "https://forms.gle/yFX8m9fJoBQYMbt47"
  },
  {
    "id": 23,
    "title": "Memerpreneur",
    "slug": "memerpreneur",
    "category": "Performance Arts",
    "day": 2,
    "date": "10th April 2026",
    "time": "9:00 AM",
    "location": "CB513",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/memerpreneur.jpg",
    "description": "Welcome to Memerpreneur — a unique and engaging event where creativity meets marketing in the most entertaining way. This event challenges participants to think like marketers and creators by promoting a product using humor, memes, and performance.\nUnlike traditional competitions, Memerpreneur combines meme marketing with live advertising (Adzap), making it both fun and skill-based. Participants will be tested on their creativity, quick thinking, and ability to convince an audience.\n\nRound 1: Meme Marketing\nTeams will be given a product on the spot\nParticipants must create a meme to promote the product\nThe meme should be creative, relatable, and humorous\nParticipants can use tools like Canva, mobile editing apps, or any meme creation platforms\n\nTime Allotted: 20–30 minutes\n\nRound 2: Adzap (Final Round)\nShortlisted teams will perform a live roleplay to promote the same product\nPerformance should be engaging, funny, and convincing\n\nTime Allotted: 3–5 minutes per team",
    "rules": [],
    "prizePool": "₹1000 (1st Prize: ₹500, 2nd Prize: ₹300, 3rd Prize: ₹200)",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "1 to 3 members",
    "pocs": [
      {
        "name": "Sri Bharathi",
        "phone": "73971 03127"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLScNUe8gvsTEZC1UtP3_Seavk2J1CA1wGrBiMiQjENGajJAWQg/viewform?usp=publish-editor"
  },
  {
    "id": 24,
    "title": "Startup War Room",
    "slug": "startup-war-room",
    "category": "Innovation, Tech and Gaming",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "CB507",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/startup-war.jpg",
    "description": "Startup War Room is a live startup simulation event where teams build, defend, pivot, and negotiate a startup under real-world pressure. Unlike traditional business plan presentations, participants experience dynamic entrepreneurial challenges including market disruptions, investor negotiations, and competitive attacks.\nTeams must develop a startup idea, adapt strategies during crises, and defend their business decisions across multiple rounds designed to test innovation, strategic thinking, crisis management, adaptability, and negotiation skills.\n\nRound 1 – Idea Sprint\n Startup creation using sector, constraint, and disruption cards followed by a pitch and Q&A.\n\nRound 2 – Market Attack\n Teams respond to live business crises introduced by judges.\n\nRound 3 – Investor Negotiation\n Finalists negotiate valuation and equity with simulated investors, including a hostile VC.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "2–4 MEMBERS",
    "pocs": [
      {
        "name": "Abijith P",
        "phone": "63749 97429"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLScu1__aBnbcSqsO2P3CWK4zrWtgLQ9qEJZieS-Rnr2Z8nQlPw/viewform?usp=dialog"
  },
  {
    "id": 25,
    "title": "Trust the Process",
    "slug": "trust-the-process",
    "category": "Innovation, Tech and Gaming",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:30 AM",
    "location": "CB522",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/trust-the-process.jpg",
    "description": "Trust the Process is a team-based technical challenge designed to test communication, interpretation, and execution skills. Each team consists of three members.\nThe first member will be given a mystery object or concept and must describe it clearly without directly naming it. The second member interprets the description and identifies the object. The third member replicates the identified object within the given time limit using CAD software or manual drawing methods.\nReplication can be done using drawing sheets, sketches, color papers, paints, brushes, and other basic art materials. The nature and difficulty of the mystery objects may vary depending on the respective engineering department.\nThe event evaluates clarity of communication, teamwork, creativity, technical accuracy, and time management.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "2–3 MEMBERS",
    "pocs": [
      {
        "name": "Gayathri",
        "phone": "8838060188"
      }
    ],
    "regLink": "https://forms.gle/DXaHDKyjwX6XMaps9"
  },
  {
    "id": 26,
    "title": "Chaos Director",
    "slug": "chaos-director",
    "category": "Cinematic and Visual Arts",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:30 AM",
    "location": "CB304 & CB324",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/chaos-director.jpg",
    "description": "Chaos Director is a high-energy, campus-wide visual storytelling challenge where each team takes on the role of a film crew assigned a random genre. Over the course of the event, teams race across the venue completing a series of Production Checkpoints, each requiring them to shoot a scene, perform a task, or interact with strangers.\nAt the end of the game, every team presents their compiled footage or photo evidence to the judging panel at HQ. Winners are determined by a combination of completion time and creative execution.\nThe game is structured as 4 Production Checkpoints spread across the venue. Teams move through all 4 in sequence and return to HQ with their evidence.\nRegistration is on a first-come, first-served basis, so only 10–12 teams will be allowed.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "3–4 MEMBERS",
    "pocs": [
      {
        "name": "Mariam",
        "phone": "7305711022"
      }
    ],
    "regLink": "https://forms.gle/JEw323ZmiFGawwfE6"
  },
  {
    "id": 27,
    "title": "Otakumania",
    "slug": "otakumania",
    "category": "Quizzing, Debate and Literary",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "Block 3 (2nd Floor Fully)",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/takumania.jpg",
    "description": "In this year's Otakumania, a dungeons and dragons based event where 8 duos compete against each other through a dungeon adventure filled with anime-based questions, card battles, and strategic gameplay.\nEach player in a duo can buy 5 cards: Character card, Attack card, Defence card, Pet card, and Power card. Each character card has unique stats and moves; remaining cards act as add-ons to boost attack/defence points.\nTeams flip a coin to move across dungeon tiles (doors). Each door contains a question — answering correctly grants movement and points to upgrade cards; failure sends the team back to the previous door.\nTeam paths intersect at battle points. Each team has 200 HP. The guilds who move to the next dungeon level can choose 2 new card sets.\nDungeon structure: 2 Earth Dungeons (4 teams each) → 2 Mystic Dungeons (2 teams each) → 1 God's Dungeon (final battle). Bonus treasure chests containing cards, level-ups, or teleport keys can also be found along the path.\nAll questions are based on anime and anime characters.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "2 MEMBERS",
    "pocs": [
      {
        "name": "Nandhakumaran",
        "phone": "9344458074"
      }
    ],
    "regLink": "https://forms.gle/dr1PeUhDUwYAMkZJ8"
  },
  {
    "id": 28,
    "title": "Greenscreen",
    "slug": "greenscreen",
    "category": "Cinematic and Visual Arts",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB322",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/green-screen.jpg",
    "description": "One participant will be blindfolded while a muted video is played behind them on a screen. The muted video will feature a popular dialogue from a movie or television series.\nThe remaining two teammates will provide verbal clues to help the blindfolded participant guess the video correctly. Teammates may not use direct dialogue delivery, exact character names, or explicit mentions of the movie/series title.\nThe blindfolded participant must rely solely on teammate clues to deduce and identify the correct movie or series. Participants are expected to be creative, expressive, and engaging while demonstrating strong deductive ability and teamwork.\nAny form of vulgarity, inappropriate language, or misconduct will result in immediate disqualification.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "3 MEMBERS",
    "pocs": [
      {
        "name": "Mohammed Faraaz",
        "phone": "9445933053"
      }
    ],
    "regLink": "https://forms.gle/bm47fJ3wo8u2wEZp6"
  },
  {
    "id": 29,
    "title": "Power Play Arena",
    "slug": "power-play-arena",
    "category": "Quizzes and Entertainment",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB313 & CB314",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/powerplay-arena.jpg",
    "description": "Power Play Arena is a high-energy, multi-round team competition where groups of three begin with a small base token count and compete in a series of fast-paced mini-games to grow their total.\nAcross skill challenges, speed tasks, memory tests, puzzles, and strategy-based rounds, teams can earn, risk, steal, swap, multiply, or protect tokens using special power cards and tactical decisions.\nAs the event progresses, the intensity increases with bidding battles, auctions, code-breaking, and surprise steal-or-defend twists that can dramatically shift rankings. The top-performing teams advance to a high-stakes final round where calculated risks and quick thinking determine the ultimate standings.\nThe team finishing with the highest token count is crowned the winner, with runner-up titles awarded to the next best performers.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "3 MEMBERS",
    "pocs": [
      {
        "name": "Neha Ramganesh",
        "phone": "98840 44954"
      }
    ],
    "regLink": "https://forms.gle/KxoCEeGHRH1wSuL17"
  },
  {
    "id": 30,
    "title": "Survival Showdown",
    "slug": "survival-showdown",
    "category": "Innovation, Tech and Gaming",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB526",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/bgmi.jpg",
    "description": " Survival Showdown is a BGMI eSports tournament conducted as a squad-based Battle Royale competition where teams compete against each other in custom lobby matches to earn points through placements and eliminations.\nEach team must consist of 4 players (with an optional substitute). After registrations close, all teams will be grouped and the match schedule will be announced before the event begins.\nTournament Structure\nQualifier Round\n All registered teams will be divided into groups and compete in custom room matches. Points will be awarded based on final placement and number of eliminations (kills). The top-performing teams from the qualifiers will advance to the Grand Finals.\nGrand Final\nThe qualified teams will compete in multiple final matches. Points from all matches will be combined to determine the overall leaderboard. The team with the highest total points at the end of the final matches will be declared the tournament champion.\nMatch Settings\n Mode: Custom Room – Battle Royale\n Map: Erangel\n Team Type: Squad (4 Players)\n\n Players must join the custom lobby when instructed by the organizers.\nPoint System\n Teams will earn points based on:\n • Final Placement in the match\n • Number of Eliminations (Kills)\nThe leaderboard will be updated after every match.",
    "rules": [
      "Each team must consist of 4 players.",
      "Players must report on time when their match is called.",
      "Any use of unfair methods, exploits, or hacks will result in immediate disqualification.",
      "Teams must follow all instructions given by the referees and event coordinators.",
      "The decision of the organizers will be final in case of disputes.",
      "The tournament will conclude with the Grand Finals where the top teams compete across multiple matches to determine the ultimate BGMI champions."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 100/-",
    "teamSize": "4 MEMBERS",
    "pocs": [
      {
        "name": "Hariram Bharathwaj",
        "phone": "9840429372"
      }
    ],
    "regLink": "https://forms.gle/HWQKuTewxr2XLvqu7"
  },
  {
    "id": 31,
    "title": "Tellus Abyss",
    "slug": "tellus-abyss",
    "category": "Quizzing, Debate and Literary",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "Biotech Seminar Hall",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/tellus-abyss.jpg",
    "description": "Tellus Abyss is an environmental debate-style event inspired by gladiatorial combat. Two participants are assigned nature-based characters on the spot and must argue why their species deserves to survive while the other faces extinction.\nParticipants embody their assigned character and defend its ecological importance using creativity, environmental knowledge, and persuasive arguments. The judge, representing Tellus – the Roman Goddess of Earth, decides which participant presents the stronger case for survival.\nEach battle consists of two rounds. In\n\nRound 1, participants present their survival arguments after a short preparation time. In\n\nRound 2, participants deliver a final defense.\nJudging criteria include Knowledge, Creativity, Argument Strength, and Presentation.",
    "rules": [],
    "prizePool": "₹2,000/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Swetha",
        "phone": "7339335632"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLSdDjlD8AQjQAoCK_es33zOmmMdezUN9N38E4Qhi8iT8adAMaw/viewform?usp=dialog"
  },
  {
    "id": 32,
    "title": "Token Takeover",
    "slug": "token-takeover",
    "category": "Quizzes and Entertainment",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "CB526, CB527 & CB528",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/token-takeover.jpg",
    "description": "Token Takeover is an interactive arena event where participants complete small challenges to collect tokens and compete for the highest score.\nEach participant or team begins with a fixed number of tokens which act as the currency of the arena. Participants can use tokens to attempt different challenge stations. Successful completion rewards additional tokens.\nThe arena consists of simple challenge stations including skill-based tasks, puzzle challenges, and luck-based games. Participants may attempt challenges multiple times as long as they have tokens available.\nA live leaderboard will track token counts during the event. The participant or team with the highest number of tokens at the end will be declared the winner.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "--",
    "pocs": [
      {
        "name": "Nityaa",
        "phone": "93459 34690"
      }
    ],
    "regLink": "https://chat.whatsapp.com/BMPPdk9MoOcH2XUhdrMmSj?mode=gi_t"
  },
  {
    "id": 33,
    "title": "The Royal Gambit",
    "slug": "the-royal-gambit",
    "category": "Quizzes and Entertainment",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:30 AM",
    "location": "Block 5 – Third Floor Fully, Ground Floor Entrance Area",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/the-royal-gambut.jpg",
    "description": "Royal Gambit is a live human chess event where participants must first solve a mystery challenge to qualify for the main game. \nOnly those who successfully complete the puzzle will earn their place on the life-sized chessboard. The main event follows standard chess rules, with participants acting as the chess pieces and executing moves strategically. Time limits will be enforced, and the judges’ decision will be final.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Manoj",
        "phone": "+91 63806 93806"
      },      {
        "name": "Abishek M",
        "phone": "+91 90808 66666"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLSdUu8fMTlmrxH0Y9Naqggh77ASJBNyPOIQccVitwihmXi3xYA/viewform?usp=header"
  },
  {
    "id": 34,
    "title": "Saregama",
    "slug": "saregama",
    "category": "Music and Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "CB536",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/saregama.jpg",
    "description": "Saregama is a fun and interactive musical event where popular songs are played in reverse, and participants must identify the original track.\nParticipants must carefully listen to the reversed audio and use their musical knowledge and memory to guess the correct song. Once the correct answer is revealed, the original version of the song will be played, creating a lively atmosphere where everyone can sing along and enjoy.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Manoj",
        "phone": "6380693806"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLSe4Rcz4nyPbf7cSUibacJFzOdA6H1ISBA95IJFiZJH50n7IfA/viewform?usp=sharing&ouid=114259018141707001754"
  },
  {
    "id": 35,
    "title": "Shot on Highways",
    "slug": "shot-on-highways",
    "category": "Cinematic and Visual Arts",
    "day": 1,
    "date": "April 09, 2026",
    "time": "April 09, 2026",
    "location": "Online Event",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/shot-on-highways.jpg",
    "description": "Highways is more than a cultural event, it is a celebration of journeys, emotions, and the stories that connect us all. Participants are invited to capture the true essence of highways through breathtaking landscapes, expressive portraits, and dynamic group photo portraits that reflect motion, freedom, perspective, and the spirit of the open road. Step into the fast lane of creativity and transform every mile into a powerful visual story.",
    "rules": [],
    "prizePool": "₹1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Shreya",
        "phone": "9445599760"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLScjqydtH18ZB5zuxVPlu-tI8ZTJCD8aHBhzlCDDiE0L5drxJQ/viewform?usp=header"
  },
  {
    "id": 36,
    "title": "Frame by words",
    "slug": "frame-by-words",
    "category": "Cinematic and Visual Arts",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB303",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/frame-by-words.jpg",
    "description": "A two-member team participates where only one member sees the reference image (once), while the other operates the camera without ever viewing it. The image viewer must recreate the frame purely through verbal instructions.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "2 MEMBERS",
    "pocs": [
      {
        "name": "Raghav",
        "phone": "+91 63744 73882"
      }
    ],
    "regLink": "https://docs.google.com/forms/d/e/1FAIpQLSfEWyJ9Im6j2MlwqAgSkViik1eCNp5fA9Oordj8ni83P41KEg/viewform?usp=header"
  },
  {
    "id": 37,
    "title": "Click and Crack Up", 
    "slug": "Click and Crack Up",
    "category": "Cinematic and Visual Arts",
    "day": 1,
    "date": "April 09, 2026",
    "time": "April 09, 2026",
    "location": "Online Event",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/click-and-crack-up.png",
    "description": "The Photo Club brings you a fun and creative online event – Click & Crack Up as part of Highway 26. This event challenges participants to transform their own original photographs into hilarious, relatable meme content. Participants must use their creativity to add witty captions, clever edits, or humorous twists to their photos, turning everyday moments into engaging and shareable memes. The goal is to combine photography with humor, creating content that resonates with people and has strong viral potential. Participants are free to use any editing tools, but the photograph and meme content must be completely original. The content should be fun, respectful, and engaging, avoiding any offensive or inappropriate material. This is an individual event, allowing each participant to showcase their unique sense of humor and creativity. Entries will be judged based on originality, humor, creativity, and overall impact.",
    "rules": [],
    "prizePool": "₹1,000/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Naveen Harish",
        "phone": "+91 94870 15931"
      }
    ],
    "regLink": "https://forms.gle/ExKFBY456o96uzBw8"
  },
  {
    "id": 38,
    "title": "Shoot and Broadcast",
    "slug": "shoot-and-broadcast",
    "category": "Cinematic and Visual Arts",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB312",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/shoot-and-broadcast.jpg",
    "description": "Get ready to capture creativity on the spot! In this exciting on-campus reel challenge, participants must conceptualize, shoot, and finalize their reel within the given one-hour time limit. Once completed, all entries will be posted on the Curtain Call page, where the audience becomes the judge. The winner will be announced on the third day, and the deciding factor will be the number of likes each reel receives. Bring your ideas, teamwork, and energy — make it, post it, and let the campus decide!",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "—",
    "pocs": [
      {
        "name": "Akshaya N",
        "phone": "9042476961"
      }
    ],
    "regLink": "https://forms.gle/YGF51z6jmX45xMDy6"
  },
  {
    "id": 39,
    "title": "Mime",
    "slug": "mime",
    "category": "Performance Arts",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:00 PM",
    "location": "MPH",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/mime.jpg",
    "description": "Mime is a powerful stage performance where participants convey ideas, emotions, and social messages without using words or spoken sounds. The performance relies entirely on expressive facial expressions, body language, and coordinated movements to communicate with the audience. Through silence, teams creatively narrate stories or highlight meaningful themes that resonate with viewers. Background music may be used to enhance the mood and emotional impact of the act. Mime beautifully demonstrates that actions can speak louder than words while encouraging creativity, teamwork, and artistic expression on stage.",
    "rules": [],
    "prizePool": "Rs. 4,500/-",
    "regType": "Premium",
    "regFee": "Rs. 400/-",
    "teamSize": "—",
    "pocs": [
      {
        "name": "Mahathi T",
        "phone": "9840988831"
      }
    ],
    "regLink": "https://forms.gle/D6n3fDJgAXHJeA3K9"
  },
  {
    "id": 40,
    "title": "IPL Auction",
    "slug": "ipl-auction",
    "category": "Quizzes and Entertainment",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "CB301 & CB302",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/ipl-auction.jpg",
    "description": "Step into the high-stakes world of the Indian Premier League Auction, where strategy meets cricket knowledge. Test your game sense in a thrilling preliminary round before battling it out in a live auction simulation. Build the ultimate squad and prove your dominance as a team owner.\n\nRound 1 – MCQ Challenge:\n●\tParticipants will answer cricket-based MCQs.\n●\tQuestions will cover IPL history, players, and game knowledge.\n●\tTeams will be shortlisted based on scores for the final round.\n\nRound 2 – Live Auction:\n●\tQualified teams enter a simulated IPL auction.\n●\tEach team gets a fixed budget to bid for players.\n●\tStrategic buying, team balance, and budget management determine the winner.",
    "rules": [],
    "prizePool": "Rs. 2000/-",
    "regType": "Premium",
    "regFee": "Rs. 50/-",
    "teamSize": "2-3 Members",
    "pocs": [
      {
        "name": "Sreenidhi",
        "phone": "6385568214"
      }
    ],
    "regLink": "https://forms.gle/ZM7hmU6sExLtJX2D6"
  },
  {
    "id": 41,
    "title": "Freeze Frame",
    "slug": "freeze-frame",
    "category": "Cinematic and Visual Arts",
    "day": 3,
    "date": "April 11, 2026",
    "time": "1:00 PM",
    "location": "CB504",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/freeze-frame.jpg",
    "description": "Freeze Frame is a cinematic guessing challenge that tests participants’ observation skills and love for movies. In this event, participants must identify films from a single frozen frame or visual clue. With dialogue and music removed, contestants rely purely on visual memory, scene recognition, and teamwork to decode the correct movie title. \nThe event will feature three exciting rounds, each increasing in difficulty and creativity. From identifying iconic frames to reconstructing scenes and solving cinematic puzzles, teams must think quickly and collaborate effectively. The team with the highest score across all rounds will be declared the winner.\n\nRound 1 – Frame Spot (Warm-up Round) Participants will be shown a single frozen frame from a movie for a few seconds. Teams must identify the correct movie title. \nRules: • Each frame will be displayed for 5 seconds. • Teams must write their answers on the answer sheet. • No shouting or discussing with other teams. • The answer must be the official movie title. Scoring: Correct answer – 10 points (No negative marks).\n\nRound 2 – Scene Builder Teams will receive 3–4 frames from the same movie but in random order. Participants must identify the movie and arrange the frames in the correct sequence. \nRules: • Frames will be displayed on the screen. • Teams must write the movie title and correct order. • Time limit: 30 seconds per question. Scoring: Correct movie title – 10 points; Correct sequence – 10 points (Total 20 points).\n\nRound 3 – Freeze & Act (Final Round) A team member will recreate or act out a frozen movie scene shown on the screen while teammates guess the movie. Rules: • Only one member acts while others guess. • No speaking allowed by the actor. • Time limit: 30 seconds. \nScoring: Correct answer within time – 20 points. If unanswered, other teams may steal for 10 points. \nRULES & GUIDLINES \n• Participants must not shout answers. \n• The title provided must be the official name of the film. • Judges’ decisions will be final and binding. \n• Any unfair practice will lead to disqualification.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "2–3 members",
    "pocs": [
      {
        "name": "Janani",
        "phone": "9840988831"
      }
    ],
    "regLink": "https://forms.gle/9K4ZuhZHu6bGuu4b6"
  },
  {
    "id": 42,
    "title": "Yonko’s Treasure Market",
    "slug": "yonkos-treasure-market",
    "category": "Quizzing, Debate and Literary",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB503",
    "color": "#e8729a",
    "image": "https://cdn.svcehighways.in/highways-all-poster/yonkos.jpg",
    "description": "Yonko’s Treasure Market is a fun and interactive anime-themed auction event where participants build their dream anime team through a strategic bidding process. Each team is provided with a fixed amount of fake currency and must compete with other teams to bid for popular anime characters.\nParticipants must carefully manage their budget and make smart decisions to secure powerful, intelligent, or unique characters. The goal is to build the most balanced and creative anime squad using strategy, teamwork, and anime knowledge.\nAt the end of the auction, teams will present their final anime lineup and explain why their team is the strongest or most unique. Judges will evaluate the teams based on character selection, team balance, creativity, and overall presentation.",
    "rules": [],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "",
    "teamSize": "3–4 members",
    "pocs": [
      {
        "name": "Buvanesh Raaj",
        "phone": "9962371662"
      }
    ],
    "regLink": "https://forms.gle/5btUAbhA8f48y9edA"
  },
  {
    "id": 43,
    "title": "Sorting Hat Conspiracy",
    "slug": "sorting-hat-conspiracy",
    "category": "Quizzing, Debate and Literary",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "Ground Floor – Block 5",
    "color": "#f5e6c8",
    "image": "https://cdn.svcehighways.in/highways-all-poster/sorting-hat.jpg",
    "description": "Sorting Hat Conspiracy invites participants to step into a magical literary journey inspired by the world of Harry Potter. Teams of 3 members will be sorted into houses and compete in interactive reading challenges, decode magical clues, and test their knowledge of spells, characters, and iconic moments from the wizarding world.\nThrough house-based competitions and a dynamic point system, participants will collaborate, strategize, and showcase their literary enthusiasm to earn house points. The event concludes with the awarding of the ultimate House Cup, celebrating imagination, teamwork, and the magic of reading.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "3 members",
    "pocs": [
      {
        "name": "Hannah",
        "phone": "7305066339"
      }
    ],
    "regLink": "https://forms.gle/yXTEwuFszia1y22Y6"
  },
  {
    "id": 44,
    "title": "Survival of the Fittest",
    "slug": "survival-of-the-fittest",
    "category": "Quizzing, Debate and Literary",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:30 AM",
    "location": "Library 3rd Floor Hall",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/survival-of-fitteset.jpg",
    "description": "This event consists of two rounds designed to test the participants’ creativity, humour, and quick thinking.\n\nRound 1 – Shipwreck:\n Participants will imagine themselves on a sinking ship where only one life jacket remains. Each participant must convince the captain why they deserve the life jacket over the others. Participants will be judged based on humour, creativity, and persuasion.\n\nRound 2 – Block and Tackle:\n In this round, participants will be given a topic and must speak both for and against it at the judges’ command. Participants will be evaluated based on humour, spontaneity, and presence of mind.",
    "rules": [],
    "prizePool": "Rs. 5,000/-",
    "regType": "Premium",
    "regFee": "Rs. 100/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Shawn Abraham",
        "phone": "9345985157"
      }
    ],
    "regLink": "https://forms.gle/LKyJR9tBgF6KmJaE9"
  },
  {
    "id": 45,
    "title": "Channel Surfing",
    "slug": "channel-surfing",
    "category": "Performance Arts",
    "day": 3,
    "date": "April 11, 2026",
    "time": "1:30 PM",
    "location": "Biotech Seminar Hall",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/45.jpg",
    "description": "In Channel Surfing, our teams will transform into live TV channels—right before your eyes! From news anchors and sports commentators to soap operas and wild reality shows, you never know which channel you’ll land on next.\nBut wait—there’s a twist! At any moment, you could be asked to pause, rewind, or even replay a scene. That means you’ll need to stay sharp, think on your feet, and bring your best creativity, humor, and improvisation skills to the stage.\nChannel Surfing is all about energy, spontaneity, and keeping the audience hooked—so get ready to laugh, cheer, and binge-watch some unforgettable performances!",
    "rules": [
      "The maximum number of participants per team:5",
      "The participants will have to humorously enact according to the channels.",
      "Channels will be switched by the judge on the spot.",
      "Commands like fast forward, pause, rewind, slow motion, mute, etc, will be given to the participants.",
      "Vernacular language is allowed."
    ],
    "prizePool": "Rs. 6,000/-",
    "regType": "Premium",
    "regFee": "Rs. 300/-",
    "teamSize": "5 members",
    "pocs": [
      {
        "name": "Shawn Abraham",
        "phone": "9345985157"
      }
    ],
    "regLink": "https://forms.gle/dJUFCBWE9G8uYzgC7"
  },
  {
    "id": 46,
    "title": "UNIVIA",
    "slug": "univia",
    "category": "Quizzes and Entertainment",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB517 & CB518",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/univia.jpg",
    "description": "ROUND 1 – UNO Frenzy\nThink UNO is just a card game? Think again!\nIn this fast-paced face-off, two teams battle it out as players draw cards from their decks. But beware — special cards don’t just change the game, they trigger surprise challenges! From quick tasks to fun mini-activities, every draw could flip the game in unexpected ways. Stay sharp, think fast, and prove your team can handle both strategy and surprise.\n\nROUND 2 – Drama & Deception\nTeams step into the spotlight in this exciting blend of dumb charades and myth-busting. Players must creatively act out a hidden word related to the theme while their teammates race against time to guess it. Once the clock stops, a statement is revealed — but is it fact or fiction? Teams must put their knowledge to the test and decide whether the statement is a myth or the truth .\n\nROUND 3-  Challenge Chase\nGet ready for the ultimate test of teamwork and energy!\n In this thrilling relay challenge, teams must race against each other while completing a series of tasks along the way. Each member must finish their challenge before passing the baton to the next teammate. It’s not just about speed — strategy, quick thinking, and teamwork will decide who crosses the finish line first.",
    "rules": [],
    "prizePool": "",
    "regType": "Free",
    "regFee": "",
    "teamSize": "4 members",
    "pocs": [
      {
        "name": "Madhavan S",
        "phone": "+91 73581 21765"
      }
    ],
    "regLink": "https://forms.gle/xAFALtMYsZgu3Z449"
  },
  {
    "id": 47,
    "title": "Mr & Ms. Highways",
    "slug": "mr--ms-highways",
    "category": "Performance Arts",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "MPH",
    "color": "#ff0000",
    "image": "https://cdn.svcehighways.in/highways-all-poster/mr-and-ms-highways.jpg",
    "description": "A high-energy finale event designed to bring out the best in every participant through multiple exciting rounds. It kicks off with a performance of their choice, followed by judge-curated challenges to test versatility and stage presence. The top three contestants will be rewarded, with the winner earning the prestigious title of Mr. & Ms. Highways.",
    "rules": [],
    "prizePool": "Rs. 5,000/-",
    "regType": "Premium",
    "regFee": "Rs. 100/-",
    "teamSize": "SOLO",
    "pocs": [
      {
        "name": "Divya",
        "phone": "+91 733 969 7795"
      }
    ],
    "regLink": "https://forms.gle/TmUCAYbvu3incfmB6"
  }
];
