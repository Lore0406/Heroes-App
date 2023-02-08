// import { useMemo } from "react"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroesList = ({ publisher }) => {

   // optimizamos el codigo usando el useMemo, de esta forma
   // la pagina  se renderizara solo si el publisher cambia
   // const heroes = useMemo( () => {
   //    getHeroesByPublisher( publisher )
   // }, [ publisher ] )

   const heroes = getHeroesByPublisher( publisher )
   // if (!heroes) return ""
   return (
      <div className="card-columns animate__animated animate__fadeIn">
         {
            heroes.map( hero => {
               return (
                  <HeroCard
                     key={hero.id}
                     {...hero}
                  />
               )
            })
         }
      </div>
   )
}
