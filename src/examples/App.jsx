const App = () => {
  const x = [1, 2, 3, 4, 5];
  const persons = [
    {
      name: 'Sezer',
      age: 29
    },
    {
      name: 'Osman',
      age: 17
    }
  ]
  // const y = [6,7,8];
  // const temp = [...x,...y];

  // TODO : içe içe geçmiş ternary kullanarak bir işlem yapınız.

  // const person = {
  //   name: ''
  // }

  //  const sonuc_1  = person.name  ?? "İsim bulunamadı";
  //  const sonuc_2 =  person.name  || 'İsim Bulunamadı'

  // '' "" -> false
  // 0
  // false
  // null
  // undefined

  // 1
  // true
  // 'qeqwewqe'


  const response = persons.map((item,index) => {
     return {
       status: item.age > 18 ? 'Büyüktür' : 'Küçüktür',
       ...item,

     }
  })

  console.log(response, 'xx')


  return <div>Merhaba Dünya</div>;
};

export default App;
