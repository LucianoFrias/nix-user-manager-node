

function passInfoToDeleteModal(element)
{
    let user = element.parentNode.parentNode;
    let userID = user.querySelector('#userID').innerHTML;
    let userName = user.querySelector('#userName').innerHTML;


    let userInfoID = document.querySelector('#userInfoID');
    let userInfoName = document.querySelector('#userInfoName');
    userInfoID.innerHTML = userID;
    userInfoName.innerHTML = userName;
}

function passInfoToUpdateModal(element)
{
    let user = element.parentNode.parentNode;

    let userID = user.querySelector('#userID').innerHTML;
    let userName = user.querySelector('#userName').innerHTML;
    let userSurname = user.querySelector('#userSurname').innerHTML;
    let userGender = user.querySelector('#userGender').innerHTML;
    let userEmail = user.querySelector('#userEmail').innerHTML;
    let userRole = user.querySelector('#userRole').innerHTML;

    let userModalID = document.querySelector('#update-id');
    let userModalName = document.querySelector('#update-name');
    let userModalSurname = document.querySelector('#update-surname');
    let userModalGender = document.querySelector('#update-gender');
    let userModalEmail = document.querySelector('#update-email');
    let userModalRole = document.querySelector('#update-role');

    userModalID.innerHTML = userID;
    userModalName.value = userName;
    userModalSurname.value = userSurname;
    userModalGender.value = userGender;
    userModalEmail.value = userEmail;
    userModalRole.value = userRole;
}
