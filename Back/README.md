<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.linkedin.com/in/julian-pacheco-/">
    <img src="images/logo.png" alt="Logo" width="300">
  </a>

<h3 align="center">BACKEND ECOMMERCE LIBRANDO BOOKSTORE</h3>

  <p align="center">
    Proyecto de ecommerce para bootcamp Plataforma 5
    <br />
    <a href="https://github.com/julianpacheco1/Librando/tree/main/Back"><strong>Explora el proyecto »</strong></a>
    <br />
    <br />
    <a href="https://www.linkedin.com/in/julian-pacheco-/">Reportar un bug</a>
    ·
    <a href="https://www.linkedin.com/in/julian-pacheco-/">Solicitar una feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#stack-de-tecnologías">Stack de tecnologías</a></li>
      </ul>
    </li>
    <li>
      <a href="#empezando">Empezando</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-requisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#metodos-de-api">Metodos de API</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuye">Contribuye</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

<img src="images/project.png" alt="Logo" width="100%">

“Librando” es un proyecto de e-commerce de venta de novelas.
Los usuarios podrán registrarse y navegar a través de las categorías de géneros de novelas, realizar búsquedas y comprar sus novelas favoritas fácilmente.
También contará con un módulo administrador que permitira gestionar toda la base de datos del sitio.


<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>



### Stack de tecnologías

* NodeJS
* Nodemon
* Express
* Sequelize
* Postgres
* Voleyball
* Bcrypt
* JWT
* Handlebars
* Nodemailer
* FS


<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>


<!-- GETTING STARTED -->
## Empezando

Actualmente la base de datos se encuentra totalmente de manera local. Por lo tanto, deberás seguir estas instrucciones para levantar el proyecto de backend.

### Pre-requisitos

Deberas complir los siguientes pre-requisitos para poder utilizar este proyecto
* DB: Crea la DB utilizando psql
  ```sh
  createdb librando
  ```

### Instalación

1. Clona el repositorio en tu local
   ```sh
   git clone https://github.com/julianpacheco1/Librando.git
   ```
2. Instala las dependencias NPM 
   ```sh
   npm install
   ```
3. Seedea la base de datos
   ```sh
   npm run seed
   ```
4. Levanta el servidor
   ```sh
   npm run server
   ```

<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>



<!-- API  -->
## Metodos de API

<img src="https://cdn.shopify.com/s/files/1/0057/5668/2355/files/Postman-logo-orange-2021_1155x.png?v=1637252529" alt="Logo" width="40%">

Puedes ver todos los metodos de la API descargando la [colección de POSTMAN](https://www.getpostman.com/collections/7cf61cf99122ccd4181f)

<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Modulo de usuario
    - [x] Registrarse
    - [x] Login/Logout
    - [x] Persistencia de carrito y de usuario
    - [x] Buscar libros por autor y nombre del libro
    - [x] Navegar por las categorias
    - [x] Ver los detalles del libro
    - [x] Dejar una review de un libro comprado
    - [x] Recibir correos de confirmación
    - [x] Cerrar una compra
    - [x] Ver datos de usuario
    - [x] Ver compras anteriores
    
- [x] Modulo de administrador
    - [x] Ver todos los usuarios
    - [x] Promover usuarios a admin
    - [x] Eliminar usuarios
    - [x] Ver todas las ordenes
    - [x] Modificar una orden
    - [x] Agregar, editar y eliminar libros del catalogo
    - [x] Agregar, editar y eliminar generos del catalogo (categorias)
    
 - [ ] Otros
    - [ ] OAuth2


<p align="right">(<a href="#readme-top">volver a arriba</a>)</p>
