import work2 from '../assets/projects/work-2.png';
import work5 from '../assets/projects/work5.png';
import game from '../assets/projects/games.png';
import school from '../assets/projects/school.png';
import nkwazi from '../assets/projects/nkwazi.png'
import access from '../assets/projects/access.png'
const Data = [
  {
    title: "Nkwazi Media",
    img: nkwazi,
    id: 1,
    languages: ['React Js', 'TypeScript', 'Tailwind css',],
    liveLink: 'https://nkwazimagazine.com/',
    decription: `
    Founded in 2012, Nkwazi Magazine takes readers beyond the traditional print editions by including its interactive digital editions, website and social media platforms covering the best of Zambia and her people
    `
  },
  {
    title: "ACCESSING MEDIA CONNECT",
    img: access,
    id: 6,
    languages: ['React Js', 'TypeScript', 'Tailwind css',],
    liveLink: 'https://accessin-media-connect.web.app/',
    decription: `
    Convert Audio And Video Files To Text
    they have an enviable reputation for providing highly accurate and bespoke audio & video to text solutions.
    `
  }
  ,

  {
    title: 'Accessin-code',
    img: school,
    id: 3,
    languages: ['React Js', 'TypeScript', 'Firebase', 'Cloudinary'],
    liveLink: 'https://accessin-code-academy.web.app/',
    decription: 'A Startup offering Coding and creative courses for kids between the ages of 8 to 16 years old. The curriculum being Scratch programming, HTML, CSS & JavaScript and Problem solving through simulations and games'
  },
  {
    title: 'Game Display',
    img: game,
    id: 2,
    languages: ['React Js', 'TypeScript', 'Chakra UI', 'Zustand'],
    liveLink: 'https://game-display.netlify.app/',
    decription: 'A website to display games based on different platforms and different genres. The user can also search for games. The website is responsive on all views mobile, tablet as well as desktop'
  },
  {
    title: 'Equalizer Landing Page',
    img: work2,
    id: 4,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://equalizer-delta.vercel.app/',
    decription: 'A Clone of the Equalizer Landing Page'
  },

  {
    title: 'Pod Landing Page',
    img: work5,
    id: 5,
    languages: ['Html', 'Sass', 'JavaScript', 'Parcel'],
    liveLink: 'https://pod-request-access.netlify.app/',
    decription: 'A clone of Pod Landing Page'
  }

]

export const FindCard = (id) => {
  return Data.find((card) => {
    if (card.id == Number(id)) {
      return card
    }
  })
}

export const skills = ['Communication', 'Problem solving', 'Coding', 'Analytical skills', 'Attention to detail', 'Teamwork', 'Collaboration']

export default Data;

