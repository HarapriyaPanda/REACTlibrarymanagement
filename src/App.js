import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login';
import Signa from './Signa';
import Signup from './Login/Signup';
import Admin from './Admin/Admin';
import ATeacher from './Admin/ATeacher';
import ABook from './Admin/ABook';
import AStudent from './Admin/AStudent';
import Addadmin from './Admin/Addadmin';
import AGreviance from './Admin/AGreviance';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import AddBook from './Book/AddBook';
function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signa/>}>
        <Route index element={<Login/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path='/AStudent' element={<AStudent/>}/>
        <Route path="/ATeacher" element={<ATeacher/>}/>
        <Route path="/ABook" element={<ABook/>}/>
        <Route path="/Addadmin" element={<Addadmin/>}/>
        <Route path="/Teacher" element={<Teacher/>}/>
        <Route path="/Student" element={<Student/>}/>
        <Route path="/AddBook" element={<AddBook/>}/>
      </Route>
    </Routes>
    </BrowserRouter> 
    
</>
  );
}

export default App;
