import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhoto.module.css';

const FeedPhoto = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhoto();
  }, []);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
