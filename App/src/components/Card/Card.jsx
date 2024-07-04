import './Card.css'

import { Navigate } from "react-router-dom";

const Card = ({Style, id}) => {

    const Redirect = (id) => {
        Navigate(`/Games/${id}`)
    }

    return(
        <div className={`Card ${Style === 'CommingSoon' ? 'Carter-One-Cinza CommingSoon': ''}`} onClick={!Style && Redirect(id)}>
        {Style === 'CommingSoon' &&
            <h2>Comming Soon</h2>}
        </div>
    )


}

export default Card