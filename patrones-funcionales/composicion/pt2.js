const users = [
  { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
  { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
  { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
  { edad: 1, nombre: 'Sofia', apellido: 'Zapata'},
]

const head = xs => xs[0]

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traerPrimerInfante = data => formato(formateo(head(data.filter(x => x.edad < 2))));
