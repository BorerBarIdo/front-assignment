
import styled from "styled-components";

const CardImage = (props) => {

    return (
            <Img src={props.image}/>
    )

}

export default CardImage

const Img = styled.img`
    height: 100%;
     border-radius: 20px;
  width: 52%;
`
