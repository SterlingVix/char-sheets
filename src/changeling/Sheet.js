import React, { Component } from 'react';
import stats from './stats.js';
import './Sheet.css';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

// http://www.material-ui.com/#/components/list

class Sheet extends Component {

  componentWillMount () {
    this.setState({
      stats: stats,
    });
  }

  render () {

    const {
      Attributes,
      Clarity,
      Contracts,
      Glamour,
      GoblinContracts,
      Health,
      Merits,
      PlayerCharacter,
      Skills,
      Skills: {
        Mental,
        Physical,
        Social,
      },
      Willpower,
      Wyrd,
    } = this.state.stats;

    return (
      <div className="sheet">
        <Paper zDepth={2}>
          <h2>PlayerCharacter:</h2>
          <List>
            <ListItem
              primaryText="Chronicle"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem primaryText={PlayerCharacter.Chronicle}/>
              ]}/>
            <ListItem
              primaryText="Concept"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Concept}/>
              ]}/>
            <ListItem
              primaryText="Court"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Court}/>
              ]}/>
            <ListItem
              primaryText="Kith"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Kith}/>
              ]}/>
            <ListItem
              primaryText="Mask"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Mask}/>
              ]}/>
            <ListItem
              primaryText="Mien"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Mien}/>
              ]}/>
            <ListItem
              primaryText="Name"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Name}/>
              ]}/>
            <ListItem
              primaryText="Player"
              leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Player}/>
              ]}/>
            <ListItem
              primaryText="Seeming" leftIcon={<ActionGrade/>}
              nestedItems={[
                <ListItem
                  primaryText={PlayerCharacter.Seeming}/>
              ]}/>
          </List>
          <Divider/>

          <h2>Attributes:</h2>
          <List>
            <ListItem primaryText="Composure" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Composure}/>
                      ]}/>
            <ListItem primaryText="Dexterity" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Dexterity}/>
                      ]}/>
            <ListItem primaryText="Intelligence" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Intelligence}/>
                      ]}/>
            <ListItem primaryText="Manipulation" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Manipulation}/>
                      ]}/>
            <ListItem primaryText="Presence" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Presence}/>
                      ]}/>
            <ListItem primaryText="Resolve" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Resolve}/>
                      ]}/>
            <ListItem primaryText="Stamina" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Stamina}/>
                      ]}/>
            <ListItem primaryText="Strength" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Strength}/>
                      ]}/>
            <ListItem primaryText="Wits" rightIcon={<ActionInfo/>}
                      nestedItems={[
                        <ListItem primaryText={Attributes.Wits}/>
                      ]}/>
          </List>
          <Divider/>

          {/*<h2>Skills:</h2>*/}
          {/*<h3>Mental:</h3>*/}
          {/*<List>*/}
            {/*<ListItem primaryText="Academics">{Mental.Academics}</ListItem>*/}
            {/*<ListItem primaryText="Computer">{Mental.Computer}</ListItem>*/}
            {/*<ListItem primaryText="Crafts">{Mental.Crafts}</ListItem>*/}
            {/*<ListItem*/}
              {/*primaryText="Investigation">{Mental.Investigation}</ListItem>*/}
            {/*<ListItem primaryText="Medicine">{Mental.Medicine}</ListItem>*/}
            {/*<ListItem primaryText="Occult">{Mental.Occult}</ListItem>*/}
            {/*<ListItem primaryText="Politics">{Mental.Politics}</ListItem>*/}
            {/*<ListItem primaryText="Science">{Mental.Science}</ListItem>*/}
          {/*</List>*/}
          {/*<Divider/>*/}

          {/*<h3>Physical:</h3>*/}
          {/*<List>*/}
            {/*<ListItem primaryText="Athletics">{Physical.Athletics}</ListItem>*/}
            {/*<ListItem primaryText="Brawl">{Physical.Brawl}</ListItem>*/}
            {/*<ListItem primaryText="Drive">{Physical.Drive}</ListItem>*/}
            {/*<ListItem primaryText="Firearms">{Physical.Firearms}</ListItem>*/}
            {/*<ListItem primaryText="Larceny">{Physical.Larceny}</ListItem>*/}
            {/*<ListItem primaryText="Stealth">{Physical.Stealth}</ListItem>*/}
            {/*<ListItem primaryText="Survival">{Physical.Survival}</ListItem>*/}
            {/*<ListItem primaryText="Weaponry">{Physical.Weaponry}</ListItem>*/}
          {/*</List>*/}
          {/*<Divider/>*/}

          {/*<h3>Social:</h3>*/}
          {/*<List>*/}
            {/*<ListItem primaryText="Animal Ken">{Social.AnimalKen}</ListItem>*/}
            {/*<ListItem primaryText="Empathy">{Social.Empathy}</ListItem>*/}
            {/*<ListItem primaryText="Expression">{Social.Expression}</ListItem>*/}
            {/*<ListItem*/}
              {/*primaryText="Intimidation">{Social.Intimidation}</ListItem>*/}
            {/*<ListItem primaryText="Persuasion">{Social.Persuasion}</ListItem>*/}
            {/*<ListItem primaryText="Socialize">{Social.Socialize}</ListItem>*/}
            {/*<ListItem primaryText="Streetwise">{Social.Streetwise}</ListItem>*/}
            {/*<ListItem primaryText="Subterfuge">{Social.Subterfuge}</ListItem>*/}
          {/*</List>*/}
          {/*<Divider/>*/}

          {/*<h2>Other:</h2>*/}
          {/*<List>*/}
            {/*<ListItem primaryText="Health">{Health.current}*/}
              {/*/ {Health.total}</ListItem>}*/}
            {/*<ListItem primaryText="Willpower">{Willpower.current}*/}
              {/*/ {Willpower.total}</ListItem>*/}
            {/*<Divider/>*/}

            {/*<ListItem*/}
              {/*primaryText="Goblin Contracts">{GoblinContracts}</ListItem>*/}
            {/*<ListItem primaryText="Clarity">{Clarity}</ListItem>*/}
            {/*<ListItem primaryText="Contracts">{Contracts}</ListItem>*/}
            {/*<ListItem primaryText="Glamour">{Glamour}</ListItem>*/}
            {/*<ListItem primaryText="Merits">{Merits}</ListItem>*/}
          {/*</List>*/}
          {/*<Divider/>*/}


          {/*<List>*/}
            {/*<ListItem primaryText="Inbox" leftIcon={<ContentInbox/>}/>*/}
            {/*<ListItem primaryText="Starred" leftIcon={<ActionGrade/>}/>*/}
            {/*<ListItem primaryText="Sent mail" leftIcon={<ContentSend/>}/>*/}
            {/*<ListItem primaryText="Drafts" leftIcon={<ContentDrafts/>}/>*/}
            {/*<ListItem primaryText="Inbox" leftIcon={<ContentInbox/>}/>*/}
          {/*</List>*/}
          {/*<Divider/>*/}
          {/*<List>*/}
            {/*<ListItem primaryText="All mail" rightIcon={<ActionInfo/>}/>*/}
            {/*<ListItem primaryText="Trash" rightIcon={<ActionInfo/>}/>*/}
            {/*<ListItem primaryText="Spam" rightIcon={<ActionInfo/>}/>*/}
            {/*<ListItem primaryText="Follow up" rightIcon={<ActionInfo/>}/>*/}
          {/*</List>*/}
        </Paper>
      </div>

    );
  }
}

export default Sheet;
