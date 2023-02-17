import React from 'react';
import { Typography  } from '@mui/material';

import ModelTable from '../components/ModelTable';
import LabelTable from '../components/LabelTable';

const UserList = () => {

  return (
    <main>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom> Model Table </Typography>
      <div className="home-header">
      <ModelTable/>
      </div>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom> Label Table </Typography>
      <div className="home-header">
      <LabelTable/>
      </div>
    </main>
  );
};

export default UserList;