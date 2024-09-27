# Proyecto: PetBook - Aplicación de Servicios para Mascotas 🐾

## Descripción general

PetBook es una aplicación colaborativa que conecta usuarios que buscan servicios para sus mascotas con proveedores que los ofrecen. La plataforma está diseñada para facilitar la búsqueda y contratación de servicios como veterinarios, cuidadores de perros y gatos, entrenadores, y otros servicios relacionados con mascotas. Habrá dos tipos de usuarios principales: aquellos que buscan un servicio y aquellos que ofrecen un servicio. La app tendrá un sistema de perfiles diferenciados, un chat en tiempo real para la comunicación entre usuarios, geolocalización, y otras funcionalidades esenciales.

---

## 1. Funcionalidades Clave de la Aplicación

### 1.1 Tipos de Usuarios

- **Usuario que busca un servicio**:

  - Creará un perfil que incluye: nombre, apellido, correo, ciudad, foto personal, nombre de la mascota, foto de la mascota, especificando si es perro o gato. Puede agregar más de una mascota.
  - Podrá buscar servicios en su área o en otra ciudad, elegir hasta 3 servicios y visualizar los perfiles de proveedores cercanos.
  - Podrá seleccionar proveedores favoritos (solo disponible si está logueado) y ver reseñas de otros usuarios.
  - Funcionalidades adicionales: comentar sobre un proveedor y chatear en tiempo real con los mismos.

- **Usuario que ofrece un servicio**:

  - Creará un perfil que incluye: nombre, apellido, email, breve descripción, servicios ofrecidos (veterinario, cuidador de perros/gatos, entrenador, peluquería, paseo de perros, guardería de mascotas), ciudad y una foto de perfil.
  - Podrá gestionar su perfil, responder mensajes, y ver comentarios de los usuarios.
  - Funcionalidades adicionales: modificar la lista de servicios ofrecidos, ver chats en tiempo real, leer y responder comentarios de clientes.

---

### 1.2 Flujo de la Aplicación

1. **Página de Inicio**:

   - Pantalla de carga con el logo de la aplicación.
   - Opciones de registro y login (incluye autenticación con terceros vía OAuth).
   - Acceso directo a la app con la opción de navegación sin registro.

2. **Página "¿Qué hacemos hoy?"**:

   - Dos opciones: "Busco un servicio" o "Ofrezco un servicio".

3. **Búsqueda de servicios**:

   - Si elige "Busco un servicio", se le muestra la opción "¿Qué servicio buscas?" con varias categorías de servicios. Después de seleccionar hasta 3 servicios, la app buscará proveedores basados en su ubicación o la ciudad que elija.

4. **Perfil del Proveedor**:

   - Cada proveedor tendrá una **card** con detalles básicos. Al seleccionar un proveedor, se mostrará información más detallada (descripción, servicios, comentarios de clientes, y opción de chatear).

5. **Chat en tiempo real**:

   - Mensajería instantánea entre usuarios y proveedores. Los usuarios pueden ver los mensajes más recientes en la lista de chats y acceder a conversaciones detalladas.

6. **Gestión de Perfil para Proveedores**:

   - Proveedores pueden modificar su perfil, responder a chats, y ver comentarios de clientes.

7. **Otras Características**:
   - **Geolocalización** para mostrar proveedores cercanos.
   - **Almacenamiento externo** de imágenes (fotos de usuarios y mascotas).
   - **Favoritos**: Los usuarios logueados podrán marcar proveedores como favoritos.
   - **Idiomas**: Disponibilidad en español e inglés.
   - **Cache Avanzado** para mejorar el rendimiento y las búsquedas.

---

## 2. Arquitectura Técnica

### 2.1 Frontend

- **React.js** con **CSS Vanilla** para crear una interfaz de usuario moderna y responsive.
- **React Router** para la navegación entre páginas.
- **Axios** para la comunicación con el backend.
- **Context API** o **Redux** o **Zustand** para manejar el estado global de la aplicación.

### 2.2 Backend

- **Node.js** con **Express** y **TypeScript** para el manejo del servidor y las APIs.
- **PostgreSQL** con **TypeORM** como base de datos, ideal para manejar relaciones entre usuarios, mascotas y servicios.
- **WebSockets (Socket.io)** para implementar el chat en tiempo real.
- **OAuth (Google, Facebook)** para el inicio de sesión con terceros.
- **AWS S3** u otro para el almacenamiento externo de imágenes.

---

## 3. Base de Datos

La base de datos será **PostgreSQL** por su compatibilidad con el modelo relacional y escalabilidad. Aquí está un esquema entidad-relacion propuesto para la estructura de las tablas de la BD:

- **Usuarios (Tabla)**:

  - `id`: **PK** **INIQUE**
  - `nombre`: String
  - `apellido`: String
  - `email`: String **UNIQUE**
  - `password`: String (hasheada)
  - `ciudad`: String
  - `tipoUsuario`: Enum (`"cliente"`, `"servicio"`)
  - `fotoPerfil`: URL de la imagen
  - `mascotas[]`: Array de objetos (solo para clientes)
  - `serviciosOfrecidos[]`: Array de strings (solo para proveedores)
  - `descripcion`: String (solo para proveedores)
  - `chats[]`: Array de ids de conversaciones
  - `favoritos[]`: Array de ids de proveedores favoritos (solo para clientes)
  - `comentariosRecibidos[]`: Array de ids de comentarios

- **Mascotas (Tabla)**:

  - `id`: **PK** **INIQUE**
  - `nombre`: String
  - `tipo`: Enum (`"perro"`, `"gato"`)
  - `foto`: URL de la imagen
  - `usuarioID`: **FK**

- **Servicios (Tabla)**:

  - `id`: **PK** **INIQUE**
  - `tipo`: Enum (`"veterinario"`, `"cuidador"`, `"paseador"`, `"entrenador"`, `"peluquería"`, `"guardería"`)
  - `usuarioID`: **FK**

- **Chats (Tabla)**:

  - `id`: **PQ** **INIQUE**
  - `usuarios[]`: Array de ids de los participantes
  - `mensajes[]`: Array de objetos

- **Mensajes (Tabla)**:

  - `id`: **PQ** **INIQUE**
  - `usuarioId`: **FK** id del usuario
  - `texto`: String
  - `fecha`: Timestamp

- **Comentarios (Tabla)**:
  - `id`: **PQ** **INIQUE**
  - `usuarioId`: **FK** id del autor
  - `proveedorId`: **FK** id del proveedor al que va dirigido
  - `comentario`: Texto
  - `fecha`: Timestamp

---

## 3. Rutas del Backend

### Autenticación

- `POST /auth/register`: Registrar un nuevo usuario.
- `POST /auth/login`: Iniciar sesión.
- `POST /auth/oauth`: Iniciar sesión con OAuth (Google/Facebook).
- `POST /auth/logout`: Cerrar sesión.

### Usuarios

- `GET /users/:id`: Obtener la información de un usuario.
- `PUT /users/:id`: Actualizar el perfil de un usuario (buscador o proveedor).
- `GET /users`: Buscar usuarios (filtros por servicio, ubicación, etc.).

### Servicios

- `GET /services`: Obtener todos los servicios disponibles.
- `GET /services/:id`: Obtener detalles de un servicio.

### Comentarios

- `POST /comments`: Agregar un comentario.
- `GET /comments/:providerId`: Obtener comentarios de un proveedor.

### Chats

- `POST /chats`: Crear una nueva conversación.
- `GET /chats`: Obtener todas las conversaciones de un usuario.
- `POST /chats/:id/messages`: Enviar un mensaje en una conversación existente.
- `GET /chats/:id`: Obtener todos los mensajes de una conversación.
