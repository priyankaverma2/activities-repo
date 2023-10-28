import './App.css';
import { Routes,Route} from "react-router-dom";
import CustomerDashboard from './components/CustomerDashboard';
import EmployeeDash from './components/EmployeeDash';
import Registration from './components/Registration';
import CustomerLogIn from './components/CustomerLogIn';
import EmployeeLogin from './components/EmployeeLogin';
import LoanList from './components/LoanList';
import LoanStatus from './components/LoanStatus';
function App() {
  return (
    <div className='container-fluid'>
    <div className='alert alert-secondary'>
    <h2 className='text-center'>Loan Application</h2>
    
    </div>
    <div>
<Routes>
<Route path='' element={<CustomerLogIn/>}></Route>
<Route path='/login' element={<CustomerLogIn/>}></Route>
<Route path='/EmployeeLogin' element={<EmployeeLogin/>}></Route>
<Route path='/register' element={<Registration/>}></Route>
<Route path='/EmployeeDashboard/:emailId/*' element={<EmployeeDash/>}></Route>
<Route path='/CustomerDashboard/:emailId/*' element={<CustomerDashboard/>}></Route>
<Route path='/view-loans' element={<LoanList/>}></Route>
<Route path='/loan-status' element={<LoanStatus/>}></Route>
</Routes>
    </div>
      </div>
  );
}

export default App;
