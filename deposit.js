function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]     = React.useState('');
  const ctx = React.useContext(UserContext);  
  let newestUser = ctx.users.length - 1;
  const balance = ctx.users[newestUser].balance;

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (isNaN(field)) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (field < 0) {
        setStatus('Error: Please enter a positive number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleDeposit(){
    if (!validate(amount, 'amount')) return;
    let newBalance = parseInt(ctx.users[newestUser].balance) + parseInt(amount);
    ctx.users.push({name:ctx.users[newestUser].name, balance:newBalance,transaction:'deposit',amount:amount});
    setShow(false);
  }    

  function clearForm(){
    setAmount('');
    setShow(true);
  }
  return (
    <Card
      bgcolor="dark"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              <h5>Current Balance: ${balance}</h5><br/>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
              <button type="submit" disabled={!amount} className="btn btn-light" onClick={handleDeposit}>Submit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <p>Current Balance: ${balance}</p><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  )
}
