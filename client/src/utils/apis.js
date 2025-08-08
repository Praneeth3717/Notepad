const apis=()=>{
    const local="http://localhost:5000/";
    const list={
        userProfile:`${local}user/profile`,
        logout:`${local}user/logout`,
        getAccess:`${local}user/access`
    }
    return list
}

export default apis