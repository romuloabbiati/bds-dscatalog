import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import { getTokenData } from 'util/requests';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>{getTokenData()?.user_name}</h1>
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Find out the best product catalog</h1>
            <p>
              We will help you to find the best products available in the market
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="BEGIN YOUR SEARCH HERE" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
