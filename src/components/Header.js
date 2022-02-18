import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor,textCenter }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign:textCenter,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Random Quote Machine',
  bgColor: '#6495ED',
  textColor: '#FFFFFF',
  textCenter:'center',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textCenter:PropTypes.string,
}

export default Header
