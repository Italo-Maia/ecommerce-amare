import React from "react";
import Link from "next/link";

import styles from "../../styles/Main.module.css";

const HeaderLogo = () => (
	<div className={`${styles["flex-2"]} ${styles.flex} ${styles.center}`}>
		<Link href="/">
			<img src="/logo.png" className={styles.logo} width="90%" />
		</Link>
	</div>
);

export default HeaderLogo;
