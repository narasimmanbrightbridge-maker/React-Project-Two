import BannerImg from '../banner.webp';

function Banner () {
    return (
        <section className="bannerSec">
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="content_section">
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className="imageSec">
                        <img className='rounded-lg shadow-lg' src={BannerImg} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner