
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState, useEffect } from 'react';

const style_fill = {
  height: "800px"
};

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('http://localhost:5010/api/Employee')
      .then((response) => {
        return response.json()
      })
      .then((employees) => {
        setEmployees(employees)
      })
  }, [])
console.log(employees);
  return (
    <div className="App">
      <header className="">
        <div class="container">

          <div class="row align-items-start">
            <div class="col-3">
              <div style={style_fill} class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span class="fs-4 text-center">Sidebar</span>
                </a>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                      Empleados
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div class="col-9">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>document_number</th>
                    <th>salary</th>
                    <th>age</th>
                    <th>profille</th>
                    <th>admission_date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  employees.map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.document_number}</td>
                        <td>{item.salary}</td>
                        <td>{item.age}</td>
                        <td>{item.profile}</td>
                        <td>{item.admission_date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
