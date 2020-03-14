import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      recipe:null,
      count: 0
    }
  }

  componentDidMount(){
    this.fetchRecipe(0);
  }

  fetchRecipe(id){
    console.log(id);
    let backendurl= process.env.REACT_APP_BACKENDURL;
    console.log(backendurl);
    fetch(backendurl +'/v1/allrecipes',{headers: {'Access-Control-Allow-Origin': '*'}})
    .then(response => response.json())
        .then(json => {
          this.setState({
              recipe:json[id],
              count:id
          })
        }); 
  }

  render(){
    var{recipe, count} = this.state;
    return (
      <div className="App-Margin">
      {
        
              !this.state.recipe ? (<div><h1 className="HeaderMargin">No More Recipes</h1></div>):
              (         
        <div>
          <div><h1 className="HeaderMargin">Browse Recipes</h1></div>
          <div className="row justify-content-center">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
              <tr>
                <th scope="col">Cook_time_in_min</th>
                <th scope="col">Prep_time_in_min</th>
                <th scope="col">Title</th>
                <th scope="col">Cuisine</th>
                <th scope="col">Servings</th>
                <th scope="col">Ingredients</th>
                <th scope="col">Steps</th>
                <th scope="col">nutrition_information</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{recipe.info.cook_time_in_min}</td>
                  <td>{recipe.info.prep_time_in_min}</td>
                  <td>{recipe.info.title}</td>
                  <td>{recipe.info.cusine}</td>
                  <td>{recipe.info.servings}</td>
                  <td>
                    <ul>{recipe.info.ingredients.map(item =>(
                      <li key = {item}>
                            {item}
                      </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ol>{recipe.steps.map(item =>(
                      <li key = {item.position}>
                        {item.instruction}
                      </li>
                      ))}
                    </ol>
                  </td>
                  <td>
                    <div>Calories: {recipe.nutrition_information.calories}</div>
                    <div>Cholesterol_in_mg :{recipe.nutrition_information.cholesterol_in_mg}</div>
                    <div>Sodium_in_mg :{recipe.nutrition_information.sodium_in_mg}</div>
                    <div>Carbohydrates_in_grams :{recipe.nutrition_information.carbohydrates_in_grams}</div>
                    <div>Protein_in_grams :{recipe.nutrition_information.protein_in_grams}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => { this.fetchRecipe(count+1) }} type="button" className="btn btn-outline-dark">Next Recipe</button>
          </div>
          </div>
              )}
      </div>
    );
  }
}

export default App;