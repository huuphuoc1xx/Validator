import './App.css';
import RegisterForm from './components/RegisterForm/';

function App() {
  console.log(DefaultValidator.getInstance(ValidatorType.EMAIL).validate("huuphuoc1xxgmail.com"));
  return (
    <div className="App">
      <header className="App-header">
         <RegisterForm/>
      </header>
    </div>
  );
}

export default App;
