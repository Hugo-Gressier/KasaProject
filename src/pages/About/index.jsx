import AboutBanner from './img/about_banner.png';
import Banner from '../../components/Banner/';
import Collapse from '../../components/Collapse';
import './styles/css/about.css';

function About() {
    return (
        <main>
            <Banner backgroundImage={AboutBanner} title="" />
            <div className="container">
                <Collapse title="Fiabilité">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam hendrerit massa non posuere rutrum.
                        Etiam venenatis ipsum quis felis iaculis, id pharetra quam placerat.
                        Ut sit amet vestibulum felis, ac tincidunt elit.
                        Maecenas tristique elit vel hendrerit efficitur.
                        Mauris volutpat consequat velit ut sollicitudin.
                        Etiam non varius felis. Aenean at tellus odio.
                    </p>
                </Collapse>
                <Collapse title="Fiabilité">
                    <p>
                        Phasellus nunc lorem, lobortis vel tempor consequat, fermentum quis metus.
                        Sed nec ligula et urna lobortis consectetur ut vel massa.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sit amet consequat lectus. Suspendisse potenti.
                        Quisque non ultrices arcu, quis faucibus sapien.
                        Suspendisse condimentum nulla eu volutpat pulvinar.
                        Suspendisse cursus tempor metus, eget fermentum massa cursus et.
                        Suspendisse quis urna vestibulum, suscipit ipsum nec, aliquam odio.
                        Nullam eget sapien ut dui ornare auctor non eget justo.
                    </p>
                </Collapse>
                <Collapse title="Fiabilité">
                    <p>
                        Curabitur eu quam odio. Nullam hendrerit tortor et felis imperdiet elementum.
                        Sed consequat felis sit amet elit tincidunt, ornare sagittis ligula pulvinar.
                        Ut pharetra vel magna sed faucibus. Integer consequat posuere ipsum,
                        at gravida quam congue vel. Nullam sit amet est justo.
                        Donec eget nunc vehicula, ultrices mauris sed, ultricies neque.
                        Sed sodales aliquet congue. Quisque gravida metus ac urna bibendum,
                        non vehicula dolor aliquam. Ut dignissim felis at nunc porta luctus.
                        Fusce vel dapibus sem.
                    </p>
                </Collapse>
                <Collapse title="Fiabilité">
                    <p>
                        Quisque velit risus, varius vitae tristique nec, lobortis ut lectus.
                        In venenatis interdum dui, nec ultrices neque placerat at.
                        Curabitur elementum euismod neque, a viverra nunc. Nam vitae pellentesque diam.
                        In vitae imperdiet nisl. Suspendisse potenti. Suspendisse sed dignissim tellus.
                        Mauris et magna quis ipsum ullamcorper finibus eu id elit.
                        Vivamus dictum ultricies dolor vel convallis.
                    </p>
                </Collapse>
            </div>
        </main>
    );
};

export default About;
