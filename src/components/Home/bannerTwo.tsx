import BannerImg from '../imageTwo.webp';

function BannerTwo () {
    return (
        <>
        <section className="bannerSec bg-[#5a684e] text-[#FFF] mr-10 ml-10 rounded-b-2xl">
            <div className="container">
                <div className="grid grid-cols-2">
                    <div className="content_section p-23 order-2">
                        <h1 className='text-5xl font-bold pb-5'>Luxury Redefined in Every Stay</h1>
                        <p>Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</p>
                    </div>
                    <div className="imageSec order-1">
                        <img className='rounded-b-2xl' src={BannerImg} />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default BannerTwo;