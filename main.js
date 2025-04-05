import { createTile } from "./utils.js"

addEventListener("DOMContentLoaded", async () => {
  if (!document.title) {
    document.title = await fetch("https://api.github.com/users/Kurumi30", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => data.login);
  }
})

const main = document.querySelector('main')
const socialNetworks = [
  {
    icon: 'github',
    name: 'Github',
    url: 'https://github.com/Kurumi30/',
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fernando-zhu/',
  },
  // {
  //  icon: 'instagram',
  //  name: 'Instagram',
  //  url: 'https://www.instagram.com/bsd002/',
  // },
  // {
  //   icon: 'twitter',
  //   name: 'Twitter',
  //   url: 'https://x.com/FernandoZhu14',
  // },
  {
    icon: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/kurumi30',
  },
  {
    icon: 'font-awesome',
    name: 'Em breve (Portfolio)',
    url: '#',
  },
]

socialNetworks.forEach(tileInfo => main.appendChild(createTile(tileInfo)))
