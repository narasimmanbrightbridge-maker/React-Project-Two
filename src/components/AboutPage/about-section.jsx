import AboutSecImg from "../showcase-2.webp";
function AboutSection () {
    return (
        <section className="AboutSection mr-20 ml-20">
            <div className="container mx-auto px-0">
                <div className="grid grid-cols-2">
                    <div className="content p-20">
                        <h2 className="text-left font-bold text-4xl pb-5">Our Company</h2>
                        <p className="text-left">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.</p>
                    </div>
                    <div className="Imgsec">
                        <img className="rounded-xl" src={AboutSecImg} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;