import { Component } from 'react';
import Card from '../components/home/Card';
import getData from '../data/Getter';
import Banner from '../components/Banner';
import img from '../assets/image/banner_home.webp';

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
          <Banner text="Chez vous, partout et ailleurs" img={img} />
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