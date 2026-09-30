import './MainBody.css'
import MainImg from '../assets/MainbodyImg.webp'
function MainBody(){
    return(
        <div>
            <div className="slogan">
                    <h2>MAKING YOUR <span>IDEAS HAPPENS!</span></h2>

            </div>

            <div className='discription'>
                <p>We are an end-to-end IT Solutions providing major services such as website development, mobile application development, digital marketing, custom web portal, IT team for your next idea, ERP development, for all your business needs.</p>

             <img src={MainImg} alt='MainImg'/>
            </div>
        </div>
    )
}

export default MainBody