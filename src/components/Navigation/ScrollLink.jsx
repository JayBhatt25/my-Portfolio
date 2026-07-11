import { Link as RSLink } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'

function ScrollLink({ to, className, onClick, children }) {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === '/') {
        return (
            <RSLink
                to={to}
                className={className}
                activeClass="active"
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={500}
                isDynamic={true}
                onClick={onClick}
            >
                {children}
            </RSLink>
        );
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/', { state: { scrollTo: to } });
        if (onClick) onClick();
    };

    return (
        <a href="/" className={className} onClick={handleClick}>
            {children}
        </a>
    );
}

export default ScrollLink;
