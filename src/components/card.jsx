export default function Card(props){
const imageUrl = props.poster;
return( 
    <img src={imageUrl} onClick={props.handleClick} alt={props.name} key={props.name} className="w-auto h-[250px] sm:h-[350px] cursor-pointer" /> 
)
}