const BigNumber = require('bignumber.js')

const doItLikeLagrange = async (n) => {

    n = new BigNumber(n)

    // Determine max_a:
    max_a = n.sqrt().integerValue();

    // Determine min_a:
    min_a = find_min_a(n);

    for(i=min_a; i.lte(max_a); i=i.plus(1)) {

        a = i;

        // Determine max_b:
        max_b = n.minus( a.pow(2) ).sqrt().integerValue();

        // Determine min_b:
        min_b = find_min_b(n, a);
        
        for(j=min_b; j.lte(max_b); j=j.plus(1)) {

            b = j;
            // Determine max_c:
            max_c = n.minus( a.pow(2) ).minus( b.pow(2) ).sqrt().integerValue();

            // Determine min_c:
            min_c = find_min_c(n, a, b)

            for(k=min_c; k.lte(max_c); k=k.plus(1)) {

                // Find c in range of (min_c, max_c):
                c = k;

                max_d = n.minus( a.pow(2) ).minus( b.pow(2) ).minus( c.pow(2) ).sqrt();

                if (max_d.isInteger()) {
                    return [a.toNumber(), b.toNumber(), c.toNumber(), max_d.toNumber()];
                }

            }

        }
    }
}

const find_min_a = (n) => {
    const threshold = n.div(4);
    let min_a = new BigNumber(1);

    while( min_a.pow(2).lt(threshold) ) {
        min_a = min_a.plus(1);
    }

    return min_a;
}

const find_min_b = (n, a) => {
    const threshold = n.minus( a.pow(2) ).div(3);
    let min_b = new BigNumber(1);

    while( min_b.pow(2).lt(threshold)) {
        min_b = min_b.plus(1);
    }

    return min_b;
}

const find_min_c = (n, a, b) => {
    const threshold = n.minus( a.pow(2)).minus( b.pow(2) ).div(2);
    let min_c = new BigNumber(1);

    while( min_c.pow(2).lt(threshold)) {
        min_c = min_c.plus(1);
    }

    return min_c;
}

module.exports = {doItLikeLagrange}
