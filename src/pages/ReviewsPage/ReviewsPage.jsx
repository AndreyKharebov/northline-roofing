import FeaturedReviews from '../../components/reviews/FeaturedReviews/FeaturedReviews';
import RatingsSummary from '../../components/reviews/RatingsSummary/RatingsSummary';
import ReviewsBottom from '../../components/reviews/ReviewsBottom/ReviewsBottom';
import ReviewsHero from '../../components/reviews/ReviewsHero/ReviewsHero';
import ReviewsList from '../../components/reviews/ReviewsList/ReviewsList';
import ServiceAreaStrip from '../../components/reviews/ServiceAreaStrip/ServiceAreaStrip';

function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <ServiceAreaStrip />
      <RatingsSummary />
      <FeaturedReviews />
      <ReviewsList />
      <ReviewsBottom />
    </>
  );
}

export default ReviewsPage;
