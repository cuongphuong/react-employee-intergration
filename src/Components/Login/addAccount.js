import React, { Component } from 'react';
import './Register.css';

class addAccount extends Component {
    render() {
        return (
            <div className="card" className="p-10">
                <form method="POST" className="mt-20">
                    <legend>Add Account</legend>
                    <div className="form-label-group mt-20">
                        <label>Full Name</label>
                        <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>User Name</label>
                        <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label> Password</label>
                        <input type="password" className="form-control" placeholder="password" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Account Type</label>
                        <select className="form-control form-control-sm">
                            <option>senior staff</option>
                            <option>Shareholders</option>
                        </select>

                    </div>
                    <button type="submit" className="btn btn-primary mt-20">Save</button>
                </form>
            </div>
        );
    }
}

export default addAccount;