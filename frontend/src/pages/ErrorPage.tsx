import { Link } from 'react-router-dom';
import './ErrorPage.css';

interface Props {
    nameError: string,
    commentError: string
}

function ErrorPage({nameError, commentError}: Props) {
    return (
        <div className="ErrorPage">
            <h1 className="ErrorPage-title">{nameError}</h1>
            <h6 className="ErrorPage-commit">{commentError}</h6>
            <Link to='/'>Вернуться на главную страницу</Link>
        </div>
    )
}

export default ErrorPage;