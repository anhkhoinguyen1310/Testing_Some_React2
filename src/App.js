import './App.css';

import {Container,Nav,Navbar, NavDropdown, Button,Row, Col } from 'react-bootstrap';
import {useState} from 'react'

function Navibar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const ChoiceCard = (props) => {
  if (props.age < 18)
  {
    return (
      <div className='border bg-danger text-center m-5'>Hello + {props.name} + you are minor </div>
    )
  }
  return (
    <div className='border bg-primary text-center m-5'>Hello + {props.name} + you are an adult </div>
  )
}
const ButtonForUseStateExample =(props)=> {
  //before the useState
  let name = "Khoi";
  console.log(name)
  const changeNameWhenClicked = () => {
    let name = "Phuc"
    console.log(name);
  }
  //After using the useState
  const [name2, setName] = useState('Khoi 2')
  const changeNameWhenClickedUsingUseState = () => {
    setName('Phuc2');
  }
  return (
    <Row>
      <Col sm={6}> 
    <p>{name}</p>
    <Button variant="primary" onClick = {changeNameWhenClicked}>Primary</Button>
    <p>{name}</p>
      </Col>
    <Col sm={6}>
    <p>{name2}</p>
    <Button variant="danger" onClick = {changeNameWhenClickedUsingUseState}>Danger</Button>
    <p>{name2}</p>
     </Col>
    </Row>
  )
}

///Loi Example///
const InputExample = () => {
  const [name, setName] = useState('Majid');
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const changeByPuttingIntoInput = (e) => {
    setName(e.target.value)
  }
  const increaseTheCount = () => 
  {
    setCount(count+1)
  }
  const decreaseTheCount = () => 
  {
    setCount(count-1)
  }

  return (
    <div>
      <hr></hr>
      <h2 style = {{color: color}}>{name}</h2>
      <input onChange = {changeByPuttingIntoInput} placeholder="Change Majid's..." />
      <input onChange = {e => setColor(e.target.value)} placeholder = "Change text color"/>
      <input onChange = {e => console.log(e.target.value)} placeholder = "Do nothing"/>
      <h2>{count}</h2>
      <Button variant="primary" onClick = {increaseTheCount}>Increase</Button>
      <Button variant="danger" onClick = {decreaseTheCount}>Decrease</Button>
    </div>
  

  )

}
function App() {
  return (
    <div className='App'>
       <Navibar/>
      <ChoiceCard name = " Khoa" age ={14} />
      <ChoiceCard name = " Khoi" age ={17} />
      <ChoiceCard name = " Khuong" age ={27} />
      <ChoiceCard name = " Khai" age ={17} />
      <ChoiceCard name = " Khiem" age ={57} />
      <ButtonForUseStateExample/>
      <InputExample/>
    </div>
  );
}

export default App;
