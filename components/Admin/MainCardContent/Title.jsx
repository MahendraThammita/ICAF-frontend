import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";

function MainCardTitle(){


    const [title,setTitle] = useState();


useEffect(() => {

    const url = "http://localhost:8000/topic/";
    axios.get(url).then((res) => {
        setTitle(res.data[0].topic);
    }).catch((err) => {
        console.log(err);
    })

})
    return(


            <div className="uditha-main-card-title">

                <h1>{title}</h1>

            </div>



    )
}

export default MainCardTitle;