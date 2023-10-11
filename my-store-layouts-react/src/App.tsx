import { Component } from 'react';
import './App.css';

interface storeFace {
	products: {
		name: string,
		price: string,
		color: string,
		img: string
	}[];
	view: string;
}

class Store extends Component<{}, storeFace>{
	constructor(props: any) {
		super(props);

		this.state = {
			products: [{
				name: "Nike Metcon 2",
				price: "130",
				color: "red",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
			}, {
				name: "Nike Metcon 2",
				price: "130",
				color: "green",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
			}, {
				name: "Nike Metcon 2",
				price: "130",
				color: "blue",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
			}, {
				name: "Nike Metcon 2",
				price: "130",
				color: "black",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
			}, {
				name: "Nike free run",
				price: "170",
				color: "black",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
			}, {
				name: "Nike Metcon 3",
				price: "150",
				color: "green",
				img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
			}], // массив товаров
			view: 'cards', // состояние начальное
		}
	}

	// обработчик на переключение
	handleSwitchView = () => {
		this.setState(state => ({
			view: state.view === 'cards' ? 'list' : 'cards',
		}));
	}

	render() {
		const { view, products } = this.state; // переменные с данными состояние и массив

		return (
			<div>
				<IconSwitch icon={view === 'cards' ? 'view_module' : 'view_list'} onSwitch={this.handleSwitchView} />
				{view === 'cards' ? (
					<CardsView cards={products} />
				) : (
					<ListView items={products} />
				)}
			</div>
		);
	}
}

function IconSwitch({ icon, onSwitch }: { icon: string, onSwitch: () => void }) { // и конка и кнопка которая не чего не возращает 
	return (
		<div className='iconSwitch' onClick={onSwitch}>
			<i className='material-icons'>{icon}</i>
		</div>
	)
}

function CardsView({ cards }: { cards: storeFace["products"] }) { //карточки
	return (
		<div className='product-item'>
			{cards.map((product, index) => (
				<div className='img-container' key={index}>
					<img src={product.img} alt={product.name} />
					<p>Name: {product.name}</p>
					<p>Price: {product.price}</p>
					<p>Color: {product.color}</p>
				</div>
			))}
		</div>
	);
}

function ListView({ items }: { items: storeFace["products"] }) { // строки
	return (
		<ul className="list-view">
			{items.map((item, index) => (
				<li key={index}>
					<img src={item.img} alt={item.name} />
					<p>Name: {item.name}</p>
					<p>Price: {item.price}</p>
					<p>Color: {item.color}</p>
				</li>
			))}
		</ul>
	);
}

export default Store;
