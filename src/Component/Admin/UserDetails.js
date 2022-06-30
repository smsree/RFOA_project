const UserDetails = props => {
    return <div>
        <h1>Name:{props.name}</h1>
        <h4>Address:{props.street}</h4>
        <h4>Phone:{props.phone}</h4>
    </div>
}
export default UserDetails;