import"./chatList.css"
const chatList = () => {
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchbar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src="./plus.png" alt="" />
            </div>
        </div>
    )
}

export default chatList