import React, {useContext} from 'react'
import { UserContext} from '../UserContext'

export const About = () => {
  const [user, setUser ] = useContext(UserContext)
  
  return(
    <div>
      <h1>About</h1>
      {user && <pre>{JSON.stringify(user, null ,2)}</pre> }
      {user && < img src="https://image2.tienphong.vn/w665/Uploaded/2019/jaetgs/2019_12_18/coco0148_rtac.jpg"/>}
    </div>
  )
}