import styled from 'styled-components';
import CardDetails from './CardDetails';
import CardImage from "./CardImage";

const SuperHeroCard = (props) => {
    const superHeroDetails = {
        name: props.data.name,
        id: props.data.id,
        alterEgo: props.data.biography["alter-egos"],
        appearance: props.data.biography["first-appearance"],
        gender: props.data.appearance.gender,
        publisher: props.data.biography.publisher,
    }

    return (
        <Container>
               <CardImage image={props.data.image.url}/>
                <CardDetails data={superHeroDetails}/>
        </Container>
    )
}

export default SuperHeroCard

const Container = styled.div`
  //padding: 2em;
  //background: #FFFFFF;
  display: flex;
  padding: 3em;
  height: 25em;
  justify-content: space-between ;
 
`
