export const increment = () => {
    console.log("")
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };