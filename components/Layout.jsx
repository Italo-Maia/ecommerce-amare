// import Link from "next/link";
import Head from "./Head";

const Layout = ({ children, title, description, url, image }) => {
	return (
		<div>
			<Head
				title={title}
				description={description}
				url={url}
				ogImage={image}
			>
				{/* <Link rel="stylesheet"> </Link> */}
			</Head>
			<div className="body">{children}</div>
			<footer>
				<div className="flex flex-center">
					<small>{/* &copy; Loja Ring Eletronicos */}</small>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
