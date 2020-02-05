import React from 'react';
import { NavLink } from 'react-router-dom';

const Tracks = (props) => {
    console.log(props.data);
    let result;
    if(props.data.message.body.track_list.length === 0){
        result = <h2><span className="badge badge-danger">No hay datos, intenta otra busqueda</span></h2>
    }else{
        result = (
            props.data.message.body.track_list.map((item,index)=>{
                let url = "/lyrics/" + item.track.track_id;
                return(<div key={index} className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <span className="badge badge-warning">ArtistName</span> <span className="coolText">{item.track.artist_name}</span> <br></br>
                            <span className="badge badge-success">TrackName</span> <span className="coolText">{item.track.track_name}</span> <br></br>
                            <span className="badge badge-danger">Album</span> <span className="coolText">{item.track.album_name}</span> <br></br>
                            <NavLink to={url}><button className="coolText btn btn-secondary">See lyrics</button></NavLink>
                        </div>    
                    </div>
                    <br></br>
                </div>)
            })
        )
    }

    return(
        <div className="row">
            {result}
        </div>
    )
}

export default Tracks;