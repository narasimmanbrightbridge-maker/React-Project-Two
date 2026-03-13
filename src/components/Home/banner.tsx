import BannerImg from '../banner.webp';

function Banner () {
    return (
        <>
        <section className="bannerSec bg-[#FFFBF1] mr-10 ml-10 rounded-3xl mt-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="content_section p-5 md:p-23">
                        <h1 className='text-4xl text-5xl font-bold pb-5 text-2xl'>Luxury Redefined in Every Stay</h1>
                        <p>Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</p>
                    </div>
                    <div className="imageSec">
                        <img className='' src={BannerImg} />
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
}

export default Banner