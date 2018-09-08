import React from 'react';
import Tracks from './Tracks';
import Loading from './Loading';

class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            searchQuery:'',
            searching:false,
            searched:false,
            apiData:{}
        }
    }

    inputHandler = (e)=>{
        this.setState({
            searchQuery:e.target.value,
        });
    }

    enterHandler = (e)=>{
        if(e.key === "Enter"){
            this.peticion();
        };
    }

    //fetch al api de musixmatch
    peticion = ()=>{
        this.setState({
            searched:false,
            searching:true
        })
        fetch("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track_artist="+this.state.searchQuery+"&page_size=10&page=1&s_track_rating=desc&apikey=c47499c02955d3ad20592d919ef3c530")
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                searched:true,
                searching:false,
                apiData:data
            });
        });
    }


    render(){
        let tracks,loading;

        //checa si mostrar los tracks encontrados
        if(this.state.searched){
            tracks = <Tracks data={this.state.apiData}></Tracks>
        }else{
            tracks = <span></span>
        }

        //checa si mostrar el icono de buscar
        if(this.state.searching){
            loading = <Loading></Loading>
        }else{
            loading = <span></span>
        }

        return(
                <div className="container containerBG">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="titulo">Lyrica.<span className="text-primary">ly</span></h1>
                            <h3 className="coolText">Busca la letra de alguna cancion...</h3>
                            <input onKeyPress={this.enterHandler} onChange={this.inputHandler} className="form-control coolText" placeholder="The kooks - Junk Of The Hearth [ENTER]"></input>
                        </div>
                    </div>
                    <hr></hr>
                    {loading}
                    {tracks}
                </div>
        );
    }
}

export default Home;