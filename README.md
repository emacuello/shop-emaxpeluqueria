# Microservicios de Emax Peluqueria ✂️

Este proyecto es una extensión del turnero que realicé para el M2 del Bootcamp de Henry. Es mi primera aplicación que realizo siguiendo la arquitectura de microservicios. Pueden haber fallos y cosas que no sean correctas, pero esto recién es el comienzo. ¡Espero que sea de su agrado!

## Descripción

El proyecto está completamente bajo el entorno de Node.js. Se usaron los frameworks de NestJs y Express.js. Emax Peluquería es una aplicación en la cual se puede reservar un turno en un negocio con infinita disponibilidad, siempre y cuando sea en el horario laboral que indica el negocio. También, en su página se pueden comprar artículos específicos del negocio. Todo esto es observable en un dashboard de usuario donde se encuentra tu historial de pagos, inclusive.

### Microservicios

1. **API Gateway**: Punto de entrada al backend, recibe las solicitudes del cliente y se encarga de repartir las tareas a los diferentes microservicios. A su vez, cuando se trata del pago, de usuarios de Google, y para la subida de imágenes de perfil de usuario, es este servidor el encargado de hacerlo..
2. **Microservicio de Auth, Users y Appointments**: Se encarga de registrar a los nuevos usuarios en la base de datos encriptando sus contraseñas con Bcrypt, verificar sus credenciales y emitir sus respectivos JWT, crear, modificar y eliminar turnos para los usuarios.
3. **Microservicio de Products**: El microservicio de productos es el encargado de crear, eliminar y modificar los productos para el Ecommerce de la aplicación.
4. **Microservicio de Emails**: El microservicio de correos electrónicos es el encargado de enviar emails cuando un usuario se registra, crea un turno, cancela un turno y realiza una compra exitosa.
5. **Microservicio de AccessTokens**: Este microservicio se encarga de la creación del AccessToken necesario para que el microservicio de correos electrónicos funcione correctamente.

## Diagrama

![Diagrama de microservicios](https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/ypf5twyrewahtu3frvbf)

# Microservicio de Shop-Emax-Peluqueria

## Config

Para probar Shop-Emax-Peluqueria es necesario crear un `.env` en la raíz del proyecto que tengan estos valores:

-   PORT = 1234
-   DB_URI = mongo.uri
-   CLOUDINARY_CLOUD_NAME = cname
-   CLOUDINARY_API_SECRET = csecret
-   CLOUDINARY_API_KEY = capi
-   SECRET_KEY = secret
-   HOST_REDIS = host
-   PORT_REDIS = 1234
-   USERNAME_REDIS = test
-   PASSWORD_REDIS = 1234

## Descripción

El microservicio está creado en NestJS con TypeScript. Se encarga de la creación de productos y responde a las llamadas del Api Gateway mediante mensajes que recibe por Redis. Para almacenar las fotos de los productos utiliza Cloudinary, y para almacenar los datos se usa MongoDB y Mongoose. Solo los administradores pueden crear y modificar productos. La aplicación está dockerizada para su despliegue en Render mediante su imagen de Docker, la cual se actualiza en cada push a la rama principal del repositorio de GitHub con el uso de GitHub Actions. La base de datos está en MongoDB Atlas.
