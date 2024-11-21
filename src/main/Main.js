const imdbMovies = [
  {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Iron Man 3",
    "Year": "2013",
    "imdbID": "tt1300854",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Iron Man",
    "Year": "2008",
    "imdbID": "tt0371746",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
  },
  {
    "Title": "Captain Marvel",
    "Year": "2019",
    "imdbID": "tt4154664",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Oppenheimer",
    "Year": "2023",
    "imdbID": "tt15398776",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    "Title": "The Godfather",
    "Year": "1972",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0068646",
    "Type": "movie",
  },
  {
    "Title": "The Godfather Part II",
    "Year": "1974",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0071562",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Pulp Fiction",
    "Year": "1994",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0110912",
    "Type": "movie",
  },
  {
    "Title": "Schindler's List",
    "Year": "1993",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0108052",
    "Type": "movie",
  },
  {
    "Title": "Forrest Gump",
    "Year": "1994",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0109830",
    "Type": "movie",
  },
  {
    "Title": "Fight Club",
    "Year": "1999",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0137523",
    "Type": "movie",
  },
  {
    "Title": "The Matrix",
    "Year": "1999",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0133093",
    "Type": "movie",
  },

  {
    "Title": "Se7en",
    "Year": "1995",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0114369",
    "Type": "movie",
  },
  {
    "Title": "Parasite",
    "Year": "2019",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt6751668",
    "Type": "movie",
  },
  {
    "Title": "Gladiator",
    "Year": "2000",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
    "imdbID": "tt0172495",
    "Type": "movie",
  },
  {
    "Title": "Léon: The Professional",
    "Year": "1994",
    "imdbID": "tt0110413",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGRkYTNhOWQtYmI0Ni00MjZhLWJmMzAtMTA2Mjg4NGNiNDU0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "American History X",
    "Year": "1998",
    "imdbID": "tt0120586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzhiOTQ0NDItOTg0Zi00OGVmLWE0OGEtMTI4NDM0NWMxZWU4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Usual Suspects",
    "Year": "1995",
    "imdbID": "tt0114814",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTE5MDUxZDUtZWZmZC00NDVmLWFhOGQtNWI2YTc4NzY3MGQ0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Dune: Part One",
    "Year": "2021",
    "imdbID": "tt1160419",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Dune: Part Two",
    "Year": "2024",
    "imdbID": "tt15239678",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible - Ghost Protocol",
    "Year": "2011",
    "imdbID": "tt1229238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible",
    "Year": "1996",
    "imdbID": "tt0117060",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible - Rogue Nation",
    "Year": "2015",
    "imdbID": "tt2381249",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjUwZjg2ZjAtY2RhZi00YmZjLTlhNGQtOWQwNDk1MjhhM2NhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible III",
    "Year": "2006",
    "imdbID": "tt0317919",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible - Fallout",
    "Year": "2018",
    "imdbID": "tt4912910",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible II",
    "Year": "2000",
    "imdbID": "tt0120755",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible - Dead Reckoning Part One",
    "Year": "2023",
    "imdbID": "tt9603212",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Impossible",
    "Year": "2012",
    "imdbID": "tt1649419",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjM1ZTJkMjctY2M0ZC00ZTkyLTliYTktNzYxYWIzYTAyOTRjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "14 Peaks: Nothing Is Impossible",
    "Year": "2021",
    "imdbID": "tt14079374",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTczNTM1YjQtMTkzNy00ODkzLWE3MzEtMGJjOTIxODU3NmNlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Mission: Impossible",
    "Year": "1966–1973",
    "imdbID": "tt0060009",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3MDQ4ODQwNF5BMl5BanBnXkFtZTcwODMwODM0MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi Driver",
    "Year": "1976",
    "imdbID": "tt0075314",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi",
    "Year": "1998",
    "imdbID": "tt0152930",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTlkM2EzOTAtMTgzZi00NDEyLWJjOGItYWJiYTE2NmRlODMwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi 2",
    "Year": "2000",
    "imdbID": "tt0183869",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzBjNDE0YmUtZTIxZS00YzJkLTlhMzAtNjQ4OTExNDQ4YzhlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi 3",
    "Year": "2003",
    "imdbID": "tt0295721",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzdjODU5ODQtZjkzOC00MTNiLWFhZjQtNDcyZmI1MmM2Yzg2XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi",
    "Year": "2004",
    "imdbID": "tt0316732",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjcyYWQzMmUtNThiYi00MDQ5LWIxMGEtMTVmMjM0MjhkMGU2XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "A Taxi Driver",
    "Year": "2017",
    "imdbID": "tt6878038",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTczN2QxM2MtMjBkYi00ZDk4LWI3MGYtMzcyYTAxM2JmMzJiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi 4",
    "Year": "2007",
    "imdbID": "tt0804540",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTJhY2RmNzUtMDk3ZS00ZDI4LWI3M2YtOTVmOGE5MDg5YjIxXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi to the Dark Side",
    "Year": "2007",
    "imdbID": "tt0854678",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxNzMxNzA3OF5BMl5BanBnXkFtZTcwODgyMzU1MQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Taxi",
    "Year": "2015",
    "imdbID": "tt4359416",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjVkODc4M2YtNzVlYi00M2NkLTgyMjUtMzkzNWIzNGYyNThlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien",
    "Year": "1979",
    "imdbID": "tt0078748",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien³",
    "Year": "1992",
    "imdbID": "tt0103644",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZiNmVlZGEtM2VmMi00ZTFkLTliMzEtZDNhYzUzNTcxMGY3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien: Covenant",
    "Year": "2017",
    "imdbID": "tt2316204",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjhiYWQ4MTAtOGY1Zi00ZjcyLTk1ZDYtODI3ODRhNjE4MzZhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien Resurrection",
    "Year": "1997",
    "imdbID": "tt0118583",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDMyNmU5ZGQtNzhiZi00NjRjLTk3NGUtMmQ5YWU4ODlkNTBhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien vs. Predator",
    "Year": "2004",
    "imdbID": "tt0370263",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg"
  },
  {
    "Title": "Alien: Romulus",
    "Year": "2024",
    "imdbID": "tt18412256",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Resident Alien",
    "Year": "2021–",
    "imdbID": "tt8690918",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzczMDI5NzQtODdmYS00NTcwLTg1MTYtNmU5NWY1NDA5ZGRkXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "My Stepmother Is an Alien",
    "Year": "1988",
    "imdbID": "tt0095687",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmNmOWQ2NmUtOTcyZi00MGI5LWI5NDEtYzRkZWMxNWQ5Mjk5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien Nation",
    "Year": "1988",
    "imdbID": "tt0094631",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2M1ZmY1ODktM2I5NC00OGU0LThiNjAtM2E5NmU1NDE5MzU2XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Ben 10: Alien Force",
    "Year": "2008–2010",
    "imdbID": "tt1192169",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGQ5YWFjYjItODE5OC00ZDQxLTk5ZmYtNzY0YzM4NjIyMWFlXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Predator",
    "Year": "1987",
    "imdbID": "tt0093773",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWEzMDI0MTUtMjQ0Yy00MGRhLWI4YjAtZTgzZTM3NTYxZGJkXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Alien vs. Predator",
    "Year": "2004",
    "imdbID": "tt0370263",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg"
  },
  {
    "Title": "Predator 2",
    "Year": "1990",
    "imdbID": "tt0100403",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjFjMjRkYWUtNmI4YS00ZmMwLWFiMmYtNWViY2RjZjMyODQ4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Predator",
    "Year": "2018",
    "imdbID": "tt3829266",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_SX300.jpg"
  },
  {
    "Title": "Aliens vs. Predator: Requiem",
    "Year": "2007",
    "imdbID": "tt0758730",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5NDY2NDUwM15BMl5BanBnXkFtZTYwNzQxMTA3._V1_SX300.jpg"
  },
  {
    "Title": "Bikram: Yogi, Guru, Predator",
    "Year": "2019",
    "imdbID": "tt10883004",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzE2NjhhNmItMTk2OS00NzI4LWE4ZTMtYWE5ZDRmZDM1NDkwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Raincoat Killer: Chasing a Predator in Korea",
    "Year": "2021",
    "imdbID": "tt15484900",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTMxMmExNjUtM2QxYy00MTYwLWJmNDUtOTA4OTZmOWI3ZjkyXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Predator Dark Ages",
    "Year": "2015",
    "imdbID": "tt4171544",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ3MDA1OTQyOV5BMl5BanBnXkFtZTgwNTQ5MTczNTE@._V1_SX300.jpg"
  },
  {
    "Title": "Indian Predator: The Butcher of Delhi",
    "Year": "2022",
    "imdbID": "tt14178824",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGJjOWQxMTAtOWQ0Ny00MzQyLWJlZjktODNjNTM2MjQyZjNiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Indian Predator: The Diary of a Serial Killer",
    "Year": "2022",
    "imdbID": "tt21811888",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDE3NzYyNzktNWYyOC00ZjY2LWI1MDMtMjlhZTg2OGQ1NWYzXkEyXkFqcGc@._V1_SX300.jpg"
  },

]

export default function Main({explore}) {
  return (
    <main className={explore ? 'visible' : ''}>
      <div className='mainMovies-container'>
        <MovieList/>
      </div>
    </main>
  )
}

const someArray = [...imdbMovies].sort(() => Math.random() - 0.5)

function MovieList() {
  return (
    <ul className="main_list-movies">
      {someArray.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li>
      <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={movie.Poster} alt={`${movie.Title} poster`} />
      {/* <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div> */}
    </li>
  );
}