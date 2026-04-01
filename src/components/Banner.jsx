import Heading from "./Heading";

function Banner({ img, text = null, alt = "", hx = "h1"  }) {

    return (
        <>
            <div className={"banner" + (text ? " dark" : "")}>
                <img src={img} alt={alt} className="banner-img" />
                { text ? 
                    (
                        <Heading as={hx} className="banner-text">{text}</Heading> 
                    ) 
                    : '' 
                }
            </div>
        </>
    );
}

export default Banner;