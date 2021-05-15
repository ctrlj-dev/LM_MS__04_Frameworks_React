import React from "react";
import { CharactersEntityRick } from "../../interfaces/characters-entity-rick";
import { Link, generatePath } from "react-router-dom";
import { MyfilterContext } from "../member-search/member-search-rick";
import { useDebounce } from 'use-debounce'; 
import classes from "./list.scss";

export const ShowMemberList: React.FC = (props) => {
  const filterContext = React.useContext(MyfilterContext);
  const [characters, setCharacters] = React.useState<CharactersEntityRick[]>([]);
  const [debounceFilter] = useDebounce(characters, 500);

  React.useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${filterContext.newFilter}`      
    )
      .then((response) => response.json())
      .then((json) => setCharacters(json.results))
      .catch((error) => {window.location.href = "/rick-morty-list/"});
  }, [filterContext, debounceFilter]);
 
  
  return (
    <>
      <div className={classes.memberContainer}>
        <div className="container-fluid">
          {characters.map((character) => (
            <div className={classes.memberRow}>
              <Link
                to={generatePath(`/detail-rick-morty/:id`, {
                  id: character.id,
                })}
              >
                <h2 className={classes.memberName}>{character.name}</h2>
                <sub className={classes.memberID}>{character.id}</sub>
                <picture className={classes.memberPicture}>
                  <img src={character.image} />
                </picture>{" "}
              </Link>
            </div>
          ))}
          {}         
        </div>
      </div>
    </>
  );

};