function AllData(){
  const ctx = React.useContext(UserContext);
  const rows = ctx.users.map((user) =>
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.transaction}</td>
          <td>{user.amount}</td>
          <td>{user.balance}</td>
        </tr> 
    );
  return (
    <>
    <Card
      bgcolor="dark"
      header="All Data"
      body = {
        <>
        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>         
        </table>
        </>
      }
    />
    </>
  );
}
