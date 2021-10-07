import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BackendAPI from '../api/backendAPI';
import UserContext from '../hooks/userContext';
import RenderCharacter from './RenderCharacter';

function CharacterDetails() {
  const { currentUser } = useContext(UserContext);
  const { characterId } = useParams();
  const [ character, setCharacter ] = useState();
  const history = useHistory();

  useEffect(() => {
    async function callApi() {
      try{
        let result;
        if(!currentUser) result = null;
        else result = await BackendAPI.getCharacter(currentUser._id, characterId);
        setCharacter(result);
      } catch(err) {
        console.error(err);
        history.push('/login');
      }
    }
    callApi();
  }, [currentUser, characterId, history]);

  if(!character) return "loading...";

  return (
    <RenderCharacter character={character} setCharacter={setCharacter}/>
  )
}

export default CharacterDetails;