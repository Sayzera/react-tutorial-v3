import { ExampleComponent } from "./example-component"
import { UserList } from "./user-list"
import UserData from './temp/user-data.json'
import { useState } from "react"



function PropsComponent() {
  
  const [tempUserData, setTempUserData] = useState(UserData?.map((user) => ({
    ...user,
    _id: Math.floor( Math.random() * 999999 ) + new Date().getTime()
  })))




  return (
    <div>
      {/* <ExampleComponent
        data={{
            data: [],
            message: 'success',
            
        }}
      /> */}
      <UserList data={tempUserData}  />

   
      
    </div>
  )
}

export default PropsComponent