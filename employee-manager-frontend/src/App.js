import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<EmployeeTable />}></Route>
              <Route path="/employees" element={<EmployeeTable />}></Route>
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
