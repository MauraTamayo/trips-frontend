export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Redirige las solicitudes al backend de Spring Boot
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
            value: 'http://localhost:3000', // Permite el origen exacto
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE', // Métodos permitidos
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization', // Encabezados permitidos
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true', // Permitir credenciales (cookies)
          },
        ],
      },
    ];
  },
};
