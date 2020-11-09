const _$ = {
    head: ([x]) => x,
    tail: ([, ...y]) => y,
    copy: arr => [...arr],
    isPresent: (x,y) => x.some(x => y.includes(x)),
    isArray: x => Array.isArray(x),
    lastElement: arr => arr[arr.length - 1],
    isEmpty: arr => arr.length === 0,
};

export default _$;