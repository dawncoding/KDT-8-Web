import { useState } from "react";

export default function DisplayNone() {
  const [visible, setVisible] = useState(true);

  const handleDisappear = () => {
    setVisible(false);
  };

  const handleReappear = () => {
    setVisible(true);
  };

  return (
    <div>
      <h1>{visible && "안녕하세요"}</h1>
      {visible ? (
        <button onClick={handleDisappear}>사라져라</button>
      ) : (
        <button onClick={handleReappear}>보여라</button>
      )}
    </div>
  );
}
