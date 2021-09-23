DocuProyect_Tecnico:

Paso 1
Crear dos carpetas: 
1.- Client : Front
2._ server : Back

Paso 2
1.-Entrar a la carpeta server 
2.-Instalar las dependencias que voy a utilizar para le Back

3.- Crear mi app.js para requerir el express y crear mi puerto 3001
  Revisar : http://localhost:3001/ y en terminal con node app.js

4.- Creo mi carpetas models y routes 

5.- Creo mis archivos para mis  models (productos , ordenes compra , usuario , reseña de productos )


Lista de dependencias a instalar:

1.- npm init -y (Instalar mi PJson)
2.- npm i -S express  (Instalar mi express)
3.- npm i -S sequelize mariadb (conexion con mi base de datos con el back)
4.- npm i -D sequelize-cli  (Cli para no generar manualmente mi base de datos)



Client 
React:
npx create-react-app .