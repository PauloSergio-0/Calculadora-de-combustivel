import Post from "./Post";
import Header from "./Header";
import Profile from "./Profile";
import Calcularcobustivel from "./Calcular_cobustivel";

export default function App() {
  // const category = "POsts blas";
  const category = "Sim";
  return (
    <>
      <Header title="Blog TRE">
        <h2>Post semanais</h2>
      </Header>
      <h1>Super Bigode</h1>
      <h2>Demon cracia</h2>
      <p>Tem conteudo {category ? category : "Não"}</p>

      <Profile></Profile>
      <Calcularcobustivel />
      <Post title="texto 1" subtitle="subtexto 1" />
      {/* <Post title="texto 2" subtitle="subtexto 1" />
      <Post title="texto 3" subtitle="subtexto 1" />
      <Post title="texto 4" subtitle="subtexto 1" /> */}
    </>
  );
}
