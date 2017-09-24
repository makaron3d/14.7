var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      </div>
    );
  }
});

                    