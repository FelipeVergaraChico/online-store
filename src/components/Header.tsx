import { Link } from 'react-router-dom';

type PropsHeader = {
  handleOnChange: (param: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e:string) => void;
  inputValue: string;
};

function Header({ handleOnChange, handleClick, inputValue }: PropsHeader) {
  return (
    <header>
      <div className="container row">
        {/* <Link
          className="voltarbtn"
          onClick={ () => window.history.back() }
          to="/"
        >
          v
        </Link> */}
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleOnChange }
          value={ inputValue }
          placeholder="Digite o que você busca"
        />
        <button
          data-testid="query-button"
          onClick={ () => handleClick(inputValue) }
          className="search"
          aria-label="Search"
        >
          <img src="../src/assets/img/search.svg" alt="asfesds" />
        </button>
      </div>
      <img className="logoimage" src="../src/assets/img/logo.svg" alt="" />
      <Link to="/cart" data-testid="shopping-cart-button">
        <img className="carrinhoimg" src="./src/assets/img/cart.svg" alt="carinho" />
      </Link>

    </header>
  );
}

export default Header;
