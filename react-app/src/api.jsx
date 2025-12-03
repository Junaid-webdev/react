import { useEffect, useState } from "react";

function User() {
 
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData(){
    const url =  "https://api.restful-api.dev/objects";
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response)
    
  }
  return (
    <>
      <h1>Fetch Data from API</h1>
            <ul className="user-list user-list-head">
                <li>Id</li>
                <li>Name</li>
                <li>Color</li>
                <li>Capacity</li>
            </ul>
    {
        usersData && usersData.map((user)=>(
            <ul className="user-list">
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.data && user.data.color ? user.data.color : "N/A"}</li>
                <li>{user.data?.capacity ?? "N/A"}</li>
            </ul>
        ))
    }


      {/* <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Capacity</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.data && user.data.color ? user.data.color : "N/A"}</td>
              <td>{user.data?.capacity ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
}
export default User;