const _$ = {
  head: ([x]) => x,
  tail: ([, ...y]) => y,
  copy: arr => [...arr],
  
};

export default _$;