import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubusername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
              const {latitude, longitude} = position.coords;
    
              setLatitude(latitude);
              setLongitude(longitude);
          }, 
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        )
      }, []);

      async function handleSubmit(e){
        e.preventDefault();
        await onSubmit({
          github_username,
          techs,
          latitude,
          longitude
        });

        setGithubusername('');
        setTechs('');
      }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuario do Github</label>
          <input 
          name="github_username" 
          id="github_username" 
          required
          onChange = {e => setGithubusername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required
          onChange={e => setTechs(e.target.value)}
          />
        </div>

       <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" value={latitude} required
          onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" value={longitude} required
          onChange={e => setLongitude(e.target.value)}
          />
        </div>

       </div>

       <button type="submit">Salvar</button>

      </form>
    );
}

export default DevForm;