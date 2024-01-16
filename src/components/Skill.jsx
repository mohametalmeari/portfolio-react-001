const Skill = (data) => {
  const { img, title, text } = data.skill;
  return (
    <div className="work__skill">
      <img className="work__skill-img" src={img} alt={title} />
      <h3 className="work__skill-title">{title}</h3>
      <p className="work__skill-text">{text}</p>
    </div>
  );
};

export default Skill;
