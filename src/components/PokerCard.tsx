import Image from 'react-bootstrap/Image';

export function PokerCard(props: {cardName: string}): JSX.Element{

    //console.log(`url = ${process.env.PUBLIC_URL}/cards/${props.cardName}.PNG`);

    return(

        
        <Image src={`${process.env.PUBLIC_URL}/cards/${props.cardName}.PNG`} style={{height: "100px", width: "100px"}} rounded />


    );


}