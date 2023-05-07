import { Avatar, Box, Button, Typography } from '@mui/material';
import backgroundImage from '../../images/tweets-backround.png';
import logoImage from '../../images/logo.svg';
import { PropTypes } from 'prop-types';
import { selectSubscribe } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscription, deleteSubscription } from '../../redux/SubscribeSlice/SubscribeSlice';
import { useUpdateUserByIdMutation } from '../../services/api/mockapi';

export const TweetListItem = ({
  user = 'Jusik Crew',
  avatar = 'https://i.pravatar.cc/300',
  tweets = 283,
  followers = 123212,
  id = 2,
}) => {
  const usersSubscriptions = useSelector(selectSubscribe);
  const [updateUser, { isLoading, error, isError }] = useUpdateUserByIdMutation();
  const dispatch = useDispatch();
  // console.log(usersSubscriptions);

  const getSubscritionIndex = () => {
    const index = usersSubscriptions.indexOf(id);
    return index;
  };

  const handleOnClick = async () => {
    const index = getSubscritionIndex();
    if (index >= 0) {
      try {
        await updateUser({ id: id, followers: followers - 1 });
        dispatch(deleteSubscription(index));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateUser({ id: id, followers: followers + 1 });
        dispatch(addSubscription(id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      component="article"
      sx={{
        width: '380px',
        height: '460px',
        padding: '28px 36px',
        position: 'relative',
        boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
        borderRadius: '20px',
        background: `url("${backgroundImage}"),url("${logoImage}"),linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top 28px center, top 20px left 20px, center',
        ':after': {
          content: '""',
          position: 'absolute',
          width: '380px',
          height: '8px',
          background: '#EBD8FF',
          boxShadow:
            '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
          top: '50%',
          left: '0',
        },
      }}
    >
      <Box
        component="div"
        sx={{
          width: '80px',
          height: '80px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          background: '#EBD8FF',
          boxShadow:
            '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: '99',
        }}
      >
        <Avatar
          alt={user}
          src={avatar}
          sx={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
          }}
        ></Avatar>
      </Box>

      <Box
        component="div"
        sx={{
          position: 'absolute',
          bottom: '36px',
          width: 'calc(100% - 72px)',
          height: 'calc(50% - 98px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#EBD8FF',
        }}
      >
        <Typography
          sx={{
            mb: '16px',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '20px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {tweets} Tweets
        </Typography>
        <Typography
          sx={{
            mb: '26px',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '20px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {followers} Followers
        </Typography>
        <Button
          sx={{
            width: '196px',
            height: '50px',
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '18px',
            background: '#EBD8FF',
            boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
            borderRadius: '10.3108px',
            color: '#373737',
            ':hover': { background: '#5CD3A8' },
          }}
          onClick={handleOnClick}
        >
          {getSubscritionIndex() < 0 ? 'Follow' : 'Following'}
        </Button>
      </Box>
    </Box>
  );
};

TweetListItem.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default TweetListItem;
