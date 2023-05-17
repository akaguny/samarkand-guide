import { MapCategory } from '@site/map/lib/types';
import desserts from './desserts';
import euro from './euro';
import fastfood from './fastfood';
import uzbek from './uzbek';
import hookaBar from './hooka';

export default {
  id: 'cafe',
  items: [uzbek, euro, fastfood, desserts, hookaBar],
  icon: 'islands#orangeFoodIcon',
  label: 'Кафе и рестораны',
  type: 'category',
} as MapCategory;
