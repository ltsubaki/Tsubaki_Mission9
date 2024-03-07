import React from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import { JSX } from 'react/jsx-runtime';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const data = require('./CollegeBasketballTeams.json');
const teamNames = data.teams;

function Welcome() {
  return <h1>March Madness Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name} </h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamNames.map(
        (
          oneTeam: JSX.IntrinsicAttributes &
            JSX.IntrinsicClassAttributes<Team> &
            Readonly<TeamProps>,
        ) => (
          <Team {...oneTeam} />
        ),
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
