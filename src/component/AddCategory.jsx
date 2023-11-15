import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {
  

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //mas de 2 letras y recien lo puedo enviar
    if( inputValue.trim().length <= 1) return

    //insertando categorias por input value
      // setCategories( categories => [ inputValue, ...categories]);
    onNewCategory( inputValue.trim() )
    setInputValue("");
  }

  return (
    <form onSubmit={ handleSubmit } className="addCategory">
      <input
        type="text" 
        id="example"
        value={ inputValue }
        onChange={ handleInputChange }
      />
      <label htmlFor="example">Buscar gif...</label> {/* simular placeholder */}
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}

