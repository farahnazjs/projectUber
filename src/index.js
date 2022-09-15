import React, { Fragment, useState } from 'react';
import ReactDOM  from 'react-dom';
import './asset/css/master.css'
import pic1 from './asset/img/wifi.png'
import pic2 from './asset/img/chang.png'
import pic3 from './asset/img/ride.png'
import pic4 from './asset/img/img1.png'
import pic5 from './asset/img/img2.png'

const _Menu=['Uber','Products','Company','safety','Help','EN','Log in','Sign up']

function Farah(){
  return(
   <main>
     <Header></Header>
     <Main></Main>
     <Footer></Footer>
   </main>
  )
}

//start Headers
function Header(){
  return(
  <header className='head'>
   <ul className='f-ul'>
      <li><a>{_Menu[0]}</a></li>
      <li><a>{_Menu[1]}</a></li>
      <li><a>{_Menu[2]}</a></li>
      <li><a>{_Menu[3]}</a></li>
      <li><a>{_Menu[4]}</a></li>
    </ul>
    <ul className='l-ul'>
    <li><button>&#8853; {_Menu[5]}</button></li>
    <li><button>{_Menu[6]}</button></li>
    <li><button>{_Menu[7]}</button></li>
    </ul>
  </header>
  )
}
//end header


//start main
function Main(){
  return(
   <Fragment>
     <Main_1></Main_1>
     <Main_2></Main_2>
     <Main_3></Main_3>
     <Main_4></Main_4>
   </Fragment>
  )
}

function Main_1(){
 const[status,setStatus]= useState("")
  return(
    <section className='m-1-s'>
      <div className='box'>
        <div>
          <img src={pic1}></img>
          <span onClick={e=>setStatus('one')}>Drive or deliver</span>
        </div>
        <div>
        <img src={pic2}></img>
          <span onClick={e=>setStatus('two')}>Eat</span>
        </div>
        <div>
        <img src={pic3}></img>
          <span onClick={e=>setStatus('three')}>Ride</span>
        </div>
      </div>
      <section className='box2'>
        {
          status==='one' && <div className='div1'>
            <h2>Get in the driver’s seat and get paid</h2>
            <p>Drive on the platform with the largest network of active riders</p>
            <button>Sign up to drive</button>
          </div>
        }
           {
          status==='two' && <div className='div1'>
            <h2>Discover delicious eats</h2>
            <p>Order delivery from restaurants you love.</p>
            <button>Order now</button>
          </div>
        }
           {
          status==='three' && <div className='div1'>
            <h2>Request a ride now</h2>
            <input  placeholder={'Enter pickup location'}></input><br></br>
            <input placeholder='Enter destination'></input><br></br>
            <button>Request now</button>
          </div>
        }
      </section>
    </section>

   
  )
}
function Main_2(){
  return(
    <section className='m-2-s'>
      <div>
        <h2>Uber for Business</h2>
        <p>Transform the way your company moves and feeds its people.</p>
        <button>See how</button>
      </div>
    </section>
  )
}
function Main_3(){
  return(
    <section className='m-3-s'>
      <div>
        <h2>Save on Uber and Uber Eats with Uber One membership</h2>
        <p>With $0 Delivery Fee and 5% off eligible rides and eats orders, members save an average of $22 per month.*</p>
        <button>Sign up to save</button>
      </div>
      <div></div>
    </section>
  )
}
function Main_4(){
  return(
    <section className='m-4-s'>
      <h2>Focused on safety, wherever you go</h2>
      <div className='pic'>
        <section>
          <div></div>
          <div>
            <h3>Our commitment to your safety</h3>
            <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
          </div>
        </section>
        <section>
          <div></div>
          <div>
           <h3>Setting 10,000+ cities in motion</h3>
            <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
          </div>
        </section>
      </div>
    </section>
  )
}
const x=['About us','Our offerings','Newsroom','Investors','Blog','Careers','Gift cards','Ride','Drive','Deliver','Eat','Uber for Business','Uber Freight','Safety','Diversity and inclusion','Airports','Cities']
const y=['Company','Products','Global citizenship','Travel']
function Footer(){
  return(
    <section className='foot'>
      <div className='foot-d'>
      <h4>Uber</h4>
      <p>Visit Help Center</p>
      </div>
      <div className='f-d-2'>
        <ul>
        <h5>{y[0]}</h5>
          <li>{x[0]}</li>
          <li>{x[1]}</li>
          <li>{x[2]}</li>
          <li>{x[3]}</li>
          <li>{x[4]}</li>
          <li>{x[5]}</li>
          <li>{x[6]}</li>
        </ul>
       
        <ul>
        <h5>{y[1]}</h5>
          <li>{x[7]}</li>
          <li>{x[8]}</li>
          <li>{x[9]}</li>
          <li>{x[10]}</li>
          <li>{x[11]}</li>
          <li>{x[12]}</li>
        </ul>
        
        <ul>
        <h5>{y[2]}</h5>
          <li>{x[13]}</li>
          <li>{x[14]}</li>
  
        </ul>
        <ul>
        <h5>{y[3]}</h5>
          <li>{x[15]}</li>
          <li>{x[16]}</li>
        </ul>
      </div>
      <div className='photo'>
        <img src={pic4}></img>
        <img src={pic5}></img>
      </div>
      <div className='email'>
        <a>Email: farahnaz.esmailzade@gmail.com</a>
      </div>
    </section>
  )
}



const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Farah></Farah>)