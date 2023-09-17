const user = {
    id: 1,
    name: "John",
    age: 25,
  };

  const saveUserInfo = (info) => {
    try {
      localStorage.setItem('user', JSON.stringify(info));
      console.log("User saved to Local Storage");
    } catch (err) {
      console.error(err);
    }
  }
  
  saveUserInfo(user);