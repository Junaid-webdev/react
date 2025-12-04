const Student=({student})=>{
return<>

<div>
  <h3>Student</h3>
                {
                    student.map((student,index)=>{
                        return(
                        <ul key={index}>
                            <li>Name:{student.name}</li>
                        </ul>
                        )
                    })
                }
</div>


</>
}
export default Student;