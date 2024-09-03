import axios from "axios"
import React from "react"
import CreateModal from "./createModal"
import { APP_BASE_URL, ASSETS_BASE_URL } from "../../utils/constants"


const Services = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const url = APP_BASE_URL + "getServices"
    const response = await axios.get(url)
    if (response) {
      setData(response?.data)
    }
  }

  const handleCreateCategoty = async (values) => {
    const url = APP_BASE_URL + "addService"
    var formData = new FormData()
    formData.append("name", values?.name)
    formData.append("price", values?.price)
    formData.append("description", values?.desc)
    formData.append("image", values?.image)
    axios.post(url, formData).then((response) => {
      if (response) {
        getServices()
      }
    })
      .catch((err) => {
        alert(err)
      })
  }
  const handleDeleteItem = async (item) => {
    const url = APP_BASE_URL + "deleteService"
    const response = await axios.post(url, { id: item?._id })
    if (response) {
      getServices()
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <CreateModal
        onSubmit={(values) => {
          handleCreateCategoty(values)
        }}
        title="Service"
      />
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        {data?.map((i) => {
          return (
            <tr key={i?.name} style={{ margin: 10 }}>
              <td>{i?.name}</td>
              <td>
                <img
                  style={{ height: 200, width: 200, borderRadius: 5 }}
                  src={ASSETS_BASE_URL + i?.image}
                />
              </td>
              <td>{i?.price}</td>
              <td>{i?.description}</td>
              <td>
                <img
                  onClick={() => {
                    handleDeleteItem(i)
                  }}
                  style={{ height: 50, width: 50, cursor: "pointer" }}
                  src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png"
                />
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Services
