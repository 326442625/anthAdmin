/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom';

class Home extends React.Component {
    componentWillMount() {
         
    }
    render() { 
        return (
            <div className="home-warpper">
                <BreadcrumbCustom/>
            </div>

        );
    }
}

export default Home;