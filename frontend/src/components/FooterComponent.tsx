import { redirectToContactTelegramm, redirectToContactVk } from '../appCore/ApplicationRedirect';
import ContactButton from '../widgets/ContactButton';
import './FooterComponent.css';

interface Props {}

function FooterComponent({}: Props) {
    return (
        <footer className="FooterComponent">
            <div className="FooterComponent-item1">
                <p className="FooterComponent-item1-text"></p>
                <ContactButton onClickFunction={redirectToContactTelegramm} textButton='Telegramm' imageData={""}/>
                <ContactButton onClickFunction={redirectToContactVk} textButton='Вконтакте' imageData={""}/>
            </div>
            <div className="FooterComponent-item2"></div>
            <div className="FooterComponent-item3"></div>
            <div className="FooterComponent-item4"></div>
        </footer>
    )
}

export default FooterComponent;