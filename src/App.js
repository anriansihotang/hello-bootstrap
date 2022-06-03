import React, { Component } from "react";
import { Container, Row, Col, Media ,Alert,Badge,Button,Breadcrumb} from "react-bootstrap";
class App extends Component {
	render() {
		return ( 
			<Container>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/">Info</Breadcrumb.Item>
				</Breadcrumb>

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
				</Col>
			</Row>
			</Container>
		);
	}
}

export default App;
