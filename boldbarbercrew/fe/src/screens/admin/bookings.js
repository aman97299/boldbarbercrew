import axios from "axios";
import React from "react";
import CreateModal from "./createModal";
import { APP_BASE_URL } from "../../utils/constants";

const Bookings = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const url = APP_BASE_URL + "getBookings";
    const response = await axios.get(url);
    if (response) {
      setData(response?.data);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <table>
        <tr>
          <th>Name</th>
          <th>Services</th>
          <th>Booked Date</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Notes</th>
        </tr>
        {data?.map((i) => {
          return (
            <tr key={i?.name} style={{ margin: 10 }}>
              <td>{i?.name}</td>
              <td>
                {i?.service?.map((d) => {
                  return (
                    <ul>
                      <li>{d}</li>
                    </ul>
                  );
                })}
              </td>
              <td>{i?.appointmentDate}</td>
              <td>{i?.email}</td>
              <td>{i?.phone}</td>
              <td>{i?.notes}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Bookings;
