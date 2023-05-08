import { Avatar, Box, Button, Typography } from '@mui/material';
import backgroundImage from '../../images/tweets-backround.png';
import logoImage from '../../images/logo.svg';
import { PropTypes } from 'prop-types';
import { selectSubscribe } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscription, deleteSubscription } from '../../redux/SubscribeSlice/SubscribeSlice';
import { useUpdateUserByIdMutation } from '../../services/api/mockapi';
import { ClockLoader } from 'react-spinners';
import { theme } from '../../Theme/Theme';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
//console.dir(theme);

const formatNumber = num => {
  const myObj = {
    useGrouping: true,
  };
  return num.toLocaleString('En-en', myObj);
};

export const TweetListItem = ({ user = '', avatar = '', tweets = 0, followers = 0, id = 0 }) => {
  const usersSubscriptions = useSelector(selectSubscribe);
  const [updateUser, { isLoading, error, isError }] = useUpdateUserByIdMutation();
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);
  // console.log(usersSubscriptions);

  const getSubscritionIndex = useCallback(() => {
    const index = usersSubscriptions.indexOf(id);
    return index;
  }, [id, usersSubscriptions]);

  useEffect(() => {
    if (getSubscritionIndex() < 0) setIsFollowing(false);
    else setIsFollowing(true);
  }, [getSubscritionIndex]);

  const handleOnClick = async () => {
    const index = getSubscritionIndex();
    if (isFollowing) {
      try {
        await updateUser({ id: id, followers: followers - 1 });
        dispatch(deleteSubscription(index));
        setIsFollowing(false);
        toast.success(`Success unfollowing from ${user}`);
      } catch (error) {
        toast.error(`Error on unfollow from ${user}`);
      }
    } else {
      try {
        await updateUser({ id: id, followers: followers + 1 });
        dispatch(addSubscription(id));
        setIsFollowing(true);
        toast.success(`Success follow to ${user}`);
      } catch (error) {
        toast.error(`Error on follow to ${user}`);
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
        background: `url("${backgroundImage}"),url("${logoImage}"),${theme.palette.background.paper}`,
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
        }}
      >
        <Typography
          sx={{
            mb: '16px',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontSize: '20px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {formatNumber(tweets)} Tweets
        </Typography>
        <Typography
          sx={{
            mb: '26px',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontSize: '20px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {formatNumber(followers)} Followers
        </Typography>
        <Button
          sx={{
            width: '196px',
            height: '50px',
            fontWeight: '600',
            fontSize: '18px',
            background: theme => {
              return !isFollowing ? theme.palette.background.default : theme.palette.secondary.main;
            },
            boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
            borderRadius: '10.3108px',
            color: `${theme.palette.text.secondary}`,
            ':hover': { background: '#ca98ff', color: theme.palette.background.default },
          }}
          onClick={handleOnClick}
        >
          {isLoading ? (
            <ClockLoader color="#ce36d6" loading size={26} />
          ) : !isFollowing ? (
            'Follow'
          ) : (
            'Following'
          )}
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
