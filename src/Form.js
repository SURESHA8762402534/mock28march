import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [nameState, setName] = useState({});
    const navigate = useNavigate()

    const nameRef = useRef(null);
    const photoRef = useRef(null);
    const companyRef = useRef(null);
    const linkedInRef = useRef(null);

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const onSubmit = (e) => {
        e.preventDefault();
        setName({
            'Name': nameRef.current.value,
            'Photo': photoRef.current.value,
            'Company': companyRef.current.value,
            'Link': linkedInRef.current.value
        })

        // dispatch({
        //     type : 'ADD',
        //     payload : nameState
        // })
        if(Object.keys(state.data).length > 0){
            navigate('/profile')
        }
        
        
    }

    useEffect(() => {
        // console.log(nameState);
        dispatch({
            type: "ADD",
            payload: nameState
        })

    }, [dispatch,nameState])
    return (
        <>
           
                <div className='container mt-5 p-5'>
                    <div className="row ">
                        <div className="col-6 bg-warning p-5">
                            <div className="row">
                                <div className="col-3">
                                    Enter Name
                                </div>
                                <div className="col-3">
                                    <input type="text" ref={nameRef}/>
                                </div>

                            </div><br />

                            <div className="row">
                                <div className="col-3">
                                    Photo
                                </div>
                                <div className="col-3">
                                    <input type="file" ref={photoRef} />
                                </div>
                            </div><br />

                            <div className="row">
                                <div className="col-3">
                                    Company
                                </div>
                                <div className="col-3">
                                    <input type="text" ref={companyRef} />
                                </div>
                            </div><br />

                            <div className="row">
                                <div className="col-3">
                                    LinkedIn
                                </div>
                                <div className="col-3">
                                    <input type="text" ref={linkedInRef} />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-3">
                                    <button className='btn-primary' onClick={onSubmit}>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               

        </>
    )
}

export default Form