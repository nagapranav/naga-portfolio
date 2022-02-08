import { FloatingLettersTextBuilder } from "react-animated-text-builders"
import '../../style.css';

function NameAnimation() {
  return (
    <>
      <div>
        <FloatingLettersTextBuilder
          floatingSpeed={300}
          lettersAppearanceDelay={150}
          animationMaxMargin={"200px"}
          animationMinMargin={"0px"}
        > Nagalakshmi A </FloatingLettersTextBuilder>
      </div></>

  )
}

export default NameAnimation;