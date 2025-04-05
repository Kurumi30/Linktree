import { createTile } from "./utils.js"

addEventListener("DOMContentLoaded", async () => {
  const info = await fetch("https://api.github.com/users/Kurumi30", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const { login, name, company: companyName, avatar_url, html_url } = await info.json()

  if (!document.title) document.title = `${login} | ${name}`

  const company = document.getElementById("company")

  if (company) company.innerText = companyName
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
