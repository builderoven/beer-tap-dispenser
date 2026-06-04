# Beer Tap Dispenser

Frontend para un sistema de dispensadores de cerveza. Selecciona un dispensador, mantenlo pulsado para servirte y suelta para cerrar el grifo.

## Tecnologías

- **Frontend:** React + TypeScript + Next.js + Tailwind CSS
- **Backend:** Java + Spring Boot + PostgreSQL
- **Hosting:** Cloudflare Pages (frontend), Railway (backend)

## Desarrollo

He usado Java + Spring Boot para el backend, con lo que me siento más cómodo y además lo que ya tenía instalado en mi PC. Para front, lo que se pedía de React + TS + Next.js, usando Tailwind.

Empezamos creando el backend estrictamente como se pide en la práctica. Usamos JUnit para los tests.

Para el diseño de la aplicación he intentado basarme en dispensadores que me he podido encontrar. Decido hacer una página principal para el usuario donde seleccionar un dispensador de un listado horizontal que se puede ir moviendo. Al seleccionar uno podemos abrir o cerrar el grifo.

Tenemos el panel de administración con botones para añadir dispensador o consultar sus usos. Creamos un componente de rutas protegidas para la sección de administración.

Basándome en posibles modelos reales, me parece buena idea que el dispensador funcione con el ratón down/up.

Lo siguiente no sigue las especificaciones al 100%, pero me parecen detalles que pueden aportar. Decido añadirle un campo de nombre a los dispensadores, que lo hace más visual en la aplicación y permite una mejor identificación para el usuario.

Para el listado de dispensadores necesitamos un endpoint nuevo que retorne todos los dispensadores, lo creamos también.

## Instalación/Deploy

Me parece un poco engorroso tener que instalar desde el repositorio con instrucciones, por eso lo dejo desplegado online para que se pueda usar con más comodidad.

- **Frontend:** [beer-tap-dispenser.pages.dev](https://beer-tap-dispenser.pages.dev)
- **Backend:** [web-production-b8ed9.up.railway.app](https://web-production-b8ed9.up.railway.app)

## Pasos pendientes

Falta crear la consulta de usos de los dispensadores. La idea sería un botón similar al de crear dispensador; al hacer clic sale una lista como la de la página principal y al seleccionar un dispensador nos muestra la información de éste.
