import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import { ContextOutlet, Product } from '../types';
import './index.css';

Outlet.prototype as ContextOutlet;

function Layout() {
  const [input, setInput] = useState<string>('');
  const [productList, setProductList] = useState<Array<Product>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleClick = async (e?:string) => {
    setIsLoading(true);
    const search = !e ? input : e;
    const responseArrProducts = await getProductsFromCategoryAndQuery(undefined, search);
    setProductList(responseArrProducts.results);
    setIsLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('products', '[]');
  }, []);

  return (
    <>
      <div>
        <Header
          handleClick={ handleClick }
          handleOnChange={ handleOnChange }
          inputValue={ input }
        />
      </div>
      <main>
        <Outlet context={ [productList, isLoading, handleClick] } />
      </main>
      <footer>
        <p>© 2023 Projeto desenvolvido por:</p>
        <div className="pessoasMain">
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/annaEscolaro.png" alt="Anna" />
            <a href="https://www.linkedin.com/in/annaescolaro/">Anna Escolaro</a>
          </div>
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/brendaReis.jpeg" alt="Brenda" />
            <a href="https://www.linkedin.com/in/brendaoreis/">Brenda Reis</a>
          </div>
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/felipeVergara.jpeg" alt="Felipe" />
            <a href="https://www.linkedin.com/in/felipe-vergara-chico/">Felipe Vergara</a>
          </div>
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/leandroCarvalho.jpeg" alt="Leandro" />
            <a href="https://www.linkedin.com/in/leandrojpcarvalho/">Leandro Carvalho</a>
          </div>
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/luizHenrique.png" alt="Luiz" />
            <a href="https://www.linkedin.com/in/luiz-henrique-ribeiro-da-silva-49b23b203/">Luiz Henrique</a>
          </div>
          <div className="PessoasChild">
            <img className="PessoaImg" src="/pfp/MatheusBandeira.jpeg" alt="Matheus" />
            <a href="https://www.linkedin.com/in/mathban/">Matheus Bandeira</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
