import React, { Component } from 'react';
import Photo from './photo';

export default class PhotoGrid extends Component{
    render(){
        return(
            <div className="photo-grid">
                {
                    this.props.posts.map(
                        (post, i)=>
                            <Photo {...this.props} key={i} index={i} post={post} />
                    )
                }
            </div>
        );
    }
}