import _ from 'lodash';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchArea from './components/search_area';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoInfo from './components/video_info';

const API_KEY = 'AIzaSyBzZec5f-HYxb1_PWAc4D-d0htIU4RcwfY';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo:null  

        };

        this.videoSearch('Music');

    }

    videoSearch(term){
           YTSearch( {key:API_KEY, term : term },(videos)=>{
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
            });

        });
    }


    render(){

        const videoSearch = _.debounce((term)=>{ this.videoSearch(term) } ,700);


    return (
        <div>
            <SearchArea onSearchTermChange = {videoSearch}/>
            <VideoInfo video = {this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos ={ this.state.videos }/>

        </div>

        );
    }
}


ReactDom.render(<App />,document.getElementById('app'));

module.hot.accept();