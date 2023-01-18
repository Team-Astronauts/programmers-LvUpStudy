function solution(id_pw, db) {
    let answer = "";

    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === id_pw[0]) {
            if (db[i][1] === id_pw[1]) {
                answer += "login";
            } else {
                answer += "wrong pw";
            }
        } else {
            answer += "fail";
        }
    }

    if (answer.includes("login")) {
        return "login";
    } else if (answer.includes("wrong pw")) {
        return "wrong pw";
    } else {
        return "fail";
    }
}

function solution2(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);

    if (map.has(id)) {
        if (map.get(id) === pw) {
            return "login";
        } else {
            return "wrong pw";
        }
    } else {
        return "fail";
    }
}
