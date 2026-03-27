import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getData from '../data/Getter';

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

  return (
    <>
      <section id="presentation" className="presentation">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section id="locations" className="locations">
        
      </section>
    </>
  );
}

export default Logement;