export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Redirige las solicitudes al backend de autenticación en el puerto 8080
      }
      ,
      {
        source: '/hotels/:path*',
        destination: 'http://localhost:8088/api/:path*', // Redirige las solicitudes al servicio de hoteles en el puerto 8088
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permitir cualquier origen
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE', // Métodos permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type', // Encabezados permitidos
          },
        ],
      },
      {
        source: '/hotels/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permitir cualquier origen
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE', // Métodos permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type', // Encabezados permitidos
          },
        ],
      },
    ];
  },
};
