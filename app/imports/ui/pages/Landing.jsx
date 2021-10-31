import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className='middle-landing'>
        <Grid centered stackable columns={3} container>

          <Grid.Column textAlign='center'>
            <Icon name='users' size='huge'/>
            <Header as='h1' inverted color='violet'>Multiple Users</Header>
            <p></p>
            <Header as='h3' inverted color='violet'>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created</Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='file alternate' size='huge'/>
            <Header as='h1' inverted color='violet'>Contact Details</Header>
            <p></p>
            <Header as='h3' inverted color='violet'>For each contact, you can save their name, address, and phone number.</Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='calendar check outline' size='huge'/>
            <Header as='h1' inverted color='violet'>Timestamped Notes</Header>
            <p></p>
            <Header as='h3' inverted color='violet'>Eact time you make contact with a contact, you can write a note that summarizes the converstion. This note is saved along with a timestamp with the contact.</Header>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default Landing;
