# Ejercicio3Front

Para ejecutar en docker:

Port: 5030

ENV:
      - API_URL=http://localhost:5010

## Docker exec

docker build -t front
docker run --network=nt0 -p 5030:5030 --name front-1 front