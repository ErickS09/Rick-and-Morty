import React from "react";


const Epi = ({ ep = [] }) => {
    console.log(ep)
    return (
        <div className="row">
            {
                ep.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={item?.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                <hr />
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Episode: {item.episode}</p>
                             
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Epi