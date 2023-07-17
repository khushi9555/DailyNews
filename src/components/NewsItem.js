import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageurl, newsUrl , author , date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageurl != null ?imageurl : "https://static.toiimg.com/thumb/msid-101661637,width-1070,height-580,imgsize-1414604,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author != null ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-light btn-outline-primary">Read more...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
