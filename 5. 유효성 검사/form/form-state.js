export default function InputState(){
  let inputValidate = {
    "input-name": false,
    "input-id": false,
    "input-password": false,
    "input-password__confirm": false,
  };

  return {
    get inputValidate() {
      return { ...inputValidate };
    },

    setInputValidate(props, value) {
      inputValidate = { ...inputValidate, [props]: value };
    },
  };
}
