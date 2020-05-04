import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.movie]: e.target.value,
    });
  }
  submitForm(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Votre film ${res.title} a bien été ajouté !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout de votre film : ${e.message}`);
      });
  }
  render() {
    return (
      <div className="FormMovie">
        <h1>Saisissez votre film préféré</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">Titre du film</label>
              <input
                type="text"
                id="title"
                movie="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Affiche du film</label>
              <input
                type="text"
                id="poster"
                movie="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Pourquoi avez-vous aimé ce film ?</label>
              <input
                type="text"
                id="comment"
                movie="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
