import PropTypes from 'prop-types';
import { getHeroById } from '../../02-intro-javascript/src/bases/08-imp-exp';

const FirstApp = ( { title, subtitle, name } ) => {

  return (
    <>
        <h1 data-testid='test-title'>{ title }</h1>
        <span>{ subtitle }</span>
        <span>{ subtitle }</span>
        <br/>
        { /* <code> { JSON.stringify(getHeroById(1)) } </code> */ }
        <p>{ name }</p>
    </>
  )
}

export default FirstApp

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'No hay título',
  subtitle: 'No hay subtítulo',
}

/*
Notes:
- Default props always go before the proptypes
- Be careful with the default values and the proptypes. If a property with a non accepted value is received on the default values, an error will be thrown.
 */