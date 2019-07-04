import * as React from 'react';
import AppConstants from '../../AppConstants';


class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="http://meetleelou.com">meetleelou.com</a> &copy; {AppConstants.APP_COPYRIGHT_YEAR} Leelou Operations. v{AppConstants.APP_VER}</span>
        <span className="ml-auto">Powered by <a href="http://meetleelou.com">Leelou</a></span>
      </footer>
    )
  }
}

export default Footer;
