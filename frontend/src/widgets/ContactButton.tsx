/*

Contact button in footer component

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/

import './ContactButton.css';

interface Props {
    imageData: string,
    textButton: string,
    onClickFunction: () => void
}

function ContactButton({imageData, textButton, onClickFunction}: Props) {
    return <button className="ContactButton" onClick={onClickFunction}>
        <img src={imageData} alt="img.png" className="ContactButton-image" />
        <p className="ContactButton-text">{textButton}</p>
    </button>
}

export default ContactButton;