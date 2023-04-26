
function searchUser()
{
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    let allUsers = document.getElementsByClassName('userCard');

    for (let i = 0; i < allUsers.length; i++)
    {
        if (!allUsers[i].innerHTML.toLowerCase().includes(input))
        {
            allUsers[i].style.display="none";
        }
        else
        {
            allUsers[i].style.display="flex";
        }
    }
}