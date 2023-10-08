import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // fullName: 'Mamadou',
      nom : 'Mamadou',
      bio: 'Etudiant  à Gomycode.',
      img: process.env.PUBLIC_URL + '/ss.jpg',
      profession: 'Full Stack',
      etatProfile: false,
      tempEcouler: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        tempEcouler: prevState.tempEcouler + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      etatProfile: !prevState.etatProfile,
    }));
  };

  render() {
    const { nom, bio, img, profession,  etatProfile, tempEcouler } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Afficher/ Masquer le Profil</button>
        {etatProfile && (
          <div>
            <h1>{nom}</h1>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
            <img src={img} width={200} alt="Profile" />
          </div>
        )}
        <p>Temps écoulé depuis le montage : {tempEcouler} secondes</p>
      </div>
    );
  }
}

export default App;
