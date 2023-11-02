import './card.css'

export default function Card(props){
  
  return (
    <div className='card'>
      <img src={props.card.urls.full} alt={props.card.alt_description} />
    </div>
  )
}
