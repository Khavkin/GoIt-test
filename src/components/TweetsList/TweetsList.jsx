import TweetListItem from '../TweetListItem/TweetListItem';
import { useGetUsersByPageQuery } from '../../services/api/mockapi';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useUsers } from '../../Hooks/useUsers';

export const TweetsList = () => {
  //const page = useParams

  const { users = [], page } = useUsers();
  const { error, isLoading } = useGetUsersByPageQuery(page);

  //console.log(users, isLoading);

  return (
    <Box component={'section'}>
      {isLoading && <h2>Loadding...</h2>}
      {!isLoading && (
        <Box component={'ul'} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {users?.map(user => (
            <li key={user.id}>
              <TweetListItem
                user={user.user}
                avatar={user.avatar}
                id={user.id}
                tweets={user.tweets}
                followers={user.followers}
              />
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};
