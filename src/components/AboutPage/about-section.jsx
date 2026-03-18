import AboutSecImg from "../showcase-2.webp";
function AboutSection () {
    return (
        <section className="AboutSection">
            <div className="container mx-auto px-0">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                    <div className="content order-2 pl-10 pr-10 pt-10 pb-10 md:order-1 p-20">
                        <h2 className="text-left font-bold text-4xl pb-5">Our Company</h2>
                        <p className="text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.</p>
                    </div>

                    <div className="Imgsec order-1 md:order-2">
                        <img className="rounded-xl w-100 block m-auto md:w-150 lg:w:150" src={AboutSecImg} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;