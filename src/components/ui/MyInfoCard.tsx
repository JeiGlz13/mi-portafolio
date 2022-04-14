import { ContactInfo } from "./ContactInfo"
import { MyDescription } from "./MyDescription"

export const MyInfoCard = () => {
  return (
    <div className="MyInfoCard" >
        <ContactInfo/>

        <MyDescription/>
    </div>
  )
}
