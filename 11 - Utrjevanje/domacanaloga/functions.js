function pokaziOpravila() {

  // Najprej izpraznimo seznam
  let seznam = document.querySelector('#seznam-opravil')
  seznam.innerHTML = ""

  for(let i=0; i < opravila.length; i++) {
      let opravilo = opravila[i]

      // Najprej ustvarimo list item, ki predstavlja eno opravilo
      let listItem = document.createElement('li')
      listItem.classList.add('list-group-item')

      // V vsakem primeru dodamo ikono za odstranjevanje opravila s seznamo
      let removeIcon = document.createElement('i')
      removeIcon.classList.add('fa', 'fa-trash', 'icon')
      removeIcon.addEventListener('click', function() {
          odstraniOpravilo(i)
      })
      listItem.appendChild(removeIcon)


      // Če urejamo opravilo namesto golega teksta izrišemo vnosno polje
      if(opravilo.urejanje) {
          let editInput = document.createElement('input')
          editInput.value = opravilo.tekst
          editInput.addEventListener('keydown', function(event) {
              if(event.key == "Enter") {
                  spremeniOpravilo(i, editInput.value)
              }
          })
          listItem.appendChild(editInput)
      }
      // Če ne urejamo, potem izpišemo samo tekst opravila in ikono za urejanje
      else {
          let tekst = document.createTextNode(opravilo.tekst)
          listItem.appendChild(tekst)

          let editIcon = document.createElement('i')
          editIcon.classList.add('fa', 'fa-edit', 'icon')
          editIcon.addEventListener('click', function() {
              urejajOpravilo(i)
          })
          listItem.appendChild(editIcon)
      }

      // Če je opravilo opravljeno mu damo zeleno ozadje (bg-success) in dodamo ikono za ponastavitev opravila
      if(opravilo.opravljeno) {
          listItem.classList.add('bg-success')
          let undoIcon = document.createElement('i')
          undoIcon.classList.add('fa', 'fa-times', 'icon')
          undoIcon.addEventListener('click', function() {
              ponastaviOpravilo(i)
          })
          listItem.appendChild(undoIcon)
      }
      // Če opravilo ni opravljeno dodamo ikono za končanje opravila
      else {
          let doneIcon = document.createElement('i')
          doneIcon.classList.add('fa', 'fa-check', 'icon')
          doneIcon.addEventListener('click', function() {
              opraviOpravilo(i)
          })
          listItem.appendChild(doneIcon)
      }

      // Na koncu list item dodamo na seznam
      seznam.appendChild(listItem)
  } 
}


// Doda novo opravilo na seznam
function dodajOpravilo(opravilo) {
  let novoOpravilo = {
      tekst: opravilo,
      opravljeno: false,
      urejanje: false
  }
  opravila.push(novoOpravilo)
  pokaziOpravila()
}

// Označi opravilo na danem indeksu kot opravljeno
function opraviOpravilo(index) {
  opravila[index].opravljeno = true
  pokaziOpravila()
}

// Označi opravilo na danem indeksu kot neopravljeno
function ponastaviOpravilo(index) {
  opravila[index].opravljeno = false
  pokaziOpravila()
}

// Označi opravilo na danem za urejanje
function urejajOpravilo(index) {
  opravila[index].urejanje = true
  pokaziOpravila()
}

// Spremeni tekst opravila na danem indeksu in zaključi urejanje
function spremeniOpravilo(index, novTekst) {
  opravila[index].tekst = novTekst
  opravila[index].urejanje = false
  pokaziOpravila()
}

// Odstrani opravilo na danem indeksu s seznama
function odstraniOpravilo(index) {
  opravila.splice(index, 1)
  pokaziOpravila()
}