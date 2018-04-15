const lazyloadFaModules = () => async dispatch => {
  const [
    fontawesome,
    { default: FontAwesomeIcon },
    { default: brands },
    { default: solid }
  ] = await Promise.all([
    import(/* webpackChunkName: "fontaweome" */ "@fortawesome/fontawesome"),
    import(/* webpackChunkName: "react-fontawesome" */ "@fortawesome/react-fontawesome"),
    import(/* webpackChunkName: "fa-brands" */ "@fortawesome/fontawesome-free-brands"),
    import(/* webpackChunkName: "fa-solid" */ "@fortawesome/fontawesome-free-solid")
  ]);

  fontawesome.library.add(brands, solid);
  dispatch({ type: "LAZYLOAD_FA_MODULES", payload: FontAwesomeIcon });
};

export default lazyloadFaModules;
