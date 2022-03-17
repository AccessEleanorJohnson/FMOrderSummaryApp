import Card from './components/elements/Card';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <div class='bg-mobile sm:bg-desktop bg-no-repeat [background-size:100%_50vh] bg-pale-blue w-100 h-screen p-6'>
      <Card className='bg-white m-auto max-w-[450px] max-h-[700px]'>
        <OrderSummary>
        </OrderSummary>
      </Card>
    </div>
  );
}

export default App;
