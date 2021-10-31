import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className='landing-mid'>
        <Grid centered stackable columns={3} container>

          <Grid.Column textAlign='centered'>
            <Icon name='users' size='huge'/>
            <Header as='h1' inverted color='violet'>Multiple Users</Header>
            <Header as='h3' inverted color='violet'>This address book enables any number of users to register and save their business contacts. You can only see the contacts you have created.</Header>
          </Grid.Column>

          <Grid.Column textAlign='centered'>
            <Icon name='file alternate' size='huge'/>
            <Header as='h1' inverted color='violet'>Contact Details</Header>
            <Header as='h3' inverted color='violet'>for each contact, you can save their name, address, and phone number.</Header>
          </Grid.Column>

          <Grid.Column textAlign='centered'>
            <Icon name='calendar check outline' size='huge'/>
            <Header as='h1' inverted color='violet'>Timestamped Notes</Header>
            <Header as='h3' inverted color='violet'>Each time you make contact with a conctact, you can write a note that summarizes the converstion. This note isaved along with a timestamp of the contact.</Header>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default Landing;
