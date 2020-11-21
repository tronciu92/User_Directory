import React from "react";
import "./style.css";
import Card from '../Card';

class ListHeader extends React.Component {

    state = {
        alphabetical: true,
        ascending: true,
        sortedUsers: [],
        users: []
    }

    componentDidMount() {
        if (this.state.sortedUsers.length < 1) {
            this.setState({
                sortedUsers: this.props.empList
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.empList !== prevProps.empList) {
            this.setState({
                sortedUsers: this.props.empList
            })
        }
    }

    sortName = () => {
        let sortEmp = [];
        if (this.state.alphabetical) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            alphabetical: !this.state.alphabetical,
            sortedUsers: sortEmp

        })
    }

    sortAge = () => {
        let sortEmp = [];
        if (this.state.ascending) {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        } else {
            sortEmp = this.props.empList.sort((a, b) => {
                var nameA = a.dob.age, nameB = b.dob.age;
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
        }
        this.setState({
            ascending: !this.state.ascending,
            sortedUsers: sortEmp

        })
    }

    render() {
        return (

            <div>
                <div className="header">
                    <div>Photo</div>
                    <div><p onClick={this.sortName} className="name">Name</p> </div>
                    <div>Gender</div>
                    <div><p onClick={this.sortAge} className="age">Age</p></div>
                    <div>Phone</div>
                    <div>E-mail</div>
                </div>

                {
                    this.state.sortedUsers.length > 0 &&
                    this.state.sortedUsers.map((item, index) => (

                            <Card
                                image={item.picture.large}
                                first={item.name.first}
                                last={item.name.last}
                                title={item.name.title}
                                gender={item.gender}
                                age={item.dob.age}
                                phone={item.cell}
                                email={item.email}
                            />
                    ))
                }
            </div>
        );
    }
}

export default ListHeader;