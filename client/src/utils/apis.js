const apis=()=>{
    const local="https://notepad-u68d.onrender.com/";
    const list={
        userProfile:`${local}user/profile`,
        logout:`${local}user/logout`,
        getAccess:`${local}user/access`
    }
    return list
}

export default apis
