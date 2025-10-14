import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

export default function Homepage() {
    return (
        <section  aria-label="Homepage Section" className="homepage-main container">
            <Chicago/>
            <CallToAction/>
            <Specials/>
            <CustomersSay/>
        </section>
    );
}
