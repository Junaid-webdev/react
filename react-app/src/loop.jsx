function Loop(){

    const   userName = ['Junaid','sameer','peeter']
    const userData = [
        {
            name: "Junaid",
            email: "junaid@test.com",
            age: 21,
            id: 1
        },
        {
            name: "sameer",
            email: "sameer@test.com",
            age: 17,
            id: 2
        },
        {
            name: "peeter",
            email: "peeter@test.com",
            age: 37,
            id: 3
        },

    ]

    return <>
    
    <h3>Loop in JSX with map function </h3>
    <h5>Daynamic data get karna</h5>
        <table border='1px solid black'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
               {
                userData.map((user)=>(
                     <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
                ))
               }
            </tbody>
        </table>
    </>
}
export default Loop;