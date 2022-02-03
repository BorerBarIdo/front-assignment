import styled from 'styled-components';



const CardDetails = (props) => {
    return (
        <Card>
            <Header>
                Superhero Description
            </Header>
            <Details>
                <Column>
                    <Pair><Key>Name</Key> <Value>{props.data.name}</Value></Pair>
                    <Pair><Key>id</Key> <Value>{props.data.id}</Value></Pair>
                    <Pair><Key>Gender</Key> <Value> {props.data.gender} </Value></Pair>
                </Column>
                <Column>
                   <Pair> <Key>Publisher</Key> <Value>{props.data.publisher}</Value></Pair>
                    <Pair><Key>Alter-egos </Key> <Value>{props.data.alterEgo} </Value></Pair>
                    <Pair><Key>First appearance</Key> <Value> {props.data.appearance} </Value></Pair>
                </Column>
            </Details>
        </Card>
    )
}

export default CardDetails

const Column = styled.div`
    display: grid;
    flex-wrap: wrap;
    justify-content: left;
    text-align: left;
    margin-bottom: 12px;
    margin-right: 90px;
`
const Pair = styled.div`
  display: grid;
  padding: 12px;
`

const Header = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #4310AE;
  margin: 25px;
`
const Key = styled.h1`
  font-size: 14px;
  color: #000000;
  opacity: 0.5;
`

const Value = styled.h1`
  font-size: 16px;
  line-height: 19px;
  color: #200062;
`

const Card = styled.div`
  background: linear-gradient(241.25deg, #F9F7FF 4.4%, rgba(255, 255, 255, 0.53) 119.94%);
  box-shadow: -10px 10px 20px rgba(67, 16, 174, 0.12);
  backdrop-filter: blur(26px);
  border-radius:  10.2556px;
  width: 45%;
  padding-bottom: 50px;
`

const Details = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  padding-left: 30px;
  margin-bottom: 20px;
`

