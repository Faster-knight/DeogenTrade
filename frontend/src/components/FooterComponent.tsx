/*

This is a FooterComponent in site, this compoent using from footer navigate to site

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/
import { Link } from 'react-router-dom';
import { redirectToContactTelegramm, redirectToContactVk } from '../appCore/ApplicationRedirects.ts';
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
            <div className="FooterComponent-item2">
                <p className="FooterComponent-item2-title">Магазин</p>
                <Link to='/'>Главная страница</Link>
                <Link to='/cloth'>Одежда</Link>
                <Link to='/accessuar'>Аксессуары</Link>
                <Link to='/collaborators'>Коллаборации</Link>
                <Link to='/sale'>Sale</Link>
                <Link to='/gifts'>Подарочные сертификаты</Link>
            </div>
            <div className="FooterComponent-item3">
                <p className="FooterComponent-item3-title">Информация</p>
                <Link to='/lk'>Личный кабинет</Link>
                <Link to='/oferta'>Публичная оферта</Link>
                <Link to='/paayment'>Доставка и оплата</Link>
                <Link to='/contacts'>Контакты</Link>
            </div>
            <div className="FooterComponent-item4">
                <p className="FooterComponent-item4-button"></p>
                <p className="FooterComponent-item4-button"></p>
                <p className="FooterComponent-item4-button"></p>
                <p className="FooterComponent-item4-button"></p>
            </div>
        </footer>
    )
}

export default FooterComponent;