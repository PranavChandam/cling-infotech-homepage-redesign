import './MainBody.css'
import MainImg from '../assets/MainbodyImg.webp'
import India from '../assets/india.webp'
import Saudi from '../assets/Saudi Arabia.webp'
import Dubai from '../assets/Dubai (UAE).webp'
import Ireland from '../assets/Ireland.webp'
import Oman from '../assets/Oman.webp'
import Singapore from '../assets/Singapore.webp'
import Africa from '../assets/South Africa.webp'
import America from '../assets/United States.webp'
import cl1 from '../assets/cl1.webp'
import cl2 from '../assets/cl2.webp'
import cl3 from '../assets/cl3.webp'
import cl4 from '../assets/cl4.webp'
import cl5 from '../assets/cl5.webp'
import cl6 from '../assets/cl6.webp'
import cl7 from '../assets/cl7.webp'
import cl8 from '../assets/cl8.webp'
import cl9 from '../assets/cl9.webp'
function MainBody() {
    return (
        <div>
            <div className="slogan">
                <h2>MAKING YOUR <span>IDEAS HAPPENS!</span></h2>

            </div>

            <div className='discription'>
                <p>We are an end-to-end IT Solutions providing major services such as website development, mobile application development, digital marketing, custom web portal, IT team for your next idea, ERP development, for all your business needs.</p>

                <img src={MainImg} alt='MainImg' />
            </div>
            <div className="stats">

                <div className="stat-card">
                    <div className="stat-icon">&lt;/&gt;</div>
                    <h2>32387122</h2>
                    <p>Number of Lines of Code</p>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">♟</div>
                    <h2>350+</h2>
                    <p>Happy Clients</p>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">💡</div>
                    <h2>390+</h2>
                    <p>Projects Completed</p>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">☕</div>
                    <h2>1500+</h2>
                    <p>Coffee With Clients</p>
                </div>

            </div>

            <div className='global'>
                <h1>Our Global Presence</h1>

                <h3>Expanding our global footprint across diverse markets and cultures</h3>
            </div>

            <div className='flag'>
                <img src={India} alt="india flag" />
                <img src={Saudi} alt="saudi flag" />
                <img src={Africa} alt="Africa flag" />
                <img src={America} alt="US flag" />
                <img src={Oman} alt="Oman flag" />
                <img src={Dubai} alt="dubai flag" />
                <img src={Singapore} alt="singapore flag" />
                <img src={Ireland} alt="Ireland flag" />
            </div>
            
            <div className="client-section">

                <div className="client-heading">
                    <h1>Our Diverse Clientele</h1>
                </div>

                <div className="client">
                    <img src={cl1} alt="Client 1" />
                    <img src={cl2} alt="Client 2" />
                    <img src={cl3} alt="Client 3" />
                    <img src={cl4} alt="Client 4" />
                    <img src={cl5} alt="Client 5" />
                    <img src={cl6} alt="Client 6" />
                    <img src={cl7} alt="Client 7" />
                    <img src={cl8} alt="Client 8" />
                    <img src={cl9} alt="Client 9" />
                </div>

            </div>
        </div>
    )
}

export default MainBody