function UserList({ data }) {
  return (
    <div>
      <ul>
        {
          // data.map((user) => (
          //   <div>asdasd</div>
          // ))

          //           {
          //     "id": "p001",
          //     "ad": "Elif",
          //     "soyad": "Yılmaz",
          //     "yas": 28,
          //     "departman": "Yazılım",
          //     "pozisyon": "Frontend Developer",
          //     "maas": 42000,
          //     "aktif": true
          // }
          data
          .filter((user) => user.yas > 30)
          .map((user,index) => {
            return (
              <li key={index}>
                <div>{user._id} - {index + 1}</div>
                <div>{user.ad}</div>
                <div>{user.soyad}</div>
                <div>{user.yas}</div>
                <div>{user.pozisyon}</div>
                <div>{user.maas}</div>
              </li>
            );
          })
        }
      </ul>


    
    </div>
  );
}

export { UserList };
