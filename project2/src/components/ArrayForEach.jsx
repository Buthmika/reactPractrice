import React from 'react'

function ArrayForEach({nameList}) {
      const newNameList = [];
      nameList.forEach((name, index) => {
        newNameList.push(<li key={index}>{name}</li>);
      });
  return (
    <div>
      <hr />
      <h1>Full Name List(forEach)</h1>
      <ul>
            {newNameList}
      </ul>
    </div>
  )
}

export default ArrayForEach
