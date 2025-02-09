import './PreviewCard.css';

interface Props {
    nameInDom: string
    idProduct: number
}

function PreviewCard({nameInDom, idProduct}: Props) {
    const getDataByProduct = () => {
        
    }
    return (
        <div className={`PreviewCard ${nameInDom}`}>
            
        </div>
    )
}

export default PreviewCard;