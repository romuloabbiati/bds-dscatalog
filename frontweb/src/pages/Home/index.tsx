import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <div className='home-card'>
            <div className='home-content-container'>
                <h1>Find out the best product catalog</h1>
                <p>We will help you to find the best products available in the market</p>
                <ButtonIcon />
            </div>
            <div className='home-image-container'>
                <MainImage />
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
