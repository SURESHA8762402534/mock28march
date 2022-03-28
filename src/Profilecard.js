
import { useSelector } from 'react-redux';

const Profilecard = () => {

    const Data = useSelector(state => state)

    // useEffect(()=>{
    //     console.log(Data);
    // },[Data])

    return (
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-header">
                        <img style={{width:"2rem", height:"2rem"}} className="card-img-top" src={Data.data.Photo} alt="Card imag cap" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title ">{Data.data.Name}</h2>
                            <p className="card-text text-secondary">{Data.data.Company}</p>
                            <a href={Data.data.Link} className="btn btn-primary" >LinkedIn</a>
                        </div>
                        <div className="card-footer bg-info">
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilecard