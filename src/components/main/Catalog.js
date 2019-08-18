import React from 'react';
import Phone from './Phones';
import PhonesService from '../services';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
    };
  }

  componentDidMount() {
    this.getAll();
  }

  componentDidUpdate() {
    this.getAll();
  }

  getAll() {
    PhonesService.getAll(this.props.filter).then((data) => {
      this.setState({
        phones: data,
      });
    });
  }

  renderPhones() {
    const { onPhoneClicked, onAddClicked } = this.props;
    return (this.state.phones.map((phone) => (
      <Phone
        id={phone.id}
        key={`phone-${phone.age}`}
        name={phone.name}
        image={phone.imageUrl}
        snippet={phone.snippet}
        onLinkClicked={() => {
          onPhoneClicked(phone.id);
        }}
        onAddClick={() => {
          onAddClicked(phone.name);
        }}
      />
    )));
  }

  render() {
    return (
      <div className="catalog-block">
        <ul className="catalog">
          {this.renderPhones()}
        </ul>
      </div>
    );
  }
}

export default Catalog;
