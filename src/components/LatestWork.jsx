const LatestWork = (data) => {
  const { img, title, text } = data.work;
  return (
    <div className="work__latest-work">
      <img className='work__latest-work-img' src={img} alt={title} />
      <h4 className="work__latest-work-title">{title}</h4>
      <p className="work__latest-work-text">{text}</p>
    </div>
  );
};

export default LatestWork;