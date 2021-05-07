import '../styles/shoppingList.css';
import { listPlant } from '../datas/listPlant'
import PlantItem from './plantItem'
import careScale from './careScale'
import {useState} from 'react'
import axios from 'axios'
import AxiosComponents from './AxiosComponents'


function ShoppingList({ cart, updateCart }) {
	/*const categories = axios.get(`https://run.mocky.io/v3/159e67b4-ea66-4b73-8b15-74279d1af669`).then.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]*/
		const categories = listPlant.reduce(
			(acc, plant) =>
				acc.includes(plant.category) ? acc : acc.concat(plant.category),
			[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{listPlant.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<AxiosComponents/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList