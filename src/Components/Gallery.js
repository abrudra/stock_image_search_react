import { Component } from "react";

class Gallery extends Component {

  render() {
    const { data } = this.props;
    return (
      <section className="gallery">
        <>
          {data.map((pic) => (
            <div className="pic-class" key={pic.id}>
              <img className="pic-class" src={pic.urls.regular} />
              <div className="paradiv-class">
                <p>{pic.user.name}</p>
                <p>{pic.likes}likes</p>
                <img
                  className="profilediv-class"
                  src={pic.user.profile_image.small}
                />
              </div>
            </div>
          ))}
        </>
      </section>
    );
  }
}

export default Gallery;
