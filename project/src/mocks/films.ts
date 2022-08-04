import { FilmCard } from '../types/film-card';

const films: FilmCard[] = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Pulp Fiction',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/pulp-fiction.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
    backgroundColor: '#795433',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 1.5,
    scoresCount: 1635992,
    director: 'Quentin Tarantino',
    starring: [
      'John Travolta',
      'Uma Thurman',
      'Samuel L. Jackson'
    ],
    runTime: 153,
    genre: 'Crime',
    released: 1994,
    isFavorite: false
  },
  {
    id: 3,
    name: 'Beach',
    posterImage: 'https://10.react.pages.academy/static/film/poster/beach.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/beach.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/beach.jpg',
    backgroundColor: '#EBC996',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
    rating: 3.3,
    scoresCount: 207824,
    director: 'Danny Boyle',
    starring: [
      'Leonardo DiCaprio',
      'Daniel York',
      'Patcharawan Patarakijjanon'
    ],
    runTime: 119,
    genre: 'Adventure',
    released: 2000,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Johnny English',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Johnny_English.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/johnny-english.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Johnny_English.jpg',
    backgroundColor: '#F0DBA2',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'After a sudden attack on the MI5, Johnny English, Britain&apos;s most confident yet unintelligent spy, becomes Britain&apos;s only spy.',
    rating: 10,
    scoresCount: 136843,
    director: 'Peter Howitt',
    starring: [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    runTime: 88,
    genre: 'Comedy',
    released: 2003,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Matrix',
    posterImage: 'https://10.react.pages.academy/static/film/poster/matrix.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/matrix.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/matrix.jpg',
    backgroundColor: '#B9B27E',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    rating: 4.4,
    scoresCount: 1503092,
    director: 'Wachowski Sisters',
    starring: [
      'Keanu Reeves',
      'Laurence Fishburne',
      'Carrie-Anne Moss'
    ],
    runTime: 136,
    genre: 'Action',
    released: 1999,
    isFavorite: false
  },
  {
    id: 6,
    name: 'A Star Is Born',
    posterImage: 'https://10.react.pages.academy/static/film/poster/A_Star_Is_Born.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/A_Star_is_Born.jpg',
    backgroundColor: '#C4C0C0',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
    rating: 3.9,
    scoresCount: 244484,
    director: 'Bradley Cooper',
    starring: [
      'Lady Gaga',
      'Bradley Cooper',
      'Sam Elliott'
    ],
    runTime: 136,
    genre: 'Drama',
    released: 2018,
    isFavorite: false
  },
  {
    id: 7,
    name: 'Seven Years in Tibet',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
    backgroundColor: '#C6CADF',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China&apos;s takeover of Tibet.',
    rating: 3.6,
    scoresCount: 112612,
    director: 'Jean-Jacques Annaud',
    starring: [
      'Brad Pitt',
      'David Thewlis',
      'BD Wong'
    ],
    runTime: 136,
    genre: 'Adventure',
    released: 1997,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Bohemian Rhapsody',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    backgroundColor: '#929FA5',
    videoLink: 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: '"Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    rating: 6.1,
    scoresCount: 338903,
    director: 'Bryan Singer',
    starring: [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee'
    ],
    runTime: 134,
    genre: 'Drama',
    released: 2018,
    isFavorite: false
  },
];

export default films;
