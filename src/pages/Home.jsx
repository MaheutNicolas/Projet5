import { Component } from 'react';
import Card from '../components/home/card';
import getData from '../data/Getter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <section id="presentation" className="presentation">
          <h1>Chez vous, partout et ailleurs</h1>
        </section>
        <section id="locations" className="locations">
          {data.map((it, index) => (
            <Card key={index} id={it.id} name={it.title} img={it.cover} />
          ))}
        </section>
      </>
    );
  }
}

export default Home