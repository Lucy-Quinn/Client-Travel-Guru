import React from 'react';
import axios from 'axios';
import Card from './../../components/Card/Card';
import { withAuth } from '../../context/auth-context';


class MyFavorites extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>

            </div>
        )
    }
}




export default withAuth(MyFavorites);
