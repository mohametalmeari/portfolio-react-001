import star from "../assets/star.svg";

const Client = (data) => {
  const { comment, img, stars, name, corp } = data.client;
  let startsImages = [];
  for (let i = 0; i < stars; i++) {
    startsImages.push(
      <img className="work__client-star" src={star} alt="Star" />
    );
  }
  return (
    <div className="work__client">
      <p className="work__client-comment">{comment}</p>
      <div className="work__client-info">
        <img className="work__client-img" src={img} alt="Profile" />
        <div className="work__client-details">
          <div className="work__client-stars">
            {startsImages}
          </div>
          <h4 className="work__client-name">
            {name}
            <span>,</span>
          </h4>
          <h5 className="work__client-corp">{corp}</h5>
        </div>
      </div>
    </div>
  );
};

export default Client;
