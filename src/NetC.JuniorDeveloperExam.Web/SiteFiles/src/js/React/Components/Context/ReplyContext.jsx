import React, { useState } from 'react';

const ReplyContext = React.createContext({});

export const ReplyProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <ReplyContext.Provider value={[showForm, setShowForm]}>
      {children}
    </ReplyContext.Provider>
  );
};

export default ReplyContext;
