import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ROLE_TYPE } from '../../../utils/constants';
import PageNotAccessible from '../../../pages/PageNotAccessible';

const PrivateInstructorPage = ({ route }) => {
  const { token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.profile);

  return token === null
    ? <Navigate to={'/login'} />
    : user?.accountType === ROLE_TYPE.INSTRUCTOR
      ? route
      :
      <PageNotAccessible />
  // return token ? route : <Navigate to={'/login'} />
}

export default PrivateInstructorPage
