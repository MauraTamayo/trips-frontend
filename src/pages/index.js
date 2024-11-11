import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirige a la página de login
  }, [router]);

  return null; // Opcional: Muestra un mensaje de carga o deja el componente vacío
}