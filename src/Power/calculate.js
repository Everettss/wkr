
function reverse(s) {
    return s.split("").reverse().join("");
}

const powMod = (base, power, _mod) => {
    const mod = parseInt(_mod, 10);
    let x = 1;
    let xPrev = x;
    let a = parseInt(base, 10);
    let aPrev = a;
    const binPower = reverse(parseInt(power, 10).toString(2));

    const res = [
        {
            i: 0,
            x,
            a,
            t: binPower[0],
        }
    ];

    for (let i = 1; i < binPower.length + 1; i++) {
        a = (aPrev * aPrev) % mod;
        if (binPower[i - 1] === '1') {
            x = (xPrev * aPrev) % mod;
        }
        aPrev = a;
        xPrev = x;

        res.push({
            i,
            x,
            a,
            t: binPower[i],
        })
    }

    return res;
};

const euklides = (base, _mod) => {
    const mod = parseInt(_mod, 10);

    let i = 0;
    let u = 0;
    let uPrim = 1;
    let v = 1;
    let vPrim = 0;
    let n = mod;
    let a = base;
    let q = Math.floor(n / a);
    let r = n - a * q;


    let uPrev = u;
    let uPrimPrev = uPrim;
    let vPrev = v;
    let vPrimPrev = vPrim;
    let aPrev = a;
    let qPrev = q;
    let rPrev = r;

    const res = [
        {
            i,
            u,
            uPrim,
            v,
            vPrim,
            n,
            a,
            q,
            r,
        }
    ];

    while (r !== 0 && i < 100) {
        i++;
        u = uPrimPrev - qPrev * uPrev;
        uPrim = uPrev;
        v = vPrimPrev - qPrev * vPrev;
        vPrim = vPrev;
        n = aPrev;
        a = rPrev;
        q = Math.floor(n / a);
        r = n - a * q;

        res.push({
            i,
            u,
            uPrim,
            v,
            vPrim,
            n,
            a,
            q,
            r,
        });

        uPrev = u;
        uPrimPrev = uPrim;
        vPrev = v;
        vPrimPrev = vPrim;
        aPrev = a;
        qPrev = q;
        rPrev = r;
    }

    return res;
};

euklides(1001, 1656);

export {
    powMod,
    euklides,
};