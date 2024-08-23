import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'





const App = () => {
  const [team,setTeam] = useState([])
  const [money,setMoney] = useState(100)
  const [zombieFighters,setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  )
  const [totalStrength,setTotalStrength] = useState(0)
  const [totalAgility,setTotalAgility] = useState(0)
  
  
  const handleAddFighter= async (fighter)=>{
    if(money-fighter.price >=0){
      setMoney((money - fighter.price))
      setTeam([fighter,...team])
      setZombieFighters(zombieFighters.filter(member=> member.name!==fighter.name))
      setTotalStrength(totalStrength+fighter.strength) 
      setTotalAgility(totalAgility+fighter.agility) 
    }else{
      console.log('Not Enough Money')
    }
    
  }
  const handleRemoveFighter= async (fighter)=>{
    setMoney((money + fighter.price))
    setZombieFighters([fighter,...zombieFighters])
    setTeam(team.filter(member=> member.price!==fighter.price))
    setTotalStrength(totalStrength-fighter.strength) 
    setTotalAgility(totalAgility-fighter.agility) 
  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money : {money}</h3>
    <h3>Team Strength : {totalStrength}</h3>
    <h3>Team Agility : {totalAgility}</h3>
    <h3>Team</h3>
    <ul>{(team.length===0?"Pick some team members!":'' ) || team.map(fighter => 
      <li>
        <img src={fighter.img} alt="" />
          <h2>name : {fighter.name}</h2>
          <h3>price : {fighter.price}</h3>
          <h3>strength : {fighter.strength}</h3>
          <h3>agility : {fighter.agility}</h3>
          <button onClick={()=> handleRemoveFighter(fighter)} 
          >Remove</button>
      </li>)}
    </ul>
    <h3>Fighters</h3>
    <ul>
      {zombieFighters.map(zombieFighter=>
        <li>
          <img src={zombieFighter.img} alt="" />
          <h2>name : {zombieFighter.name}</h2>
          <h3>price : {zombieFighter.price}</h3>
          <h3>strength : {zombieFighter.strength}</h3>
          <h3>agility : {zombieFighter.agility}</h3>
          <button onClick={()=> handleAddFighter(zombieFighter)} 
           >Add</button>
        </li>
        
      )}
    </ul>
    
    </>
  );
}

export default App
