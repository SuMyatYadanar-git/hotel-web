import React from 'react'

import bg1 from '../../../images/hotel_pink.jpg'


const RoomTypeInfo = props => {
    return (
        <div className="pt-3 container ">

            <div className="d-flex flex-row justify-content-between flex-wrap pt-3" >
                <div className="col-lg-6 p-0 px-3">
                    <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
                </div>
                <div className="flex-grow-1 pt-3 px-3 justify-content-start">
                    <div> {"title"} </div>
                    <div className="py-2"> {"subtitle"} </div>
                    <div className="py-2">{"room info detail"}</div>
                    <div className="py-2">detail button</div>
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-between flex-wrap pt-3">
                <div className="col-lg-6 p-0 px-3">
                    <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
                </div>
                <div className="flex-grow-1 pt-3 px-3 justify-content-start">
                    <div> {"title"} </div>
                    <div className="py-2"> {"subtitle"} </div>
                    <div className="py-2">{"room info detail"}</div>
                    <div className="py-2">detail button</div>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-between flex-wrap pt-3" >
                <div className="col-lg-6 p-0 px-3">
                    <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
                </div>
                <div className="flex-grow-1 pt-3 px-3 justify-content-start">
                    <div> {"title"} </div>
                    <div className="py-2"> {"subtitle"} </div>
                    <div className="py-2">{"room info detail"}</div>
                    <div className="py-2">detail button</div>
                </div>
            </div>

            <div className="d-flex flex-row-reverse justify-content-between flex-wrap pt-3" >
                <div className="col-lg-6 p-0 px-3">
                    <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
                </div>
                <div className="flex-grow-1 pt-3 px-3 justify-content-start">
                    <div> {"title"} </div>
                    <div className="py-2"> {"subtitle"} </div>
                    <div className="py-2">{"room info detail"}</div>
                    <div className="py-2">detail button</div>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-between flex-wrap pt-3" >
                <div className="col-lg-6 p-0 px-3">
                    <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
                </div>
                <div className="flex-grow-1 pt-3 px-3 justify-content-start">
                    <div> {"title"} </div>
                    <div className="py-2"> {"subtitle"} </div>
                    <div className="py-2">{"room info detail"}</div>
                    <div className="py-2">detail button</div>
                </div>
            </div>


        </div>

    )
}
export default RoomTypeInfo

// const Room = ({ img, title, subtitle, roomInfo,room}) => {  
//     return (
//         <div className={`d-flex flex-row ${room< 1 && '-reverse'} justify-content-between flex-wrap`}>
//             <div className="col-lg-6 p-0 px-3">
//                 <img src={bg1} className="img-fluid img-thumbnail" alt="for-room" />
//             </div>
//             <div className="flex-grow-1 pt-3 px-3 justify-content-start">
//                 <div> {"title"} </div>
//                 <div className="py-2"> {"subtitle"} </div>
//                 <div className="py-2">{"room info detail"}</div>
//                 <div className="py-2">detail button</div>
//             </div>
//         </div>

//     )
// }