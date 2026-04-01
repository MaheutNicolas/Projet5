import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getData from '../data/Getter';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Stars from '../components/Star';
import Collapse from '../components/Collapse';

function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
        const data = await getData();
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                setLogement(data[i]);
                return;
            } 
        }
        navigate('*');
    }
    fetchData();
  }, [id, navigate]);
  
  if (!logement) return null; 
  let pictures = logement.pictures;
  
  return (
    <>
      <section id="logement" className="logement">
        <Carousel images={pictures} />
        <div className='flex space-between'>
          <div className='flex column'>
            <h1 className='logement-title'>{logement.title}</h1>
            <p className='logement-location'>{logement.location}</p>
          </div>
          <div className='logement-host'>
            <span className='logement-host-name'>{logement.host.name}</span>
            <img className='logement-host-picture' src={ logement.host.picture } alt="" />
          </div>
        </div>
        <div className='logement-tags-stars'>
            <Tags names={logement.tags} />
            <Stars rating={logement.rating}/>
        </div>
        <div className='logement-collapses'>
            <Collapse key={"Description"} title="Description" text={logement.description} />
            <Collapse key={"Équipements"} title="Équipements" text={logement.equipments} />
        </div>
      </section>
    </>
  );
}

export default Logement;