let opravila = [
  {
      tekst: "Naredi domačo nalogo",
      opravljeno: false,
      urejanje: false
  }, 
  {
      tekst: "Uči se za izpit",
      opravljeno: false,
      urejanje: false
  },
  {
      tekst: "Ponovi vajo iz programiranja",
      opravljeno: false,
      urejanje: false
  }
]

pokaziOpravila()

document.querySelector('#dodaj-button').addEventListener('click', function() {
  let dodajInput = document.querySelector('#dodaj-input')
  let novoOpravilo = dodajInput.value
  dodajOpravilo(novoOpravilo)
  dodajInput.value = ""
})