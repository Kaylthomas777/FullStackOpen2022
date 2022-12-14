const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} part={part} />)}
        <Total parts={parts} />
      </>
    )
  }
  
const Part = ({ part }) => {
    return <><p>{part.name} {part.exercises}</p></>
}

const Total = ({ parts }) => {
    let totalNumExercises = parts.reduce((prevVal, currVal) => {
        return prevVal + currVal.exercises
    }, 0)
    return (
      <div>
        <h4>
          Number of exercises {totalNumExercises}
        </h4>
      </div>
    )
  }

export default Content