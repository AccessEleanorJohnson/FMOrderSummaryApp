import Card from './components/elements/Card';
import OrderSummary from './components/OrderSummary';
import './App.css';

function App() {
  return (
    <div class='app'>
      <Card className='order-summary__card'>
        <OrderSummary>
        </OrderSummary>
      </Card>
    </div>
  );
}

export default App;
