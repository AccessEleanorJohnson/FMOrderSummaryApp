import { Route, Routes, Navigate } from 'react-router-dom';
import Card from './components/elements/Card';
import OrderSummary from './components/OrderSummary';
import PaymentComplete from './components/PaymentComplete';


function App() {
  return (
    <div className='bg-mobile sm:bg-desktop bg-no-repeat [background-size:100%_50vh] bg-pale-blue w-100 h-screen p-6'>
      <Card className='bg-white m-auto max-w-[450px] min-h-[700px]'>
        <Routes>
        <Route path='/FMOrderSummaryApp' element={<Navigate to='/FMOrderSummaryApp/order' />} replace />
          <Route path='/FMOrderSummaryApp/order' element={<OrderSummary />} />
          <Route path='/FMOrderSummaryApp/confirmation' element={<PaymentComplete />} />
        </Routes>
      </Card>
    </div>
  );
}

export default App;
