import React, { Component } from 'react'
import styles from "./seatList.module.css"
import { connect } from "react-redux"
export class UserList extends Component {


  handlelSubmit = () => {
    this.props.selected.map((item) => {
      return (
        item.daDat = true
      )
    })
  }

  handleDelete = (seat) => {
    this.props.dispatch(addSeat(seat));
  }

  sumTotal = () => {
    console.log(this.props.selected);
  }

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
            {this.props.selected?.map((item) => {
              return (
                <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia}</td>
                  <td>
                    <button onClick={() => this.handleDelete(item)}>
                      X
                    </button>
                  </td>
                </tr>
              )
            })}
            <tr>
              <td>Tổng tiền</td>
              <td>
                {this.props.selected.reduce((total, item, index) => {
                  return (
                    total += item.gia
                  )
                }, 0)}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const addSeat = (value) => {
  return {
    type: "ADD_SEAT",
    payload: value,
  };
};

const mapStateToProps = (state) => {
  return {
    selected: state.select.selected,
  }
}

export default connect(mapStateToProps)(UserList)