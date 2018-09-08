import React from 'react';
import Loading from './Loading';
import { NavLink } from 'react-router-dom';

class Lyrics extends React.Component {
    constructor(props){
        super();

        this.state = {
            id:props.match.params.id,
            loading:true,
            letra:''
        }
    }

    componentWillMount = () => {
        fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id="+this.state.id+"&apikey=c47499c02955d3ad20592d919ef3c530")
        .then(res=>res.json())
        .then((data)=>{
            
            if(data.message.body.length === 0){
                this.setState({
                    letra: (<div className="badge badge-danger">Lyrics not found</div>),
                    loading:false
                })
            }else{
                console.log(data.message.body)
                this.setState({
                    letra: data.message.body.lyrics.lyrics_body,
                    loading:false
                })
            }
            

        });
    }

    render(){
        let result;
        if(this.state.loading){
            result = <Loading></Loading>
        }else{
            result = (<div>
                <NavLink to="/"><button className="coolText btn btn-primary">Regresar</button></NavLink>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Letra:</h3>
                        <p className="card-text">{this.state.letra}</p>
                    </div>
                </div>

            </div>)
        }


        return (
            <div className="container containerBG">
                <div className="row">
                    <div className="col-12 letra">
                        

                            {result}

                    </div>
                </div>
            </div>
        )
    }
};

export default Lyrics;