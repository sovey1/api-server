import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Anthony",
      last_name: "Ricse Perez",
      email: "anthony.ricse@gmail.com",
      password: bcrypt.hashSync("ADMINadmin1", 8),
      isAdmin: true,
      phone: "941593320",
      age: 21,
    },
    {
      name: "Carlos",
      last_name: "Tarmeño",
      email: "carlos.tarmeno@gmail.com",
      password: bcrypt.hashSync("ADMINadmin1", 8),
      isAdmin: true,
      phone: "987654321",
      age: 22,
    },
    {
      name: "Alexander",
      last_name: "Torre",
      email: "alexander.torre@gmail.com",
      password: bcrypt.hashSync("ADMINadmin1", 8),
      isAdmin: true,
      phone: "987654321",
      age: 22,
    },
    {
      name: "Nathaly",
      last_name: "Pichilingue",
      email: "nathaly@gmail.com",
      password: bcrypt.hashSync("ADMINadmin1", 8),
      isAdmin: true,
      phone: "987654321",
      age: 22,
    },
    {
      name: "Prueba",
      last_name: "Pichilingue",
      email: "prueba@gmail.com",
      password: bcrypt.hashSync("TESTtest1", 8),
      isAdmin: false,
      phone: "987654321",
      age: 21,
    },
  ],
  products: [
    {
      title: "Producto1",
      brand: "Scott",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      especification: {
        peso: 10,
        genero: "Hombre",
        garantia: true,
        modelo: "Corvus",
        material: "Acero",
      },

      precio: 10,
      vendido: 10,
      stock: 10,
      discount: 50,
      img: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
    },
    {
      title: "Bicicleta Best Corvus Aro 27.5 Negro",

      brand: "Specialized",
      description:
        "La mejor bicicleta del mundo de los ultimos tiempo con una gran variabilidad de movimiento y mejora en todo sus campos del ciclismo ",
      especification: {
        peso: 10,
        genero: "Hombre",
        garantia: true,
        modelo: "Corvus",
        material: "Acero",
      },

      precio: 20,
      vendido: 20,
      stock: 20,
      discount: 20,

      img: "https://www.tradeinn.com/h/13828/138280931/specialized-bicicleta-mtb-rockhopper-29.jpg",
    },
    {
      title: "Producto3",
      brand: "Orbea bikes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      especification: {
        peso: 10,
        genero: "Hombre",
        garantia: true,
        modelo: "Corvus",
        material: "Acero",
      },

      precio: 30,
      vendido: 30,
      stock: 30,
      discount: 40,
      img: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
    },
    {
      title: "Producto4",
      brand: "Scott",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      especification: {
        peso: 10,
        genero: "Hombre",
        garantia: true,
        modelo: "Corvus",
        material: "Acero",
      },

      precio: 40,
      vendido: 40,
      stock: 0,
      discount: 50,
      img: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
    },
    {
      title: "Producto5",
      brand: "cannondale",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
      especification: {
        peso: 10,
        genero: "Hombre",
        garantia: true,
        modelo: "Corvus",
        material: "Acero",
      },

      precio: 50,
      vendido: 50,
      stock: 50,
      discount: 10,
      img: "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
    },
  ],
};

export default data;
