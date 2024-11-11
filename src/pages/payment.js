// pages/payment.js
import PaymentBooking from '../features/payment/PaymentBooking'; // Corrige la ruta si es necesario
import Header from '@/components/Header';


const PagePayment = () => {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const response = await listHotels();
  //       setHotels(response);
  //     } catch (error) {
  //       console.error("Error al obtener los hoteles:", error);
  //     }
  //   };

  //   fetchHotels();
  // }, []);

  return (
    <div>
      <Header/>
      <PaymentBooking/>
    </div>
  );
};

export default PagePayment;
