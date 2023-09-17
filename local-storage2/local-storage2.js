const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  const getUserInfo = (info) => {
    try {
      return JSON.parse(localStorage.getItem(info));
    } catch (error) {
      console.error(error)
    }
  }
  
  console.log('User Info: ', getUserInfo('user'));