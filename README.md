# challenge-zapping
Servicios y aplicaciones para challenge de zapping

## Carpetas
- auth: Aplicación para autenticar con Node y ExpressJS utilizando JWT y mongoDB
- go_filesystem: Filesystem con los archivos m3u8 en GoLang. Uso de librería m3u8 para edición y creación de archivos en dicho formato
- zapping_challenge_frontend: Aplicación web creada con el framework VueJS y la librería de componentes Vuetify.

## Ejecución del proyecto
Cada proyecto tiene una imagen docker disponible en Dockerhub actualizadas con las últimas versiones contenidas en este repositorio.
- auth: https://hub.docker.com/r/givemelife/express-auth
- go_filesystem: https://hub.docker.com/r/givemelife/go-filesystem
- zapping_challenge_frontend: https://hub.docker.com/r/givemelife/zapping-front

El proyecto se inicia con docker-compose (no es necesario tener este repositorio clonado, ya que las imágenes se obtienen directamente desde dockerhub), el cual se encuentra en la carpeta raíz de este repositorio.
```console
#Para iniciar aplicación
docker-compose up
```

```console
#Para detener y eliminar aplicación
docker-compose down
```

## Significado íconos
- <img src="https://github.com/giveMeLife/challenge-zapping/blob/main/account-plus.png" width=5% height=5%> Creación de nuevo usuario.
- <img src="https://github.com/giveMeLife/challenge-zapping/blob/main/login.png" width=5% height=5%> Login.
- <img src="https://github.com/giveMeLife/challenge-zapping/blob/main/filmstrip.png" width=5% height=5%> Reproductor de videos. Se puede ingresar el link a un archivo m3u8 para que lo reproduzca.
    - URLs de ejemplo:
      -   Live Streaming: https://live-par-1-abr-cdn.livepush.io/live_abr_cdn/emaIqCGoZw-6/index.m3u8
      -   On Demand: https://live-par-2-abr.livepush.io/vod/bigbuckbunny/index.m3u8
- <img src="https://github.com/giveMeLife/challenge-zapping/blob/main/video-box.png" width=5% height=5%> Stream simulado de video.

## Simulación livestreaming
Para el stream simulado de video, se crea una funcion en Go que se llama cada vez que se invoca la url del filesystem. Esta función elimina el primer segmento del archivo m3u8 y agrega un nuevo segmento al final del archivo. Para simular el livestreaming, en el front-end, se llama a la función setInterval() cada 10 segundos para que vuelva a renderizar el componente que contiene el reproductor de vídeo, volviendo a llamar la URL del filesystem lo que genera que se edite el archivo m3u8.






