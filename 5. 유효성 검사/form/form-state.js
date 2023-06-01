export default function InputState(){
  let isInputValid = {
    "input-name": false,
    "input-id": false,
    "input-password": false,
    "input-password__confirm": false,
  };

  return {
    get isInputValid(){
      return { ...isInputValid };    
    },

    set isInputValid({ props, value}){
      isInputValid = { ...isInputValid, [props]: value };
    },
  }
}
