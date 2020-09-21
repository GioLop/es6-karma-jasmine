const _$ = {
    head: ([x]) => x,
    tail: ([, ...y]) => y,
    copy: arr => [...arr],
    isPresent: (x,y) => x.some(x => y.includes(x)),
    isArray: x => Array.isArray(x)
};
export default _$;
