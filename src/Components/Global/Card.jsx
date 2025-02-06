
import "../Css/Card.css"
const Card = ({about, label, image}) => {
  return (
    <div className="w-[16rem] h-[21rem] cursor-pointer p-2" id="card">
      <div className="flex flex-col text-center items-center " id="cover">
        <img src={image} className="w-[15rem] h-[15rem] "/>
        <label className="font-montserrat text-[18px] pt-4 pb-2" id="label">{label}</label>
      </div>
        <div id="about">
            <p className="font-poppins text-center px-3">{about}</p>
        </div>
    </div>
  )
}

export default Card
