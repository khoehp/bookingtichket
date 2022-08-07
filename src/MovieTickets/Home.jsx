import React, { Component } from 'react'
import styles from "./seatList.module.css"
import UserList from './UserList'
import SeatList from "./SeatList"
import { connect } from "react-redux"


export class Home extends Component {
    render() {
        return (
            <div className={styles.bg}>
                <div className={styles.overlay}></div>
                <h1 style={{ color: "yellow" }}>Đặt vé xem phim Cyber.vn</h1>
                <div className='d-flex'>
                    <div className='col-8' >
                        <div className={styles.screen}></div>

                        {this.props.Seat?.map((item) => {
                            return <SeatList />
                        })}
                        <button className='btn btn-success'>submit</button>

                    </div>
                    <div className='col-4'>
                        <UserList />
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Seat: state.seat.seatList
    }
}

export default connect(mapStateToProps)(Home)