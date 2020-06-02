const inputInit = (input) => {
    const inputControl = input.querySelector('.input__control');
  
    const handleFocus = () => {
      input.classList.add('input_focus');
    };
  
    const handleBlur = () => {
      input.classList.remove('input_focus');
    };
    
    const addHandlers = () => {
      inputControl.addEventListener('focus', handleFocus);
      inputControl.addEventListener('blur', handleBlur);
    }
  
    const removeHandlers = () => {
      inputControl.removeEventListener('focus', handleFocus);
      inputControl.removeEventListener('blur', handleBlur);
    }
    
    addHandlers();
  }
  
  
  const inputCollection = document.querySelectorAll('.input');
  
  for(const input of inputCollection) {
    inputInit(input)
  }