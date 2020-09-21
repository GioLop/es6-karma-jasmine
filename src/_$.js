const _$ = {
<<<<<<< HEAD
  head: ([x]) => x,
  tail: ([, ...y]) => y,
  copy: arr => [...arr],
  
};

export default _$;
=======
    head: ([x]) => x,
    tail: ([, ...y]) => y,
    copy: arr => [...arr],
    isPresent: (x,y) => x.some(x => y.includes(x))
};
export default _$;
>>>>>>> a919626ef895356ed659bcdc25a92f517ece6506
