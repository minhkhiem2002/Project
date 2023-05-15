import React, { useState} from 'react'
import Navbar from '../navbar/Navbar';
import data from '../../model/api/api';
import './assignTask.css';

const AssignTask = () => {
  const [trucks, setTrucks] = useState(data.TruckAPI.all())
  const [collectors, setCollectors] = useState(data.CollectorAPI.all())
  const [routes, setRoutes] = useState(() => {
    return data.RouteAPI.all().map((route) => {
      const mcpIdList =  route.MCPIdList
      const mcpList =  mcpIdList.map((mcpId) => data.mcpAPI.get_by_id(mcpId))
      return {
        "id": route.id,
        "name": `Route ${route.id}`,
        "estimateTime": route.estimateTime,
        "mcpList": mcpList
      }
    })
  })

  const [selectedRoute, setSelectedRoute] = useState(routes[0])

  const HandleSeletecRoute = (e) => {
    const routeId = e.target.value
    setSelectedRoute(routes.find(ele => ele.id === routeId))
  }


  return (
    <>
      <Navbar></Navbar>
      <>
        <div className='assign-task-container'>
          <div className='assign-task-header-h1'><h1>Phân công nhiệm vụ</h1></div>
          <form>
            <div className='assign-task-header-h2'>
              <h2>
                1. Chọn công nhân thu gom và xe tải chở rác
              </h2>
              <div>
                Chọn 1 công nhân thu gom để thực hiện nhiệm vụ này, kèm theo 1 xe tải chở rác
              </div>
            </div>
            <table className='assign-task-table'>
              <tr>
                <th className='assign-task-table-header'>
                  <label htmlFor="collectors">Tên người dùng:</label>  
                </th>
                <th className='assign-task-table-header'>
                  <label htmlFor="vehicles">Mã số phương tiện:</label>
                </th>
              </tr>
              
              <tr>
                <td>
                  <div className='assign-task-table-item-select-container'>
                  <select className='assign-task-table-item-select' name="collectors" id="collectors">
                    {!collectors.length ? <></>:
                      collectors.map((collector, index) => 
                      (<option key={index} value={collector.id}>{collector.username}</option>))}
                  </select>
                  </div>
                  
                </td>
                <td>  
                  <select className='assign-task-table-item-select' name="vehicles" id="vehicles">
                    {!trucks.length ? <></>:
                      trucks.map((vehicle, index) => 
                      (<option key={index} value={vehicle.id}>{vehicle.id}</option>))}
                  </select>
                </td>
              </tr>
            </table>
            
            <div className='assign-task-header-h2'>
              <h2>
                2. Chọn 1 tuyến đường
              </h2>
              <div>
                Chọn 1 tuyến đường cho công nhân thu gom để xác định công nhân làm việc tại đó
              </div>
            </div>
            
            <table className='assign-task-table'>
              <tr>
                <th className='assign-task-table-header'>
                  <label htmlFor="routes">Route:</label>
                </th>
              </tr>
              <tr>
                <td>
                  <select className='assign-task-table-2-item-select' name="routes" id="routes" onChange={HandleSeletecRoute}>
                    {!routes.length ? <></>:
                      routes.map((route, index) => 
                      (<option key={index} value={route.id}>{route.name}: {route.mcpList.at(0).name} - {route.mcpList.at(-1).name}</option>))}
                  </select> 
                </td>
              </tr>
            </table>
            
            

            <div className='assign-task-text'>{!selectedRoute.mcpList.length ? <></> :
              selectedRoute.mcpList
                .map(mcp => {
                  // remember to replace color !!!
                  if(mcp.percentage <= 40)
                    return <span style={{color: "green"}}>{mcp.name} ({mcp.percentage}%)</span>
                  else if(mcp.percentage <= 60)
                    return <span style={{color: "blue"}}>{mcp.name} ({mcp.percentage}%)</span>
                  else if(mcp.percentage <= 80)
                    return <span style={{color: "brown"}}>{mcp.name} ({mcp.percentage}%)</span>
                  else
                    return <span style={{color: "red"}}>{mcp.name} ({mcp.percentage}%)</span>
                })
                .reduce((acc, x) => acc === null ? x : <>{acc} <span>{'>'}</span> {x}</>, null)
            }</div>

            <div className='assign-task-text'>Dự đoán thời gian hoàn thành: {selectedRoute.estimateTime} giờ</div>

            <input className='assign-task-submit-button' type="submit" value="Submit"></input>

          </form>

        </div>
        
      </>
    </>
  )
}

export default AssignTask