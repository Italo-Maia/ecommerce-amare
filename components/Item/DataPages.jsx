import styles from "../../styles/Main.module.css";

const DataPages = () => {
	return (
		<div className={`${styles["flex-1"]} ${styles["data-pages"]}`}>
			<div>
				<h2>Contato</h2>
				<br />
			</div>
			<p className="loja-nome">NOME: King</p>
			<p className="loja-cnpj">CNPJ 166566464</p>
			<p className="loja-email">E-mail</p>
			<p className="loja-telefones">Telefones</p>
			<p className="loja-telefones">
				&nbsp;&nbsp; <a href="phone:(31) 91919191">(31) 91919191</a>
			</p>
			<p className="loja-endereço">Endereço</p>
		</div>
	);
};

export default DataPages;
