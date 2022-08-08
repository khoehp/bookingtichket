import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from "./seatList.module.css"
export class SeatList extends Component {



toggleCheck = (seat) => {
    this.props.dispatch(addSeat(seat))
    console.log(seat);
  }


  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            {this.props.SeatList.map((seatRow) => {
              if (seatRow.hang === "") {
                return (
                  <tr key={seatRow.hang}>
                    <th className="text-warning fs-4 border-0">{seatRow.hang}</th>
                    {seatRow.danhSachGhe.map((seat) => {
                      return (
                        <td key={seat.soGhe} className="border-0">
                          <span className="text-center text-warning fs-4">
                            {seat.soGhe}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              } else {
                return (
                  <tr key={seatRow.hang}>
                    <th className="text-warning fs-4 border-0">{seatRow.hang}</th>
                    {seatRow.danhSachGhe.map((seat) => {
                      return (
                        <td key={seat.soGhe} className="border-0">
                          <input
                            onClick={() => this.toggleCheck(seat)}
                            id={seat.soGhe}
                            type={'checkbox'}
                            className={styles.ghe}
                            disabled={seat.daDat}
                            value={seat.soGhe}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            })}
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
    SeatList: state.seat.seatList
  }
}
export default connect(mapStateToProps)(SeatList)