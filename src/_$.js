const _$ = {
    head: ([x]) => x,
    tail: ([, ...y]) => y,
    copy: arr => [...arr],
    isPresent: (x,y) => x.some(x => y.includes(x))
};
export default _$;
