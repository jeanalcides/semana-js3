import './index.css';

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">aba</span>
                <span className="remainder">caxi</span>
            </div>
            <div className="typed-keys">asdfabadomixi</div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>carro</li>
                    <li>profisional</li>
                </ol>
            </div>
        </div>
    )
}

export default App;