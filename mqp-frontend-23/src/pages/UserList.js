import React from 'react';
import { Typography  } from '@mui/material';

import ModelTable from '../components/ModelTable';
import LabelTable from '../components/LabelTable';
import OldModelTable from '../components/OldModelTable';

const UserList = () => {

  return (
    <main>
      <Typography variant="h5" align="center" color="textPrimary" sx={{paddingTop: "30px"}} gutterBottom> 2022 MQP Model Data (OLD) </Typography>
      <div className="home-header">
      <OldModelTable/>
      </div>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom> 2023 MQP Model Data </Typography>
      <div className="home-header">
      <ModelTable/>
      </div>
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom> 2023 MQP Model Data (By Label) </Typography>
      <div className="home-header">
      <LabelTable/>
      </div>
    </main>
  );
};

export default UserList;