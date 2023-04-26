
async function loadUsers()
{
  const request = await fetch('/api/v1/users', {
    method: 'get',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }

  });

  const users = await request.json();

  let userList = ``;

  for (let user of users)
  {
       let genderSrc = "../img/" + user.gender + "_avatar.png";

       let userHTML = `<div class="userCard">
       <img class="userImage" src=${genderSrc} alt="Unknown Gender">
       <h4 id="userID">${user.id}</h4>
       <h4><span id="userName">${user.name}</span> <span id="userSurname">${user.surname}</span></h4>
       <h4 id="userGender">${user.gender}</h4>
       <h5 class="email" id="userEmail">${user.email}</h5>
       <h5 id="userRole">${user.role}</h5>
       <div class="buttons">
       <button type="button" onclick="passInfoToDeleteModal(this)" id="deleteUserBtn" class="btn btn-danger delete-btn" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
       <button type="button" onclick="passInfoToUpdateModal(this)" class="btn btn-success update-btn" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
       </div>
       </div>`;

        userList += userHTML;
  }

  document.querySelector('#usersTable').innerHTML = userList;

}


async function addUser()
{
    let userObject = {
        name: document.getElementById('add-name').value,
        surname: document.getElementById('add-surname').value,
        gender: document.getElementById('add-gender').value,
        password: document.getElementById('add-password').value,
        email: document.getElementById('add-email').value,
        role: document.getElementById('add-role').value
    }

    if (!validateAddForm(userObject))
        return;

    const request = await fetch("/api/v1/users/add", {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });


    location.reload();
}

async function deleteUser()
{
    let userID = document.querySelector('#userInfoID').innerHTML;

    const request = await fetch('/api/v1/users/delete/' + userID, {
    method: 'DELETE',
    headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
    });

    if (!request.ok)
    {
        console.log("Something failed!");
    }

    location.reload();

}

async function updateUser()
{
    let userObject = {
        id: document.querySelector('#update-id').innerHTML,
        name: document.querySelector('#update-name').value,
        surname: document.querySelector('#update-surname').value,
        gender: document.querySelector('#update-gender').value,
        email: document.querySelector('#update-email').value,
        role: document.querySelector('#update-role').value
    }

    if (!validateUpdateForm(userObject))
            return;


     const request = await fetch("/api/v1/users/update", {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        });

    location.reload();

}


function validateUpdateForm(user)
{

    let isValid = true;

    if (!validateName(user.name))
    {
        isValid = false;
        return;
    }

    if (!validateSurname(user.surname))
    {
        isValid = false;
        return;
    }
    if (!validateEmail(user.email))
    {
        isValid = false;
        return;
    }

    return isValid;

}

function validateAddForm(user)
{

    let isValid = true;

    if (!validateName(user.name))
    {
        isValid = false;
        return;
    }

    if (!validateSurname(user.surname))
    {
        isValid = false;
        return;
    }
    if (!validatePassword(user.password))
    {
        isValid = false;
        return;
    }
    if (!validateEmail(user.email))
    {
        isValid = false;
        return;
    }

    return isValid;

}

function validateName(name)
{
    if (name == null || name == "")
    {
        alert("Name can't be blank!");
        return false;
    }

    if (name.length < 3)
    {
        alert("Name should be at least 3 characters long!");
        return false;
    }

    return true;
}

function validateSurname(surname)
{
    if (surname == null || surname == "")
    {
        alert("Surname can't be blank!");
        return false;
    }

    if (surname.length < 3)
    {
        alert("Surname should be at least 3 characters long!");
        return false;
    }

    return true;
}


function validatePassword(password)
{
    if (password == null || password == "")
    {
        alert("Password can't be blank!");
        return false;
    }

    if (password.length < 5)
    {
        alert("Password should be at least 5 characters long!");
        return false;
    }

    return true;
}

function validateEmail(email)
{
    if (email == null || email == "")
    {
        alert("Email can't be blank!")
        return false;
    }

    if (!email.includes("@") || !email.includes(".com"))
    {
        alert("Missing @ or .com in email section!");
        return false;
    }

    return true;
}



loadUsers();


