test("El juego debe iniciar con la palabra secreta guitarra", iniciarJuegoTest)
test("El juego debe iniciar con la palabra secreta gato", iniciarJuegoTest2)

function iniciarJuegoTest() {
  
  const palabraSecreta = "guitarra"
  
  const juego = iniciarAhorcado(palabraSecreta)
  
  const formaDeseada = {
    estado: "jugando",
    letras: ["_", "_", "_", "_", "_", "_", "_", "_"],
    intentosFallidos: []
  }

  expect(juego).toEqual(formaDeseada)
}

function iniciarJuegoTest2() {

  const palabraSecreta = "gato"

  const juego = iniciarAhorcado(palabraSecreta)

  const formaDeseada = {
    estado: "jugando",
    letras: ["_", "_", "_", "_"],
    intentosFallidos: []
  }

  expect(juego).toEqual(formaDeseada)
}

function iniciarAhorcado(palabraSecreta) {

  const listaDeLetras = palabraSecreta.split("")
  const listaDeGuiones = listaDeLetras.map(() => "_")

  return {
    estado: "jugando",
    letras: listaDeGuiones,
    intentosFallidos: []
  }
}