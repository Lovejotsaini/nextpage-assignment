import React from "react";
import Table from "./table";
import { v4 as uuidv4 } from 'uuid'

const Header = (props) => {



    const data = [
        {
            id: uuidv4(),
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1),

        },
        {
            id: uuidv4(),
            Subject: 'java',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1),

        },
        {
            id: uuidv4(),
            Subject: 'c',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1)
        },
        {
            id: uuidv4(),
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1)
        },
        {
            id: uuidv4(),
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1)
        },
        {
            id: uuidv4(),
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1)
        },
        {
            id: uuidv4(),
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability: Math.floor((Math.random() * 10) + 1)
        },
    ]




    return (
        <div>
            <Table data={data} />
        </div>
    )
}

export default Header