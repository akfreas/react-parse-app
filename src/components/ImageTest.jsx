'use strict';

import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

const ParseComponent = ParseReact.Component(React);

class ImageTest extends ParseComponent {

    observe() {
        return {
            images: new Parse.Query('Image')
        };
    }

    render() {
        return (
                <div className='ImageTest'>
                    <div className='ImageTest-container'>
                        {this.data.images.map((i) => <li key={i.objectId}>{i.objectId}</li>)}
                    </div>
               </div>
       );
    }

}

export default ImageTest;
