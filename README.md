# MovieListFirebase

Este proyecto consiste en una aplicación web que muestra una lista CRUD de películas. Hace uso de HTML5/CSS/TypeScript junto al framework Angular y la Base de Datos Firebase (Realtime Database).

Los componentes son los siguientes:

-HomeComponent: Componente principal a mostrar al usuario.

-GeneralViewComponent: Componente que posee la lista sobre la que hacer CRUD. Se han inicializado una serie de películas de Star Wars a modo de ejemplo.

-DetailViewComponent: Componente que contiene una descripción, en detalle, de una película concreta.

-CreateFormComponent: Componente que consiste en un formulario para añadir una película.

-ModifyFormComponent: Componente que consiste en un formulario para modificar una película.

-PageNotFoundComponent: Componente que se usa para mostrar un mensaje al usuario cuando el enrutamiento es inválido.

-DeleteMessageComponent: Componente que consiste en mensaje informativo al usuario cuando borra con éxito una película.

Su objetivo es aprender sobre la implementación de conexiones con Base de Datos en Firebase evolucionando la aplicación similar desarrollada para que admita en este proyecto dichas operaciones con Base de Datos. La aplicación posee, además, las siguientes características de Angular:

-Navegación-Routing: dispone de un menú de navegación entre HomeComponent, GeneralViewComponent y CreateFormComponent y de routing para los componentes CreateFormComponent, ModifyFormComponent y DeleteMessageComponent.

-Anidamiento de componentes: GeneralViewComponent es padre de DetailViewComponent.

-Servicios: se dispone de un servicio denominado DatabaseService para realizar las operaciones CRUD con Base de Datos.

URL: https://javiersuarezsuarez.github.io/AngularMovieListFirebase/

¡Espero que la disfrutes!
