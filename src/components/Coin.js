import '../style/coin.css';

const Coin = ({
  name,
  image,
  symbol,
  marketcap,
  price,
  priceChange,
  volume,
}) => {
  return (
    <div className="coin__box">
      <div className="coin__name">
        <img src={image} width="30" height="30" alt={name} />
        <h2 className="coin__title">{name}</h2>
      </div>
      <div className="coin__description">
        <p className="coin__symbol">Symbol: {symbol.toUpperCase()}</p>
        <p className="coin__price">Price: {price.toFixed(2)}$</p>
        <p className="coin__volume">24h Volume: {volume.toLocaleString()}$</p>
        <p>
          Price Change:{' '}
          <span
            className={`coin__price-change ${
              priceChange < 0 ? 'red' : 'green'
            }`}
          >
            {priceChange.toFixed(2)}%
          </span>
        </p>
        <p className="coin__marketcap">
          Mkt Cap: {marketcap.toLocaleString()}$
        </p>
      </div>
    </div>
  );
};

export default Coin;
