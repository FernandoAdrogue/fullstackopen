const Header = (props) => {
  const {course} = props;
  console.log(course);

  const {name} = course;

  return (
    <h1>
      {name}
    </h1>
  )

};

const Part = (props) => {
  console.log(props);
  
  const {part, exercises} = props;

  return (
    <p>
      {part} {exercises}
    </p>
  )

};
const Content = (props) => {
  const {parts} = props.course;
  console.log(parts);
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  )

};
const Total = (props) => {
  const {parts} = props.course;
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
};

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
    <>
      <Header course={course}/>
      <Content course ={course}/>
      <Total course={course}/>
    </>
  )
}

export default App