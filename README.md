# Prueba técnica de QA DEV
Para esta prueba me he basado en la herramienta de Playwright

Los pasos para poder correr estos test, son los siguientes
## A.- Instalar el playwright
<sub>npm init playwright@latest</sub>
## B.- Clonar mi repositorio y añadir los 3 archivos *.spec.ts dentro de la carpeta "tests"
## C.- Ejecutar los tests:

### 1.2 - Test para buscar la palabra 'Automatización' en wikipedia:
<sub>npx playwright test google_wikipedia</sub>
### 1.3.1 - Test para crear un usuario utilizando la API de https://petstore.swagger.io :
<sub>npx playwright test create_search_user</sub>
### 1.3.2 - Test para conseguir y mostrar los nombres de mascotas vendidas e identificar y separar los nombres de las mascotas duplicados:
<sub>npx playwright test findStatus</sub>