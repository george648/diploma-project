import notFound from './../../images/notFound.jpg';
import './StyledPageNotFound.scss';

export const PageNotFound = () => {
    return (
        <div className="imageNotFound">
            <img src={notFound} alt={"not found"} />
        </div>
    )
}