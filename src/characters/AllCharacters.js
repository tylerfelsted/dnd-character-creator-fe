import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../hooks/userContext';
import BackendAPI from '../api/backendAPI';
import CharacterThumbnail from './CharacterThumbnail';

function AllCharacters() {
  const { currentUser } = useContext(UserContext);
  const [ characters, setCharacters ] = useState();
  const history = useHistory();

  useEffect(() => {
    async function callApi() {
      try{
        let results;
        if(!currentUser) results = null;
        else results = await BackendAPI.getCharacters(currentUser._id);
        setCharacters(results);
      } catch(err) {
        console.error(err);
        history.push('/login');
      }
    }
    callApi();
  }, [currentUser, history]);

  if(!characters) return 'loading...'

  return (
    <>
      {characters.map(c => (
        <CharacterThumbnail key={c._id} character={c}/>
      ))}
    </>
  )


}

export default AllCharacters;