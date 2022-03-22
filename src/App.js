import { useState, useEffect } from 'react';
import axios from 'axios';

import './style/global.css';
import './style/header.css';

import Form from './components/Form';
import Coin from './components/Coin';

const App = () => {
  const URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const [coins, setCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState('');

  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(URL);

        setCoins(data);
      } catch (error) {
        alert(error);
      }
    };

    getCoin();
  }, [searchCoin]);

  const handleSearchCoin = evt => {
    setSearchCoin(evt.target.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setSearchCoin('');
  };

  const filteredCoins = coins.filter(coin =>
    coin.id.toLowerCase().includes(searchCoin.toLowerCase())
  );

  return (
    <>
      <header className="header container">
        <h1 className="header__title">Search a Currency</h1>
        <Form
          handleSearchCoin={handleSearchCoin}
          handleSubmitForm={handleSubmitForm}
          searchCoin={searchCoin}
        />
      </header>

      <main>
        <section className="coin container">
          {filteredCoins.map(coin => (
            <Coin
              key={coin.id}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              {...coin}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default App;
