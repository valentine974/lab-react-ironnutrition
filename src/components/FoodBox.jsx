import { Card, Col, Button } from 'antd';

// Iteration 2


function FoodBox(props) {
  return (
    
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.servings * props.food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=>props.delete(props.food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;




// Object destructuring : also possible to do const {name,image, calories, servings} = props
// function FoodBox({name,image, calories, servings}) {
//     return (
//       <Col>
//         <Card
//           title={name}
//           style={{ width: 230, height: 300, margin: 10 }}
//         >
//           <img src={image} height={60} alt="food" />
//           <p>Calories: {calories}</p>
//           <p>Servings: {servings}</p>
//           <p>
//             <b>Total Calories: {servings * servings} </b> kcal
//           </p>
//           <Button type="primary" onClick={()=>props.delete(name)}> Delete </Button>
//         </Card>
//       </Col>
//     );
//   }
