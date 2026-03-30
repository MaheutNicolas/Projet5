function Banner({ img, text = null, alt = "", hx = "h1"  }) {

  return (
    <>
        <div className="banner">
            <img src={img} alt={alt} className="banner-img" />
            { text ? 
                (
                    <hx className="banner-text">Chez vous, partout et ailleurs</hx> 
                ) 
                : '' 
            }
        </div>
    </>
  );
}

export default Banner;