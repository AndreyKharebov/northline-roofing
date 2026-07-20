import FeaturedReviews from '../../components/reviews/FeaturedReviews/FeaturedReviews';
import RatingsSummary from '../../components/reviews/RatingsSummary/RatingsSummary';
import ReviewsBottom from '../../components/reviews/ReviewsBottom/ReviewsBottom';
import ReviewsList from '../../components/reviews/ReviewsList/ReviewsList';
import ServiceAreaStrip from '../../components/reviews/ServiceAreaStrip/ServiceAreaStrip';

import PageHero from '../../components/common/PageHero/PageHero';

import reviewsHero from '../../assets/images/reviews/reviews-hero.webp';

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow='Reviews'
        title='Real Reviews. Real Results.'
        description='Customer satisfaction is at the heart of everything we do. See why homeowners across Pennsylvania choose us for roofing, siding, gutters, and exterior improvements.'
        image={reviewsHero}
        type='white'
        primaryAction={{
          label: 'Get Free Estimate',
          to: '/request-estimate',
        }}
        secondaryAction={{
          label: 'View Our Projects',
          to: '/projects',
        }}
      />

      <ServiceAreaStrip />
      <RatingsSummary />
      <FeaturedReviews />
      <ReviewsList />
      <ReviewsBottom />
    </>
  );
}

export default ReviewsPage;
