# **💪 HW6 | React Intro - Integration**

## **🕒 DURACIÓN ESTIMADA**

3 horas

</br >

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework vamos a crear nuestro proyecto de **Rick and Morty**. Comenzaremos construyendo nuestros primeros componentes: **card**, **cards** y **searchBar**.

> [**Nota**]: todos los componentes que hagamos en esta homework son **`puros`**, por lo tanto, ninguno tiene estado, simplemente reciben datos por props. No te preocupes por el estilo de los componentes, en la siguiente homework vamos a dárselos.

</br >

---

## **📋 INSTRUCCIONES**

## **🚀 PARTE UNO 🚀**

<br />

### **👩‍💻 EJERCICIO 1**

Tu primer paso será ejecutar el comando **`npm install`** para instalar todas las dependencias dentro de esta homework.

En el archivo **`App.js`** ya hay importado 3 componentes: **Card**, **Cards** y **SearchBar**. Estos componentes reciben propiedades y están siendo renderizados en nuestra aplicación.

<br />

---

### **👩‍💻 EJERCICIO 2 | Card**

Dirígete al componente **`Card`** y renderiza las siguientes propiedades de los personajes:

-  **name**: nombre.
-  **status**: status.
-  **species**: especie.
-  **gender**: género.
-  **origin**: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada **`name`**).
-  **image**: imagen.

Además, cuando el usuario haga click en la **X** de "cerrar", debe ejecutarse una función que también viene como props llamada **onClose**.

> [**NOTA**]: por el momento, toda la información de los personajes la vamos a obtener a partir del archivo [**`data.js`**](./src//data.js)

<img src="./img/characterCard.png" height="250px">

<br />

---

### **👩‍💻 EJERCICIO 3 | Cards**

Utilizaremos este componente para renderizar muchos componentes **`Card`**. En otras palabras, este componente será el "_contenedor_" de todas las Cards.

Lo primero que debes hacer es recibir la propiedad **`characters`** mediante las props. Esta propiedad es una arreglo con todos tus personajes. Por cada uno de ellos deberás renderizar un componente **`Card`** pasándole todas las propiedades que ya mencionamos en el ejercicio anterior.

> [**NOTA**]: agrega una propiedad llamada **`key`** y que sea igual al ID del personaje.

> [**NOTA**]: puedes guiarte con la [**`documentación de React`**](https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) para realizar este ejercicio.

<img src="./img/Cards.png" height="250px">

<br />

---

### **👩‍💻 EJERCICIO 4 | SearchBar**

Este componente nos permitirá buscar y agregar nuevos personajes a nuestra aplicación.

Recibe por props una función **`onSearch`**. La función **`onSearch`** se debe ejecutar cuando se haga click en el botón **`Agregar`**.

<img src="./img/SearchBar.png" height="50px">

<br />

---

## **🚀 PARTE DOS 🚀**

<br />

### **¡Listo! Es hora de crear nuestra app...**

¿Ya completaste los puntos anteriores y todo funciona? ¡Perfecto! Ya podemos comenzar a crear nuestra propia app:

1. Dirígete a un nuevo directorio desde tu terminal (por ejemplo, tu escritorio). Allí es dónde crearás tu aplicación.

2. Ahora utiliza **_`CRA`_** (create-react-app) mediante **npx** para crear una nueva app de React:

```bash
npx create-react-app rick_and_morty
```

> [**NOTA**]: para el nombre de tu app no puedes usar mayúsculas ni el símbolo "&".

Al término del proceso, podrás ver que en tu directorio se creó una nueva carpeta llamada "rick_and_morty". Abre esta carpeta con tu Visual Studio Code. Allí encontrarás algo como esto:

<img src="./img/cra_01.png" height="200px">

3. Dentro de esta nueva carpeta ejecuta:

```bash
    npm start
```

> [**NOTA**]: si aún tenemos corriendo el server local de la homework Integration Parte 1, vamos a obtener un error debido a que el puerto predeterminado (3000) está ocupado. Podemos elegir utilizar otro puerto, o terminar el proceso anterior y luego reintentarlo.

Esperamos que se "levante" el servidor local y luego veremos algo así:

<img src="./img/cra_02.gif" height="360px">

<br />

---

Ahora simplemente debes seguir estos pasos:

1. Reemplaza la carpeta **`src`** de tu nuevo proyecto por la que tienes en esta carpeta ([**src**](./src/)).

2. Comprueba que en el navegador deberías ver los cambios.
