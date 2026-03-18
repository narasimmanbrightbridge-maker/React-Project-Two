import BannerImg from '../banner.webp';

function Banner () {
    return (
        <>
        <section className="bannerSec bg-[#bdab93] text-[#FFF] mr-10 ml-10 rounded-t-2xl mt-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="content_section p-5 md:p-23">
                        <h1 className='text-4xl text-5xl font-bold pb-5 text-2xl'>Luxury Redefined in Every Stay</h1>
                        <p>Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</p>
                    </div>
                    <div className="imageSec">
                        <img className='rounded-t-2xl' src={BannerImg} />
                    </div>
                </div>
            </div>
        </section>
        </>
        
    );
}

export default Banner