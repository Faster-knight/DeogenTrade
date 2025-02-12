import { useContext } from 'react';
import { Cloth, requestRecomentedCloth } from '../appCore/ApplicationRequests';
import PreviewCard from '../components/PreviewCard';
import './RecomentedCloth.css';
import { ApplicationContext, ApplicationContextType } from '../appCore/ApplicationContext';

interface Props {
    idUser: number
}

function RecomentedCloth({idUser}: Props) {
    let id: number = 0;
    const {} = useContext<ApplicationContextType>(ApplicationContext);
    return (
        <div className="RecomentedCloth">
            {requestRecomentedCloth(id).map((cloth: Cloth) => <PreviewCard labelProduct={cloth.label} idProduct={cloth.id}/>)}
        </div>
    )
}

export default RecomentedCloth;