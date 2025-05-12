import "./App.css";
import Button from "./uiKit/Button";
import Checkbox from "./uiKit/Checkbox";
import PasswordInput from "./uiKit/PasswordInput";
function App() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <Button
        label={"hello"}
        handleClick={() => alert("hello")}
        className="primary-button"
      />
      <Checkbox onChange={onChange}/>
      <PasswordInput/>
     </div>
  );
}

export default App;
