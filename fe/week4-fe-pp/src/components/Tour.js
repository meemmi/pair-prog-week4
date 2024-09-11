const Tour = ({ id, image, date, title, info, location, duration, cost, onDelete }) => {
  const handleDelete = () => {
    onDelete(id); // Pass the item's ID to the parent component for deletion
  };
  
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {location}
          </p>
          <p>from {cost}</p>
          <p>{duration} days</p>
        </div>
        <button className="reject_button" onClick={handleDelete}>Not Interested</button>
      </div>
    </article>
  );
};
export default Tour;
