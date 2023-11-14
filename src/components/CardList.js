import React from 'react-dom/client';
import Card from './Card';

const CardList = ({ robots }) => {
  if (false) {
    throw new Error('NOOOOOO!');
  }
    return (
    <React.Fragment>
      <div>
        {
          robots.map((user, i) => {
            return (
              <Card
                key={i}
                  id={robots[i].id}
                  name={robots[i].name}
                  email={robots[i].email}
                />
              );
            })
          }
        </div>
      </React.Fragment>
    );
  }

export default CardList;
