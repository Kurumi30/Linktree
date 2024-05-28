async function copyText(e) {
  e.preventDefault()
  // e.stopPropagation()

  const link = this.getAttribute('link')

  try {
    await navigator.clipboard.writeText(link)

    alertify.success('Link copiado com sucesso!')
  } catch (err) {
    console.error(err)

    alertify.error('Erro ao copiar link!')
  }
}

export function createTile(tileInfo) {
  const tile = document.createElement('a')

  tile.className = 'tile'
  tile.href = tileInfo.url
  tile.target = '_blank'
  tile.rel = 'noopener'

  const icon = document.createElement('div')
  
  icon.className = 'icon'
  icon.innerHTML = `<i class="fa-brands fa-${tileInfo.icon} fa-3x"></i>`
  tile.appendChild(icon)

  const name = document.createElement('p')

  name.textContent = tileInfo.name
  tile.appendChild(name)

  const shareButton = document.createElement('div')

  shareButton.className = 'tile-share-button'
  shareButton.setAttribute('link', tileInfo.url)
  shareButton.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z"
      fill="currentColor"></path>
  </svg>
  `
  shareButton.addEventListener('click', copyText)
  tile.appendChild(shareButton)

  return tile
}
