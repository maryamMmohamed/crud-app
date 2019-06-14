import React, { Component, Fragment } from 'react';


class CourseList extends Component {
 
    state = { // 3shan lw das 3la zrar edit 
        isEdit: false
    }

    // render course item
    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => {this.toggleState()} }>Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
            </li>
        )
    }

    // toggle state // 3shan lw das 3la zrar edit  yzhr form w el3aks
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit // dh toggle 
        })
    }

    // update course item
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index , this.input.value ); // lma ydos 3la update yndh 3la function edit
        // this.input.value  dh 3n tre2 ref ely f input 
        this.toggleState(); // w b3den ysh8l toggle
    }

    // render update form // 3sjan lma ydos 3la edit button
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type='text' ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button>
            </form>
        )
    }

    render() {
        let {isEdit} = this.state;
        return (
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse() }
            </Fragment>
        )
    }

}

export default CourseList;
