import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        console.log(location.state);
        if(location.state) {
            return (
                <div className="detail_wrap">
                    <h1 className="detail_poster">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    </h1>
                    <h2 className="detail_title">{location.state.title} ({location.state.year})</h2>
                    <ul className="detail_genres">
                        {location.state.genres.map((genre, index) => <li className="detail_genre" key={index}>{genre}</li>)}
                    </ul>
                    <p className="detail_summary">
                        {location.state.summary}
                    </p>
                </div>
                );
        } else {
            return null;
        }
    }
}

export default Detail;