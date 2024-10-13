import { Link } from "react-router-dom";
import "./Error.css";

export const Error404 = () => {
	return (
		<>
			<div className="error">
				{/* TODO ДОБАВИТЬ ВЁРСТКУ */}
				<div className="container">
					<div className="error__row">
						<h2 className="error__title">404</h2>
						<img className="error__img" src="./src/pages/Error/bg.png" />
						<p className="error__description">
							Запрашиваемая Вами страница не существует или была
							удалена.<br /><span>Вернитесь</span> на главную страницу
						</p>
						<Link className="menu__link menu__link_btn menu__link_btn" to="/">На главную</Link>
					</div>
				</div>
			</div>
		</>
	);
};
