import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById'

export const HeroesScreen = () => {

  const navigate = useNavigate()

  // el hook useParams extrae parametros que van por el <url >
  // desestructuramos params una vez encontramos el parametro que necesitemos
  const { heroId } = useParams()
 
  // optimizamos el codigo usando el useMemo, de esta forma
   // la pagina  se renderizara solo si el heroeId cambia
  // const hero = useMemo( () => {
  //   getHeroesById( heroId )
  // }, [ heroId ] )
  const hero = getHeroesById( heroId )


  if ( !hero ) {
    return  <Navigate to="/" replace={true} />
  }

  
  const handleReturn = () =>{
    navigate(-1)  
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance, 
    characters
  } = hero

 
  return (
    <div className='row mt-5'>

      <div className='col-4'>
        <img 
          src={`../assets/heroes/${ heroId }.jpg`}
          className='img-thumbnail animate__animated animate__fadeIn'
          alt={ superhero }
        />
      </div>

      <div className='col-8'>
        <h3>{  superhero }</h3>

        <ul className='list-group list-group-flash'>

          <li className='list-group-item'>
            <b>Alter Ego: { alter_ego }</b>
          </li>
          <li className='list-group-item'>
            <b>Publisher: { publisher }</b>
          </li>
          <li className='list-group-item'>
            <b>First Appearance: { first_appearance }</b>
          </li>

        </ul>

        <h5>Characters </h5>
        <p>{ characters }</p>

        <button 
          className='btn btn-outline-info'
          onClick={ handleReturn }
        >
          Return
        </button>
      </div>

    </div>
  )
}
