import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ContactAdmin extends React.Component {
  render() {
    const contact = this.props.contact;
    return (
      <Card>
        <Image src={contact.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{contact.firstName} {contact.lastName}</Card.Header>
          <Card.Meta>
            {contact.address}
          </Card.Meta>
          <Card.Description>
            {contact.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.contact.owner}
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  contact: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(ContactAdmin);
