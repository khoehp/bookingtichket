import React, { Component } from 'react'
import { connect } from "react-redux";
import styles from "./seatList.module.css"
export class SeatList extends Component {

  handleChange = (e) => {
    const selectItem = {
      seatId: this.props.seat.soGhe,
      selectId: e.target.value,
    };
    this.props.dispatch({
      type: "UPDATE_SEAT",
      payload: selectItem
    })
  }


  render() {
    return (
      
      
      <div>
        {this.props.SeatList.map((item, index) => {
          return (
            <input
              onChange={this.handleChange}
              value={item.soGhe}
              type={'checkbox'}
              className={styles.ghe}
              ghe={item.soGhe} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    SeatList: state.seat.seatList
  }
}
export default connect(mapStateToProps)(SeatList)