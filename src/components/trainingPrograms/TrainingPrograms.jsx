
const TrainingPrograms = ({ id, title, text }) => {
  return (
    <div className="TrainingPrograms">
      <div className="box">

        <h2 className="title">
          {id + "-"}
          {title}
        </h2>
        <p className="text">
          {text}
        </p>
      </div>
    </div>
  )
}

export default TrainingPrograms