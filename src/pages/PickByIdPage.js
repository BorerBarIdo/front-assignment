import SuperHeroCard from '../components/SuperHeroCard/SuperHeroCard'
import {useState, useEffect} from "react";
import {superheroService} from "../services/superhero-service";
import SearchBar from '../components/SearchBar/SearchBar';

const PickByIdPage = () => {
    const [ superHeroData, setSuperHeroData ] = useState();
    const [ isHeroPresented, setIsHeroPresented ] = useState(false);
    const [ error, setError] = useState('')
    const [ superHeroId, setSuperHeroId ] = useState()

    useEffect(async() => {
                if (superHeroId) {
                    try {
                        const data = await superheroService.getSuperHeroById(superHeroId);
                        setSuperHeroData(data);
                    } catch (e) {
                        setError(e.message);
                    } finally {
                        setIsHeroPresented(true);
                    }
                }
            }
    ,[superHeroId])
    return (
        <>
            <SearchBar setSearched={setSuperHeroId}/>
            {isHeroPresented && <SuperHeroCard data={superHeroData}/>}
            {/*<button onClick={loadSuperHero}> Click me </button>*/}
        </>
    )
}

export default PickByIdPage