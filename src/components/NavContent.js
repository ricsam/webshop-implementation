import React from 'react';
import {
  Collapse,
  Nav,
  NavItem,
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


function menuItem(text, index, context, click) {

  const fun = click.bind(context, index);

  return (
    <h5 key={index} className="item">
      <a href="#" onClick={fun}>
        {this.props.text}
      </a>
    </h5>
  );
}

export default class NavContent extends React.Component {
  constructor(props) {
    super(props);

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
      toggleNavbar: true,
      activeTab: (tab_index + 1).toString()
    });
  }

  render() {
    const items = ['shirts', 'Accessories', 'our World'];
    return (
      
    );
  }
}