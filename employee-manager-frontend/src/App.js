import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeForm from './components/EmployeeForm';
import EmployeeView from './components/EmployeeView';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<EmployeeTable />}></Route>
              <Route path="/employees" element={<EmployeeTable />}></Route>
              <Route path="/employee-form/:id" element={<EmployeeForm />}></Route>
              <Route path="/employee-view/:id" element={<EmployeeView />}></Route>
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
