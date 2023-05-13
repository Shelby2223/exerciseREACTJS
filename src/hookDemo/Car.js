import React, { useState } from 'react';

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  });

  const changeColor = () => {
    setCar({ ...car, color: 'blue' }); //ba dấu chấm dùng để lưu thuộc tính của car, ví dụ nếu mất ... khi bấm thì chỉ còn lại color và các thuộc tính khác như model sẽ mất đi
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button onClick={changeColor}>Change</button>
    </div>
  );
}

export default Car;
// useState thay đổi state trong function
// useEffect quan ly vòng đời của component