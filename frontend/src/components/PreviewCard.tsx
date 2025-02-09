import { requestAboutCloth } from '../appCore/ApplicationRequests';
import './PreviewCard.css';

interface Props {
    nameInDom: string,
    idProduct: number,
    nameProduct: string,
    price: number
}

function PreviewCard({nameInDom, idProduct, nameProduct, price}: Props) {
    return (
        <div className={`PreviewCard`}>
            <p>что то</p>
            <img className='PreviewCard-image' src={`data:image/jpeg;${requestAboutCloth(idProduct).imageData}`} />
            <p>{nameProduct}</p>
            <p>{price} ₽</p>
        </div>
    )
}

export default PreviewCard;