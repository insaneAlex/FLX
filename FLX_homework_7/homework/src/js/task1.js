let login = prompt('Login:', undefined);
const greets = (login, passwd, correctPass) => {
    if (passwd === correctPass) {
        if (new Date().getHours() < 20) {
            alert(`Good day, dear ${login}!`)
        } else {
            alert(`Good evening, dear ${login}!`)
        }
    } else {
        alert('Wrong password')
    }
}

if (login !== null && login.length > 0) {
    if (login.length < 4) {
        alert(`I don't know any users having name length less than 4 symbols`)
    } else if (login === 'User') {
        const corectPass = 'UserPass'
        let passwd = prompt('Password:', '');
        greets(login, passwd, corectPass);
    } else if (login === 'Admin') {
        const corectPass = 'RootPass'
        let passwd = prompt('Password:', '');
        greets(login, passwd, corectPass);
    } else {
        alert('I don’t know you!')
    }
} else {
    alert('Canceled');
}