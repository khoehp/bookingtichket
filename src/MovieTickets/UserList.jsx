import React, { Component } from 'react'
import styles from "./seatList.module.css"

export class UserList extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "yellow" }} >Danh sách ghế bạn chọn</h1>
        <div className='d-flex'>
          <div className={styles.gheDuocChon}></div>
          <p>Ghế đã đặt</p>
        </div>
        <div className='d-flex'>
          <div className={styles.gheDangChon}></div>
          <p>Ghế đang chọn</p>
        </div>
        <div className='d-flex'>
          <div className={styles.gheChuaChon}></div>
          <p>Ghế chưa đặt</p>
        </div>
        <table className='table table-bordered table-dark '>
          <thead>
            <tr>
              <th className='col'>Số ghế</th>
              <th className='col'>Giá</th>
              <th className='col'>Hủy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>7000</td>
              <td>X</td>
            </tr>
            <tr>
              <td>Tổng tiền</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserList