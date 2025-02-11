/*

This cloth page component and page not found cloth page component

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/
import { useParams } from 'react-router-dom';
import './ClothPage.css';
import { requestAboutCloth } from '../appCore/ApplicationRequests';
import ErrorPage from './ErrorPage';

interface Props {}

function ClothPage({}: Props) {
    let params = useParams();
    let id = parseInt(params.id?params.id:"-1");
    let cloth = requestAboutCloth(id);
    return cloth === undefined ? <ErrorPage nameError='404 Page Not Found' commentError='This cloth is undefinded' /> :
    <div className="ClothPage">
        {
            // todo create cloth page
        }
    </div>
}

export default ClothPage;