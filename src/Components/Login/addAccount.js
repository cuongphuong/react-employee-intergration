import React, { Component } from 'react';
import './Register.css';

class addAccount extends Component {
    render() {
        return (
            <div className="card" className="p-10">
                <form method="POST" className="mt-20">
                    <legend>Thêm Tài Khoản</legend>
                    <div className="form-label-group mt-20">
                        <label>Nhập họ và tên</label>
                        <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Nhập Tên</label>
                        <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Nhập password</label>
                        <input ref="password" type="password" className="form-control" placeholder="password" required="required" />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Kiểu tài khoản</label>
                        <select className="form-control form-control-sm">
                            <option>Nhân viên cao cấp</option>
                            <option>Cổ đông</option>
                        </select>

                    </div>
                    <button type="submit" className="btn btn-primary mt-20">Lưu lại</button>
                </form>
            </div>
        );
    }
}

export default addAccount;