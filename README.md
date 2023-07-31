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
-zapping_challenge_frontend: https://hub.docker.com/r/givemelife/zapping-front

El proyecto se inicia con docker-compose (no es necesario tener este repositorio clonado, ya que las imágenes se obtienen directamente desde dockerhub), el cual se encuentra en la carpeta raíz de este repositorio.
```console
#Para iniciar aplicación
docker-compose up
```

```console
#Para detener y eliminar aplicación
docker-compose down
```






