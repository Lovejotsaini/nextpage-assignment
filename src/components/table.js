import React, { useState, useEffect } from "react";
import Items from "./items";
import '../index.css'




const Table = (props) => {
    const { data } = props
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([])
    const [seats, setSeats] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5)
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('0');
            alert('Session Time Out')
            setCount(0)
            setCart([])
            setSeats(0)

        }
    }, [seconds]);

    const incrementCarts = () => {

        setCount(count + 1)
        setSeats(seats - 1)

        //console.log(count)
        if (count > 1) {
            alert('You have done maximum bookings for this week')
        }
    }
    const decrementCart = () => {
        setCount(count - 1)
        setSeats(seats + 1)

    }
    const cartData = (data) => {
        const result = [data, ...cart]
        setCart(result)
    }
    localStorage.setItem('cart', JSON.stringify(cart))





    return (
        <div>
            <p className="cartCount"> {count}</p>
            <p className="timeLeft">Time Left-{seconds} seconds</p>
            <h1 className="classSchedule">Class Schedule</h1><h2 className="freeSeats">free seats left-{seats}</h2>
            <table className="table" border="1">
                <thead className="thead">
                    <tr>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                {data.map((ele) => {
                    return <Items cartData={cartData} decrementCart={decrementCart} incrementCarts={incrementCarts} id={ele.id} Subject={ele.Subject} Date={ele.Date} Time={ele.Time} Availability={ele.Availability} />

                })}
            </table>


        </div>
    )
}

export default Table