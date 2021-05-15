import React from "react";
import { Link, useParams } from "react-router-dom";
import { CharactersDetailsEntity } from "../../interfaces/characters-details-rick";
import classes from "./details.scss";

const createCharactersDetails = () => ({
  id: "",
  name: "",
  species: "",
  gender: "",
  image: "",
});

export const ShowCharactersDetails: React.FC = () => {
  const [character, setCharacter] = React.useState<CharactersDetailsEntity>(
    createCharactersDetails()
  );

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);

  console.log(character);
  console.log(character.location);

  return (
    <>
      <div className="container-fluid">
        <div className={classes.detailsIntro}>
          <p>
            "Yeah, sure, I mean, if you spend all day  <strong>shuffling words </strong> 
            around, you can make anything sound bad, <strong>Morty</strong>" .
          </p>
        </div>

        <div className={classes.userDetailsCard}>
          <div className={`row ${classes.userDetailsCardRow}`}>
            <div className="col-12 col-md-5">
              <img src={character.image} />
            </div>
            <div className="col-12 col-md-7">
              <div className={classes.nameBox}>
                <sub className={classes.memberID}>
                  <span>Gender </span>
                  <img
                    className={classes.rightArrow}
                    src="/src/library/icons/right-arrow-w.svg"
                  />
                  <span>{character.gender}</span>
                </sub>
                <h1 className={classes.memberName}>{character.name}</h1>
              </div>
              <h2 className={classes.memberCompany}>
                <span>Specie</span>
                <img
                  className={classes.rightArrow}
                  src="/src/library/icons/right-arrow-w.svg"
                />
                {character.species}
              </h2>
              <div className={classes.memberBio}>
                <span>STATUS: </span>
                <p>{character.status}</p>
              </div>{" "}
            </div>
          </div>
          <Link className={classes.backLink} to="/rick-morty-list/">
            <img
              className={classes.rightArrow}
              src="/src/library/icons/left-arrow-w.svg"
            />
            Back to list page
          </Link>
        </div>
      </div>
    </>
  );
};
