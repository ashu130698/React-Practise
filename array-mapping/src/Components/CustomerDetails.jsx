function CustomerDetails({selected}) {
    // const selected= props.selected;
    // const {selected} = props;
    // const {selected} = props.selected;
    return ( 
        <div>
            <h3 className="text-center p-2 text-bg-primary"> Customers Details :{selected.id}</h3>
            <ul className="list-group">
                <li className="list-group-items">{selected.name}</li>
                <li className="list-group-items">{selected.phone}</li>
                <li className="list-group-items">{selected.website}</li>
                <li className="list-group-items">{selected.address.street},{selected.address.suite},{selected.address.city},{selected.address.zipcode}</li>
            </ul>

        </div>
     );
}

export default CustomerDetails;