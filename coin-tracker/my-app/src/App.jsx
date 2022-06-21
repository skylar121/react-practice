import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [inputDollar, setInputDollar] = useState('');    
    const [unit, setUnit]  = useState('Bitcoin');

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
        .then((response) => response.json())
        .then((json) => {
        setCoins(json);
        setLoading(false);
        })
    }, [])

    const changeToBTC = (e) => {
        let inputNum = document.querySelector('.input');
        let selectedUnit = document.querySelector('.select');
        setInputDollar((Math.floor((inputNum.value) * coins[selectedUnit.selectedIndex].quotes.USD.price)).toLocaleString('ko-kr'));
    }

    const selectUnit = () => {
        let selectedUnit = document.querySelector('select');
        setUnit(selectedUnit.options[selectedUnit.selectedIndex].text);
    }

    return (
        <div className="App">
        <h1>The Coin Tracker {loading? null : `(# of Coins: ${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : 
        <div>
            <input className='input' type='Number' placeholder='Please put $'/>
            <select className='select' onClick={selectUnit}>
                {coins.map((coin) => (
                    <option value={coin.name}>
                        {coin.name}
                    </option>
                    ))}
            </select>
            <button onClick={changeToBTC}>change $ to {unit}</button>
            <p>{inputDollar}</p>
        </div>
        }
        
        </div>
    );
}

export default App;
