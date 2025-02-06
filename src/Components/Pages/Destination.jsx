import '../Css/Destination.css'
import japan from '../../assets/country/japan.jpg'
import korea from '../../assets/country/korea.jpg'
import uk from '../../assets/country/uk.jpg'
import denmark from '../../assets/country/denmark.jpg'
const Destination = () => {
  return (
    <div className='w-screen pt-[8rem] pb-[100px]'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='font-playfair' id='head'>TOP STUDY DESTINATIONS AROUND THE WORLD</h1>
        <p className='font-montserrat' id='sub-head'>Discover which Top Destinations are PERFECT for You to Actually Make Your Dreams a Reality</p>
      </div>
      <div className='flex gap-5 justify-center mt-16 p-5  '>
        <div className='w-[550px] h-[300px] bg-cover' id='country'>
          <img src={japan} className='w-[550px] h-[300px] bg-cover rounded-lg absolute ' id='images'/>
          <p className='  text-white  pt-[140px] text-[30px] font-bold pl-[160px] w-[550px] h-[300px] font-montserrat' id='text'>Study in Japan</p>
        </div>
        <div className='w-[550px] h-[300px]' id='country'>
        <img src={korea} className='w-[550px] h-[300px] bg-cover rounded-lg' id='images'/>
        <p className='  text-white  pt-[140px] text-[30px] font-bold pl-[160px] w-[550px] h-[300px] font-montserrat' id='text'>Study in Korea</p>
        </div>
        <div className='w-[550px] h-[300px]' id='country'>
        <img src={uk} className='w-[550px] h-[300px] bg-cover rounded-lg' id='images'/>
        <p className='  text-white  pt-[140px] text-[30px] font-bold pl-[160px] w-[550px] h-[300px] font-montserrat' id='text'>Study in UK</p>
        </div>
        {/* <div className='w-[550px] h-[300px]'>
        <img src={denmark} classname='w-[550px] h-[300px] bg-cover rounded-lg brightness-50'/>
        </div> */}
      </div>

    </div>
  )
}

export default Destination
