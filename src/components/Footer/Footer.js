import React from 'react';
import { withAuth } from '../../context/auth-context';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <p>Copyright © 2020 Travel Guru </p>
            </div>
        )
    }
}

export default withAuth(Footer);