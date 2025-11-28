import './Header.css'

function Header() {
    return (
        <>
            <div className="header-container">

                <div className='header-left'>
                    <button className='header-button'>
                        <img src='./images/button1.png' className='button-image'>
                        </img>
                    </button>
                </div>

                <div className='header-right'>
                    <button className='header-button'>
                        <img src='./images/button2.png' className='button-image'>
                        </img>
                    </button>

                    <button className='header-button'>
                        <img src='./images/button3.png' className='button-image'>
                        </img>
                    </button>

                    <button className='header-button'>
                        <img src='./images/button4.png' className='button-image'>
                        </img>
                    </button>

                    <button className='header-button'>
                        <img src='./images/button5.png' className='button-image'>
                        </img>
                    </button>

                    <button className='subscribe-button'> 
                        Subscribe to Games
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;