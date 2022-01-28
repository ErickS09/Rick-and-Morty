import React from "react";


const Loc = ({ loca = [] }) => {
    console.log(loca)
    return (
        <div className="row">
            {
                loca?.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={item?.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                <hr />
                                <p>ID: {item?.id}</p>
                                <p>Name: {item?.name}</p>
                                <p>Dimension: {item?.dimension}</p>
                             
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Loc