import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from './img-icons/Mobile payments-rafiki@3x.png';
import Icon2 from './img-icons/Documents-rafiki@3x.png';
import Icon3 from './img-icons/Files sent-pana@3x.png';
import Usericon from './img-icons/Files sent-pana@3x.png';
function App() {
  return (
    <div class="page-wrapper">
    <section class="details-section">
       <div class="container-fluid">
        <div class="row align-items-center">
         <div class="col-md-4">
          <div class="card-wrapper extrapad">
             &nbsp;
             <div class="container">
              <div class="row align-items-center">
               <div class="col-md-4">
                <div class="img-wrapper1">
                   <img class="img-fluid mx-auto d-block" src={Icon1} />
                </div>
               </div>
               <div class="col-md-3 line">
                <div class="card-inside">
                   <h6>Total</h6>
                   <h4>34526</h4>
                </div>
               </div>
               <div class="offset-md-1 col-md-3">
                <div class="card-inside">
                   <h6>Pending</h6>
                   <h4>5231</h4>
                </div>
               </div>
              </div>
             </div>
             &nbsp;
             <div class="row btm-content">
              <div class="col-sm-6 col-md-3">
               <h5>Payments</h5>
              </div>
              <div class="col-sm-6 offset-md-5 col-md-4">
               <div>
                <a href="#">View All</a>
               </div>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="card-wrapper">
             <div class="container">
              <div class="row align-items-center">
               <div class="col-md-4">
                <div class="img-wrapper">
                   <img class="img-fluid mx-auto d-block" src={Icon2} alt="icon-2" />
                </div>
               </div>
               <div class="col-md-3 line">
                <div class="card-inside">
                   <h6>Total</h6>
                   <h4>25</h4>
                </div>
                <div class="card-inside">
                   <h6>Pending</h6>
                   <h4>2</h4>
                </div>
               </div>
               <div class="offset-md-1 col-md-3">
                <div class="card-inside">
                   <h6>New</h6>
                   <h4>2</h4>
                </div>
                <div class="card-inside">
                   <h6>Rejected</h6>
                   <h4>0</h4>
                </div>
               </div>
              </div>
             </div>
             <div class="row btm-content">
              <div class="col-sm-6 col-md-3">
               <h5>Applications</h5>
              </div>
              <div class="col-sm-6 offset-md-5 col-md-4">
               <div>
                <a href="#">View All</a>
               </div>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-4">
          <div class="card-wrapper">
             <div class="container">
              <div class="row align-items-center">
               <div class="col-md-3">
                <div class="img-wrapper">
                   <img class="img-fluid mx-auto d-block" src={Icon3} alt="icon-3" />
                </div>
               </div>
               <div class="col-md-3 line">
                <div class="card-inside">
                   <h6>Total</h6>
                   <h4>25</h4>
                </div>
                <div class="card-inside">
                   <h6>Pending</h6>
                   <h4>2</h4>
                </div>
               </div>
               <div class="offset-md-1 col-md-3">
                <div class="card-inside">
                   <h6>New</h6>
                   <h4>2</h4>
                </div>
                <div class="card-inside">
                   <h6>Rejected</h6>
                   <h4>0</h4>
                </div>
               </div>
              </div>
             </div>
             <div class="row btm-content">
              <div class="col-sm-6 col-md-3">
               <h5>Users</h5>
              </div>
              <div class="col-sm-6 offset-md-5 col-md-4">
               <div>
                <a href="#">View All</a>
               </div>
              </div>
             </div>
          </div>
         </div>
        </div>
       </div>
    </section>
    <section>
       <div class="container-fluid">
        <div class="row">
         <div class="col-md-6">
          <div class="card w-100">
             <div class="card-body">
              <div class="row text-center">
               <div class="col-md-8">
                <div class="d-flex flex-wrap">
                   <div class="ms-auto">
                    <ul class="list-inline">
                     <li class="list-inline-item px-2">
                      <h6 class="text-success"><i class="fa fa-circle font-10 me-2 "></i>Total Payments</h6>
                     </li>
                     <li class="list-inline-item px-2">
                      <h6 class="text-info"><i class="fa fa-circle font-10 me-2"></i>Applications</h6>
                     </li>
                    </ul>
                   </div>
                </div>
               </div>
               <div class="offset-md-1 col-md-2">
                <div class="dropdown">
                   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Last 6 Months
                   </button>
                   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                   </div>
                </div>
               </div>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-3">
          <div class="card w-100">
             <div class="card-body bg-blue">
              <div class="row text-center">
               <div class="col-md-8">
                <div class="d-flex flex-wrap">
                   <div class="ms-auto">
                    <h3>Users</h3>
                   </div>
                </div>
               </div>
              </div>
             </div>
          </div>
         </div>
         <div class="col-md-3 todo">
          <div class="card w-100">
             <div class="card-header bg-green">
              <div class="row text-center">
               <div class="col-md-8">
                <div class="d-flex flex-wrap">
                   <div class="ms-auto">
                    <h3>Todo List</h3>
                   </div>
                </div>
               </div>
              </div>
             </div>
             <div class="card-body bg-light-green">
              <div class="text-area-comment">
               <textarea rows="13" cols="40" name="comment" form="usrform">
               Enter text here...</textarea>
              </div>
              <div class="bg-img-wrapper">
               <img class="img-fluid mx-auto d-block" src="img-icons/3209238@3x.png" alt="" />
              </div>
             </div>
          </div>
         </div>
        </div>
       </div>
    </section>
    <section class="table-section">
       <div class="container-fluid">
        <div class="row">
         <div class="col-md-6">
          <div class="outer-context">
             <h2>New Users <a href="#">- View All</a></h2>
          </div>
          <div class="card card-small mb-4">
             <div class="card-body p-0 pb-3 text-center">
              <table class="table mb-0">
               <thead class="bg-light">
                <tr>
                   <th scope="col" class="border-0">SI.No</th>
                   <th scope="col" class="border-0">Full Name</th>
                   <th scope="col" class="border-0">Email ID</th>
                   <th scope="col" class="border-0">Reg Date</th>
                   <th scope="col" class="border-0">Fees</th>
                   <th scope="col" class="border-0">Status</th>
                   <th scope="col" class="border-0">Actions</th>
                </tr>
               </thead>
               <tbody>
                <tr>
                   <td>1</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>2000</td>
                   <td class="paid">Paid</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>2000</td>
                   <td class="paid">Paid</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>2000</td>
                   <td class="paid">Paid</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>2000</td>
                   <td class="paid">Paid</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>2000</td>
                   <td class="paid">Paid</td>
                   <td>View</td>
                </tr>
               </tbody>
              </table>
             </div>
          </div>
         </div>
         <div class="col-md-6">
          <div class="outer-context">
             <h2>New Applications <a href="#">- View All</a></h2>
          </div>
          <div class="card card-small mb-4">
             <div class="card-body p-0 pb-3 text-center">
              <table class="table mb-0">
               <thead class="bg-light">
                <tr>
                   <th scope="col" class="border-0">SI.No</th>
                   <th scope="col" class="border-0">App No</th>
                   <th scope="col" class="border-0">Full Name</th>
                   <th scope="col" class="border-0">Email ID</th>
                   <th scope="col" class="border-0">Reg Date</th>
                   <th scope="col" class="border-0">Actions</th>
                </tr>
               </thead>
               <tbody>
                <tr>
                   <td>1</td>
                   <td>ABCD1234</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>ABCD1234</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>ABCD1234</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>ABCD1234</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>View</td>
                </tr>
                <tr>
                   <td>1</td>
                   <td>ABCD1234</td>
                   <td class="d-flex"><img class="img-fluid img-wrapper mx-auto d-block" src={Usericon} />Ezio Auditore</td>
                   <td>ezioauditore@gmail.com</td>
                   <td>01/01/2021 | 01:00</td>
                   <td>View</td>
                </tr>
               </tbody>
              </table>
             </div>
          </div>
         </div>
        </div>
       </div>
    </section>
   </div>
  );
}

export default App;
