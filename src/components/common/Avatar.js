import React from 'react'

const Avatar = ({ avatar }) => {
  // if (!avatar)
  //   return <img src={require(`../../assets/avatars/default.png`)} alt="User Avatar" className="avatar" />;

  return <img src={require(`../../assets/avatars/${avatar}`)} alt="User Avatar" className="avatar" />
}

export default Avatar;