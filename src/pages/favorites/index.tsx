import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { useFavoritePageListSWR } from '~/stores/page';
import { OgpCard } from '~/components/organisms/OgpCard';

const Index: FC = () => {
  const { data: pages } = useFavoritePageListSWR();

  return (
    <div className="p-3">
      <h1>Home</h1>
      <div className="row mt-4">
        {pages == null ? (
          <>
            <div className="col-lg-4 col-md-6">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 col-md-6">
              <Skeleton height={300} />
            </div>
            <div className="col-lg-4 col-md-6">
              <Skeleton height={300} />
            </div>
          </>
        ) : (
          pages.map((page) => (
            <div className="col-lg-4 col-md-6 mb-3" key={page._id}>
              <OgpCard page={page} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Index;