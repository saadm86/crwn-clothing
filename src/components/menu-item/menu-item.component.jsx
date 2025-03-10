import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

export const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <div 
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
      <div
       className = 'background-image'
       style={{
        backgroundImage: `url(${imageUrl})`
      }}
      >

      </div>
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem)