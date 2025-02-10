/*

This is IndexPage component, in this component we rendering reacomented cards, footer

@author postnikovtrofim1@gmail.com (Trofim Postnikov)

*/

import FooterComponent from '../components/FooterComponent';
import './IndexPage.css';

interface Props {}

function IndexPage({}: Props) {
    return (
        <div className="IndexPage">
            <FooterComponent />
        </div>
    )
}

export default IndexPage;