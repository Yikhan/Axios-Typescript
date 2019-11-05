

function play(x: Array<{suit: string, cards: number}>): number
function play(x: {suit: string, cards: number}): number

function play(x:any) {
    return Math.random()*100
}

export {}