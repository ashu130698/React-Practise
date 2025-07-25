function StudentResult() {
    const result = [
        {id:1,name:"ashu",per:90},
        {id:2,name:"carry",per:70},
        {id:3,name:"zoho",per:80},
        {id:4,name:"surya",per:60},
    ]
    return ( 
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr><th>Id</th><th>Name</th><th>Percentage</th></tr>
                </thead>
                <tbody>
                    {
                        result.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td style={{ color: item.per >=80 ? 'green':'red'}}>{item.per}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default StudentResult;