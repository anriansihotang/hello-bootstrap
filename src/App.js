import React, { Component } from "react";
import { Container, Row, Col, Media ,Alert,
	Badge,Button,Breadcrumb,ButtonGroup, 
	ButtonToolbar,Card,Carousel,Dropdown,
	Form,InputGroup,FormControl,Image,
	Figure,Jumbotron,ListGroup, Modal,
	Nav,Navbar} from "react-bootstrap";
class App extends Component {
	render() {
		return ( 
			<Container>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="/">Home</Navbar.Brand>
					<Nav>
					<Nav.Item>
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">Contact</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/">Info</Nav.Link>
					</Nav.Item>

					<Form inline>
						<FormControl type="text" placeholder="Search"/>
						<Button variant="info">Search</Button>
					</Form>
				</Nav>
				</Navbar>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/">Info</Breadcrumb.Item>
				</Breadcrumb>


			<Carousel>
				<Carousel.Item>
					<img className='d-block w-100' 
					src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg" 
					alt="Travel 1" />
					<Carousel.Caption>
						<h3>Tiket Pesawat Murah</h3>
						<p>Dapatkan Promo Tiket Pesawat Murah</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' 
					src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png" 
					alt="Travel 2" />
					<Carousel.Caption>
						<h3>Tiket Pesawat Murah 2</h3>
						<p>Dapatkan Promo Tiket Pesawat Murah 2</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' 
					src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg" 
					alt="Travel 3" />
					<Carousel.Caption>
						<h3>Tiket Pesawat Murah3</h3>
						<p>Dapatkan Promo Tiket Pesawat Murah 3</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Jumbotron>
				<h1>Hello, world!</h1>
				<p>Selamat Datang di Website</p>
				<Button variant="primary">Check Detail</Button>
			</Jumbotron>
			<br/>
			<Row>
				<Col>
					<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
						alt="Gambar Sate"
					/>
					<Media.Body>
						<h4>Makanan Sate</h4>
						<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
						ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
						tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
						Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
					</Media>
				</Col>
				<Col>
					<Media>
					<img
						width={64}
						height={64}
						className="mr-3"
						src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
						alt="Gambar Sate"
					/>
					<Media.Body>
						<h4>Makanan Sate</h4>
						<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
						ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
						tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
						Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
					</Media>
				</Col>
			</Row>
			<Row>
				<Col>
					<Alert variant="danger">User yang kamau masukan salah</Alert>
				</Col>
				<Col>
					<h5>
						pesannya adalah <Badge variant="secondary">Benar</Badge>
					</h5>
					<Button variant="primary">
						Profile <Badge variant="light">1</Badge>
					</Button>
				</Col>
				<Col>
					<Button variant="info">Kirim</Button>
					<br/>
					<ButtonToolbar aria-label="Toolbar with button groups">
						<ButtonGroup className="mr-2" aria-label="First group">
							<Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
						</ButtonGroup>
						<ButtonGroup className="mr-2" aria-label="Second group">
							<Button>5</Button> <Button>6</Button> <Button>7</Button>
						</ButtonGroup>
						<ButtonGroup aria-label="Third group">
							<Button>8</Button>
						</ButtonGroup>
					</ButtonToolbar>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col>
					<Card style={{width: "300px"}}>
						<Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />

						<Card.Body>
							<Card.Title>Sate</Card.Title>
							<Card.Text>Sate adalah makanan khas I	ndonesia</Card.Text>
							<Button variant="primary">Detail Now</Button>
						</Card.Body>
					</Card>
					
				</Col>
				<Col>
					<Dropdown>
						<Dropdown.Toggle variant="success">
							Pilih Menu
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/">Wisata</Dropdown.Item>
							<Dropdown.Item href="#/">Hotel</Dropdown.Item>
							<Dropdown.Item href="#/">Paket Wisata	</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Form>
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Masukan Nama" />
						</Form.Group>

						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="text" placeholder="Masukan Email" />
							<Form.Text className="text-muted">
								Kami tidak akan Menyalahgunakan Email anda
							</Form.Text>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Masukan password" />
						</Form.Group>

						<Form.Group>
							<Form.Check type="checkbox" label="Kami Setuju" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>

				</Col>
				<Col>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Text>@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl placeholder="Username" />
					</InputGroup>

					<Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg" 
					roundedCircle/>

					<Figure>
						<Figure.Image width={170} height={180} alt="Nasi Padang" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
						<Figure.Caption>
							Nasi Padang
						</Figure.Caption>
					</Figure>
				</Col>
			</Row>
			<br/> <br/>

			<Row>
				<Col>
					<ListGroup>
						<ListGroup.Item active>Wisata</ListGroup.Item>
						<ListGroup.Item>Travel</ListGroup.Item>
						<ListGroup.Item>Hotel</ListGroup.Item>
						<ListGroup.Item>Paket Wisata</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col>
					<Modal.Dialog>
						<Modal.Header closeButton>
							<Modal.Title>Info</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>Simpan Data Pelanggan</p>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary">Close</Button>
							<Button variant="primary">Save Changes</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Col>
				<Col></Col>
			</Row>
			</Container>
		);
	}
}

export default App;
