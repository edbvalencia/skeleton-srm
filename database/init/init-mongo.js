db.createCollection('example', { capped: false });

db.example.insert([
  {
    "nombre": "Don Quijote",
    "autor": "Miguel de Cervantes"
  },
  {
    "nombre": "Moby Dick",
    "autor": "Herman Melville"
  },
  {
    "nombre": "Orgullo y prejuicio",
    "autor": "Jane Austen"
  },
  {
    "nombre": "La Odisea",
    "autor": "Homero"
  },
  {
    "nombre": "Hamlet",
    "autor": "William Shakespeare"
  },
  {
    "nombre": "1984",
    "autor": "George Orwell"
  },
  {
    "nombre": "Crimen y castigo",
    "autor": "Fiodor Dostoievski"
  },
  {
    "nombre": "El Principito",
    "autor": "Antoine de Saint-Exupéry"
  },
  {
    "nombre": "Cien años de soledad",
    "autor": "Gabriel García Márquez"
  },
  {
    "nombre": "El Señor de los Anillos",
    "autor": "J.R.R. Tolkien"
  }
]);
