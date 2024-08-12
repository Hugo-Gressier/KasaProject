import Banner from '../../components/Banner/';
import Cards from '../../components/Cards/';
import HomeBanner from './img/home_banner.png';

function Home({ data }) {
    if (!data) {
        console.error('Error');
        return null;
    }

    return (
        <main>
            <Banner backgroundImage={HomeBanner} title="Chez vous, partout et ailleurs" />
            <Cards data={data} />
        </main>
    );
};

export default Home;
