import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';

import classnames from 'classnames';

// import NavContent from './NavContent.js';

function menuItem(text, index, context, click) {

  const fun = click.bind(context, index);

  return (
    <h6 key={index} className="item" onClick={fun}>
      {text}
    </h6>
  );
}    

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      activeTab: '1',
      navbarIsOpen: false,
    };

  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggleNavbar() {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    });
  }
  expandNavContent(tab_index) {
    this.setState({
      navbarIsOpen: true,
      activeTab: (tab_index + 1).toString()
    });
  }

  render() {
    const navClass = "navbar-dark fixed-top " + (this.state.navbarIsOpen ? 'active' : 'inactive');
    const items = ['shirts', 'Accessories', 'our World'];

    return (
      <div>
        <Navbar className={navClass} toggleable>
          {this.state.navbarIsOpen &&
            <NavbarToggler right onClick={this.toggleNavbar} />
          }
          <NavbarBrand href="/">Shop</NavbarBrand>
          <div className="basket">
            <i className="fa fa-shopping-basket clickable" aria-hidden="true"></i> 0 SEK
          </div>
          <Container fluid className="navbar-content">
            <div className="menu-items">
              {items.map((text, index) => menuItem(text, index, this, this.expandNavContent))}
            </div>
            <Collapse isOpen={this.state.navbarIsOpen} navbar>
              <div>
                <InputGroup>
                  <Input />
                  <InputGroupButton><Button className="clickable search-button" color="primary"><i className="fa fa-search" aria-hidden="true"></i></Button></InputGroupButton>
                </InputGroup>
              </div>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggleTab('1'); }}
                    >
                      Shirts
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggleTab('2'); }}
                    >
                      Accessories
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggleTab('3'); }}
                    >
                      Our World
                    </NavLink>
                  </NavItem>                
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col xs="6">
                        <h6>Body Fit</h6>
                        <ul>
                          <li>Slim Fit</li>
                          <li>Contemporary Fit</li>
                          <li>Super Slim Fit</li>
                          <li>Classic Fit</li>
                          <li>Extra Long Sleeve</li>
                          <li>Size Guide</li>
                        </ul>
                      </Col>
                      <Col xs="6">
                        <ul>
                          <li>All shirts</li>
                          <li>New arrivals</li>
                          <li>White shirts</li>
                          <li>Outlet</li>
                        </ul>
                        <ul>
                          <li>Size Guide</li>
                          <li>Shop Express</li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <h6>Collection</h6>
                        <ul>
                          <li>All shirts</li>
                          <li>New arrivals</li>
                          <li>White shirts</li>
                          <li>Outlet</li>
                        </ul>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Card block>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card block>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        hello
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Collapse>

          </Container>
        </Navbar>
      </div>
    );
  }
}