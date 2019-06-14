import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';


class App extends Component {

  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JQuery' }
    ],
    current: ''
  }

  // update course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // delete course
  deleteCourse = (index) => {
    let courses = this.state.courses; // 3shan ageb kol el courses kolha
    courses.splice(index, 1); // 3shan ashel ely wa2f 3leh
    this.setState({
      courses: courses
    })
  }

  // add course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current; // 5znly feh ely adaf
    let courses = this.state.courses; // 3shan ageb kol el courses kolha
    if (current) {
      courses.push({ name: current });// 7otly feh ely adaf
      this.setState({ // h3ml update
        courses: courses,// momkn aktb courses bs kda 3shan key = value
        current: '' // 3shan afdy input b3d ma aktb w lazm aro7 a3mlha f input
      })
    }
  }

  // edit course
  editCourse = (index, value) => { // lazm ya5od index ana wa2f fen w value el2ema el gdeda
    let courses = this.state.courses; // 3shan ageb kol el courses kolha
    let course = courses[index]; // 3shan ageb el course ely ana wa2f 3leh
    course['name'] = value; // 7ot feh value el gdeda
    this.setState({ // h3ml update
      courses: courses,// momkn aktb courses bs kda 3shan key = value
    })
  }


  render() {

    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}  />
    })

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>
          {this.state.courses.length > 0 ? courseList : <p>No Courses To Show! Please Add New Course.</p>}
        </ul>
      </section>
    )
  }

}

export default App;
