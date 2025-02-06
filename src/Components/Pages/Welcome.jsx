import grow from '../../assets/svg/grow.png'
import cup from '../../assets/svg/cup.png'
import certificate from '../../assets/svg/certificate.png'
import team from '../../assets/svg/team.png'
import '../Css/Welcome.css'
const Welcome = () => {
  return (
    <div className='flex flex-col items-center w-screen h-[44rem] pt-16' id='welcome'>
        <div className='w-[975px] h-[430px] '>

        <div>
            <h1 className='font-playfair text-center' id='header'>WELCOME TO BEAUMONT</h1>
            <h2 className='font-playfair text-center 'id='sub-header'>The Leading Education Consultancy In Nepal </h2>
        </div>
        <div className='w-[900px] ml-10 mb-[60px] pb-[50px]'>
            <p className='text-[20px] font-poppins text-center ' id='desc'>Beaumont Consultancy has a long-standing reputation for being one of the best educational consultancy in Nepal for studying abroad. Our head office is located at New Baneshwor, Kathmandu, including branches at Putalisadak, Bhairahawa, Birtamode, Parsa, Pokhara, Nawalparasi, Nepalgunj, Butwal, Damak, Narayangarh, Biratnagar, Tandi, Damauli in Nepal. And we have a support office in Sydney and Sri Lanka.</p>
        </div>
        </div>
        <div className='font-montserrat text-[18px] flex gap-[90px] items-center justify-center' >
            <div className='flex flex-col items-center w-[270px] h-[126px] gap-6' id='icons'>
                <img src={grow} className='w-[80px] h-[80px]'/>
                <p>High Visa Success Rate</p>
            </div>
            <div className='flex flex-col items-center w-[270px] h-[126px] gap-6' id='icons'>
                <img src={cup} className='w-[80px] h-[80px]'/>
                <p>20<span>th</span> Year of Success</p>
            </div>
            <div className='flex flex-col items-center w-[270px] h-[126px] gap-6' id='icons'>
                <img src={certificate} className='w-[80px] h-[80px]'/>
                <p>Certified Carrer Counselors</p>
            </div>
            <div className='flex flex-col items-center w-[270px] h-[126px] gap-6' id='icons'>
                <img src={team} className='w-[80px] h-[80px]'/>
                <p>Visa Expert Team</p>
            </div>
        </div>
      
    </div>
  )
}

export default Welcome
