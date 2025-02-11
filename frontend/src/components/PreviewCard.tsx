import { requestAboutCloth } from '../appCore/ApplicationRequests';
import './PreviewCard.css';

interface Props {
    labelProduct: string,
    idProduct: number
}

function PreviewCard({labelProduct, idProduct}: Props) {
    let product = requestAboutCloth(idProduct);
    return product === undefined ? <div className="PreviewCard">
        <h3 className="PreviewCard-title-error">Not found</h3>
    </div> :
    <div className="PreviewCard">
        <p className="PreviewCard-title">{labelProduct}</p>
        <img src={product.imageData} alt="LOGO.PNG" className="PreviewCard-image" />
        <p className="PriviewCard-text">{product.name}</p>
        <p className="PriviewCard-text">{product.price}</p>
    </div>
}

export default PreviewCard;