import { useState} from "react"
import UserDetails from "./UserDetails"
import InlineOrderedItems from "./InlineOrderedItems"
const ViewOrders = props =>{
   const [dataOut,setDataOut] = useState([])
   const [userOut,setUserOut] = useState([])
   
    const fetchButtonHandler = async() => {
        console.log("fetching.....")
       const response = await fetch("http://localhost:8100/orders/all");
        const data = await response.json();
        console.log(data.map(i=>i.orderedItems))
       data.map(order => setDataOut(order.orderedItems));

        const userResponse= await fetch("http://localhost:8100/user/all");
        const userData=await userResponse.json();
        setUserOut(userData);
    }
    const userDetails =<ul>{userOut.map(user=><li><UserDetails name={user.name} street={user.street} phone={user.phoneNumber}/></li>)}</ul>

    return <div>
        <button onClick={fetchButtonHandler}>Fetch order details</button>
        {userDetails}
        {console.log(dataOut)}
        {dataOut.map(i=><ul><li>{i.name}</li></ul>)}
      
    </div>
}
export default ViewOrders