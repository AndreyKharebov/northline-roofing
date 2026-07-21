import { useQuery } from '@tanstack/react-query';
import { servicesApi } from '../api/services';

export function useServicesCards() {
  return useQuery({
    queryKey: ['services', 'cards'],
    queryFn: servicesApi.getCards,
  });
}
