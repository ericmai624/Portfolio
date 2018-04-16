const lazyloadFaModules = () => async dispatch => {
  try {
    const [
      fontawesome,
      { default: FontAwesomeIcon },
      { default: brands },
      { default: solid }
    ] = await Promise.all([
      import(/* webpackChunkName: "lazyload-fontaweome" */ "@fortawesome/fontawesome"),
      import(/* webpackChunkName: "lazyload-react-fontawesome" */ "@fortawesome/react-fontawesome"),
      import(/* webpackChunkName: "lazyload-fa-brands" */ "@fortawesome/fontawesome-free-brands"),
      import(/* webpackChunkName: "lazyload-fa-solid" */ "@fortawesome/fontawesome-free-solid")
    ]);
    fontawesome.library.add(brands, solid);
    dispatch({ type: "LAZYLOAD_FA_MODULES", payload: FontAwesomeIcon });
  } catch (e) {
    dispatch({ type: "LAZYLOAD_FA_MODULES", payload: null });
  }
};

export default lazyloadFaModules;
