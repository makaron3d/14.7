var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input Imię {{value: this.props.contact.firstName}}>
        <input Nazwisko {{value: this.props.contact.lastName}}>
        <input Email {{value: this.props.contact.email}}>
        <button {type: 'submit'}, Dodaj kontakt>
    )
  },
});

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};
