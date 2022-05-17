 - Titulo del proyecto: Numen Indumentaria
    - Link repo: https://github.com/cdcalleja/Grupo-1-Proyecto-React

 - Link Deploy a Vercel: https://grupo-1-proyecto-react-hardcodeo.vercel.app/

 - Descripción del Proyecto: Página de indumentaria creada para ofrecer estilos para cada miembro de la familia.

 - Descripción de la/las funciones principales del proyecto: 

      1) Theme Context:

      El Theme Context realizado en el proyecto, consistió en modificar el background color de la app. En este sentido se declaró
      dentro del app.css dos clases (light y dark) que son manipuladas mediante un useState dentro del ThemeProvider del Context Dark/Light. El useState seteó como parámetro de estado inicial el tema en "light".
      Así, lo que se hizo fue que realizar un condicional que, si el theme es estrictamente igual a "light", se modifique el SetTheme a "dark" y, si la condición no se cumple, se setee a light.
      Se pasó como propiedades dentro de data "data" el theme y la función handleTheme.
      La función handleTheme, solamente es utilizada dentro del Componente "Nav" para que el botón asignado maneje la funcionalidad del modo claro/oscuro.

      2) ShopCartContext: 

      El shopCartContext tiene varias funcionalidades:

      Primero dentro del provider creamos 3 useState(el cartCount que inicializa en 0, el cartPrice que tambien inicializa en 0 y el cartInfo que es un array vacio).

      En primer lugar tenemos la función addItem: a esta función se le pasa desestructurados los parámetros que queremos utilizar que son: id, name, price y quantity que vienen dados desde la Línea 65 del componente "Emergente" que a su vez los recibe de su
      componente padre "Productos" en el cuál se realiza un mapeo de la lista a mostrar en dicho slider, mientras que "quantity" es equiparado en la misma linea al contador "cantidad de items".
      Así dentro de esta funcion generamos una variable "duplicate" que va a hacer un find del cartInfo (que es el State que agrega los items al carrito que inicialmente lo generamos como un array vacío). Este find va a buscar todos los id de los items que se repitan y guardarlos en dicha variable.
      Asimismo, generamos una condición el cual decimos que si "duplicate" no es igual a undefined (es decir que está definido porque ya existe) y creamos una generamos una nueva variable "indexOfDuplicate" que en el cartInfo realiza un findIndex que nos permite buscar el índice de un producto que en este caso sea igual al id. Cuando esto de "true" creamos una nueva variable "newQuantity" que va a ser igual a "duplicate.quantity += quantity" para que sepamos la cantidad de elementos del mismo id agregados al carrito.
      Posteriormente, hacemos un splice en el cartInfo para que, utilizando "indexOfDuplicate" ccomo primer valor y 1 como segundo valor indicando la cantidad de items a eliminar y, como tercer parámentro, se pasa la nueva lista con la cantidad de elementos a agregar al carrito equiparando "quantity" a "newQuantity".
      Finalmente seteamos el cartPrice a que sea la multiplicación de la cantidad de items agregados al carrito según el índice, por el precio de cada uno.
      En el else de la condición mencionada lo que se hace es que cuando encuentre un elemento "undefined", es decir un elemento nuevo para agregar al cartInfo, simplemente agregamos esa información dentro de cartInfo mendiante el spreadoperator pasándole id, name, price y quantity, seteando el cartPrice de la misma manera que en la primera condición del if.

      En segundo lugar, tenemos la función "remove" que realiza un filter del cartInfo equiparado a una variable "itemToDelete" que lo que hace es que si el id del item no es estrictamente igual al index que se pasa como parámetro en la función setee el setCartInfo con dicha variable para eliminar un item del carrito. 
      Asimismo, al cartCount se le resta en uno para indicar la eliminación de dicho item.

      En tercer lugar, clearCart va a tener la funcion de retornar el estado del carrito a sus valores iniciales en todas sus funciones, por ello el setCartCount se setea a 0 al igual que el setCartPrice y el setCartInfo se resetea a su array vacio.

       Dentro de la variable "data" se pasa para que los componentes puedan manejar dentro del provider "addItem, remove, cartCount, clearCart, cartInfo y cartPrice". 
       El componente "Carrito" va a manejar "cartCount, cartInfo, remove, clearCart y cartPrice", mientras que el componente "emergente" va a manejar "addItem".


      3) Axios mapeo y Json Server:

      Se instaló Axios y se creó la carpeta server para poder simular el uso del json server para los componentes "Productos" y "Nav" mediante el mapeo de archivos json que se corren localmente mediante la implementación de "json-server --watch xxx.json --port xxx"

 - Librerias utilizadas:
  
    1) Fontawesome
    2) Bootstrap
    3) React-Slick
    4) React-Bootstrap
    5) Axios
    6) Slick-Carousel

- GIF animado mostrando usabilidad del sitio

!(Me)(https://github.com/cdcalleja/Grupo-1-Proyecto-React/blob/3a64ffbe8a4f6447881ae425fe3bf3d0cb25553e/GIF%20Proyecto%20Grupo%201.gif)

-Autores del proyecto:
  1)  Berta Macina
      * linkdin https://www.linkedin.com/in/berta-macina-b3b6596/
      * mail bmacina2018@gmail.com
  2)  Mileydi Moreno
      * linkdin: https://www.linkedin.com/in/mileydi-dayana-moreno-casta%C3%B1o-68302315a/
      * mail: milamoreno91@gmail.com
  3)  Rodrigo De Arteaga
      * linkdin https://www.linkedin.com/in/rdearteaga/
      * mail rodrigodearteaga@gmail.com
  4)  Santiago Ponce
      * linkdin
      * mail
  5)  Christian Calleja
      * linkdin: https://www.linkedin.com/in/christian-daniel-calleja-a7b849221/
      * mail: christiandcalleja@yahoo.com.ar





