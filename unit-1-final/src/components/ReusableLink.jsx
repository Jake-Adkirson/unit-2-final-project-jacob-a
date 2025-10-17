import { Link } from 'react-router';

const ReusableLink = ({ children, to, className }) => {
    return(
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}

export default ReusableLink;