import { arrayofobjects } from "./data"
import { Tablerow } from "./tablerow"



const TableComponent=()=>{

return(



<table style={{width:"70%"}}>
  <tbody>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>

    {

  arrayofobjects.map(eacharray=>{


    return(

    <Tablerow data={eacharray}/>


    )





  })


    }
   
  </tbody>
</table>



)




}
export default TableComponent