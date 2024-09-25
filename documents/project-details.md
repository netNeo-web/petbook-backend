# PetBook - Aplicación de Servicios para Mascotas 🐾

## Descripción general

PetBook es una aplicación que conecta a usuarios que buscan servicios para sus mascotas con proveedores que los ofrecen. La aplicación permite a los usuarios registrarse, buscar servicios, ofrecer servicios, chatear en tiempo real y gestionar sus perfiles. El objetivo es crear una plataforma amigable y fácil de usar que facilite la interacción entre dueños de mascotas y proveedores de servicios.

---

## 1. Flujo del Usuario

### 1.1 Pantalla de Carga

- **Descripción**: Al abrir la aplicación, se muestra una pantalla de carga con el logo de PetBook y un spinner de carga.
- **Objetivo**: Dar una primera impresión profesional y permitir que la aplicación cargue los recursos necesarios.

### 1.2 Página de Inicio ("¿Qué hacemos hoy?")

- **Opciones**:
  - **Busco un servicio**
  - **Ofrezco un servicio**
- **Elementos adicionales**:
  - **Icono de Menú**: Acceso al menú principal.

### 1.3 Menú Principal

- **Acceso**: Desde el icono de menú en la página de inicio o en otras páginas.
- **Opciones**:
  1. **Login**: Iniciar sesión o registrarse.
  2. **Home**: Regresar a la página de inicio.
  3. **Mi Perfil**: Ver y editar el perfil personal (solo si está logueado).
  4. **Mensajes**: Acceder a las conversaciones de chat.
  5. **Favoritos**: Ver la lista de proveedores favoritos.
- **Elementos del Menú**:
  - **Icono para volver atrás**.
  - **Icono de filtro**: Actualmente solo filtra por ciudades.
  - **Icono para cerrar el menú**.

### 1.4 Funcionalidades del Menú

#### 1.4.1 Login

- **Descripción**: Permite al usuario iniciar sesión o registrarse.
- **Ventana de Login/Registro**:
  - **Cerrar**: Icono para cerrar el proceso.
  - **Formulario de Login**:
    - Email.
    - Contraseña.
    - Botón de "Login".
    - Opción de "Olvidé mi contraseña".
    - Botón de "Registrarse" si no tiene cuenta.
  - **Opciones de OAuth**:
    - Google.
    - Facebook.
    - Otros (si es necesario).

#### 1.4.2 Recuperación de Contraseña

- **Pasos**:
  - Introducir email registrado.
  - Enviar email con instrucciones y token.
  - Página para cambiar contraseña:
    - Nueva contraseña.
    - Confirmación de contraseña.
    - Botón de "Enviar".

#### 1.4.3 Registro de Usuario

- **Formulario de Registro**:
  - Nombre y apellido.
  - Email.
  - Contraseña y confirmación.
  - Ciudad.
  - Descripción breve.
  - Foto de perfil.
  - Información de mascotas:
    - Nombre.
    - Tipo (perro o gato).
    - Foto.
    - Opción para agregar más mascotas.
  - Selección de servicios que ofrece (opcional):
    - Veterinario.
    - Catsitter.
    - Dogsitter.
    - Entrenador.
    - Peluquero.
    - Otros.
  - Botón de "Crear".

#### 1.4.4 Mi Perfil

- **Elementos**:
  - Foto de perfil.
  - Nombre y apellido.
  - Ciudad.
  - Descripción personal.
  - Servicios que ofrece (si aplica).
  - Valoraciones (estrellas).
  - Lista de mascotas (si tiene).
  - Botones:
    - Editar perfil.
    - Ver comentarios recibidos.
    - Acceder a mensajes.
- **Edición de Perfil**:
  - Permite modificar los datos introducidos.
  - Opción para cambiar la contraseña.

#### 1.4.5 Mensajes

- **Descripción**: Lista de chats del usuario.
- **Elementos**:
  - Lista de conversaciones:
    - Foto y nombre del contacto.
    - Último mensaje y fecha.
    - Indicador de mensajes no leídos.
- **Funciones**:
  - Abrir una conversación.
  - Filtrar chats por ciudad (futuro).

#### 1.4.6 Favoritos

- **Descripción**: Lista de proveedores marcados como favoritos.
- **Funciones**:
  - Ver perfil del proveedor.
  - Iniciar chat.

### 1.5 Búsqueda de Servicios

#### 1.5.1 Selección de Servicios

- **Descripción**: Al seleccionar "Busco un servicio", se muestra una lista de servicios disponibles.
- **Elementos**:
  - Lista de servicios con checkbox (máximo 3).
  - Botón de "Buscar".
  - Iconos:
    - Menú.
    - Volver atrás.
    - Filtro (por ciudad).

#### 1.5.2 Resultados de Búsqueda

- **Descripción**: Lista de proveedores que ofrecen los servicios seleccionados.
- **Elementos**:
  - Cards de proveedores:
    - Foto de perfil.
    - Nombre.
    - Ciudad.
    - Valoración (estrellas).
    - Icono de corazón para marcar como favorito.
- **Funciones**:
  - Ver perfil detallado del proveedor.
  - Marcar o desmarcar como favorito.

### 1.6 Oferta de servicios

- **Descripción**: El usuario puede acceder a ofrecer servicios en la app.

- **Funciones**:
  - Si el usuario esta autentificado, muestra su perfil personal
  - Si el usuario no esta autentificado, lo invita a registrarse o autentificarse

### 1.7 Perfil del Proveedor

- **Elementos**:
  - Foto de perfil.
  - Nombre y apellido.
  - Ciudad.
  - Descripción del proveedor.
  - Servicios que ofrece.
  - Valoración media.
  - Botones:
    - Marcar como favorito.
    - Ver comentarios.
    - Iniciar chat.
- **Comentarios**:
  - Lista de comentarios de otros usuarios.
  - Opción para dejar un comentario y valoración (solo usuarios registrados).

---

## 2. Estructura de la Aplicación

### 2.1 Frontend

- **Tecnologías**:
  - **Framework**: React.js
  - **Estilos**: CSS Vanilla
  - **Ruteo**: React Router
  - **Estado Global**: Zustand
  - **Comunicación con Backend**: Axios
- **Componentes Principales**:
  - Pantalla de carga.
  - Pantala de error.
  - Pantalla de confirmación
  - Página de inicio.
  - Menú lateral o superior.
  - Formularios (login, registro, recuperación de contraseña).
  - Listas de servicios y proveedores.
  - Perfil de usuario y proveedor.
  - Chat en tiempo real (uso de Socket.io client).
  - Sistema de comentarios y valoraciones.

### 2.2 Backend

- **Tecnologías**:
  - **Servidor**: Node.js con Express.js
  - **Base de Datos**: Base de datos relacional (PostgreSQL)
  - **ORM**:TypeORM
  - **Autenticación**:
    - JWT para autenticación de sesiones.
    - OAuth 2.0 para login con Google y Facebook (usando Passport.js).
  - **Almacenamiento de Imágenes**:
    - Almacenamiento en la nube (por ejemplo, AWS S3 o Cloudinary).
  - **Chat en Tiempo Real**:
    - Socket.io
- **Estructura del Servidor**:
  - **Rutas (Endpoints)**:
    - Autenticación y usuarios.
    - Servicios.
    - Proveedores.
    - Mascotas.
    - Comentarios.
    - Chats.
  - **Controladores**: Lógica de negocio para cada ruta.
  - **Modelos**: Definición de tablas y relaciones en la base de datos.
  - **Middleware**: Autenticación, manejo de errores, validaciones.
  - **Servicios**: Integraciones con terceros (almacenamiento de imágenes, envío de emails).
  - **Configuración**: Variables de entorno, configuración de base de datos.

---

## 3. Base de Datos Relacional

### Recomendación: **PostgreSQL**

- **Razones**:
  - Soporte robusto para transacciones y consultas complejas.
  - Compatibilidad con JSON para campos flexibles.
  - Amplio soporte en la comunidad y buena documentación.

### Esquema de la Base de Datos

#### Tablas Principales

1. **Usuarios**

   - `id` (PK)
   - `nombre`
   - `apellido`
   - `email` (único)
   - `password` (hasheada)
   - `ciudad`
   - `descripcion`
   - `foto_perfil` (URL)
   - `fecha_creacion`
   - `fecha_actualizacion`

2. **Mascotas**

   - `id` (PK)
   - `usuario_id` (FK a Usuarios)
   - `nombre`
   - `tipo` (ENUM: 'perro', 'gato')
   - `foto` (URL)

3. **Servicios**

   - `id` (PK)
   - `nombre` (por ejemplo, 'Veterinario', 'Dogsitter', etc.)

4. **Usuarios_Servicios** (Tabla intermedia para relación muchos a muchos)

   - `usuario_id` (FK a Usuarios)
   - `servicio_id` (FK a Servicios)

5. **Proveedores_Favoritos**

   - `usuario_id` (FK a Usuarios)
   - `proveedor_id` (FK a Usuarios)

6. **Comentarios**

   - `id` (PK)
   - `usuario_id` (autor, FK a Usuarios)
   - `proveedor_id` (FK a Usuarios)
   - `comentario`
   - `valoracion` (1 a 5 estrellas)
   - `fecha_creacion`

7. **Chats**

   - `id` (PK)
   - `usuario1_id` (FK a Usuarios)
   - `usuario2_id` (FK a Usuarios)
   - `fecha_creacion`

8. **Mensajes**

   - `id` (PK)
   - `chat_id` (FK a Chats)
   - `remitente_id` (FK a Usuarios)
   - `contenido`
   - `fecha_envio`

9. **Tokens_Recuperacion**
   - `id` (PK)
   - `usuario_id` (FK a Usuarios)
   - `token`
   - `fecha_creacion`
   - `fecha_expiracion`

### Relaciones entre Tablas

- **Usuarios** y **Mascotas**: Relación uno a muchos.
- **Usuarios** y **Servicios**: Relación muchos a muchos (un usuario puede ofrecer varios servicios, y un servicio puede ser ofrecido por varios usuarios).
- **Usuarios** y **Proveedores_Favoritos**: Relación muchos a muchos (un usuario puede tener varios proveedores favoritos).
- **Usuarios** y **Comentarios**: Relación uno a muchos (un usuario puede escribir múltiples comentarios).
- **Usuarios** y **Chats**: Relación muchos a muchos (mediante la tabla **Chats**).
- **Chats** y **Mensajes**: Relación uno a muchos.

---

## 4. Rutas del Backend (Endpoints)

### Autenticación y Usuarios

- **POST /auth/register**: Registro de nuevo usuario.
- **POST /auth/login**: Inicio de sesión.
- **POST /auth/oauth**: Inicio de sesión con OAuth.
- **POST /auth/logout**: Cierre de sesión.
- **POST /auth/password-reset**: Solicitar recuperación de contraseña.
- **POST /auth/password-reset/confirm**: Confirmar cambio de contraseña.

### Usuarios

- **GET /users/:id**: Obtener perfil de usuario.
- **PUT /users/:id**: Actualizar perfil de usuario.
- **DELETE /users/:id**: Eliminar cuenta de usuario.

### Mascotas

- **POST /pets**: Agregar una mascota.
- **GET /pets/:id**: Obtener información de una mascota.
- **PUT /pets/:id**: Actualizar información de una mascota.
- **DELETE /pets/:id**: Eliminar una mascota.

### Servicios

- **GET /services**: Listar servicios disponibles.
- **POST /user-services**: Agregar servicios que ofrece un usuario.
- **DELETE /user-services/:id**: Eliminar un servicio ofrecido por un usuario.

### Búsqueda de Proveedores

- **GET /providers**: Buscar proveedores según servicios y ubicación.
  - Parámetros de consulta: `servicios`, `ciudad`, `pagina`, `limite`.

### Favoritos

- **POST /favorites**: Agregar un proveedor a favoritos.
- **GET /favorites**: Listar proveedores favoritos.
- **DELETE /favorites/:id**: Eliminar un proveedor de favoritos.

### Comentarios

- **POST /comments**: Dejar un comentario a un proveedor.
- **GET /comments/provider/:id**: Obtener comentarios de un proveedor.

### Chats y Mensajes

- **POST /chats**: Iniciar un chat con otro usuario.
- **GET /chats**: Obtener lista de chats del usuario.
- **GET /chats/:id/messages**: Obtener mensajes de un chat.
- **POST /chats/:id/messages**: Enviar un mensaje en un chat.

---

## Consideraciones Adicionales

- **Autenticación y Seguridad**:
  - Uso de JWT para sesiones.
  - Hash de contraseñas con bcrypt.
  - Validación y sanitización de datos de entrada.
- **Almacenamiento de Imágenes**:
  - Uso de servicios como Cloudinary para facilitar el manejo de imágenes.
- **Internacionalización**:
  - Soporte para español e inglés.
- **Cache y Rendimiento**:
  - Implementación de caché en consultas frecuentes.
  - Uso de Redis (opcional) para mejorar rendimiento.
- **Chat en Tiempo Real**:
  - Implementación con Socket.io para comunicación bidireccional.
- **Pruebas y Calidad**:
  - Pruebas unitarias y de integración.
  - Uso de herramientas como ESLint y Prettier para mantener el código limpio.

---
