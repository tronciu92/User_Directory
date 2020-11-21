import React from "react";
import "./style.css";
import ListHeader from '../ListHeader';

class Navbar extends React.Component {

    state = {
        searchTerm: "",
        filteredUsers: []
    };

    componentDidMount() {
        if (this.state.filteredUsers.length < 1) {
            this.setState({
                filteredUsers: this.props.users
            })
        }
    }


    handleInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
        let userTyped = event.target.value;
        const filteredList = this.props.employees.filter((item) => {
            let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
            return values.indexOf(userTyped) !== -1;

        });

        this.setState({
            filteredUsers: filteredList

        });
    }

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.searchTerm}
                        name="searchTerm"
                        onChange={event => this.handleInputChange(event)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
                {this.state.filteredUsers.length > 0 &&
                    <ListHeader empList={this.state.filteredUsers} />
                }
            </div>

        );
    }
}


export default Navbar;