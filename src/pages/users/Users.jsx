import React, { useState } from "react";
import "./users.scss"
import UserCard from "../../components/UserCard/UserCard";
import { users } from "../../data"

const Users = () => {

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales")

    const reSort = (type) => {
        setSort(type)
        setOpen(false)
    }


    return (
        <div className="users">
            <div className="container">
                <span className="breadcrumbs">DESIGN : GRAPHICS & DESIGN</span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budgeb</span>
                        <input type="text" placeholder="min" />
                        <input type="text" placeholder="max" />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (<div className="rightMenu">
                            {sort === "sales" ?
                                (
                                    <span onClick={() => reSort("createdAt")}>Newest</span>
                                )
                                :
                                (
                                    <span onClick={() => reSort("sales")}>Best Selling</span>
                                )}
                        </div>)}
                    </div>
                </div>
                <div className="cards">
                    {users.map((user) => (
                        <UserCard key={user.id} item={user} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users