module.exports = function () {
  var data = {
    users: [
      {
        id:1,
        nameUser: "Luis Pérez Reyes",
        typeUser: "padre de familia",
        emailUser:"lperez@gmail.com",
        passwordUser: "123%&",
        districUser:"San Juan de Lurigancho",
        ageUser: 27
      },

      {
        id:2,
        nameUser: "Camilo andrade Guerra",
        typeUser: "colegial",
        emailUser:"Camilo@gmail.com",
        passwordUser: "123%&",
        districUser:"Los Olivos",
        ageUser: 17
      },
      {
        id:3,
        nameUser: "Rosa del Campo Reyes",
        typeUser: "padre de familia",
        emailUser:"Rosa@gmail.com",
        passwordUser: "123%&",
        districUser:"San Isidro",
        ageUser: 27
      },
      {
        id:4,
        nameUser: "Karina Cano Cardenas",
        typeUser: "colegial",
        emailUser:"karina@gmail.com",
        passwordUser: "123%&",
        districUser:"San Miguel",
        ageUser: 14
	},
  {
    id:5,
    nameUser: "Luis Pérez Reyes",
    typeUser: "Padre de Familia",
    emailUser:"lperez@gmail.com",
    passwordUser: "123%&",
    districUser:"San Juan de Lurigancho",
    ageUser: 27
}
    ],
    colegios:[
      {
        id: 1,
        nameBook: "Las leyes",
	      nHojas: "145",
        publicationDateAuthor: "2022-09-09",
        author:
        {
          id:1,
          nameAuthor: "Luis Pérez Reyes",
          birthDateAuthor: "2000-09-10",
          emailAuthor:"lperez@gmail.com",
        }
      },
      {
        id: 2,
        nameBook: "Programacion",
	      nHojas: "255",
        publicationDateAuthor: "2020-01-10",
        author:
        {
          id:1,
          nameAuthor: "Jorge Cueva Gutierres",
          birthDateAuthor: "1990-09-10",
          emailAuthor:"JCueva@gmail.com",
        }
      }
    ]
  }
  return data
}
