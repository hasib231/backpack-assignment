type Car = {
    make: string;
    model: string;
    year: number;
  };
  
  const cars: Car[] = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2018 },
    { make: 'Honda', model: 'Civic', year: 2022 },
    { make: 'Chevrolet', model: 'Malibu', year: 2015 }
  ];
  
  function sortCarsByYear(cars: Car[]): Car[] {
    return cars.sort((a, b) => a.year - b.year);
  }
  
  console.log(sortCarsByYear(cars));
  
  