import { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="/about-as">🛠️About as</a></li>
                    <li><a href="/vacansies">⭐Vacansies</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;