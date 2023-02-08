import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../heroes/HeroCard"
import queryString from "query-string"
import { getHeroesByName } from "../../selectors/getHeroesByName"
import { useMemo } from "react"

export const SearchScreen = () => {

   const navigate = useNavigate()
   const location = useLocation()


   const { query = '' } = queryString.parse(location.search)
 
   // values -- from input form
   const { values, handleInputChange } = useForm( {
      searchText: query,
   } )

   // guardamos el valor recibido desde el input 
   const { searchText } = values

   // const filterHeroes = getHeroesByName(searchText)

   // usamos useMemo para que la pagina no renderice cada vez que escribanmos una
   // letra y solo se haga la presionar el submit 
   const  filterHeroes = useMemo( () => getHeroesByName(query), [query] )

   const handleSearch = (e) =>{
      
      e.preventDefault()
      navigate(`?query=${ searchText }`)
   }

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">

         <div className="col-5">
            <h4>Search Form</h4>
            <hr />

            <form onSubmit={handleSearch}>
               <input
                  type='text'
                  name='searchText'
                  placeholder="Find a hero"
                  className="form-control col-12"
                  onChange={ handleInputChange }
                  value={ searchText || "" }
               />

               <button
                  type="submit"
                  className="btn btn-outline-primary col-12 mt-3"
               >
                  Search...
               </button>

            </form>

         </div>

         <div className="col-7">
            <h4>Results</h4>
            <hr />
            {
               ( query === '') 
                  &&
                  <div className="alert alert-info">
                     Search a hero
                  </div>
            }

            {
               ( query !== '' && filterHeroes.length === 0) 
               &&
               <div className="alert alert-danger">
                  Your search <b>{ query }</b> didn't match any superhero
               </div>
            }

            {
               filterHeroes.map( hero => {
                  return( 
                     <HeroCard
                        key={ hero.id }
                        { ...hero }
                     />
                  )
               })
            }

         </div>
      </div>
    </div>
  )
}