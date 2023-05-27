import header from '../components/header';
import footer from '../components/footer';
import maincontent from '../components/maincontent';
const HomePage =() => {
    return `
    <section id="top">
        ${header()}
        ${maincontent()}
        ${footer()}

    </section>
    `;
};

export default HomePage;