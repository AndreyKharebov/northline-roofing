import { services } from '../db/services';

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });


export const servicesApi = {
  async getCards() {
    await delay(3000);

    return services
      .filter((service) => service.status === 'published')
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((service) => ({
        _id: service._id,
        title: service.title,
        slug: service.slug,
        shortDescription: service.shortDescription,
        cardImage: service.cardImage,
        cardIcon: service.cardIcon,
      }));
  },
};
