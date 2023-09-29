const Header = (props) => {
  console.log(props)

  return (
  <div>
    <p>
      {props.course}
    </p>
  </div>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <div>
      {props.name} {props.exercises}
    </div>

  )

  
}

const Content = (props) => {
  console.log(props)

return (
  <div>
      <Part name={props.name_content} exercises={props.exercises_content} />

  </div>
)
}

const Total = (props) => {
  console.log(props)

  return (
  <div>
    <p>
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  </div>
  )  
}
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course.name} />
      <Content name_content={course.parts[0].name} exercises_content={course.parts[0].exercises}/>
      <Content name_content={course.parts[1].name} exercises_content={course.parts[1].exercises}/>
      <Content name_content={course.parts[2].name} exercises_content={course.parts[2].exercises}/>
    </div>
  )
}

export default App