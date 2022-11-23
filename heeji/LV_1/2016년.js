function solution(a, b) {
    // monthIndex 1월은 0 12월은 11
        let date = new Date(2016, a-1, b);
        const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return week[date.getDay()];
        // 결과값이 6
    }